import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ShoppingCart from './ShoppingCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Flatpickr from 'react-flatpickr'
import { Button, Popover, Modal, Box, Typography} from '@mui/material'
import './Header.scss'

function Header(id) {

    const [totalPrice, setTotalPrice] = useState('0')
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
 
    return (
        <header id={id} className='bokningssida-header'>
            <Button className='header-items logo'><FontAwesomeIcon icon={faSquare} size='3x' /></Button>
            <span className='header-items flatpickr-item'>Välj datum att hyra:
            <Flatpickr 
            id='bokningssida-flatpickr-datum' 
            options={{ 
                altInput: 'false',
                altInputClass: 'calendar-input-field', 
                mode: 'range', 
                minDate: 'today',
                dateFormat: 'M:d', 
                maxDate: new Date().fp_incr(30),
                defaultDate: 'today',
                weekNumbers: true
            }} /></span>
            {/* <span className='header-items white-space'></span> */}
            <span className='header-items total-price'>{totalPrice} SEK</span>

            <Button className='header-items shopping-basket'><FontAwesomeIcon icon={faShoppingBasket} size='3x' onClick={() => setIsPopoverOpen(!isPopoverOpen)}/></Button>
                <Popover
                      id={'shoppingcart-popover'}
                      open={isPopoverOpen}
                      anchorEl={'anchorEl'}
                      onClose={() => setIsPopoverOpen(false)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    ><Typography sx={{ p: 2 }}>
                        <ShoppingCart />
                    </Typography>
                </Popover>

            <Button className='header-items boka-button' variant='contained'>Boka</Button>
           {/*  <Modal
  open={true}
  onClose={() => console.log('closed')}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
><Box sx={''}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box></Modal> */}
        </header>
    )
}

Header.propTypes = {
    id: PropTypes.string
}

export default Header