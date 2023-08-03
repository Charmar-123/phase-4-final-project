import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Typography, TextField, Button, } from '@mui/material';

import { UserContext } from './UserContext.js'


const DoctorPortal = () => {



    useEffect(() => {
        fetch('/authorized/doctor')
            .then(res => {
                if (res.ok) {
                    res.json().then(doctor => {
                        setLoggedInDoctor(doctor)
                        navigate(`/doctors/${doctor.id}`)
                    })
                }
                else {
                    res.json().then(json => {
                        console.log(json.errors);
                   
                    })
                }
            })

    }, [])

    const { setLoggedInDoctor } = useContext(UserContext);

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });



    const handleChange = (e) => {

        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
    }

    const { email, password } = loginData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password

        }

        fetch('/doctors/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(doctor => {
                        setLoggedInDoctor(doctor)
                        navigate(`/doctors/${doctor.id}`)
                    })
                }
                else {
                    res.json().then(json => {
                        alert(json.errors)
                    })
                }
            })
    }



    return (
        <Container sx={{marginLeft: 5, marginTop: 5, border: 2, width: 520, paddingTop: 3}}>
            <Typography variant='h4' sx={{marginBottom: 5}}>
                Doctor Login
            </Typography>
            <form onSubmit={handleSubmit}>

                <TextField
                sx={{marginRight: 1}}
                    label='Email Address'
                    name='email'
                    value={email}
                    onChange={handleChange}
                >

                </TextField>
                <TextField
                    label='Password'
                    name='password'
                    type="password"
                    value={password}
                    onChange={handleChange}
                >

                </TextField>
                <Button
                variant='contained'
                sx={{marginTop: 2, marginBottom: 3}}
                    type='submit'
                >
                    Login
                </Button>
            </form>

        </Container>
    )
}

export default DoctorPortal