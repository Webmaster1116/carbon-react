import React from 'react'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
} from './SubHeroElements'

const SubHeroSection = ({img, pageName}) => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={img}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>{pageName}</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default SubHeroSection
