import styled from "styled-components";
import img from '../../images/svg/paid.svg'
import { Button } from "@mui/material";

export const MintingContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px){
    margin-top: 0;
    padding-top: 50px;
    padding-bottom: 50px;
}
`;

export const MainMintingWrapper = styled.div`
z-index: 1;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
height: 800px;
width: 100%;
max-width: 1400px;
margin-right: auto;
margin-left: auto;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    height: 1500px;
    grid-template-columns: 1fr;
}
`;

export const MintSection = styled.div`
max-width: 100%;
height: 800px;
margin-right: 100px;
margin-left: 100px;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 100px;
`;

export const PaidMintingText = styled.h1`
color: #fff;
font-size: 56px;
margin-top: 20px;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const PaidMintingDesc = styled.p`
font-size: 18px;
text-align: center;
color: #fff;
margin-top: 10px;
margin-bottom: 150px;

@media screen and (max-width: 768px){
    margin-bottom: 150px;
    font-size: 14px;
}

@media screen and (max-width: 480px){
    margin-bottom: 100px;
    font-size: 10px;
}
`;

export const Img = styled.img`
width: 100%;
box-shadow: 0 0 30px;
border-radius: 100px;

@media screen and (max-width: 768px){
    width: 300px;
    margin-right: auto;
    margin-left: auto;
}

@media screen and (max-width: 480px){
    width: 150px;
    margin-right: auto;
    margin-left: auto;
}

&:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
`;

export const MiddleMintWrapper = styled.div`

`;

export const FeedbackText = styled.p`
margin-bottom: 30px;
font-size: 18px;
text-align: center;
color: #fff;

@media screen and (max-width: 768px){
font-size: 14px;
}

@media screen and (max-width: 480px){
font-size: 8px;
}
`;

export const CountWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 60px;
`;

export const CustomRoundButton = styled(Button)`
background-color: #fff;
border-radius: 100%;

&:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
`;

export const CountText = styled.p`
margin-left: 30px;
margin-right: 30px;
font-size: 56px;
color: #fff;
`;

export const AmountText = styled.p`
color: #fff;
font-size: 20px;
`;

