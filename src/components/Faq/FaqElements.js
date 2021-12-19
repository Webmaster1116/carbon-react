import styled from 'styled-components'
import img from '../../images/svg/faq.svg'

export const FaqContainer = styled.div`
height: 900px;
display: block;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px){
    height: 1200px;
    background-size: cover / 50%;
}
`;

export const MainFaqWrapper = styled.div`
justify-content: center;
align-items: center;
max-width: 1100px;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
padding: 20px;
`;

export const FaqWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
padding: 20px;
`;

export const FaqH1 = styled.h1`
font-size: 2.5rem;
color: #619657;
text-align: center;
padding-bottom: 80px;

@media screen and (max-width: 768px){
    font-size: 1.7rem;
}

@media screen and (max-width: 480px){
    font-size: 1.2rem;
}
`;