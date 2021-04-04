import React, { Component } from 'react';
import imageOne from '../assets/photos/image-1.jpg';
import imageTwo from '../assets/photos/image-2.jpg';
import imageThree from '../assets/photos/image-3.jpg';
import imageFour from '../assets/photos/image-4.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

import './SlidesContainer.css'

class SlidesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: imageTwo,
      currentImageIndex: 2,
      imageArr: [imageOne, imageTwo, imageThree, imageFour]
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('works');
  }

  previous(){
    let index = this.state.currentImageIndex;
    if (index > 0) {
      index --;
    } else {
      index = this.state.imageArr.length - 1;
    }
    this.setState((st)=>({
      currentImageIndex: index,
      currentImage: this.state.imageArr[index]
    }))
  }

  next() {
    let index = this.state.currentImageIndex;
    if (index < this.state.imageArr.length - 1) {
      index ++;
    } else {
      index = 0;
    }
    this.setState((st)=>({
      currentImageIndex: index,
      currentImage: this.state.imageArr[index]
    }))
  }

  render(){
    let { currentImage, currentImageIndex } = this.state;
    return (
        <div className="photo-slide">
          <h1>Your Source for East Texas Meat</h1>
            <div className='slideshow'>
              <img className='current-slide' src={currentImage} alt={currentImageIndex}/>
              <div className='photo-tag'>
                <h5><span className='photo-by'>photos by</span> Michael Kemplin</h5>
              </div>
            </div>
            <div className='slideshow-controller'>
              <div className='slideshow-buttons'>
                <span className='left-button' onClick={this.previous}>
                  <ArrowBackIosIcon />
                </span>
                <span className='right-button' onClick={this.next}>
                  <ArrowForwardIosIcon />
                </span>
              <Link 
                className='shop-btn' 
                exact to='/meats'
              >
                Order Now
              </Link>
              </div>
            </div>
        </div>
    );
  }
}

export default SlidesContainer;