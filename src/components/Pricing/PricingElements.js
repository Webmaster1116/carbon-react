import styled from 'styled-components'

export const TextAreaContainer = styled.div`
color: #fff;
background: #fff;
margin-top: 200px;

@media screen and (max-width: 768px){
    margin-top: 100px;
}
`;

export const TextAreaWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`;

export const TextTopline = styled.h1`
color: #33682c;
font-size: 48px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 80px;

@media screen and (max-width: 768px){
    font-size: 34px;
}
`;

export const TextHeadline = styled.h3`
margin-bottom: 24px;
font-size: 24px;
line-height: 1.1;
font-weight: 600;
color: #619657;

@media screen and (max-width: 480px){
    font-size: 20px;
}
`;

export const TextSubtitle = styled.p`
max-width: 1000px;
font-size: 18px;
line-height: 24px;
margin-bottom: 35px;
color: #808080;
`;

export const AreaWrapper = styled.div`

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

export const Imgwrap = styled.div`
max-width: 400px;
height: 100%;

@media screen and (max-width: 768px){
    max-width: 200px;
}

@media screen and (max-width: 480px){
    max-width: 100px;
}
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 100px;
padding-right: 0;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
`;

export const PriceRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2'` `'col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const PriceButtonWrapper = styled.div`
width: 400px;
justify-content: center;
align-items: center;
padding-top: 50px;
margin-right: auto;
margin-left: auto;

@media screen and (max-width: 768px){
    width: 350px;
}

@media screen and (max-width: 480px){
    width: 200px;
}
`;