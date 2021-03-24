import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='icon-container'>
                    <Link>
                        <InstagramIcon/>    
                    </Link>
                    <Link>
                        <FacebookIcon/>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Footer;