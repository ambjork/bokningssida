import React from 'react'
import PropTypes from 'prop-types'
import Datepicker from './Datepicker'

function Header(id) {

    return (
        <header id={id} className='bokningssida-header'>
            <span>Logga</span>
            <Datepicker />
            <span>Total Price</span>
            <span>Varukorg</span>
            <span>Boka-knapp</span>
        </header>
    )
}

Header.propTypes = {
    id: PropTypes.string
}

export default Header