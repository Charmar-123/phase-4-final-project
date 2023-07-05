
import { Stack, Box, Container, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <Container>
            <Stack
                container
                justifyContent="center"
                alignItems="center"
                style={{ height: '100vh' }} // Set the desired height of the container
            >
 
                    <Typography variant='h3'>
                        Welcome To Grey Sloan Memorial Hospital
                    </Typography>


                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                        <img src="https://i0.wp.com/backyard-destinations.com/wp-content/uploads/2017/04/2-seattle-grace-mercy-west-hospital-greys-anatomy.jpg?resize=748%2C561" alt="grey_sloan_hospital" style={{ border: '2px solid black' }} />
                    </Box>


            </Stack>

        </Container>

    )
}

export default Home