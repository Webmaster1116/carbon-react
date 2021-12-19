import styled from 'styled-components'
import img from '../../images/svg/services.svg'

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
height: 1400px;

@media screen and (max-width: 768px){
height: 1500px;
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

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
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
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 40px rgba(255,255,255,0.6);
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
height: 160px;
width: 160px;
}
`;

export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 100px;

@media screen and (max-width: 768px){
    color: #619657;
}

@media screen and (max-width: 480px){
    font-size: 2rem;
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