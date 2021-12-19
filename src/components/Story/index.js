import React from 'react'
import img from '../../images/normal/svg5.svg'
import img2 from '../../images/UNPhoto.png'
import img4 from '../../images/Inputs.jpg'

import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextTopline,
    TextSubtitle,
    AreaWrapper,
    Column1,
    Column2,
    Imgwrap,
    Img,
    Img2,
    PriceRow,
    StoryAreaWrapper,
    StoryButtonWrapper,
    StoryRow,
    SmallHeadline,
    StorySubtitle,
    StoryImgWrap,
} from './StoryElements'
import {CustomLink} from '../CustomCss'
import {Button} from '@mui/material'

const StorySection = () => {
    return (
        <>
            <TextAreaContainer id='story'>
                <TextAreaWrapper>
                <PriceRow >
                    <Column1>
                        <AreaWrapper data-aos="fadedown" data-aos-once="true">
                        <TextTopline>ORIGIN STORY</TextTopline>
                            <TextSubtitle>The original inspiration for our vision is the <CustomLink href='https://sdgs.un.org/goals' target="_blank" rel="noopener noreferrer">United Nations Sustainable Development Goals.</CustomLink> <br />However, our mission was brought into focus by the Theory of Change ("TOC") for moving <text style={{fontWeight: 'bold'}}>"emerging economies beyond aid"</text> through entrepreneurship. <br />This TOC was showcased at the annual <CustomLink href='https://thegiin.org/event/giin-investor-forum-2018' target="_blank" rel="noopener noreferrer">Global Impact Investors Network forum</CustomLink> held in Paris in 2018. <br />Since then, the evolution of blockchain-based technologies has enabled our implementation strategy. <br />Now we have the opportunity to bring our 5 year journey to life.</TextSubtitle>
                            <TextSubtitle>We are grateful for your NFT purchase, which signals the end of our beginning and the beginning of our execution phase. <br />We hope you choose to join us on this exciting journey to leverage blockchain-based technologies that enable us to re-imagine sustainable solutions to critical challenges through social innovation.</TextSubtitle>                     
                        </AreaWrapper>
                    </Column1>
                    <Column2>
                        <Imgwrap data-aos="fade" data-aos-once="true">
                            <Img src={img}/>
                        </Imgwrap>
                    </Column2>
                </PriceRow>
                </TextAreaWrapper> 
                <StoryAreaWrapper>
                    <StoryRow>
                        <Column1>
                            <StoryAreaWrapper data-aos="fade" data-aos-once="true">
                                <SmallHeadline>Inspired by the UN SDGs</SmallHeadline>
                                <StorySubtitle>
                                1. No poverty. <br />
                                8. Decent work and economic growth. <br />
                                9. Industry, Innovation and Infrastructure. <br />
                                11. Sustainable cities and communities. <br />
                                13. Climate action. <br />
                                15. Life on land.
                                </StorySubtitle>
                                <StoryButtonWrapper>
                                    <Button href='https://sdgs.un.org/goals' target='_blank' color="primary" variant="contained">Find Out More</Button>
                                </StoryButtonWrapper>
                            </StoryAreaWrapper>
                        </Column1>
                        <Column2>
                            <StoryImgWrap className="home-imgs" data-aos="fade" data-aos-once="true">
                                <Img2 src={img2}/>
                            </StoryImgWrap>
                        </Column2>
                    </StoryRow>
                </StoryAreaWrapper>    
                <StoryAreaWrapper>
                    <StoryRow>
                        <Column1>
                            <StoryAreaWrapper data-aos="fade" data-aos-once="true">
                                <SmallHeadline>A Theory of Change</SmallHeadline>
                                <StorySubtitle>
                                Moving emerging economies beyond aid through entrepreneurship.
                                </StorySubtitle>
                                <StoryButtonWrapper>
                                    <Button href='https://vimeo.com/303118717' target='_blank' color="primary" variant="contained">Find Out More</Button>
                                </StoryButtonWrapper>
                            </StoryAreaWrapper>
                        </Column1>
                        <Column2>
                            <StoryImgWrap className="home-imgs" data-aos="fade" data-aos-once="true">
                                <Img2 src={img4}/>
                            </StoryImgWrap>
                        </Column2>
                    </StoryRow>
                </StoryAreaWrapper>     
            </TextAreaContainer>
        </>
    )
}

export default StorySection
