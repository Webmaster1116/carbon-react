import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextTopline,
    TextHeadline,
    TextSubtitle,
    AreaWrapper
} from './TextAreaElements'
import {Divider} from '@mui/material'
import { CustomLink, CustomRouterLink } from '../CustomCss'

const TextSection = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                <TextTopline data-aos="fade-down" data-aos-once="true">VALUE OF YOUR NFT</TextTopline>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Scarcity</TextHeadline>
                        <TextSubtitle>We have rights to 24,000 hectares of mature forestry.<br /> We plan to allocate up to 20,000 hectares to underwrite up to 20,000 NFTs - 1 hectare per NFT. <br />We will hold 4,000 hectares in reserve as a 20% contingency. <br />Of course, this is subject to change.</TextSubtitle>
                        <TextSubtitle>Note: 1 hectare is approximately 2.471 acres or 0.01 Km<sup>2</sup>.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Utility</TextHeadline>
                        <TextSubtitle>Buy a Carbon Collectible NFT and receive virtual and digital rights to 1 hectare of mature forestry. <br />This includes mixed reality rights and also carbon sequestration rights measured using remote satellite imagery. <br />Your NFT, also grants you <CustomRouterLink to='/yourrights' target="_blank">rights</CustomRouterLink> to the artwork of your NFT under a creative commons license CC BY-SA 4.0.</TextSubtitle>
                        <TextSubtitle>© 2021. This work is licensed under a <CustomLink href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0 license.</CustomLink>.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Provenance</TextHeadline>
                        <TextSubtitle>The digital <CustomRouterLink to='/yourrights' target="_blank">rights</CustomRouterLink> attached to your Carbon Collectible NFT are tracked on the Polygon blockchain.</TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default TextSection
