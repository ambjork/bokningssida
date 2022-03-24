import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'
import FlatpickrComponent from './FlatpickrComponent'
import TimepickerContainer from './TimepickerContainer'
import BokaKnapp from './BokaKnapp'

import './Header.scss'
import TotalPrice from './TotalPrice';

function Header(id) {

    const [sumOfItems, setSum] = useState('0')
 
    return (
        <header id={id} className='bokningssida-header'>
            <Logo />
            <span className='header-items flatpickr-item'>Välj datum att hyra:
            <FlatpickrComponent 
            id='bokningssida-flatpickr-datum'
            />
            </span>
            <TimepickerContainer />
            <TotalPrice sumOfItems={sumOfItems}/>
            <BokaKnapp />
            
        </header>
    )
}

Header.propTypes = {
    id: PropTypes.string
}

export default Header