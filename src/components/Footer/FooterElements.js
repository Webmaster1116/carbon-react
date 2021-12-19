import styled from 'styled-components'
import { Link } from 'react-router-dom';
import img from '../../images/svg/footerBackground.svg'

export const FooterContainer = styled.footer`
background-color: #003d01;
width: 100%;
height: 100%;
overflow: hidden;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

`;

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
flex-direction: column;
width: 600px;

@media screen and (max-width: 768px){
    align-items: center;
    justify-content: center;
    width: 400px;
    padding-left: 0px;
}

@media screen and (max-width: 480px){
    align-items: center;
    justify-content: center;
    width: 300px;
    padding-left: 0px;
    text-align: center;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
    text-align: center;
}
`;

export const FooterLinkTitle = styled.h1`
font-size: 14px;
`;

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
padding: 10px;

@media screen and (max-width: 768px){
    font-size: 12px;
}

@media screen and (max-width: 480px){
    font-size: 10px;
    text-align: center;
}

&:hover {
    color: #619657;
    transition: 0.3s ease-out;
}
`;

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
margin-right: 20px;
font-weight: bold;

@media screen and (max-width: 768px){
    margin-right: 0;
}
`;

export const WebsiteRights = styled.small`
color: #fff;
padding-left: 10px;
font-size: 14px;

@media screen and (max-width: 768px){
    margin-bottom: 30px;
}

@media screen and (max-width: 480px){
    font-size: 12px;
}
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 32px;
`;
