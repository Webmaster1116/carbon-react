import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SubHeroSection from '../components/SubPages/SubHeroSection'
import SubNavbar from '../components/SubPages/SubNavBar'
import Footer from '../components/Footer';
import SubSidebar from '../components/SubPages/SubSideBar';
import { analysisCarbonData } from '../components/SubPages/SubHeroSection/data';
import AnalysisCarbonPage from '../components/AnalysisPage';

const AnalysisCarbon = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <SubSidebar isOpen={isOpen} toggle={toggle}/>
            <SubNavbar toggle={toggle}/>
            <SubHeroSection {...analysisCarbonData}/>
            <AnalysisCarbonPage/>
            <Footer/>
        </>
    )
}

export default AnalysisCarbon
