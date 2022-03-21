import React from 'react'
import DatepickerContainer from './DatepickerContainer'
import { Container, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import './MainContainer.scss'

function MainContainer () {

    function addItemClickHandler(event) {
        // TODO: ska lägga till items i varukorgen
        const commodity = event.currentTarget
        return { 'Name': commodity }
    }

    function getDetailsClickHandler() {
        // TODO: ska expandera card med information
    }
    
    return (
        <Container id='bokningssida-main-container'> 
            {/* <img src='pexels-dids-1644616.jpg' width='500' height='600'/> */}
            {/* <DatepickerContainer /> */}

            <section className='cards'>
            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardMedia 
                        component='img'
                        height='140'
                        image='resources/pexels-dids-1644616.jpg'
                        alt='Paket 1 bild'>
                </CardMedia>
                <CardContent>
                    <Typography 
                        gutterBottom variant='h5' 
                        component='div'>
                            Paket
                    </Typography>
                    <Typography 
                        variant='body2' 
                        color='text.secondary'>
                            Mikrofoner, stativ, förstärkare
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button size='small'>Lägg till</Button>
                    <Button size='small'>Läs mer</Button>
                </CardActions>
            </Card>

            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardMedia 
                        component='img'
                        height='140'
                        image='resources/pexels-hendrik-b-744318.jpg'
                        alt='Paket 2 bild'>
                </CardMedia>
                <CardContent>
                    <Typography 
                        gutterBottom variant='h5' 
                        component='div'>
                            Paket 2
                    </Typography>
                    <Typography 
                        variant='body2' 
                        color='text.secondary'>
                            Mikrofoner, stativ, förstärkare
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button size='small' onClick={() => addItemClickHandler()}>Lägg till</Button>
                    <Button size='small' onClick={() => getDetailsClickHandler()}>Läs mer</Button>
                </CardActions>
            </Card>

            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardMedia 
                        component='img'
                        height='140'
                        image='resources/pexels-sebastian-ervi-1763075.jpg'
                        alt='Paket 3 bild'>
                </CardMedia>
                <CardContent>
                    <Typography 
                        gutterBottom variant='h5' 
                        component='div'>
                            Paket 3
                    </Typography>
                    <Typography 
                        variant='body2' 
                        color='text.secondary'>
                            Mikrofoner, stativ, förstärkare
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button size='small'>Lägg till</Button>
                    <Button size='small'>Läs mer</Button>
                </CardActions>
            </Card>
            </section>
        </Container>
    )
}

export default MainContainer