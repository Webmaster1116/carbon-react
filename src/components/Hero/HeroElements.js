import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
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

export const VideoBg = styled.video`
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
margin-top: 200px;
`;

export const HeroH1 = styled.h1`
color: #fff;
font-size: 30px;
text-align: center;
text-shadow: 0 1px 3px rgba(0,0,0,0.2);
line-height: 1.4;

@media screen and (max-width: 768px){
    font-size: 26px;
}

@media screen and (max-width: 480px){
    font-size: 20px;
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
