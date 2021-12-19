import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
margin-top: 50px;
`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(7, 60px);
}
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover {
color: #33682c;
transition: 0.2s ease-in-out;
}
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const NavLinksRouter = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #33682c;
cursor: pointer;

&:hover {
color: #619657;
transition: 0.2s ease-in-out;
}
`;