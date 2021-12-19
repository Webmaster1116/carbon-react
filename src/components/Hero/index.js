import React from 'react'
import video from '../../videos/video.webm'
import UnstyledButtonCustom from '../CustomButton'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/webm'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Buy a Carbon Collectible NFT</HeroH1>
                <HeroH1>Each NFT includes digital and virtual rights to 1 hectare of mature forestry</HeroH1>
                <HeroH1>Your NFT includes gaming rights, metaverse applications and digital carbon offsets</HeroH1>
                <HeroP>Want to disrupt the traditional carbon offset industry? Then join our <text style={{color: '#7289DA', fontWeight: 'bold'}}>Discord</text> community!</HeroP>
                <HeroBtnWrapper>
                    <UnstyledButtonCustom>Learn more</UnstyledButtonCustom>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
