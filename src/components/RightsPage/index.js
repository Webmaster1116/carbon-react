import React from 'react'
import Img1 from '../../images/yourRights/1.webp'
import Img2 from '../../images/yourRights/2.webp'
import Img3 from '../../images/yourRights/3.webp'
import Img4 from '../../images/yourRights/4.webp'
import Img5 from '../../images/yourRights/5.webp'
import Img6 from '../../images/yourRights/6.webp'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesP,
} from './RightsPageElements'
import {CustomWhiteLink} from '../CustomCss'

const YourRightsPage = () => {
    return (
        <ServicesContainer id="discover"> 
            <ServicesH1 data-aos="fade-down" data-aos-once="true">THE RIGHTS CONVEYED BY YOUR CARBON COLLECTIBLE NFT</ServicesH1>
            <ServicesWrapper data-aos="fade" data-aos-once="true">
                <ServicesCard>
                    <ServicesIcon src={Img1} />
                    <ServicesH2>Virtual Rights</ServicesH2>
                    <ServicesP>Your Carbon Collectible NFT conveys to you all virtual rights associated with 1 hectare of forestry for the duration of your NFT. This includes mixed reality rights to biodiversity, virtual tourism and carbon sequestration measured using remote satellite imagery.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img2} />
                    <ServicesH2>Digital Rights</ServicesH2>
                    <ServicesP>Your Carbon Collectible NFT conveys to you all digital rights associated with 1 hectare of forestry for the duration of your NFT. You can use these digital rights for gaming and other purposes that are not immoral and do not create harm.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img3} />
                    <ServicesH2>Physical Rights</ServicesH2>
                    <ServicesP> Your Carbon Collectible NFT does not convey to you any physical rights associated with the trees, land or any other physical feature associated with the forest. <text style={{fontWeight: 'bold'}}>Your NFT is not an investment contract</text> and does not convey any ownership rights to the forest or any project or business.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <ServicesWrapper data-aos="fade" data-aos-once="true">
                <ServicesCard>
                    <ServicesIcon src={Img4} />
                    <ServicesH2>Copyright</ServicesH2>
                    <ServicesP>We grant you rights to the artwork for your Carbon Collectible NFT under the creative commons license BY-SA 4.0.<br/>
                    <br/>
                    © 2021. This work is licensed under a<CustomWhiteLink href='https://creativecommons.org/licenses/by-sa/4.0/' target="_blank" rel="noopener noreferrer"> CC BY-SA 4.0 license.</CustomWhiteLink></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img5} />
                    <ServicesH2>Other Rights</ServicesH2>
                    <ServicesP>Please contact us to discuss any other rights that are not expressly included or excluded herein.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Img6} />
                    <ServicesH2>Restrictions</ServicesH2>
                    <ServicesP>You are not permitted to separate any rights from your NFT. If you transfer ownership of your NFT then you are also transferring all associated rights and restrictions exactly as described herein.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default YourRightsPage
