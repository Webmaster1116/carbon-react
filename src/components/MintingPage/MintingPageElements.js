import styled from "styled-components";
import img from '../../images/svg/background5.svg'

export const MintingContainer = styled.div`
background: #fff;
width: 100%;
height: 100%;
overflow: hidden;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px){
    margin-top: 0;
}
`;

export const MintingWrapper = styled.div`

`;

export const MintTextWrapper = styled.div`
text-align: center;
`;

export const MintPriceWrapper = styled.div`
margin-top: 80px;
align-items: center;
justify-content: center;
text-align: center;
`;

export const MintButtonWrapper = styled.div`
margin-top: 100px;
align-items: center;
justify-content: center;
width: 100%;
text-align: center;
`;

export const MintH1 = styled.h1`
text-align: center;
font-size: 36px;
padding-bottom: 10px;
color: #33682c;

@media screen and (max-width: 768px){
font-size: 28px;
}
`;

export const MintDesc = styled.p`
text-align: center;
padding-bottom: 5px;
color: #808080;
`;

export const MintDesc2 = styled.p`
text-align: center;
padding-bottom: 20px;
color: #808080;
`;

export const FeedbackText = styled.p`
margin-bottom: 20px;
font-size: 18px;
text-align: center;
color: #808080;

@media screen and (max-width: 768px){
font-size: 14px;
}
`;

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`;

export const MintingRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
justify-content: center;
grid-template-areas: 'col1 col2';

@media screen and (max-width: 768px){
    grid-template-areas: 'col1 col1' 'col2 col2';
}
`;

export const Imgwrap = styled.div`
max-width: 555px;
height: 100%;
padding-left: 50px;

@media screen and (max-width: 768px){
    padding-left: 0;
}
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
border-radius: 100px;
box-shadow: 0 0 30px;

&:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
`;

export const MainMintingWrapper = styled.div`
display: grid;
z-index: 1;
height: 700px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 768px){
    height: 1500px;
}
`;

export const DisclaimerWrapper = styled.div`
bottom: 0;
background-color: #619657; 
justify-content: center;
align-items: center;
width: 100%;
display: flex;
`;

export const DisclaimerText = styled.p`
font-size: 14px;
text-align: center;
padding-top: 10px;
padding-bottom: 20px;
margin-left: 100px;
margin-right: 100px;
color: #fff;

@media screen and (max-width: 768px){
margin-left: 50px;
margin-right: 50px;  
font-size: 12px;
}

@media screen and (max-width: 480px){
margin-left: 25px;
margin-right: 25px;  
font-size: 10px;  
}
`;