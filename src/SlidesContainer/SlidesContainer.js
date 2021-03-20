import React, { useState, useEffect, Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import './SlidesContainer.css'

const SlidesContainer = ({images=[], interval=3000}) => {

    const [thumbnails, setThumbnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(()=>{
        setThumbnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });
    }, [images, currentSlide]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }
    
    
        return (
 
        <div className='photoSlide'>
            <section className="slideshow">
                <div style={currentSlideStyle} className="slide-thumbnail"></div>
                <div className="slideshow-controller">
                    <span className='left-button' onClick={previous}>
                        <ArrowBackIosIcon/>
                    </span>
                    <span className='right-button' onClick={next}>
                        <ArrowForwardIosIcon/>
                    </span>
                </div>
            </section>
        </div>
        )
    
}

export default SlidesContainer;

