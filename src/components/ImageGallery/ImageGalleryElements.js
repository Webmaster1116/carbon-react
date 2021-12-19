import styled from 'styled-components'
import img from '../../images/svg/services.svg'

export const GalleryContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;
margin-bottom: 50px;
height: 1200px;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;

@media screen and (max-width: 768px){
    margin-top: 120px;
    margin-bottom: 180px;
    height: 600px;
}
`;

export const GalleryH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 100px;

@media screen and (max-width: 480px){
    font-size: 2rem;
    color: #33682c;
}
`;

export const SliderImage = styled.img`
max-width: 500px;
max-height: 500px;
`;

export const ButtonHolder = styled.div`
align-items: center;
justify-content: space-between;
display: flex;
margin-top: 20px;
width: 150px;
`;