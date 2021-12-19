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
    BigForestImageWrap,
    Img2,
    HypothesisRow2,
    CustomVideoPlayer,
    CustomVideoPlayer2
} from './OurForestPageElements'
import {CustomLink} from '../CustomCss'
import img1 from '../../images/OurForest/1.webp'
import img2 from '../../images/OurForest/2.webp'
import img3 from '../../images/OurForest/3.webp'
import img4 from '../../images/OurForest/4.webp'
import img5 from '../../images/OurForest/5.png'
import img6 from '../../images/OurForest/6.png'


const OurForestSection = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper data-aos="fade" data-aos-once="true">
                    <TextTopline>AVATIME TRADITIONAL AREA, VOLTA REGION, GHANA</TextTopline>
                </TextAreaWrapper>
                <BigForestImageWrap data-aos="fade" data-aos-once="true">
                    <Img2 src={img1}/>
                </BigForestImageWrap>
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Our Advantage</TextHeadline>
                        <TextSubtitle>The Avatime traditional area is located about 50 kilometres (from Ho to Avatime Dzokpe, approx.) north of the regional capital Ho, and is close to the border with Togo. There are seven Avatime towns:- Avatime Amedzofe, Avatime Biakpa, Avatime Dzogbefeme, Avatime Dzokpe, Avatime Fume, Avatime Gbadzeme, and Avatime Vane.</TextSubtitle>
                        <TextSubtitle><CustomLink href='http://www.101lasttribes.com/tribes/avatime.html' target="_blank" rel="noopener noreferrer">The Avatime</CustomLink> are of the Guan extractive tribe who live in the Ho West District of the Volta region of <text style={{fontWeight: 'bold'}}>Ghana</text>. According to oral history, they are Ahanta people who are said to have migrated from Mesopotamia, in the East to the Volta Region, through  Iboland in southern Nigeria where they split from the main tribes and then to Ahanta in the South Western part of Ghana. They are known to love settling in the mountains, as a security and defense strategy.</TextSubtitle>
                        <TextSubtitle>Avatime people are also known as Kede’one (male Avatime (sing). Kedeaniba,-Kedeme’aneba (pl), or Kede’obi – Kedeme obi, (son or daughter of Avatime, sing,) (Kedeme’bi (pl)), or Kedemedze’e (female Avatime person, sing), (Kedemedze ba (pl.)). They speak Sideme, Siya or Siyase, a Kwa language which belongs to the larger Voltaic (Niger)-Congo ethnolinguistic group in the Volta region of Ghana where they are surrounded by the more populous Ewe people.</TextSubtitle>
                        <TextSubtitle>GEMI Mountain is the second highest mountain in Ghana and the highest mountain close to the equator and the centre of the world. It is located in Avatime, which has the highest human settlement in Ghana.</TextSubtitle>
                        <TextSubtitle>The Avatime Traditional Area is blessed with mountain ranges, caves, canyons, refreshing waterfalls and attractive forests- flora and fauna. The arable land is conducive to cultivating grapes, exotic fruits, vegetables, tea, potatoes and rice. AMU is the traditional name for Avatime Mountain Brown Rice (AMBRice), which is celebrated in the Annual Amu Festival (AmuFest), in the second week of November.</TextSubtitle>
                        <TextSubtitle>According to the Doctoral Thesis by Rebecca Defina, Sydney, Australia, most Avatime people are subsistence farmers, though there are generally a number in each family who take up other professions. Each person has several plots of land in the areas surrounding the villages. It is said that the main staple crops are cassava, maize, yam, and rice. Cocoa and coffee, interspersed with exotic fruits and flowers are also grown as a cash crop. The Avatime people are known for a tradition of rice cultivation and there are many cultural traditions tied to the farming of rice. However, in the last few decades these traditions have largely been lost, though in 2010 the Paramount Chief, Osie Adza Tekpor VII, introduced annual brown (red) rice festivals, called AmuFest, in an attempt to revive some of these cultural practices.</TextSubtitle>
                        <TextSubtitle>The Avatime people currently have a chieftaincy system modelled on the mixture of Akan and their own adapted chieftaincy system. Avatimes practice patrilineal system of inheritance, as opposed to the matrilineal system of the most Akans, in Ghana. It appears to have been adopted relatively recently, likely in the early 19th century. Each Avatime village has its own male chief (Okusie) and female chief (Onetsie). The entire Avatime area is under the domain of a paramount male chief (Osie)  and supported by a paramount female chief (Onetsitsie) The village of Avatime Vane is the seat of the paramountcy and the paramount chiefs reside there. More traditionally, each village is divided into clans (akpɔ, pl), (lịkpɔ, sing) which in turn consist of smaller patrilineal groups (iku, pl), (oku, sing). The elder of each oku is in charge of land allocation for farming and housing within each group. </TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
                <TextAreaWrapper data-aos="fade" data-aos-once="true">
                    <TextTopline style={{marginTop: '100px'}}>AVATIME ELEVATION MAP DRAWN BY HARRY BUGLASS</TextTopline>
                </TextAreaWrapper>
                <BigForestImageWrap data-aos="fade" data-aos-once="true">
                    <Img2 src={img2}/>
                </BigForestImageWrap>
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextTopline>OUR FOREST</TextTopline>
                                <TextHeadline>Forestry Areas in Africa</TextHeadline>
                                <TextSubtitle>According to The Nature Conservancy, Africa has one-fifth of the planet’s remaining forests but is losing forestry areas faster than anywhere else in the world. Protecting forests is among the most cost effective natural defenses against climate change and in Africa will help hundreds of thousands of people earn a better living.</TextSubtitle>
                                <TextSubtitle>According to the <CustomLink href='https://www.forestcarbonpartnership.org/what-redd' target="_blank" rel="noopener noreferrer">Forest Carbon Partnership Facility</CustomLink> REDD+ stands for countries' efforts to reduce emissions from deforestation and forest degradation, and foster conservation, sustainable management of forests, and enhancement of forest carbon stocks.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img3}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                    <div>
                        <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextSubtitle>Unlike afforestation and reforestation activities, which generally cause small annual changes in carbon stocks over long periods of time, stemming deforestation causes large changes in carbon stocks over a short period of time. Most emissions from deforestation take place rapidly, whereas carbon removal from the atmosphere through afforestation and reforestation activities is a slow process.</TextSubtitle>
                        <TextSubtitle>In addition to mitigating climate change, stopping deforestation and forest degradation and supporting sustainable forest management conserves water resources and prevents flooding, reduces run-off, controls soil erosion, reduces river siltation, protects fisheries, preserves biodiversity and preserves cultures and traditions.</TextSubtitle>
                        <TextSubtitle>With all the services that forests provide both to humanity and the natural world, there is now widespread understanding of a simple yet profound fact that forests are more important left standing, than being razed to the ground.</TextSubtitle>
                        <TextSubtitle>Image by <CustomLink href='https://fonibia.com/kwadwokoto' target="_blank" rel="noopener noreferrer">kwadwokoto</CustomLink> from <CustomLink href='https://fonibia.com/' target="_blank" rel="noopener noreferrer">Fonibia</CustomLink>.</TextSubtitle>
                        </AreaWrapper>
                    </div>
                </TextAreaWrapper>  
                <TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Forestry Areas in Avatime</TextHeadline>
                                <TextSubtitle>According to Raphael Berchie from AfroSources.com, Amedzofe ( pronounced Amɛ-jor-pɛ) has an average elevation of 661 meters above sea level. This makes it the highest habitable town in Ghana. In fact, the town is perched at the foot of Mount Gemi. Moreover, there is a waterfall that is nestled within the deep valleys on the outskirts of Amedzofe which, unusually, occupies a lower elevation than the village. The stream flows through the township toward the waterfall. This town maintains a lower average temperature, in the lower 70s (20s in Celsius), than other areas in Ghana.</TextSubtitle>
                                <TextSubtitle>Explaining how the people of Amedzofe settled on the mountain, Daniel Kafui Agbesi, an indigene, stated that the people left Benin City in present-day Nigeria over 700-800 years ago to settle in this location, due to war and social conflict in their previous homeland.</TextSubtitle>
                                <TextSubtitle>Image by <CustomLink href='https://fonibia.com/kwadwokoto' target="_blank" rel="noopener noreferrer">kwadwokoto</CustomLink> from <CustomLink href='https://fonibia.com/' target="_blank" rel="noopener noreferrer">Fonibia</CustomLink>.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap data-aos="fade" data-aos-once="true">
                                <Img src={img4}/>
                            </Imgwrap>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
                <TextAreaWrapper data-aos="fade" data-aos-once="true">
                    <TextTopline style={{marginTop: '100px'}}>PROJECT NOTIFICATION TO THE FORESTRY COMMISSION</TextTopline>
                    <TextSubtitle>The following letter has been validated by First Florida Securities, Inc. a FINRA registered Broker Dealer.</TextSubtitle>
                </TextAreaWrapper>
                <BigForestImageWrap data-aos="fade" data-aos-once="true">
                    <Img2 src={img5}/>
                </BigForestImageWrap>
                <TextAreaWrapper data-aos="fade" data-aos-once="true">
                    <TextTopline style={{marginTop: '100px'}}>LETTER OF SUPPORT FROM THE FORESTRY COMMISSION</TextTopline>
                    <TextSubtitle>The following letter has been validated by First Florida Securities, Inc. a FINRA registered Broker Dealer.</TextSubtitle>
                </TextAreaWrapper>
                <BigForestImageWrap data-aos="fade" data-aos-once="true">
                    <Img2 src={img6}/>
                </BigForestImageWrap>
                <TextAreaWrapper>
                    <TextAreaWrapper data-aos="fade-down" data-aos-once="true">
                        <TextTopline>VIDEOS</TextTopline>
                    </TextAreaWrapper>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Forestry Areas in Africa</TextHeadline>
                                <TextSubtitle>Nature tells the best stories.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <CustomVideoPlayer
                                url="https://www.youtube.com/watch?v=yOao2-Br0xA&ab_channel=ML"
                                />
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow>
                    <HypothesisRow2>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Waterfall</TextHeadline>
                                <TextSubtitle>The waterfall is below the village.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <CustomVideoPlayer
                                url="https://www.youtube.com/watch?v=ULQFLHxROJo&ab_channel=ML"
                                />
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow2>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Monkey Sanctuary</TextHeadline>
                                <TextSubtitle>Our friends are protected.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <CustomVideoPlayer
                                url="https://www.youtube.com/watch?v=bWhEnQMsAZU&ab_channel=ML"
                                />
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow>
                    <HypothesisRow2>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <TextHeadline>Another Waterfall?</TextHeadline>
                                <TextSubtitle>A shower you will never forget.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <CustomVideoPlayer
                                url="https://www.youtube.com/watch?v=Q13WEzRSJw8&ab_channel=ML"
                                />
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow2>
                    <HypothesisRow>
                        <Column1>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                                <CustomVideoPlayer2 style={{marginBottom: '50px'}}
                                url="https://www.youtube.com/watch?v=A6PvnGkKeNw&ab_channel=ML"
                                />
                                <TextHeadline>Motion Detecting Camera</TextHeadline>
                                <TextSubtitle>There's always something happening in the forest ... even at night.</TextSubtitle>
                            </AreaWrapper>
                        </Column1>
                        <Column2>
                            <AreaWrapper data-aos="fade" data-aos-once="true">
                            <CustomVideoPlayer2 style={{marginBottom: '50px'}}
                                url="https://www.youtube.com/watch?v=KZVdvKPjfHU&ab_channel=ML"
                                />
                                <TextHeadline>This is their home</TextHeadline>
                                <TextSubtitle>They are intrigued by the strange visitors.</TextSubtitle>
                            </AreaWrapper>
                        </Column2>
                    </HypothesisRow>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default OurForestSection
