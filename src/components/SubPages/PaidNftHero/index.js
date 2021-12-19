import React from 'react'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    BannerText,
    BannerTextH1
} from './PaidNftElements'
import img from '../../../images/svg/paidnft3.png'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

const PaidNftHeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={img}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>MINT YOUR NFT</HeroH1>
                <BannerTextH1>Are you whitelisted? Click "FREE NFT" button!</BannerTextH1>
                <BannerText>To get whitelisted, visit our discord community</BannerText>
                <Button size='large' color="primary" LinkComponent={Link} to='/minting' variant="contained">CLAIM YOUR FREE NFT</Button> 
            </HeroContent>
        </HeroContainer>
    )
}

export default PaidNftHeroSection
