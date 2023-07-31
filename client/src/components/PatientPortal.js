import React, { useContext, useState, useEffect } from 'react';

import { Container, Typography, TextField, Button, Box, } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext.js'


const PatientPortal = () => {


    const navigate = useNavigate();
    const { setLoggedInPatient } = useContext(UserContext);



    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState([]);


    useEffect(() => {
        fetch('/authorized/patient')
            .then(res => {
                if (res.ok) {
                    res.json().then(patient => {
                        setLoggedInPatient(patient)
                        navigate(`/patients/${patient.id}`)
                    })
                }
            })

    }, [])




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

        fetch('/patients/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(patient => {
                        console.log(patient);
                        setLoggedInPatient(patient)
                        navigate(`/patients/${patient.id}`)
                    })
                }
                else {
                    res.json().then(json => {
                      
                        // console.log(json.errors);
                        // setErrors(json.errors)
                        alert(json.errors)
                    })
                }
            })
    }


    return (
        <Container  sx={{marginLeft: 5, marginTop: 5, border: 2, width: 520, paddingTop: 3}}>
            <Typography variant='h4' sx={{marginBottom: 5}}>
                Patient Login
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
                sx={{marginTop: 2, marginBottom: 3, marginRight: 1}}
                    type='submit'
                >
                    Login
                </Button>
                <Button
                variant='contained'
                sx={{marginTop: 2, marginBottom: 3}}
                onClick={() => navigate('/patients/signUp')}>
                    SignUp
                </Button>
            </form>

            

        </Container>
    )
}

export default PatientPortal