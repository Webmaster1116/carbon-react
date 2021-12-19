import React from 'react'
import ClockTimer from './ClockTimer';
import { 
    TimerContainer,
    TimerWrapper,
    HeadLine,
    Subtitle,
    TimerRow,
    TimerColumn1,
    TimerColumn2
} from './TimerElements';

const TimerSection = ({setTimerFinished}) => {
    return (
        <TimerContainer data-aos="fade-down" data-aos-once="true">
            <TimerRow>
                <TimerColumn1>
                    <TimerWrapper>
                        <HeadLine>READY TO MINT YOUR CARBON COLLECTIBLE NFT?</HeadLine>
                        <Subtitle>The date is approaching fast and we’re making preparations. Don’t miss out!</Subtitle>
                    </TimerWrapper>
                </TimerColumn1>
                <TimerColumn2>
                    <ClockTimer setTimerFinished={setTimerFinished} />
                </TimerColumn2>
            </TimerRow>         
        </TimerContainer>
    )
}

export default TimerSection
