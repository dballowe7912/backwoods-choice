import React, { Component } from 'react'
import PhotoSlide from '../PhotoSlide/PhotoSlide'
import slide1 from '../assets/photos/slide1.jpg';
import slide2 from '../assets/photos/slide2.jpg';
import { TheatersOutlined } from '@material-ui/icons';

class SlidesContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            src: slide1
        }

        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
    }

    nextPhoto(){
        const {src} = this.state; 
        if (src === slide1) {
            this.setState({
                src: slide2
            })
      }
    }

    previousPhoto(){
        const {src} = this.state;
        if (src === slide2) {
            this.setState({
                src: slide1
            })
        }
    }
    
    render() {
        return (
            <div>
                <PhotoSlide 
                    src={this.state.src} 
                    nextPhoto={this.nextPhoto} 
                    previousPhoto={this.previousPhoto}
                />
            </div>
        )
    }
}

export default SlidesContainer
