import styled from 'styled-components'

export const TextAreaContainer = styled.div`
color: #fff;
background: #fff;
margin-top: 100px;

@media screen and (max-width: 768px){
    margin-top: 220px;
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
align-items: center;
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
align-items: center;

@media screen and (max-width: 768px){
    max-width: 300px;
}
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-left: 0;
padding-right: 0px;

@media screen and (max-width: 768px){
    padding-bottom: 0;
}

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
`;

export const Img2 = styled.img`
width: 100%;
margin: 0 0 10px 50px;
padding-left: 0;
padding-right: 0;

@media screen and (max-width: 768px){
    padding-bottom: 50px;
    margin: 0 0 10px 0;
}
`;

export const PriceRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: 'col2 col1';

@media screen and (max-width: 768px){
    grid-template-areas: 'col1 col1' 'col2 col2';
}
`;

export const PriceButtonWrapper = styled.div`
width: 400px;
justify-content: center;
align-items: center;
padding-top: 50px;
margin-right: auto;
margin-left: auto;
`;

export const StoryAreaWrapper = styled.div`
display: grid;
z-index: 1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
align-items: center;
margin-top: 50px;
`;

export const StoryButtonWrapper = styled.div`

@media screen and (max-width: 768px){
    padding-bottom: 50px;
}
`;

export const StoryRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: 'col1 col2';

@media screen and (max-width: 768px){
    grid-template-areas: 'col1 col1' 'col2 col2';
}
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

export const StorySubtitle = styled.p`
max-width: 1000px;
font-size: 24px;
margin-bottom: 35px;
color: #808080;
line-height: 1.5;
`;

export const StoryImgWrap = styled.div`
max-width: 600px;
height: 100%;

@media screen and (max-width: 768px){
    max-width: 400px;
}

@media screen and (max-width: 480px){
    max-width: 200px;
}
`;

export const BigStoryImgWrap = styled.div`
max-width: 1200px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;

@media screen and (max-width: 768px){
    max-width: 800px;
    margin-top: 0;
}

@media screen and (max-width: 480px){
    max-width: 300px;
    margin-top: 0;
}
`;