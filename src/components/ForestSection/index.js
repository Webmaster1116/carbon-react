import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextTopline,
    TextSubtitle,
    AreaWrapper,
    CarbonAreaWrapper,
    CarbonRow,
    CarbonColumn1,
    CarbonColumn2,
    Imgwrap,
    Img,
    CarbonSubtitle,
    SmallHeadline
} from './ForestElements'
import {CustomLink} from '../CustomCss'
import img from '../../images/CarbonOffset.webp'

const ForestSection = () => {
    return (
        <>
            <TextAreaContainer>
                <TextAreaWrapper>
                <TextTopline data-aos="fade-down" data-aos-once="true">FORESTS ARE A SCARCE RESOURCE</TextTopline>
                    <AreaWrapper>
                        <div data-aos="fade" data-aos-once="true">
                        <TextSubtitle>The general consensus among scientists is that trees sequester carbon dioxide from the atmosphere. <br />They ingest carbon into their trunks, branches and soil, then emit oxygen into the atmosphere.</TextSubtitle>
                        <TextSubtitle>According to environmental experts, 1 to 5 acres of mature trees can offset the personal carbon footprint of the average American. <br />You can use a <CustomLink href='https://www.conservation.org/carbon-footprint-calculator#/' target="_blank" rel="noopener noreferrer">calculator</CustomLink> to estimate your personal carbon footprint then determine the number of acres you require to offset your personal carbon emissions.</TextSubtitle>
                        <TextSubtitle>Unfortunately, the forests on our planet are rapidly depleting. In fact, <CustomLink href='https://blogs.worldbank.org/opendata/five-forest-figures-international-day-forests' target="_blank" rel="noopener noreferrer">the World Bank</CustomLink> estimates that, between 1990 and 2016, the world lost 502,000 square miles (1.3 million square kilometers) of forest. <br />This area is larger than South Africa. <br />Moreover, according to a 2015 study in Nature Journal, <CustomLink href='https://www.nature.com/articles/nature14967' target="_blank" rel="noopener noreferrer">46% of trees have been felled</CustomLink> since humans started cutting down forests. <br />Furthermore, approximately <CustomLink href='https://www.worldwildlife.org/threats/deforestation-and-forest-degradation' target="_blank" rel="noopener noreferrer">17%</CustomLink> of the Amazonian rainforest has been <CustomLink href='https://www.nationalgeographic.com/environment/article/amazon-rain-forest-conservation-chico-mendes-anniversary-jair-bolsanaro' target="_blank" rel="noopener noreferrer">destroyed</CustomLink> over the past 50 years, and <CustomLink href='https://www.nationalgeographic.com/science/article/tropical-deforestation-forest-loss-2017' target="_blank" rel="noopener noreferrer">losses continue to rise</CustomLink>.<br /> These facts paint a bleak picture.</TextSubtitle>
                        </div>
                        <div data-aos="fade" data-aos-once="true">
                        <TextSubtitle>In response, first we encourage you to minimize your personal carbon footprint. <br />Second we encourage you to offset whatever emissions you cannot eliminate.</TextSubtitle>
                        <TextSubtitle>Please note, the popular personal carbon footprint calculators may not take into account your crypto carbon emissions.</TextSubtitle>
                        </div>
                        <div data-aos="fade-up" data-aos-once="true">
                        <TextSubtitle>Furthermore, your Carbon Collectible NFT is not a historical or traditional carbon offset. <br />Instead, we use a percentage of your purchase price to sponsor 1 hectare of trees in the Volta Region of Ghana. <br />This sponsorship helps local communities, who do not qualify for traditional carbon offsets, to prevent illegal logging. <br />In addition, this sponsorship helps members of the local community find, or develop, alternative livelihoods. <br />We believe blockchain-based technologies empower local entrepreneurs to innovate local solutions to local problems and create attractive alternative livelihoods. <br />This type of social innovation can provide new and enduring solutions to age old social problems. <br />In addition, we believe that more profitable sources of income, that are sustainable, are the best deterrent against the root causes of illegal deforestation activities.</TextSubtitle>
                        <TextSubtitle>More specifically, your Carbon Collectible NFT enables 1 hectare of trees to continue sequestering carbon from the atmosphere for the duration of your NFT. <br />According to experts, 1 acre of mature trees can sequester carbon at a level equivalent to 8.5 voluntary carbon offsets <CustomLink href='http://urbanforestrynetwork.org/benefits/air%20quality.htm' target="_blank" rel="noopener noreferrer">(Urban Forestry Network)</CustomLink>. <br />That is approximately 20 voluntary carbon offsets per hectare. <br />We use a much more conservative estimate of 5 "digital" carbon offsets per hectare based on satellite imagery. <br /><text style={{fontWeight: 'bold'}}>This eliminates the <CustomLink href='https://www.theguardian.com/environment/2010/aug/25/carbon-offset-consultancy-fees' target="_blank" rel="noopener noreferrer">excessive costs</CustomLink> of international consultants until the forests have the funding to comply with the <CustomLink href='https://verra.org/project/vcs-program/rules-and-requirements/' target="_blank" rel="noopener noreferrer">complex registration requirements</CustomLink> for traditional carbon credits</text>. <br />Although satellite images are imprecise, they offer financial equity for forest areas that are inaccessible and also for forest areas where a human presence could be detrimental. <br />The virtual estimate for our forest is based on satellite-based sequestration data provided by Global Forest Watch.<br /> Please note this satellite data is not designed to be the sole method to calculate traditional compliance carbon offsets or traditional voluntary carbon offsets. <br /><text style={{fontWeight: 'bold'}}>However, we use it for our digital estimates to support forests that do not qualify for traditional carbon offsets.</text></TextSubtitle>
                        </div>
                    </AreaWrapper>
                </TextAreaWrapper>
                <CarbonAreaWrapper data-aos="fade" data-aos-once="true">
                    <CarbonRow>
                        <CarbonColumn1>
                            <SmallHeadline>Digital Carbon Offsets</SmallHeadline>
                            <CarbonSubtitle>Digital Carbon Offsets offer equal access to revenue for forests that lack resources to comply with requirements for traditional voluntary and regulated carbon offsets. <br />These forests may be too remote for manual measurements and may lack additionality. Crypto revenues offer excluded forests a pathway to compliance. </CarbonSubtitle>
                        </CarbonColumn1>
                        <CarbonColumn2>
                            <Imgwrap>
                                <Img src={img}/>
                            </Imgwrap>
                        </CarbonColumn2>
                    </CarbonRow>
                </CarbonAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default ForestSection