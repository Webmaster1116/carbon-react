/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { useState, useRef, useEffect } from 'react'
import { 
    TimerContainer,
    Clock,
    Number,
    Time,
    TimerWrapper,
    Empty
 } from './ClockElements'

const ClockTimer = ({setTimerFinished}) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('December 11, 2021 18:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            if (distance < 0){
                //stop
                setTimerFinished(true);
                clearInterval(interval.current);
            }
            else
            {
                //update timer
                setTimerFinished(false)
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        clearInterval(interval.current);
    });

    return (
        <TimerContainer>
            <TimerWrapper>
                <Clock>
                    <Number>{timerDays}</Number>
                    <Time>Days</Time>
                </Clock>
                <Empty>:</Empty>
                <Clock>
                    <Number>{timerHours}</Number>
                    <Time>Hours</Time>
                </Clock>
                <Empty>:</Empty>
                <Clock>
                    <Number>{timerMinutes}</Number>
                    <Time>Minutes</Time>
                </Clock>
                <Empty>:</Empty>
                <Clock>
                    <Number>{timerSeconds}</Number>
                    <Time>Seconds</Time>
                </Clock>
            </TimerWrapper>
        </TimerContainer>
    )
}

export default ClockTimer
