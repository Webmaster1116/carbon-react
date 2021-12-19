import React from 'react'
import { Divider } from '@mui/material'
import { FaTwitter, FaDiscord} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../images/logowhite1.png'
import { 
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterWrap,
    FooterLinksWrapper,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}><img src={Logo} alt="Logo" height={100} width={200} /></SocialLogo>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLink to="/termsofuse">Terms of Use</FooterLink>
                                <FooterLink to="/privacy">Privacy</FooterLink>  
                                <FooterLink to="/cookiepolicy">Cookie Policy</FooterLink>  
                            </FooterLinkItems>
                            <WebsiteRights>Carbon Collectable NFTs © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        </FooterLinksWrapper>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/CarbonOffsetNFT" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>                        
                            <SocialIconLink href="//www.discord.gg/hCC7UTVYMD" target="_blank" aria-label="Discord"><FaDiscord/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
