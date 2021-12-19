/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SubHeroSection from '../components/SubPages/SubHeroSection'
import Footer from '../components/Footer';
import SubSidebar from '../components/SubPages/SubSideBar';
import { MintingData } from '../components/SubPages/SubHeroSection/data';
import MintingSection from '../components/MintingPage'
import SubNavBar from '../components/SubPages/SubNavBar'

const MintPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <SubSidebar isOpen={isOpen} toggle={toggle}/>
            <SubNavBar toggle={toggle} />
            <SubHeroSection {...MintingData}/>
            <MintingSection />
            <Footer/>
        </>
    )
}

export default MintPage
