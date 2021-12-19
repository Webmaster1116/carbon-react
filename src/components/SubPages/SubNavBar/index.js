import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../../images/logo1.png';
import {
    NavbarContainer,
    Nav,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinksRouter
} from './SubNavElements'


const SubNavbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if (window.scrollY >= 100){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                <NavLogo to='/'><img src={Logo} alt="Logo" height={100} width={200} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinksRouter to='/'
                            >Homepage</NavLinksRouter>
                        </NavItem>  
                        <NavItem>
                            <NavLinksRouter to='/yourrights'
                            >Your Rights</NavLinksRouter>
                        </NavItem> 
                        <NavItem>
                            <NavLinksRouter to='/purchaseconditions'
                            >Purchase Conditions</NavLinksRouter>
                        </NavItem>
                        <NavItem>
                            <NavLinksRouter to='/carbonanalysis'
                            >Carbon Analysis</NavLinksRouter>
                        </NavItem> 
                        <NavItem>
                            <NavLinksRouter to='/ourhypothesis'
                            >Our Hypyothesis</NavLinksRouter>
                        </NavItem> 
                        <NavItem>
                            <NavLinksRouter to='/ourforest'
                            >Our Forest</NavLinksRouter>
                        </NavItem> 
                        <NavItem>
                            <NavLinksRouter to='/projectprinciples'
                            >Project Principals</NavLinksRouter>
                        </NavItem>               
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default SubNavbar
