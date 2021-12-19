import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { 
    MintingContainer,
    MainMintingWrapper,
    Img,
    MintSection,
    PaidMintingText,
    FeedbackText,
    PaidMintingDesc,
    CustomRoundButton,
    CountWrapper,
    CountText,
    AmountText
} from './PaidNftElements';

import img1PlaceHolder from '../../images/gifs/comingsoon.gif';
import img2PlaceHolder from '../../images/gifs/comingsoon.gif';
import img1 from '../../images/gifs/comingsoon.gif';
import img2 from '../../images/gifs/comingsoon.gif';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

const PaidNftSection = ({timerFinished}) => {

    const dispatch = useDispatch();
    const [feedback, setFeedback] = useState(`Click Buy to mint your NFT.`);
    const blockchain = useSelector((state) => state.blockchain);
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintAmount, setMintAmount] = useState(1);

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
          newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
      };
    
      const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
          newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
      };

    return (
        <>
            <MintingContainer>
                <MainMintingWrapper>
                    <Img data-aos="fade" data-aos-once="true" src={timerFinished ? img1 : img1PlaceHolder}/>
                    <MintSection>
                        <PaidMintingText>Mixed Reality NFTs</PaidMintingText>
                        <PaidMintingDesc>Digital and virtual rights to 1-hectare of mature forestry.</PaidMintingDesc>
                        <AmountText>Amount</AmountText>
                        <CountWrapper>
                            <CustomRoundButton variant="contained" color="secondary" onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                            }}><RemoveIcon sx={{color: '#33682c'}}/></CustomRoundButton>
                            <CountText>{mintAmount}</CountText>
                            <CustomRoundButton variant="contained" color="secondary" onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                            }}><AddIcon sx={{color: '#33682c'}}/></CustomRoundButton>
                        </CountWrapper>
                        <FeedbackText>{timerFinished ? (blockchain.account === '' || blockchain.smartContract === null ? 'Connect to the Polygon Network' : feedback ) : 'See the count down timer on our home page and visit our Discord server for more information.'}</FeedbackText>
                        {blockchain.account === '' || blockchain.smartContract === null ? <Button disabled={!timerFinished} size="large" color="primary" variant="contained" 
                            onClick={() => {
                            //Connect part
                            }}>{timerFinished ? 'CONNECT' : 'COMING SOON'}</Button> :            
                            <Button disabled={claimingNft} size="large" color="primary" variant="contained" 
                            onClick={() => {
                            //Buy part
                            }}>{claimingNft ? 'BUSY' : 'BUY'}</Button>}
                    </MintSection>
                    <Img data-aos="fade" data-aos-once="true" src={timerFinished ? img2 : img2PlaceHolder}/>
                </MainMintingWrapper>               
            </MintingContainer>
        </>
    )
}

export default PaidNftSection
