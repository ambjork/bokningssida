import React from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {

    return (
        <Button className='header-items logo'><FontAwesomeIcon icon={faSquare} size='3x' /></Button>
    )
}

export default Logo