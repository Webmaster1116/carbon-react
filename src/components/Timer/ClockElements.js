import styled from "styled-components";

export const TimerContainer = styled.div`
padding-left: 100px;

@media screen and (max-width: 768px){
    padding-left: 0;
}
`;

export const TimerWrapper = styled.div`
display: flex;
flex: content;
align-items: flex-end;
justify-content: center;
width: 400px;
height: 100%;
display: grid;
grid-template-columns: repeat(7,1fr);
grid-gap: 1px;
text-align: center;

@media screen and (max-width: 480px){
    width: 100%;
}
`;

export const Clock = styled.div`
text-align: center;
`;

export const Number = styled.p`
color: #fff;
font-size: 3em;

@media screen and (max-width: 768px){
    font-size: 2em;
}

@media screen and (max-width: 480px){
    font-size: 1em;
}
`;

export const Time = styled.p`
color: #fff;
font-weight: 300;
font-size: 16px;

@media screen and (max-width: 768px){
    font-size: 14px;
}

@media screen and (max-width: 480px){
    font-size: 8px;
}
`;

export const Empty = styled.span`
color: #fff;
font-size: 3em;

@media screen and (max-width: 768px){
    font-size: 2em;
}

@media screen and (max-width: 480px){
    font-size: 1em;
}
`;