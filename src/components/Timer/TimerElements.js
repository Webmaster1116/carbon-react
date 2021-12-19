import styled from 'styled-components'

export const TimerContainer = styled.div`
background: linear-gradient(to right, #33682c, #619657);
position: relative;
padding: 30px;
width: 100%;
`;

export const TimerWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 150px;
`;

export const HeadLine = styled.h1`
margin-bottom: 24px;
font-size: 28px;
line-height: 1.1;
font-weight: 600;
color: #fff;

@media screen and (max-width: 768px){
    font-size: 16px;
}
@media screen and (max-width: 480px){
    font-size: 14px;
    text-align: center;
}
`;

export const Subtitle = styled.p`
font-size: 18px;
line-height: 24px;
color: #fff;

@media screen and (max-width: 768px){
    font-size: 14px;
    max-width: 300px;
    text-align: center;
}
`;

export const TimerRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2'` `'col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`;

export const TimerColumn1 = styled.div`
padding: 0 15px;
grid-area: col1;

@media screen and (max-width: 768px){
    margin-bottom: 15px;
}
`;

export const TimerColumn2 = styled.div`
padding: 0 15px;
grid-area: col2;

@media screen and (max-width: 768px){
    margin-bottom: 15px;
}
`;