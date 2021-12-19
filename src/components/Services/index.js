import React from 'react'
import Img1 from '../../images/normal/image1.webp'
import Img2 from '../../images/normal/image2.webp'
import Img3 from '../../images/normal/image3.webp'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesP,
} from './ServicesElements'

const ServicesSection = () => {
    return (
        <ServicesContainer id="discover"> 
            <ServicesH1 data-aos="fade-down" data-aos-once="true">DISCOVER OUR</ServicesH1>
            <ServicesWrapper data-aos="fade" data-aos-once="true">
                <ServicesCard>
                    <ServicesIcon src={Img1} />
                    <ServicesH2>Vision</ServicesH2>
                    <ServicesP>Our vision for Carbon Collectible NFTs is equal access to revenue for all forests, particularly those healthy, remote, mature forests that are excluded from traditional carbon offset programs. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img2} />
                    <ServicesH2>Mission</ServicesH2>
                    <ServicesP>Our mission is to empower healthy, remote, inaccessible forests, that are not "additional", to monetize their projected carbon sequestration rates.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img3} />
                    <ServicesH2>Strategy</ServicesH2>
                    <ServicesP>Our strategy is to use remote measurement techniques to estimate future carbon sequestration rates, for predictable carbon sinks, then sell virtual rights to 1 hectare blocks of forestry for mixed reality applications.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServicesSection
