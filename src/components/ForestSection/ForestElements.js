import styled from 'styled-components'

export const TextAreaContainer = styled.div`
color: #fff;
background: #fff;
margin-bottom: 150px;

@media screen and (max-width: 768px){
    margin-top: 50px;
}
`;

export const TextAreaWrapper = styled.div`
display: grid;
z-index: 1;
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
    font-size: 36px;
}

@media screen and (max-width: 480px){
    font-size: 30px;
}
`;

export const TextHeadline = styled.h3`
margin-bottom: 24px;
font-size: 24px;
line-height: 1.1;
font-weight: 600;
color: #619657;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const TextSubtitle = styled.p`
max-width: 1100px;
font-size: 18px;
line-height: 24px;
margin-bottom: 35px;
color: #808080;
`;

export const AreaWrapper = styled.div`

`;

export const CarbonRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2'` `'col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const CarbonColumn1 = styled.div`
padding: 0 15px;
grid-area: col1;

@media screen and (max-width: 768px){
    margin-bottom: 15px;
}
`;

export const CarbonColumn2 = styled.div`
padding: 0 15px;
grid-area: col2;

@media screen and (max-width: 768px){
    margin-bottom: 15px;
}
`;

export const CarbonAreaWrapper = styled.div`
display: grid;
z-index: 1;
width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
margin-top: 100px;

@media screen and (max-width: 768px){
    width: 450px;
}

@media screen and (max-width: 480px){
    width: 320px;
}
`;

export const Imgwrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 500px;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 768px){
    width: 350px;
    margin: 0;
}

@media screen and (max-width: 480px){
    width: 220px;
    margin: 0;
}

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}`;

export const CarbonSubtitle = styled.p`
max-width: 1100px;
font-size: 20px;
margin-bottom: 35px;
color: #808080;
line-height: 1.5;
`;

export const SmallHeadline = styled.h3`
margin-bottom: 40px;
font-size: 28px;
line-height: 1.1;
font-weight: 600;
color: #619657;

@media screen and (max-width: 480px){
    font-size: 22px;
}
`;
