import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 600px;
position: relative;
z-index: 1;

@media screen and (max-width: 768px){
    height: 500px;
}

@media screen and (max-width: 480px){
    height: 300px;
}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
height: 100%;
width: 100%;
overflow: hidden;
`;

export const VideoBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 100%;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;

@media screen and (max-width: 768px){
    margin-top: 0;
}
`;

export const HeroH1 = styled.h1`
color: #33682c;
font-size: 48px;
text-align: center;
line-height: 1.4;
text-shadow: 0 1px 3px rgba(0,0,0,0.4);
padding-bottom: 100px;

@media screen and (max-width: 768px){
    font-size: 36px;
    margin-top: 50px;
}

@media screen and (max-width: 480px){
    font-size: 24px;
    margin-top: 50px;
}
`;

export const HeroP = styled.p`
margin-top: 80px;
margin-bottom: auto;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}

@media screen and (max-width: 480px){
    font-size: 18px;
    max-width: 400px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const BannerTextH1 = styled.h1`
margin-bottom: 6px;
font-size: 28px;
line-height: 1.1;
font-weight: 600;
color: #33682c;

@media screen and (max-width: 768px){
    font-size: 22px;
    text-align: center;
}
@media screen and (max-width: 480px){
    font-size: 16px;
    text-align: center;
}
`;

export const BannerText = styled.p`
font-size: 18px;
line-height: 24px;
color: #33682c;
padding-bottom: 50px;

@media screen and (max-width: 768px){
    font-size: 18px;
    max-width: 300px;
    text-align: center;
}
`;
