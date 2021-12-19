import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextHeadline,
    TextSubtitle,
    AreaWrapper
} from './CookieElements'
import { CustomLink } from '../CustomCss'
import {Divider} from '@mui/material'

const CookieSection = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>What Are Cookies</TextHeadline>
                        <TextSubtitle>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>How We Use Cookies</TextHeadline>
                        <TextSubtitle>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>Disabling Cookies</TextHeadline>
                        <TextSubtitle>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <CustomLink href='https://www.cookiepolicygenerator.com/cookie-policy-generator/' target="_blank" rel="noopener noreferrer">Cookies Policy Generator from CookiePolicyGenerator.com</CustomLink>.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextHeadline>The Cookies We Set</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>1. Account related cookies</text><br/>
                        If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                        <br/>
                        <text style={{fontWeight: 'bold'}}>2. Login related cookies</text><br/>
                        We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                        <br/>
                        <text style={{fontWeight: 'bold'}}>3. Email newsletters related cookies</text><br/>
                        This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                        <br/>
                        <text style={{fontWeight: 'bold'}}>4. Forms related cookies</text><br/>
                        When you submit data through a form such as those found on contact pages, or comment forms, cookies may be set to remember your user details for future correspondence.
                        <br/>
                        <text style={{fontWeight: 'bold'}}>5. Site preferences cookies</text><br/>
                        In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                        </TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Third Party Cookies</text><br/>
                        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</TextSubtitle>
                        <TextSubtitle>
                        1. This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.<br/>
                        <br/>
                        2. For more information on Google Analytics cookies, see the official Google Analytics page.<br/>
                        <br/>
                        3. Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.<br/>
                        <br/>
                        4. From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.<br/>
                        <br/>
                        5. The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you. For more information on Google AdSense see the official Google AdSense privacy FAQ.<br/>
                        <br/>
                        6. Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.<br/>
                        <br/>
                        7. We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; Twitter, LinkedIn and Facebook, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                        </TextSubtitle>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>More Information</text><br/>
                        Hopefully this has clarified things for you and, as was previously mentioned, if there is something that you aren't sure whether you need, or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
                        </TextSubtitle>
                        <TextSubtitle>
                        For more general information on cookies, please read <CustomLink href='https://www.generateprivacypolicy.com/#cookies' target="_blank" rel="noopener noreferrer">"Cookies" article from the Privacy Policy Generator</CustomLink>.
                        However if you are still looking for more information then you can contact us through one of our preferred contact methods:
                        </TextSubtitle>
                        <TextSubtitle>Email: <CustomLink href="mailto:info@CarbonCollectibleNFTs.com?body=My custom mail body">info@carboncollectiblenfts.com</CustomLink></TextSubtitle>
                    </AreaWrapper>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default CookieSection
