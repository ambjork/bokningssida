import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

function Footer () {

    return (
        <footer className='footer'>
            <span>Bokningssidan AB | </span> 
            <span> epost@epost.se | </span>
            <span> 070-1234567 | </span>
            <span> Ovanskogsliden 16 123 45 GÖTEBORG</span> 
        </footer>
    )
}

Footer.propTypes = {
    id: PropTypes.string
}

export default Footer