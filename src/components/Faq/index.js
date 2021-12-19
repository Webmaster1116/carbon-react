import React from 'react'
import ControlledAccordions from './Accordion'
import { 
    FaqContainer,
    FaqH1,
    FaqWrapper,
    MainFaqWrapper
} from './FaqElements'

const FaqSection = () => {
    return (
        <FaqContainer data-aos="fade-up" data-aos-once="true" id='faq'>
            <MainFaqWrapper>
                <FaqH1>FREQUENTLY ASKED QUESTIONS</FaqH1>
                <FaqWrapper>
                    <ControlledAccordions/>
                </FaqWrapper>
            </MainFaqWrapper>
        </FaqContainer>
    )
}

export default FaqSection
