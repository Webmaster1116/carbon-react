import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    NavLinksRouter
} from './SubSideBarElements'

const SubSidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <NavLinksRouter to="/">Homepage</NavLinksRouter>
                    <NavLinksRouter to="/yourrights">Your Rights</NavLinksRouter>
                    <NavLinksRouter to="/carbonanalysis">Carbon Analysis</NavLinksRouter>
                    <NavLinksRouter to="/ourhypothesis">Our Hypyothesis</NavLinksRouter>
                    <NavLinksRouter to="/ourforest">Our Forest</NavLinksRouter>
                    <NavLinksRouter to="/projectprinciples">Project Principals</NavLinksRouter>
                </SidebarMenu>           
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SubSidebar
