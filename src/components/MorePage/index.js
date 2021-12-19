import React from 'react'
import { 
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    NavLinksRouter
} from './MoreElements'

const MorePage = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                <NavLinksRouter to='/'>Homepage</NavLinksRouter>
                <NavLinksRouter to='/yourrights'>Your Rights</NavLinksRouter>
                <NavLinksRouter to='/carbonanalysis'>Carbon Analysis</NavLinksRouter>
                <NavLinksRouter to='/ourhypothesis'>Our Hypyothesis</NavLinksRouter>
                <NavLinksRouter to='/ourforest'>Our Forest</NavLinksRouter>
                <NavLinksRouter to='/projectprinciples'>Project Principals</NavLinksRouter>
                </SidebarMenu>           
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default MorePage
