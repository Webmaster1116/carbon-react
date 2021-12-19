import styled from 'styled-components'
import img from '../../images/svg/rights.svg'

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
padding-top: 100px;
padding-bottom: 100px;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px){
height: 3400px;
margin-top: 0;
margin-bottom: 0;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 50px;
padding: 0 50px;
padding-bottom: 100px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;

export const ServicesCard = styled.div`
background: #619657;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 20px;
max-height: 600px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px){
max-width: 250px;
}
`;

export const ServicesIcon = styled.img`
height: 100%;
width: 100%;
margin-bottom: 30px;
border-radius: 20px;
box-shadow: 0 5px 5px rgba(0,0,0,0.3);

@media screen and (max-width: 768px){
height: 80px;
width: 160px;
}
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 100px;

@media screen and (max-width: 768px){
    font-size: 1.5rem;
    text-align: center;
}

@media screen and (max-width: 480px){
    font-size: 0.8rem;
    text-align: center;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1.5rem;
letter-spacing: 1px;
margin-bottom: 10px;
color: #fff;
padding-bottom: 10px;
`;

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`;

export const CoolDivider = styled.hr`
width: 100%;
max-width: 300px;
margin-bottom: 80px;
`;