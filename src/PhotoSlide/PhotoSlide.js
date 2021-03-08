import React, { Component } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './PhotoSlide.css';

class PhotoSlide extends Component {
    constructor(props){
        super(props);

        this.handleForwardClick = this.handleForwardClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleForwardClick(){
        this.props.nextPhoto();
    }

    handleBackClick(){
        this.props.previousPhoto();
    }

    render() {
        console.log(this.props)
        return (
            <div className='photoSlide'>
                <img src={this.props.src} />
                
                <button className='left-button'>
                    <ArrowBackIosIcon
                        onClick={this.handleBackClick}
                    />
                </button>
                <button className='right-button'>
                    <ArrowForwardIosIcon 
                        onClick={this.handleForwardClick}
                    />
                </button>
            </div>
        )
    }
}

export default PhotoSlide
