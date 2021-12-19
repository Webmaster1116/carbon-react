import React from 'react'
import {Button, Divider} from '@mui/material'
import img from '../../images/normal/svg2.svg'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextTopline,
    TextHeadline,
    TextSubtitle,
    AreaWrapper,
    Column1,
    Column2,
    Imgwrap,
    Img,
    PriceRow,
    PriceButtonWrapper
} from './PricingElements'
import {CustomLink, CustomRouterLink, CustomSub} from '../CustomCss'
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <>
            <TextAreaContainer id='pricing'>
                <TextAreaWrapper>
                <TextTopline data-aos="fade-down" data-aos-once="true">OUR PRICING STRATEGY</TextTopline>
                <PriceRow>
                    <Column1>
                        <AreaWrapper data-aos="fade" data-aos-once="true">
                            <TextHeadline>Our Expected Launch Price</TextHeadline>
                            <TextSubtitle>We expect our launch price to be $500 for a 10 year Carbon Collectible NFT. <br />That is $50 for the digital <CustomRouterLink to='/yourrights' target="_blank">rights</CustomRouterLink> to 1 hectare of mature forestry per year.<br /> We will limit each sale to 100 NFTs for each unique public key. <br />We expect the initial launch to be at least 1,000 NFTs. <br />However, all of this is subject to change.</TextSubtitle>
                        <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                            <TextHeadline>Our Second Release</TextHeadline>
                            <TextSubtitle>We expect our second release to include 4,000 NFTs. <br />We have not yet decided the price for the second release. <br />However, we expect to limit each purchase in the second release to 100 NFTs for each unique public key. <br />You can use the same public key in both the initial release and the second release for a maximum of 200 NFTs. <br />However, all of this is subject to change. <br />We have not yet finalized our release plan for the remaining NFTs in this collection.</TextSubtitle>
                        </AreaWrapper>
                    </Column1>
                    <Column2>
                        <Imgwrap data-aos="fade" data-aos-once="true">
                            <Img src={img}/>
                        </Imgwrap>
                    </Column2>
                </PriceRow>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Sponsorship</TextHeadline>
                        <TextSubtitle>We plan to use approximately 65% of your purchase price to fund forest management activities, social innovation opportunities and other local costs. <br />This gives the forest the option to pursue the registration process for a traditional carbon offset program.</TextSubtitle>
                        <TextSubtitle>Please note, according to <CustomLink href='https://winrock.org/wp-content/uploads/2016/03/Transaction-costs.pdf' target="_blank" rel="noopener noreferrer">Pearson et al</CustomLink>, traditional carbon offset projects spend 0.3 to 270% of your purchase price on transaction costs. <br />The upper end of this range implies that when you buy a traditional carbon offset you may be funding the intermediaries while the government is subsidizing the forest. <br />We believe the excessive overhead for traditional carbon offsets does not justify the added accuracy provided by manual measurements for healthy, remote, mature forests. <CustomLink href='https://www.theguardian.com/environment/2010/aug/25/carbon-offset-consultancy-fees' target="_blank" rel="noopener noreferrer"><br />We believe €25,000 for two of many site visits for a compliance process is excessive</CustomLink> and unaffordable for many mature forestry projects that have predictable carbon sequestration rates. <text style={{fontWeight: 'bold'}}><br />We value common sense conservation over non-inclusive regulation.</text></TextSubtitle>
                        <TextSubtitle>We believe a better approach to monetize healthy, remote, mature forests is to accept budgetary measurement accuracy for predictable forestry projects, using satellite imagery alone. <br />This eliminates excessive costs for unaffordable manual measurements that seek definitive accuracy for a well understood, low risk, predictable carbon sink. <br />Conversely, definitive measurement accuracy is critically important for new, high risk, unpredictable CO<CustomSub>2</CustomSub> extraction devices whose sequestration efficiency is unproven. <br />Using satellite imagery alone to estimate carbon sequestration rates for predictable carbon sinks enables a larger percentage of your purchase price to benefit the project rather than fund non value added intermediaries.</TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
                <PriceButtonWrapper data-aos="fade-up" data-aos-once="true">
                        <Button LinkComponent={Link} to='/purchaseconditions' sx={{padding: '15px'}} size="large" color="primary" variant="contained">Click to Review Our Purchase Conditions</Button>
                </PriceButtonWrapper>
            </TextAreaContainer>
        </>
    )
}

export default PricingSection
