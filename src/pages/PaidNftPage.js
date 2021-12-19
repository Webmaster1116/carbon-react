/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer';
import SubSidebar from '../components/SubPages/SubSideBar';
import SubNavBar from '../components/SubPages/SubNavBar'
import PaidNftSection from '../components/PaidNftMinting'
import PaidNftHeroSection from '../components/SubPages/PaidNftHero';

const PaidMintPage = ({timerFinished}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <SubSidebar isOpen={isOpen} toggle={toggle}/>
            <SubNavBar toggle={toggle} />
            <PaidNftHeroSection/>
            <PaidNftSection timerFinished={timerFinished} />
            <Footer/>
        </>
    )
}

export default PaidMintPage
