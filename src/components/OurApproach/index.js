import React from 'react'
import img from '../../images/normal/svg4.svg'
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
    PriceRow,
} from './OurApproachElements'
import {CustomLink, CustomSub} from '../CustomCss'

const OurApproachSection = () => {
    return (
        <>
            <TextAreaContainer id='ourapproach'>
                <TextAreaWrapper>
                <TextTopline data-aos="fade-down" data-aos-once="true">Our Approach</TextTopline>
                <PriceRow >
                    <Column1>
                        <AreaWrapper data-aos="fade" data-aos-once="true">
                            <TextSubtitle>Our approach is to create a new class of <text style={{fontWeight: 'bold'}}>digital carbon offsets</text> for mixed reality applications, such as metaverses and gaming.</TextSubtitle>
                            <TextSubtitle>Each digital carbon offset is linked to 1 Metric Tonne ("MT") of CO<CustomSub>2</CustomSub> sequestration from a real forest. <text style={{fontWeight: 'bold'}}><br />This provides the same real world sequestration benefits as a traditional voluntary carbon offset or a traditional compliance carbon offset.</text> <br />However, we track digital carbon offsets transparently and immutably on a blockchain to prevent double counting and retroactive alterations. <br />In addition, we use satellite imagery to provide a budgetary estimate of carbon sequestration rates for each mature, predictable forest. <br />This minimizes the <CustomLink href='https://www.theguardian.com/environment/2010/aug/25/carbon-offset-consultancy-fees'>high transaction costs</CustomLink> associated with more precise manual carbon measurements. <br />For healthy, remote, mature forests that are predictable carbon sinks, we don't believe definitive measurement accuracy justifies the high cost of manual measurements.</TextSubtitle>
                            <TextSubtitle>In addition, digital carbon offsets are reservations for future CO<CustomSub>2</CustomSub> sequestration rather than verified, historical sequestered carbon. <br />Projected carbon sequestration is a better match for the mixed reality applications for our crypto target market. <br />Our target market also expects digital carbon offsets to be priced in a cryptocurrency.</TextSubtitle>
                        </AreaWrapper>
                    </Column1>
                    <Column2>
                        <Imgwrap data-aos="fade" data-aos-once="true">
                            <Img src={img}/>
                        </Imgwrap>
                    </Column2>
                </PriceRow>
                    <AreaWrapper data-aos="fade-up" data-aos-once="true">
                        <TextSubtitle>Our target suppliers are healthy, mature forests, that are efficient carbon sinks, but do not qualify for traditional carbon offset programs. <text style={{fontWeight: 'bold'}}><br />In summary, we have developed a new business model that links an efficient but untapped supply chain to an underserved market segment.</text></TextSubtitle>  
                        <TextSubtitle>Our supplementary goal is to understand the social challenges faced by disadvantaged forestry communities. <br />We then motivate a crowd of socially conscious crypto enthusiasts to leverage advanced innovations like the blockchain, DeFi, DAOs and stable coins to reimagine disruptive solutions to age old social challenges. <br />The next step in our process is to develop a sustainable and profitable business model that enables local entrepreneurs to build and scale companies that solve local problems, create alternative livelihoods and ignite local economic growth. <text style={{fontWeight: 'bold'}}><br />In summary, we empower local entrepreneurs to monetize the advantages of the disadvantaged in a sustainable way then reinvest a portion of their profits into social innovation programs.</text></TextSubtitle>      
                    </AreaWrapper>
                </TextAreaWrapper>            
            </TextAreaContainer>
        </>
    )
}

export default OurApproachSection
