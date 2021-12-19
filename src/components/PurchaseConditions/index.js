import React from 'react'
import img from '../../images/normal/contract.svg'
import img2 from '../../images/purchase/chart.webp'
import img4 from '../../images/purchase/carbon.webp'

import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextHeadline,
    TextSubtitle,
    AreaWrapper,
    Column1,
    Column2,
    Imgwrap,
    Img,
    Img2,
    PriceRow,
    StoryAreaWrapper,
    StoryRow,
    SmallHeadline,
    StoryImgWrap,
    ContinueWrapper
} from './PurchaseElements'
import {CustomLink} from '../CustomCss'

const PurchaseConditionsPage = () => {
    return (
        <>
            <TextAreaContainer id='story'>
                <TextAreaWrapper>
                <PriceRow >
                    <Column1>
                        <AreaWrapper data-aos="fadedown" data-aos-once="true">
                            <TextHeadline>PURCHASE CONDITIONS</TextHeadline>
                            <TextSubtitle>1. We plan to sell up to 20,000 NFTs and over allocate up to 4,000 hectares of forestry.<br/>
                                2. We plan to sell these NFTs progressively.<br/>
                                3. The current term of our agreement for our client's forest is 30 years.<br/>
                                4. Each Carbon Collectible NFT is valid for 1 to 10 years. The current owner can renew their NFT by paying the renewal fee prior to the annual expiration date.<br/>
                                5. We reserve the right to increase the annual renewal fee for each NFT. We currently expect to increase the renewal fee by our 5% annual inflation rate. However, this is subject to change without notice.<br/>
                               </TextSubtitle>                     
                        </AreaWrapper>
                    </Column1>
                    <Column2>
                        <Imgwrap data-aos="fade" data-aos-once="true">
                            <Img src={img}/>
                        </Imgwrap>
                    </Column2>                    
                </PriceRow>
                </TextAreaWrapper>
                <ContinueWrapper>
                    <TextSubtitle> 
                    6. Any NFTs that are not renewed by the current owner will be returned to our NFT treasury in preparation for re-sale. In the event of a re-sale from our NFT treasury, the history of that NFT will not be transferred to the new owner.<br/>
                    7. Any owner can sell their NFT to a new owner in a private sale. A private sale will transfer the NFT's history to the new owner.<br/>
                    8. However, we may offer membership benefits to owners of our Carbon Collectible NFTs. These benefits may increase based on the number of consecutive years of "unchanged" ownership of each NFT.<br/>
                    9. Each purchase order from the NFT treasury has a limit of up to 100 different NFTs.<br/>
                    10. Each purchase order from the NFT treasury has a prepayment limit of up to 10 years for each NFT. The price, at the time of purchase, will be used for each year in a multi year order thereby avoiding annualized price inflation.<br/>
                    11. A single purchase order can range from 1 unit (1 NFT for 1 year) up to 1,000 units (100 NFTs each for 10 years).<br/>
                    12. For our progressive sales plan, we plan to sell a percentage of available treasury NFTs based on the secondary market price rather than the price calculated by our inflation rate. 
                    </TextSubtitle>
                </ContinueWrapper>
                <TextAreaWrapper>
                    <TextHeadline>MARKET PRICES</TextHeadline>
                    <TextSubtitle>According to <CustomLink href='https://carboncreditcapital.com/value-of-carbon-market-update-2021-2/' target="_blank" rel="noopener noreferrer">Carbon Credit Capital</CustomLink>, Carbon prices in the voluntary market have not changed much in the past year, in part due to the effects of the Covid-19 pandemic, but they are expected to rise in the future, especially as demand increases. Most of the projects posted on the Gold Standard Marketplace are priced between $10 and $30 per metric tonne but some can cost as much as $47 per metric tonne.</TextSubtitle>
                </TextAreaWrapper> 
                <StoryAreaWrapper>
                    <StoryRow>
                        <Column1>
                            <StoryAreaWrapper data-aos="fade" data-aos-once="true">
                                <SmallHeadline>Debunked: Eight Myths About Carbon Offsetting</SmallHeadline>
                                <TextSubtitle>
                                In this <CustomLink href='https://www.ecosystemmarketplace.com/articles/debunked-eight-myths-carbon-offsetting/' target="_blank" rel="noopener noreferrer">chart</CustomLink> the ave. price for <text style={{fontWeight: 'bold'}}>tree planting</text> offsets in voluntary markets is $7.50. <text style={{fontWeight: 'bold'}}>New trees</text> sequester carbon at a lower rate than <text style={{fontWeight: 'bold'}}>mature trees</text>. Our NFT price is $10 per digital carbon offset for mature trees. Our price also includes funding for our social innovation program, which develops alternative livelihoods.
                                </TextSubtitle>                        
                            </StoryAreaWrapper>
                        </Column1>
                        <Column2>
                            <StoryImgWrap data-aos="fade" data-aos-once="true">
                                <Img2 src={img2}/>
                            </StoryImgWrap>
                        </Column2>
                    </StoryRow>
                </StoryAreaWrapper>    
                <StoryAreaWrapper>
                    <StoryRow>
                        <Column1>
                            <StoryAreaWrapper data-aos="fade" data-aos-once="true">
                                <TextSubtitle>
                                Each Carbon Collectible NFT sponsors 1 hectare of mature trees that have an equivalent carbon sequestration benefit of approximately 5 digital carbon offsets (5 MT of CO2). The price of each Carbon Collectible NFT is $50. The price for a 10 year term is $500 which protects you against price inflation.
                                </TextSubtitle>
                                <TextSubtitle>
                                Please note, the chart above indicates that companies have a median internal price of $18 for a tradition carbon offset. In addition, the World Bank's estimated real Cost of Carbon is $30 per carbon offset.
                                </TextSubtitle>
                                <TextSubtitle>
                                Moreover, the current price to pollute in the European Union is around 33 euros ($38) a ton. <CustomLink href='https://www.bloomberg.com/news/articles/2021-01-14/bank-of-england-says-prepare-for-carbon-prices-to-triple-to-100' target="_blank" rel="noopener noreferrer">According to Sarah Breeden</CustomLink>, who leads the Bank of England's work on climate-related risks, the cost of pollution allowances will need to rise significantly in order to achieve targets in the Paris Agreement to limit global warming to below 2 degrees Celsius. Carbon prices may even exceed $100 if the transition to a low carbon economy is abrupt, or bumpy. Breeden, is the central bank’s executive director responsible for the supervision of the U.K.’s banks, building societies and credit unions. 
                                </TextSubtitle>
                            </StoryAreaWrapper>
                        </Column1>
                        <Column2>
                            <StoryImgWrap data-aos="fade" data-aos-once="true">
                                <Img2 style={{borderRadius: '50px'}} src={img4}/>
                            </StoryImgWrap>
                        </Column2>
                    </StoryRow>
                </StoryAreaWrapper>     
            </TextAreaContainer>
        </>
    )
}

export default PurchaseConditionsPage
