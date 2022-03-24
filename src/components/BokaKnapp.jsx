import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const BokaKnapp = () => {

    const [isOpen, setIsOpen] = useState(false)

    // const emailRegexVal = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'

    return (
        <>
        <Button className='header-items boka-button' variant='contained' onClick={() => setIsOpen(!isOpen)}>Boka</Button>
            <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DialogTitle>Nästan klar!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            För att fullfölja din bokning, vänligen ange din information i fältet nedanför.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="personnr"
            label="Personnummer (10 siffror)"
            type="text"
            fullWidth
            inputProps={{ maxLength: 10, minLength: 10 }}
            variant="standard"
          />
          <TextField
            margin="dense"
            id="email"
            label="Emailadress"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="telefonnr"
            label="Telefonnummer"
            type="text"
            fullWidth
            variant="standard"
          />
          <p>En himlans massa text som ska gå att scrolla.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(!isOpen)}>Tillbaka</Button>
          <Button onClick={() => setIsOpen(!isOpen)}>Skicka</Button>
        </DialogActions>
      </Dialog>
      </>
    )
}

export default BokaKnapp