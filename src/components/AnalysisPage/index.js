import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextHeadline,
    TextSubtitle,
    AreaWrapper
} from './AnalysisElements'
import { CustomLink } from '../CustomCss'

const AnalysisCarbonPage = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>HIGH LEVEL ANALYSIS OF CARBON EMISSIONS</TextHeadline>
                        <TextSubtitle>According to the <CustomLink href='http://urbanforestrynetwork.org/benefits/air%20quality.htm' target="_blank" rel="noopener noreferrer">Urban Forestry Network</CustomLink>, on average, one acre of new forest can sequester about 2.5 tons of carbon annually (about <text style={{fontWeight: 'bold'}}>2.3</text> Metric Tonnes "MTs"). Young trees absorb carbon dioxide at a rate of 13 pounds per tree per year (about <text style={{fontWeight: 'bold'}}>2.3</text> MTs of CO2 per acre per year). Trees reach their most productive stage of carbon storage at about 10 years at which point they are estimated to absorb 48 pounds of carbon dioxide per year (about <text>8.5</text> MTs of CO2 per acre per year). At that rate, they release enough oxygen back into the atmosphere to support two human beings. One voluntary carbon offset is 1 MT of CO2. The assumptions above indicate that 1 acre of mature trees have a similar carbon sequestration benefit as approximately 8.5 voluntary carbon offsets. That is approximately 20 voluntary carbon offsets per hectare.</TextSubtitle>
                        <TextSubtitle>However, according to <CustomLink href='https://www.nytimes.com/2012/12/04/science/how-many-pounds-of-carbon-dioxide-does-our-forest-absorb.html' target="_blank" rel="noopener noreferrer">Timothy J. Fahey</CustomLink>, professor of ecology in the department of natural resources at Cornell University, "an approximate value for a 50-year-old oak forest would be 30,000 pounds of carbon dioxide sequestered per acre,” (13.6 MTs of CO2 per acre per year) . “The forest would be emitting about 22,000 pounds of oxygen" (10 MTs of O2 per acre per year).  </TextSubtitle>
                    </AreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextSubtitle>In comparison, according to Terrapass, the average American creates 23 tons (21 MTs) of carbon dioxide per year. However, the <CustomLink href='https://terrapass.com/blog/one-ton-carbon-emissions-look-like' target="_blank" rel="noopener noreferrer">Terrapass</CustomLink> calculator indicates the <CustomLink href='https://terrapass.com/carbon-footprint-calculator' target="_blank" rel="noopener noreferrer">average U.S. citizen emits 29 MT</CustomLink> of carbon dioxide per year including vehicle, public transit, air travel and home energy. You can calculate your own carbon footprint using a number of calculators, such as those provided by <CustomLink href='https://terrapass.com/blog/one-ton-carbon-emissions-look-like' target="_blank" rel="noopener noreferrer">Terrapass</CustomLink> and <CustomLink href='https://www.conservation.org/carbon-footprint-calculator#/' target="_blank" rel="noopener noreferrer">Conservation International</CustomLink>.</TextSubtitle>
                        <TextSubtitle>For our forest, we use a much more conservative estimate of 5 digital voluntary carbon offsets per hectare instead of 20. Our estimate is based on the budgetary satellite-based analysis by <CustomLink href='https://gfw.global/3o1M4qq' target="_blank" rel="noopener noreferrer">Global Forest Watch</CustomLink>. They estimate that the Volta Region of Ghana has a net carbon sequestration rate of approximately 4 to 6 metric tons of carbon dioxide per hectare per year.</TextSubtitle>
                    </AreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextSubtitle>The new maps on Global Forest Watch were produced using a groundbreaking new model, which applies the Intergovernmental Panel on Climate Change’s (IPCC) <CustomLink href='https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html' target="_blank" rel="noopener noreferrer">guidelines</CustomLink> for national greenhouse gas inventories to high-resolution geospatial data. The inputs to the model include ground, airborne and satellite observations of forest change, disturbances (like deforestation, harvest or burning), and the type, age and condition of forests being lost or gained.</TextSubtitle>
                        <TextSubtitle>Combining these datasets allows for detailed estimates about how each 30×30 meter parcel of forest contributes to global emissions and removals. The maps can be used by researchers to generate national, regional or global-scale estimates of forest carbon fluxes. And thanks to their high resolution, they can also be used by those seeking to monitor local forest carbon dynamics, like Indigenous communities. </TextSubtitle>
                        <TextSubtitle>Our carbon sequestration estimates for the Avatime Forest are based on data and analyses from Global Forest Watch. You can examine the carbon sequestration methodology used by Global Forest Watch <CustomLink href='https://www.nature.com/articles/s41558-020-00976-6' target="_blank" rel="noopener noreferrer">here</CustomLink>.</TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default AnalysisCarbonPage
