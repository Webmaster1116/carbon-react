/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React from 'react'

import { 
    GalleryContainer,
    GalleryH1,
    SliderImage,
    ButtonHolder
} from './ImageGalleryElements'
import {
    CarouselWrapper,
    next,
    prev
} from 'react-pretty-carousel';
import { Button } from '@mui/material';

//Images
import img1 from './images/photo1.webp'

const GallerySection = () => {
    const [images] = React.useState([
        img1,
        img1,
        img1,
        img1,
        img1,
        img1,
    ]);

    return (
        <GalleryContainer id="showcase">
            <GalleryH1 data-aos="fade-down" data-aos-once="true">SHOWCASE</GalleryH1>
            <CarouselWrapper data-aos="fade" data-aos-once="true" items={3} mode="gallery" showControls={false}>
            {images.map((image, index) => (
                <SliderImage style={{maxWidth: '100%'}} src={image} alt={`pic-${index}`} key={image} />
            ))}
            </CarouselWrapper>  
            <ButtonHolder data-aos="fade-up" data-aos-once="true">
                <Button color="secondary" variant="contained" onClick={() => prev()}>Prev</Button>
                <Button color="secondary" variant="contained" onClick={() => next()}>Next</Button>
            </ButtonHolder>
        </GalleryContainer>
    )
}

export default GallerySection
