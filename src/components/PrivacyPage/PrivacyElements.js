import styled from 'styled-components'

export const TextAreaContainer = styled.div`
color: #fff;
background: #fff;
margin-bottom: 150px;
margin-top: 100px;
`;

export const TextAreaWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
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
    font-size: 20px;
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
