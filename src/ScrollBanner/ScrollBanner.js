import React from 'react';
import './ScrollBanner.css'

function ScrollBanner() {
    return (
        <div className='demo-1'>
            {/* <p>Flash Sale -- For a limited time buy one case of beef and get the second one for a penny!</p> */}
            <marquee className='marquee' behavior="scroll" direction="left" scrollAmount="15">-- FLASH SALE -- For a limited time buy one case get the second for a penny! -- FLASH SALE --</marquee>

        </div>
    )
}

export default ScrollBanner;
