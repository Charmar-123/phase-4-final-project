import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Typography, TextField, Button, } from '@mui/material';

import UserContext from './UserContext';


const DoctorPortal = () => {



    useEffect(() => {
        fetch('/authorized/doctor')
            .then(res => {
                if (res.ok) {
                    res.json().then(doctor => {
                        navigate(`/doctors/${doctor.id}`)
                    })
                }
                else {
                    res.json().then(json => {
                        console.log(json.errors);
                        setErrors(json.errors)
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

    const [errors, setErrors] = useState([]);

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

        fetch('/doctor/login', {
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
                        console.log(json.errors);
                        setErrors(json.errors)
                    })
                }
            })
    }



    return (
        <Container>
            <Typography>
                Doctor Login
            </Typography>
            <form onSubmit={handleSubmit}>

                <TextField
                    name='email'
                    value={email}
                    onChange={handleChange}
                >

                </TextField>
                <TextField
                    name='password'
                    value={password}
                    onChange={handleChange}
                >

                </TextField>
                <Button
                    type='submit'
                >
                    Login
                </Button>
            </form>

        </Container>
    )
}

export default DoctorPortal