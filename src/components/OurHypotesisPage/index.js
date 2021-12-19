import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextHeadline,
    TextSubtitle,
    AreaWrapper,
    HypothesisRow,
    Column1,
    Column2,
    Imgwrap,
    Img,
    TextTopline,
    JoinUsText,
    joinUsWrapper
} from './HypotesisElements'
import {Divider} from '@mui/material'
import img1 from '../../images/Hypothesis/1.webp'
import img2 from '../../images/Hypothesis/2.webp'
import img3 from '../../images/Hypothesis/3.webp'
import img4 from '../../images/Hypothesis/4.webp'

const HypotesisTextSection = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Our Advantage</TextHeadline>
                        <TextSubtitle>We have a beautiful forest that is rich in biodiversity and sequesters carbon dioxide from the atmosphere. </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Problem Statement</TextHeadline>
                        <TextSubtitle>Our beautiful forest is threatened by illegal deforestation activities that we do not have the resources to prevent.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Our Hypothesis</TextHeadline>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>IF</text> we add security and provide alternative livelihoods that are more profitable and sustainable than illegal logging<br/>
                        <text style={{fontWeight: 'bold'}}>THEN</text> we will eliminate the root causes of illegal logging.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Our Solution</TextHeadline>
                        <TextSubtitle>We use a portion of your payment to sponsor 1 hectare of forestry. We use this sponsorship to fund forest security, forest management and a social innovation studio. This sponsorship will also provide us the option to comply with the requirements for a traditional carbon offset program. </TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextTopline>OUR THEORY OF CHANGE</TextTopline>
                                <TextHeadline>Inputs to our Theory of Change</TextHeadline>
                                <TextSubtitle>The key inputs to our Theory of Change are:<br/>
                                <br/>
                                1. Our beautiful forest.<br/>
                                2. Sponsorship from your NFT purchase.<br/>
                                3. Our business model for a social innovation studio (like a startup accelerator). <br/>
                                4. Modern innovations like the Blockchain, DeFi, Stable Coins, DAOs and Crypto.<br/>
                                5. Remote satellite imagery and an approximation algorithm for net carbon sequestration.
                                </TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img1}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>  
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Interventions that Enable our Theory of Change</TextHeadline>
                                <TextSubtitle>The key interventions that enable our Theory of Change are:<br/>
                                <br/>
                                1. Tokenization of natural resources.<br/>
                                2. Security to prevent illegal deforestation.<br/>
                                3. Forest management activities.<br/>
                                4. Identification of the root causes of the local wealth gap and opportunity gap.<br/>
                                5. Development of projects and companies to create opportunities that solve these root causes.<br/>
                                6. Oversight of the execution of these social innovation projects and companies.<br/>
                                7. Measurement of the social impact realized by these opportunities.    
                                </TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img2}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Outputs Caused by our Theory of Change</TextHeadline>
                                <TextSubtitle>
                                1. High level estimates for carbon sequestration based solely on remote satellite measurements.<br/>
                                2. Security best practices that prevent deforestation.<br/>
                                3. Enhanced conservation enabled by effective forest management.<br/>
                                4. Reimagined business models and funding for social innovation projects and companies.<br/>
                                5. Nurturing of social innovation projects and companies to achieve product market fit and beyond.<br/>
                                6. New, attractive local jobs.<br/>
                                7. Ongoing collaboration between the local community and the Carbon Collectible Community.
                                </TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img3}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Outcomes Driven by our Theory of Change</TextHeadline>
                                <TextSubtitle>
                                1. Funding for forests that cannot comply with requirements for voluntary/regulated carbon offsets.<br/>
                                2. Sustained health for a forest that sequesters carbon dioxide.<br/>
                                2. Profitable alternative livelihoods.<br/>
                                3. Economic Growth.<br/>
                                4. Hope. 
                                </TextSubtitle>
                                <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                                <TextHeadline>Call to Action</TextHeadline>
                                <TextSubtitle>Join our Carbon Collectible community to help accelerate this journey.</TextSubtitle>
                                <TextSubtitle>Be part of the crowd that bootstraps local opportunities and hope.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img4}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
                <joinUsWrapper data-aos="fade" data-aos-once="true">
                    <JoinUsText>We invite you to come and experience our forest and livelihood enrichment accelerator.</JoinUsText>
                </joinUsWrapper>
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextTopline>WHAT SHOULD YOU CONSIDER</TextTopline>
                        <TextHeadline>Our Recommendation to You</TextHeadline>
                        <TextSubtitle>1. Minimize your carbon footprint by reducing your green house gas emissions as much as possible.<br/>
                        2. Offset all of your remaining emissions.</TextSubtitle>
                        <TextSubtitle>Please note, there are five commonly agreed-upon criteria that a <text style={{fontWeight: 'bold'}}>traditional offset project</text> should meet to ensure environmental integrity. They are Real, Permanent, Additional, Verifiable and Enforceable as described below. We believe offset projects should also seed alternative livelihoods.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Real</TextHeadline>
                        <TextSubtitle>A carbon offset should represent the reduction of one ton of CO2 greenhouse gas emissions or CO2 sequestration as a result of an activity undertaken for the purpose of reducing emissions. <text style={{fontWeight: 'bold'}}>However, mature, predictable forests sequester carbon very efficiently without the need for an activity undertaken for the purpose of reducing emissions.</text></TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Permanent</TextHeadline>
                        <TextSubtitle>The intervention must be a long term solution that is not reversible. Carbon captured and represented in offsets should be stored forever, or for a very, very long time. <text style={{fontWeight: 'bold'}}>A portion of our forest sponsorship funds will finance measurement, monitoring and reporting activities.</text></TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Additionality</TextHeadline>
                        <TextSubtitle>Additionality refers to reducing CO2 emissions that would not have happened otherwise. Additionality is a non inclusive policy that penalizes our best carbon sinks; namely, mature predictable forests. <text style={{fontWeight: 'bold'}}>Our forest is threatened by illegal deforestation activities. Your sponsorship helps preserve our carbon sink.</text></TextSubtitle>
                        <TextSubtitle>Please note, planting a new tree is a great start but it will take many years for that new tree to sequester the same level of CO2 as our mature trees. In addition, that new tree is subject to the same risk of deforestation as our forest without the immediate sequestration efficiencies of our forest. In fact, some experts believe trees are most effective at sequestrating CO2 at the age of 10 years and beyond. We therefore believe that sponsoring a mature forest to voluntarily offset your personal carbon footprint is more effective than sponsoring a new carbon sink that takes years to attain efficient carbon sequestration. Especially if that mature forest reinvests in planting new trees that provide additionality.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Monitoring and Verification</TextHeadline>
                        <TextSubtitle>Credible offset programs require emission reduction activities to be monitored and verified periodically by an independent, qualified third party. <text style={{fontWeight: 'bold'}}>We plan to engage local resources to monitor and verify that our trees continue to exist in a healthy state. This also creates new local jobs to support these monitoring and verification activities.</text></TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Enforceable - No Double Counting</TextHeadline>
                        <TextSubtitle>The ownership of each voluntary carbon offset should be tracked to avoid double counting. A registry usually performs this role. <text style={{fontWeight: 'bold'}}>Your purchase represents an exclusive sponsorship of 1 hectare of digital benefits provided by our forest. We track your sponsorship on a blockchain to prevent double counting.</text></TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Livelihood Enrichment Through a Social Innovation Studio</TextHeadline>
                        <TextSubtitle>We believe that relying on security to prevent illegal deforestation activities is only part of the answer. It is critical to supplement security with a livelihood enrichment accelerator that funds more sustainable and more profitable alternatives to deforestation.</TextSubtitle>
                        <TextSubtitle>Our Social Innovation Studio identifies the root causes of the local wealth gap and opportunity gap. We then use your sponsorship to fund projects and companies that develop sustainable and profitable solutions to these root causes. We also nurture these programs to product market fit and beyond. Your sponsorship enables us to reimagine solutions to social problems and also seed alternative livelihoods.</TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default HypotesisTextSection
