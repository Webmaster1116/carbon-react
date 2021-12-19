import React, {useState} from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SubHeroSection from '../components/SubPages/SubHeroSection'
import SubNavbar from '../components/SubPages/SubNavBar'
import Footer from '../components/Footer';
import SubSidebar from '../components/SubPages/SubSideBar';
import { ProjectData } from '../components/SubPages/SubHeroSection/data';
import ProjectPrinciplesSection from '../components/ProjectPrinciples';

const ProjectPrinciples = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <SubSidebar isOpen={isOpen} toggle={toggle}/>
            <SubNavbar toggle={toggle}/>
            <SubHeroSection {...ProjectData}/>
            <ProjectPrinciplesSection/>
            <Footer/>
        </>
    )
}

export default ProjectPrinciples
