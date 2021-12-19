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
    CustomVideoPlayer
} from './ProjectElements'
import {CustomLink} from '../CustomCss'
import img1 from '../../images/ProjectPrinciples/1.webp'
import img2 from '../../images/ProjectPrinciples/2.webp'
import img3 from '../../images/ProjectPrinciples/3.webp'


const ProjectPrinciplesSection = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Program Visionary</TextHeadline>
                                <TextSubtitle><CustomLink href='https://www.ghanaweb.com/GhanaHomePage/NewsArchive/Remove-the-Togolese-tag-on-my-people-Togbui-Fiti-V-to-politicians-1005586' target="_blank" rel="noopener noreferrer">Togbui Fiti V</CustomLink> is the Paramount Chief and President of the Aflao Traditional Council. He is the traditional ruler of the land and performs traditional administrative and ceremonial functions in the area. His Kingdom is divided among areas within Ghana, Togo and Benin. Unfortunately, the land occupied by his subjects was bisected by arbitrary national borders that did not consider traditional boundaries when the map of Africa was <CustomLink href='https://www.dw.com/en/130-years-ago-carving-up-africa-in-berlin/a-18278894' target="_blank" rel="noopener noreferrer">redrawn</CustomLink> by Europeans 1885.</TextSubtitle>
                                <TextSubtitle>Togbui Fiti V is proud of the history and tradition of his people. However, he believes that modern innovations offer a very bright future for his people. As a blockchain enthusiast, he believes DAOs, DeFi, Stable Coins, NFTs and Crypto create the opportunity to reimagine solutions to many of the social challenges that currently constrain the fortunes of his people.</TextSubtitle>
                                <TextSubtitle>Togbui Fiti V invites you to visit his traditional area for a vacation or for business due diligence. He says..."Bring your knowledge, skills and goodwill. Understand our challenges and opportunities. Collaborate with our people to use your blockchain, and other, skills to develop sustainable solutions to our challenges while making a profit. We will provide any support, within our modest capabilities, that you need to make a profit with purpose. We invite you to do well by doing good. Let me know when you plan to visit us."</TextSubtitle>
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
                                <TextHeadline>Leader of the Avatime Traditional Area</TextHeadline>
                                <TextSubtitle><CustomLink href='https://www.modernghana.com/news/180699/new-osie-of-avatime-installed.html' target="_blank" rel="noopener noreferrer">Osie Adza Tekpor VII</CustomLink> is the King of the Avatime Traditional Area in the Ho West District of the Volta Region in Ghana, West Africa. His influence transcends his traditional area through his involvement in matters of the Volta Regional House of chiefs. He also plays an active role in the National development discourse. He is the chairman of the Congress of Traditional leaders in the Ho West District/Constituency. It was through his initiatives, together with the Member of Parliament, that the Ho west was carved out of the Ho municipality and became an autonomous district. He has chaired several committees and functions across the length and breadth of Ghana.</TextSubtitle>
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
                                <TextHeadline>Program Manager</TextHeadline>
                                <TextSubtitle>Mark Lawrence has a B.S.C. from London University and a MBA in International Business from University of Southern California. He has more than 20 years of program management experience. During the 2018 Global Impact Investors Network conference in Paris, Mr. Lawrence showcased a Theory of Change to move emerging economies beyond aid through entrepreneurship. His strategy to achieve this vision includes leveraging "zero cost" DeFi infrastructure to drive social innovation. His implementation method is Crowd Bootstrap's "Creator DAO", a social innovation studio that is like a business accelerator. However, it receives a list of social challenges, from disadvantaged communities, then motivates a creator community to monetize the advantages of the disadvantaged by reimagining solutions, to root causes, that are profitable and sustainable. Mr. Lawrence received 5 patents from the USPTO within 12 months of December 2020.</TextSubtitle>
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
                                <CustomVideoPlayer style={{maxWidth: '400px', marginBottom: '50px'}}
                                url="https://www.youtube.com/watch?v=A6PvnGkKeNw&ab_channel=ML"
                                />
                                <TextHeadline>Aflao Traditional Council</TextHeadline>
                                <TextSubtitle><CustomLink href='https://www.ghanaweb.com/GhanaHomePage/NewsArchive/Remove-the-Togolese-tag-on-my-people-Togbui-Fiti-V-to-politicians-1005586' target="_blank" rel="noopener noreferrer">Togbui Fiti V</CustomLink> is the Paramount Chief and President of the Aflao Traditional Council. </TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                            <CustomVideoPlayer style={{maxWidth: '400px', marginBottom: '50px'}}
                                url="https://www.youtube.com/watch?v=KZVdvKPjfHU&ab_channel=ML"
                                />
                                <TextHeadline>Avatime Traditional Area</TextHeadline>
                                <TextSubtitle><CustomLink href='https://www.modernghana.com/news/180699/new-osie-of-avatime-installed.html' target="_blank" rel="noopener noreferrer">Osie Adza Tekpor VII</CustomLink> is the King of the Avatime Traditional Area.</TextSubtitle>
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default ProjectPrinciplesSection
