import React, { useContext, useState } from 'react';

import { Container, Typography, TextField, Button, Box, } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { UserContext } from './UserContext.js'

const SignUpPatient = () => {
    const navigate = useNavigate();
    const { setLoggedInPatient } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        signUpName: '',
        signUpEmail: '',
        signUpDateOfBirth: '',
        signUpPassword: ''
    })

    const { signUpName, signUpDateOfBirth, signUpEmail, signUpPassword } = formData

    const handleCreatePatient = (e) => {
        e.preventDefault()
        const patient = {
            name: signUpName,
            date_of_birth: signUpDateOfBirth,
            email: `${signUpEmail}@ptn.sgh.com`,
            password: signUpPassword
        }

        fetch(`/patients`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patient)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(patient => {
                        setLoggedInPatient(patient)
                        navigate(`/patients/login`)
                    })
                } else {
                    res.json().then(json => {
                        console.log(json.errors);
                        setErrors(json.errors)
                    })
                }
            })


    }
    const handleChangeSignUp = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <Container sx={{ marginLeft: 5, marginTop: 5, border: 2, width: 520, paddingTop: 3 }}>
            <Box flexDirection='column' width={250}>
                <Typography variant='h4' sx={{ marginBottom: 5 }}>
                    Sign Up
                </Typography>
                <form onSubmit={handleCreatePatient}>

                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            label='Full Name'
                            name='signUpName'
                            value={signUpName}
                            onChange={handleChangeSignUp}
                        >

                        </TextField>
                        {errors.name && errors.name.map((err, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant='h9'>{err}</Typography>
                                </Box>
                            )

                        })}
                    </Box>


                    <Box sx={{ marginBottom: 2 }}>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center', width: 400,

                        }}>
                            <TextField

                                label='Email Address'
                                name='signUpEmail'
                                value={signUpEmail}
                                onChange={handleChangeSignUp}
                            >

                            </TextField> <Typography>@ptn.sgh.com</Typography>
                        </Box>

                        {errors.email && errors.email.map((err, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant='h9'>{err}</Typography>
                                </Box>

                            )

                        })}
                    </Box>



                    <Box sx={{ marginBottom: 2 }}>
                        <TextField
                            label='Birthday(YYYY-MM-DD)'
                            name='signUpDateOfBirth'
                            value={signUpDateOfBirth}
                            onChange={handleChangeSignUp}
                        >

                        </TextField>
                        {errors.date_of_birth && errors.date_of_birth.map((err, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant='h9'>{err}</Typography>
                                </Box>
                            )

                        })}

                    </Box>

                    <Box sx={{marginBottom: 2}}>

                        <TextField
                            label='Password'
                            name='signUpPassword'
                            type="password"
                            value={signUpPassword}
                            onChange={handleChangeSignUp}
                        >

                        </TextField>
                        {errors.password && errors.password.map((err, index) => {
                            return (
                                <Box key={index}>
                                    <Typography variant='h9'>{err}</Typography>
                                </Box>
                            )

                        })}
                    </Box>


                    <Button
                    variant='contained'
                    sx={{marginTop: 2, marginBottom: 3}}
                        type='submit'
                    >
                        Sign Up
                    </Button>
                </form>




            </Box>
        </Container>
    )
}

export default SignUpPatient