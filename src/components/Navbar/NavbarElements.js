import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
transition: 0.5s all ease;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 0;
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #33682c;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: #33682c;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-weight: bold;
font-size: 14px;

&:hover{
    color: #619657;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
}

&.active{
    border-bottom: 4px solid #33682c;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`;

export const NavLinksItem = styled(LinkR)`
color: #33682c;
display: flex;
align-items: center;
text-decoration: none;
padding-right: 20px;
padding-left: 20px;
padding-top: 10px;
padding-bottom: 10px;
height: 35px;
font-weight: bold;

&:hover{
    transition: all 0.2s ease-in-out;
    background: rgba(61, 96, 57, 0.1);
    color: #619657;
    cursor: pointer;
}`;

export const NavLinksSpecial = styled(LinkR)`
color: #33682c;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-weight: bold;
font-size: 14px;

&:hover{
    color: #619657;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
}`;
