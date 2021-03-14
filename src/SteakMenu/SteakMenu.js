import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SteakTable from '../SteakTable/SteakTable';
import './SteakMenu.css';

const SteakMenu = (props) => {
    return (
        <div className='main-container'>
            <Header/>
            <Navbar/>
            <div className='steak-menu-container'>
                <h3>Gourmet Steaks</h3>
                <hr/>
                <div className='menu-content'>
                    <SteakTable steaks={props.steaks}/>
                </div>
            </div>
        </div>
    )
}

export default SteakMenu;