import React, { Component } from 'react'
import PhotoSlide from '../PhotoSlide/PhotoSlide'
import slide1 from '../assets/photos/slide1.jpg';
import slide2 from '../assets/photos/slide2.jpg';

import './SlidesContainer.css'

class SlidesContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            src: slide1,
            title: 'Steaks'
        }

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }

    nextPhoto(){
        const {src} = this.state; 
        if (src === slide1) {
            this.setState({
                src: slide2,
                title: 'Seafood'
            })
      }
    }

    previousPhoto(){
        const {src} = this.state;
        if (src === slide2) {
            this.setState({
                src: slide1,
                title: 'Steaks'
            })
        }
    }
    
    render() {
        return (
            <div className='slides-container'>
                <PhotoSlide 
                    src={this.state.src} 
                    title={this.state.title}
                    nextPhoto={this.nextPhoto} 
                    previousPhoto={this.previousPhoto}
                />
            </div>
        )
    }
}

export default SlidesContainer
