import React, {useState} from 'react'
import HeroSection from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import ServicesSection from '../components/Services';
import TimerSection from '../components/Timer'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FaqSection from '../components/Faq';
import GallerySection from '../components/ImageGallery';
import TextSection from '../components/TextArea';
import PricingSection from '../components/Pricing';
import OurApproachSection from '../components/OurApproach';
import ForestSection from '../components/ForestSection';
import StorySection from '../components/Story';
import AnalysisCarbonSection from '../components/AnalysisCarbon';
import ScrollToTop from '../components/ScrollToTop'

const Homepage = ({setTimerFinished}) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <TimerSection setTimerFinished={setTimerFinished}/>
            <InfoSection {...homeObjOne}/>
            <TextSection/>
            <ServicesSection/>
            <StorySection/>
            <PricingSection/>
            <GallerySection/>
            <OurApproachSection/>
            <AnalysisCarbonSection/>
            <ForestSection/>
            <FaqSection/>
            <Footer/>
        </>
    )
}

export default Homepage
