import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    NavLinksRouter
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <NavLinksRouter to='/yourrights'>Your Rights</NavLinksRouter>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>Pricing</SidebarLink>
                    <SidebarLink to="showcase" onClick={toggle}>Showcase</SidebarLink>
                    <SidebarLink to="ourapproach" onClick={toggle}>Our Approach</SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>FAQ</SidebarLink>
                    <NavLinksRouter to='/more'>More</NavLinksRouter>
                </SidebarMenu>           
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
