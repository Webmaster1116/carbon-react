import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material';
import { fetchData } from "../../redux/data/dataActions";
import img from '../../images/gifs/gif1.gif';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { connect } from '../../redux/blockchain/blockchainActions';
import { 
    MintingContainer,
    MintingWrapper,
    MintTextWrapper,
    MintPriceWrapper,
    MintButtonWrapper,
    MintH1,
    MintDesc,
    FeedbackText,
    Column1,
    Column2,
    MintingRow,
    Imgwrap,
    Img,
    MainMintingWrapper,
    MintDesc2,
    DisclaimerText,
    DisclaimerWrapper
} from './MintingPageElements';

const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelistAddresses = require('../../redux/whitelist.json');

const MintingSection = () => {

  const [price, setPrice] = React.useState(0);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const currencies = [
    {
      value: '0',
      label: 'FREE',
    },
    {
      value: '2000000000000000000',
      label: '2 MATIC',
    },
    {
      value: '5000000000000000000',
      label: '5 MATIC',
    },
    {
      value: '10000000000000000000',
      label: '10 MATIC',
    },
  ];

  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click claim to mint your NFT.`);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

    const claimNFTs = () => {
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(price);
      let totalGasLimit = String(gasLimit);
      setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);

      //Merkle proof
      const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
      const tree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});  
      const claimingAccount = keccak256(blockchain.account);
      const proof = tree.getHexProof(claimingAccount);
      
      //Send message to smartcontact
      blockchain.smartContract.methods
        .claimFreeNft(blockchain.account, proof)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    };

    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };

    useEffect(() => {
      getConfig();
    }, []);

    //Connecting
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) 
        {
          dispatch(fetchData(blockchain.account));
        }
    };
    
    useEffect(() => {
        getData();
      }, [blockchain.account]);

    return (
        <>
            <MintingContainer>
                <MainMintingWrapper>
                <MintingRow>
                <Column1>
                <MintingWrapper>
                        <MintTextWrapper data-aos="fade" data-aos-once="true">
                            <MintH1>Claim your free NFT here!</MintH1>
                            <MintDesc>If you are whitelisted, you could own this!</MintDesc>
                            <MintDesc2>1 wallet = 1 NFT</MintDesc2>
                        </MintTextWrapper>
                        <MintPriceWrapper data-aos="fade" data-aos-once="true">
                            <TextField
                            color="primary"
                            select
                            label="Select"
                            value={price}
                            onChange={handleChange}
                            helperText="Name your own price"
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                          <MintDesc style={{fontSize: '10px'}}>Excluding gas fees</MintDesc>
                        </MintPriceWrapper>
                        <MintButtonWrapper data-aos="fade" data-aos-once="true">
                          <FeedbackText>{blockchain.account === '' || blockchain.smartContract === null ? 'Connect to the Polygon Network' : feedback}</FeedbackText>
                            {blockchain.account === '' || blockchain.smartContract === null ? <Button disabled={claimingNft} size="large" color="primary" variant="contained" 
                            onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                            }}>CONNECT</Button> : 
                            
                            <Button disabled={claimingNft} size="large" color="primary" variant="contained" 
                            onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                            }}>{claimingNft ? 'BUSY' : 'CLAIM'}</Button>}
                        </MintButtonWrapper>
                    </MintingWrapper>
                </Column1>
                <Column2>
                <Imgwrap >
                    <Img data-aos="fade" data-aos-once="true" src={img}/>
                  </Imgwrap>
                </Column2>
                </MintingRow>
                </MainMintingWrapper>
                <DisclaimerWrapper>
                 <DisclaimerText>DISCLAIMER <br/>
                 <br/>
                This "Awareness" NFT only conveys the rights to its artwork under creative commons license BY-SA 4.0. It does not convey any digital, virtual or physical rights to the forest. Carbon sequestration rights are only conveyed with the "Prime" NFT that will be released on a later date.</DisclaimerText>
                </DisclaimerWrapper>
            </MintingContainer>
        </>
    )
}

export default MintingSection
