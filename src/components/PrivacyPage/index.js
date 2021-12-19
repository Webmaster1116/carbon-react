import React from 'react'
import { 
    TextAreaContainer,
    TextAreaWrapper,
    TextHeadline,
    TextSubtitle,
    AreaWrapper,
    TextTopline
} from './PrivacyElements'
import {Divider} from '@mui/material'
import { CustomRouterLink, CustomLink, CustomRouterLinkScroll } from '../CustomCss'

const PrivacyPage = () => {
    return (
        <>
            <TextAreaContainer> 
                <TextAreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextTopline>PRIVACY POLICY</TextTopline>
                        <TextSubtitle>
                            <text style={{fontWeight: 'bold'}}>PRIVACY NOTICE</text><br/>
                            <text style={{fontWeight: 'bold'}}>Last updated August 23, 2021</text>
                        </TextSubtitle>
                    </AreaWrapper>
                    <AreaWrapper data-aos="fade" data-aos-once="true">
                        <TextSubtitle>Thank you for choosing to be part of the Crowd Bootstrap community ("<text style={{fontWeight: 'bold'}}>Crowd Bootstrap</text>," "<text style={{fontWeight: 'bold'}}>we</text>," "<text style={{fontWeight: 'bold'}}>us</text>,"<text style={{fontWeight: 'bold'}}>or</text> "<text style={{fontWeight: 'bold'}}>our</text>"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <CustomLink href="mailto:info@crowdbootstrap.com?body=My custom mail body">info@crowdbootstrap.com</CustomLink>.</TextSubtitle>
                        <TextSubtitle>This privacy notice describes how we might use your information if you:</TextSubtitle>
                        <TextSubtitle>
                            1. Visit our website at <CustomRouterLink to='/' target="_blank">www.carboncollectiblenfts.com</CustomRouterLink><br/>
                            2. Download and use our mobile application — Carbon Collectible NFTs<br/>
                            3. Use our Facebook application — Carbon Collectible NFTs<br/>
                            4. Engage with us in other related ways ― including any sales, marketing, or events</TextSubtitle>
                        <TextSubtitle>In this privacy notice, if we refer to:</TextSubtitle>
                        <TextSubtitle>
                            1. <text style={{fontWeight: 'bold'}}>"Website,"</text> we are referring to any website of ours that references or links to this policy<br/>
                            2. <text style={{fontWeight: 'bold'}}>"App,"</text> we are referring to any application of ours that references or links to this policy, including any listed above<br/>
                            3. <text style={{fontWeight: 'bold'}}>"Services,"</text> we are referring to our Website, App, and other related services, including any sales, marketing, or events</TextSubtitle>
                        <TextSubtitle>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</TextSubtitle>
                        <TextSubtitle>Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.</TextSubtitle>
                        <TextHeadline>TABLE OF CONTENTS</TextHeadline>
                        <TextSubtitle style={{lineHeight: '30px'}}>
                            1. <CustomRouterLinkScroll to='whatinformation' smooth={true} duration={500} spy={true} exact='true' offset={-80}>WHAT INFORMATION DO WE COLLECT?</CustomRouterLinkScroll><br/>
                            2. <CustomRouterLinkScroll to='howdoweuse' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW DO WE USE YOUR INFORMATION?</CustomRouterLinkScroll><br/>
                            3. <CustomRouterLinkScroll to='willyouinformation' smooth={true} duration={500} spy={true} exact='true' offset={-80}>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</CustomRouterLinkScroll><br/>
                            4. <CustomRouterLinkScroll to='doweusecookies' smooth={true} duration={500} spy={true} exact='true' offset={-80}>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</CustomRouterLinkScroll><br/>
                            5. <CustomRouterLinkScroll to='howdowehandle' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</CustomRouterLinkScroll><br/>
                            6. <CustomRouterLinkScroll to='whatisourstance' smooth={true} duration={500} spy={true} exact='true' offset={-80}>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</CustomRouterLinkScroll><br/>
                            7. <CustomRouterLinkScroll to='howlongdowekeep' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW LONG DO WE KEEP YOUR INFORMATION?</CustomRouterLinkScroll><br/>
                            8. <CustomRouterLinkScroll to='howdowekeep' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW DO WE KEEP YOUR INFORMATION SAFE?</CustomRouterLinkScroll><br/>
                            9. <CustomRouterLinkScroll to='whatareyourprivacy' smooth={true} duration={500} spy={true} exact='true' offset={-80}>WHAT ARE YOUR PRIVACY RIGHTS?</CustomRouterLinkScroll><br/>
                            10. <CustomRouterLinkScroll to='controlsfor' smooth={true} duration={500} spy={true} exact='true' offset={-80}>CONTROLS FOR DO-NOT-TRACK FEATURES</CustomRouterLinkScroll><br/>
                            11. <CustomRouterLinkScroll to='docalifornia' smooth={true} duration={500} spy={true} exact='true' offset={-80}>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</CustomRouterLinkScroll><br/>
                            12. <CustomRouterLinkScroll to='dowemakeupdates' smooth={true} duration={500} spy={true} exact='true' offset={-80}>DO WE MAKE UPDATES TO THIS NOTICE?</CustomRouterLinkScroll><br/>
                            13. <CustomRouterLinkScroll to='howcanyoucontact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</CustomRouterLinkScroll><br/>
                            14. <CustomRouterLinkScroll to='howcanyoureview' smooth={true} duration={500} spy={true} exact='true' offset={-80}>HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</CustomRouterLinkScroll>
                            </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='whatinformation'>
                        <TextHeadline>1. WHAT INFORMATION DO WE COLLECT?</TextHeadline>
                        <TextSubtitle>
                            <text style={{fontWeight: 'bold'}}>Personal information you disclose to us</text><br/>
                            <text style={{fontWeight: 'bold'}}>In Short:</text> We collect personal information that you provide to us.</TextSubtitle>
                        <TextSubtitle>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services (such as by posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:</TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Personal Information Provided by You.</text> We collect names; phone numbers; email addresses; usernames; passwords; contact preferences; contact or authentication data; and other similar information.</TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Social Media Login Data.</text> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called <CustomRouterLinkScroll to='' smooth={true} duration={500} spy={true} exact='true' offset={-80}>"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</CustomRouterLinkScroll> below.</TextSubtitle>
                        <TextSubtitle>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</TextSubtitle>
                        <TextSubtitle>
                            <text style={{fontWeight: 'bold'}}>Information automatically collected</text><br/>
                            <text style={{fontWeight: 'bold'}}>In Short:</text> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</TextSubtitle>
                        <TextSubtitle>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                        Like many businesses, we also collect information through cookies and similar technologies.
                        The information we collect includes:</TextSubtitle>
                        <TextSubtitle>
                            1. Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).<br/>
                            <br/>
                            2. Device Data. We collect device data such as information about your computer, phone, tablet or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.<br/>
                            <br/>   
                            3. Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.
                            </TextSubtitle>
                            <TextSubtitle>
                                <text style={{fontWeight: 'bold'}}>Information collected through our App</text><br/> 
                                <text style={{fontWeight: 'bold'}}>In Short:</text> We collect information regarding your geolocation, mobile device, push notifications, and Facebook permissions when you use our App.</TextSubtitle>
                            <TextSubtitle>If you use our App, we also collect the following information:</TextSubtitle>
                            <TextSubtitle>
                                1. Geolocation Information. We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using our App, to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.<br/>
                                <br/>
                                2. Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's camera, contacts, microphone, reminders, social media accounts, sms messages, and other features. If you wish to change our access or permissions, you may do so in your device's settings.<br/>
                                <br/>
                                3. Mobile Device Data. We automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID and information about the features of our App you accessed.<br/>
                                <br/>
                                4. Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.<br/>
                                <br/>
                                5. Facebook Permissions. We by default access your <CustomLink href='https://www.facebook.com/about/privacy/' target="_blank" rel="noopener noreferrer">Facebook</CustomLink> basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the <CustomLink href='https://developers.facebook.com/docs/permissions/reference' target="_blank" rel="noopener noreferrer">Facebook Permissions Reference</CustomLink> page.
                                </TextSubtitle>
                            <TextSubtitle>This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.</TextSubtitle>
                            <TextSubtitle>
                                <text style={{fontWeight: 'bold'}}>Information collected from other sources</text><br/>
                                <text style={{fontWeight: 'bold'}}>In Short:</text> We may collect limited data from public databases, marketing partners, social media platforms, and other outside sources.</TextSubtitle>
                            <TextSubtitle>In order to enhance our ability to provide relevant marketing, offers and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, social media platforms, as well as from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs and custom profiles, for purposes of targeted advertising and event promotion. If you interact with us on a social media platform using your social media account (e.g. Facebook or Twitter), we receive personal information about you such as your name, email address, and gender. Any personal information that we collect from your social media account depends on your social media account's privacy settings.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howdoweuse'>
                        <TextHeadline>2. HOW DO WE USE YOUR INFORMATION?</TextHeadline>
                        <TextSubtitle>
                            <text style={{fontWeight: 'bold'}}>In Short:</text> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
                            We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
                            </TextSubtitle>
                            <TextSubtitle>We use the information we collect or receive:</TextSubtitle>
                            <TextSubtitle>
                            1. <text style={{fontWeight: 'bold'}}>To facilitate account creation and logon process.</text> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" for further information.<br/>
                            <br/>
                            2. <text style={{fontWeight: 'bold'}}>To post testimonials.</text> We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at <CustomLink href="mailto:privacy@carboncollectiblenfts.com?body=My custom mail body">privacy@carboncollectiblenfts.com</CustomLink> and be sure to include your name, testimonial location, and contact information.<br/>
                            <br/>
                            3. <text style={{fontWeight: 'bold'}}>Request feedback.</text> We may use your information to request feedback and to contact you about your use of our Services.<br/>
                            <br/>
                            4. <text style={{fontWeight: 'bold'}}>To enable user-to-user communications.</text> We may use your information in order to enable user-to-user communications with each user's consent.<br/>
                            <br/>
                            5. <text style={{fontWeight: 'bold'}}>To manage user accounts.</text> We may use your information for the purposes of managing our account and keeping it in working order.<br/>
                            <br/>
                            6. <text style={{fontWeight: 'bold'}}>To send administrative information to you.</text> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.<br/>
                            <br/>
                            7. <text style={{fontWeight: 'bold'}}>To protect our Services.</text> We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).<br/>
                            <br/>
                            8. <text style={{fontWeight: 'bold'}}>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</text><br/>
                            <br/>
                            9. <text style={{fontWeight: 'bold'}}>To respond to legal requests and prevent harm.</text> If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.<br/>
                            <br/>
                            10. <text style={{fontWeight: 'bold'}}>Fulfill and manage your orders.</text> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.<br/>
                            <br/>
                            11. <text style={{fontWeight: 'bold'}}>Administer prize draws and competitions.</text> We may use your information to administer prize draws and competitions when you elect to participate in our competitions.<br/>
                            <br/>
                            12. <text style={{fontWeight: 'bold'}}>To deliver and facilitate delivery of services to the user.</text> We may use your information to provide you with the requested service.<br/>
                            <br/>
                            13. <text style={{fontWeight: 'bold'}}>To respond to user inquiries/offer support to users.</text> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.<br/>
                            <br/>
                            14. <text style={{fontWeight: 'bold'}}>To send you marketing and promotional communications.</text> We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Services, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS?" below).<br/>
                            <br/>
                            15. <text style={{fontWeight: 'bold'}}>Deliver targeted advertising to you.</text> We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.              
                            </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='willyouinformation'>
                        <TextHeadline>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</TextHeadline>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>In Short:</text> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</TextSubtitle>
                        <TextSubtitle>We may process or share your data that we hold based on the following legal basis:</TextSubtitle>
                        <TextSubtitle>
                        1. <text style={{fontWeight: 'bold'}}>Consent:</text> We may process your data if you have given us specific consent to use your personal information for a specific purpose.<br/>
                        <br/>
                        2. <text style={{fontWeight: 'bold'}}>Legitimate Interests:</text> We may process your data when it is reasonably necessary to achieve our legitimate business interests.<br/>
                        <br/>
                        3. <text style={{fontWeight: 'bold'}}>Performance of a Contract:</text> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.<br/>
                        <br/>
                        4. <text style={{fontWeight: 'bold'}}>Legal Obligations:</text> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).<br/>
                        <br/>
                        5. <text style={{fontWeight: 'bold'}}>Vital Interests:</text> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.
                        </TextSubtitle>
                        <TextSubtitle>More specifically, we may need to process your data or share your personal information in the following situations:</TextSubtitle>
                        <TextSubtitle>
                        1. <text style={{fontWeight: 'bold'}}>Business Transfers.</text> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.<br/>
                        <br/>
                        2. <text style={{fontWeight: 'bold'}}>Google Maps Platform APIs.</text> We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Place API). To find out more about Google’s Privacy Policy, please refer to this <CustomLink href='https://policies.google.com/privacy' target="_blank" rel="noopener noreferrer">link</CustomLink>. We obtain and store on your device ('cache') your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.<br/>
                        <br/>
                        3. <text style={{fontWeight: 'bold'}}>Affiliates.</text> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.<br/>
                        <br/>
                        4. <text style={{fontWeight: 'bold'}}>Business Partners.</text> We may share your information with our business partners to offer you certain products, services or promotions.<br/>
                        <br/>
                        5. <text style={{fontWeight: 'bold'}}>Other Users.</text> When you share personal information (for example, by posting comments, contributions or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.<br/>
                        <br/>
                        6. <text style={{fontWeight: 'bold'}}>Offer Wall.</text> Our App may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our App and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our App. A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward. Please note that we do not control third-party websites and have no responsibility in relation to the content of such websites. The inclusion of a link towards a third-party website does not imply an endorsement by us of such website. Accordingly, we do not make any warranty regarding such third-party websites and we will not be liable for any loss or damage caused by the use of such websites. In addition, when you access any third-party website, please understand that your rights while accessing and using those websites will be governed by the privacy notice and terms of service relating to the use of those websites.        
                        </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='doweusecookies'>
                        <TextHeadline>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> We may use cookies and other tracking technologies to collect and store your information.
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howdowehandle'>
                        <TextHeadline>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
                        </TextSubtitle>
                        <TextSubtitle>Our Services offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform. If you login using Facebook, we may also request access to other permissions related to your account, such as your friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission.</TextSubtitle>
                        <TextSubtitle>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps. </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='whatisourstance'>
                        <TextHeadline>6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.
                        </TextSubtitle>
                        <TextSubtitle>The Services may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</TextSubtitle>   
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howlongdowekeep'>
                        <TextHeadline>7. HOW LONG DO WE KEEP YOUR INFORMATION?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                        </TextSubtitle>
                        <TextSubtitle>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</TextSubtitle>   
                        <TextSubtitle>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howdowekeep'>
                        <TextHeadline>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> We aim to protect your personal information through a system of organizational and technical security measures.
                        </TextSubtitle>
                        <TextSubtitle>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</TextSubtitle>    
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='whatareyourprivacy'>
                        <TextHeadline>9. WHAT ARE YOUR PRIVACY RIGHTS?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
                        </TextSubtitle>
                        <TextSubtitle>
                        In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.<br/> 
                        If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <br/> 
                        <CustomLink href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.' target="_blank" rel="noopener noreferrer">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</CustomLink><br/> 
                        <br/> 
                        If you are a resident in Switzerland, the contact details for the data protection authorities are available here:<br/> 
                        <CustomLink href='https://www.edoeb.admin.ch/edoeb/en/home.html.' target="_blank" rel="noopener noreferrer">https://www.edoeb.admin.ch/edoeb/en/home.html.</CustomLink><br/> 
                        <br/> 
                        If you have questions or comments about your privacy rights, you may email us at <CustomLink href="mailto:privacy@carboncollectiblenfts.com?body=My custom mail body">privacy@carboncollectiblenfts.com.</CustomLink>
                        </TextSubtitle>  
                        <TextSubtitle>
                            <text style={{fontWeight: 'bold'}}>Account Information</text><br/>
                            If you would at any time like to review or change the information in your account or terminate your account, you can:
                            </TextSubtitle> 
                        <TextSubtitle>
                        1. Log in to your account settings and update your user account.<br/>
                        2. Contact us using the contact information provided.<br/>
                        </TextSubtitle>  
                        <TextSubtitle>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.</TextSubtitle>  
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Cookies and similar technologies:</text> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit <CustomLink href='http://www.aboutads.info/choices/' target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</CustomLink>.</TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Opting out of email marketing:</text> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list — however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes. To otherwise opt-out, you may:</TextSubtitle>
                        <TextSubtitle>
                        1. Access your account settings and update your preferences.<br/>
                        2. Contact us using the contact information provided.
                        </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='controlsfor'>
                        <TextHeadline>10. CONTROLS FOR DO-NOT-TRACK FEATURES</TextHeadline>
                        <TextSubtitle>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='docalifornia'>
                        <TextHeadline>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</TextHeadline>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>In Short:</text> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</TextSubtitle>
                        <TextSubtitle>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.<br/>
                        If you are under 18 years of age, reside in California, and have a registered account with a Service, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all of our systems (e.g. backups, etc.).</TextSubtitle>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>CCPA Privacy Notice</text><br/>
                        The California Code of Regulations defines a "resident" as:<br/>
                        (1) every individual who is in the State of California for other than a temporary or transitory purpose and <br/>
                        (2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose<br/>
                        All other individuals are defined as "non-residents."
                        If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
                        </TextSubtitle>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>What categories of personal information do we collect?</text><br/>
                        We have collected the following categories of personal information in the past twelve (12) months:
                        </TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Category, Examples, Collected</text></TextSubtitle>
                        <TextSubtitle>A. Identifiers<br/>
                        Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>B. Personal information categories listed in the California Customer Records statute<br/>
                        Name, contact information, education, employment, employment history and financial information<br/>
                        YES</TextSubtitle>
                        <TextSubtitle>C. Protected classification characteristics under California or federal law<br/>
                        Gender and date of birth<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>D. Commercial information<br/>
                        Transaction information, purchase history, financial details and payment information<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>E. Biometric information<br/>
                        Fingerprints and voiceprints<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>F. Internet or other similar network activity<br/>
                        Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>G. Geolocation data<br/>
                        Device location<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>H. Audio, electronic, visual, thermal, olfactory, or similar information<br/>
                        Images and audio, video or call recordings created in connection with our business activities<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>I. Professional or employment-related information<br/>
                        Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>J. Education Information<br/>
                        Student records and directory information<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>K. Inferences drawn from other personal information<br/>
                        Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics<br/>
                        NO</TextSubtitle>
                        <TextSubtitle>We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:</TextSubtitle>
                        <TextSubtitle>
                        1. Receiving help through our customer support channels;<br/>
                        2. Participation in customer surveys or contests; and<br/>
                        3. Facilitation in the delivery of our Services and to respond to your inquiries.
                        </TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>How do we use and share your personal information?</text><br/>
                        More information about our data collection and sharing practices can be found in this privacy notice.<br/>
                        You may contact us by email at <CustomLink href="mailto:ccpa@carboncollectiblenfts.com?body=My custom mail body">ccpa@carboncollectiblenfts.com</CustomLink>, or by referring to the contact details at the bottom of this document.<br/>
                        If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Will your information be shared with anyone else?</text><br/>
                        We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</TextSubtitle>
                        <TextSubtitle>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.<br/>
                        Crowd Bootstrap has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. Crowd Bootstrap will not sell personal information in the future belonging to website visitors, users and other consumers.</TextSubtitle>
                        <TextSubtitle><text style={{fontWeight: 'bold'}}>Your rights with respect to your personal data</text><br/>
                        Right to request deletion of the data - Request to delete<br/>
                        You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.</TextSubtitle>
                        <TextSubtitle>Right to be informed - Request to know<br/>
                        Depending on the circumstances, you have a right to know:</TextSubtitle>
                        <TextSubtitle>
                        1. whether we collect and use your personal information;<br/>
                        2. the categories of personal information that we collect;<br/>
                        3. the purposes for which the collected personal information is used;<br/>
                        4. whether we sell your personal information to third parties;<br/>
                        5. the categories of personal information that we sold or disclosed for a business purpose;<br/>
                        6. the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and<br/>
                        7. the business or commercial purpose for collecting or selling personal information.
                        </TextSubtitle>
                        <TextSubtitle>
                        In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.<br/>
                        <br/>
                        Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights<br/>
                        We will not discriminate against you if you exercise your privacy rights.<br/>
                        <br/>
                        <text style={{fontWeight: 'bold'}}>Verification process</text><br/>
                        Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
                        We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
                        </TextSubtitle>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>Other privacy rights</text><br/>
                        1. you may object to the processing of your personal data<br/>
                        2. you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data<br/>
                        3. you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.<br/>
                        4. you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
                        </TextSubtitle>
                        <TextSubtitle>To exercise these rights, you can contact us by email at <CustomLink href="mailto:ccpa@carboncollectiblenfts.com?body=My custom mail body">ccpa@carboncollectiblenfts.com</CustomLink>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</TextSubtitle>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>Financial Incentives</text><br/>
                        "Financial incentive" means a program, benefit, or other offering, including payments to consumers as compensation, for the disclosure, deletion, or sale of personal information.<br/>
                        The law permits financial incentives or a price or service difference if it is reasonably related to the value of the consumer’s data. A business must be able to explain how the financial incentive or price or service difference is reasonably related to the value of the consumer’s data. The explanation must include:
                        </TextSubtitle>
                        <TextSubtitle>
                        1. a good-faith estimate of the value of the consumer’s data that forms the basis for offering the financial incentive or price or service difference; and<br/>
                        2. a description of the method the business used to calculate the value of the consumer’s data.
                        </TextSubtitle>
                        <TextSubtitle>We may decide to offer a financial incentive (e.g. price or service difference) in exchange for the retention or sale of a consumer’s personal information.</TextSubtitle>
                        <TextSubtitle>
                        If we decide to offer a financial incentive, we will notify you of such financial incentive and explain the price difference, as well as material terms of the financial incentive or price of service difference, including the categories of personal information that are implicated by the financial incentive or price or service difference.<br/>
                        If you choose to participate in the financial incentive you can withdraw from the financial incentive at any time by emailing us at ccpa@carboncollectiblenfts.com, or by referring to the contact details at the bottom of this document.  
                        </TextSubtitle>
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='dowemakeupdates'>
                        <TextHeadline>12. DO WE MAKE UPDATES TO THIS NOTICE?</TextHeadline>
                        <TextSubtitle>
                        <text style={{fontWeight: 'bold'}}>In Short:</text> Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        </TextSubtitle>
                        <TextSubtitle>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</TextSubtitle>    
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howcanyoucontact'>
                        <TextHeadline>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</TextHeadline>                      
                        <TextSubtitle>
                        If you have questions or comments about this notice, you may email us at <CustomLink href="mailto:privacy@carboncollectiblenfts.com?body=My custom mail body">privacy@carboncollectiblenfts.com</CustomLink> or by post to:<br/>
                        <br/>
                        Crowd Bootstrap C/O Privity Ventures, Inc.<br/>
                        123 W. Nye Lane, Suite 448<br/>
                        Carson City, NV 89706<br/>
                        United States
                        </TextSubtitle>    
                    </AreaWrapper>
                    <Divider variant="middle" sx={{marginBottom: '50px' }}/>
                    <AreaWrapper data-aos="fade" data-aos-once="true" id='howcanyoureview'>
                        <TextHeadline>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</TextHeadline>   
                        <TextSubtitle>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <CustomLink href='https://app.termly.io/notify/8c3cbf75-1f2d-4868-ab83-c243724dcb35' target="_blank" rel="noopener noreferrer">here</CustomLink>.</TextSubtitle>    
                    </AreaWrapper>
                </TextAreaWrapper>
            </TextAreaContainer>
        </>
    )
}

export default PrivacyPage
