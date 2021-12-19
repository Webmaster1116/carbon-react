import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const CustomLink = styled.a`
color: #33682c;
`;

export const CustomRouterLink = styled(LinkR)`
color: #33682c;
`;

export const CustomRouterLinkScroll = styled(LinkS)`
color: #33682c;
text-decoration: none;

&:hover{
    color: #619657;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
`;

export const CustomSub = styled.sub`
vertical-align: sub;
font-size: x-small;
`;

export const CustomWhiteLink = styled.a`
color: #fff;
`;