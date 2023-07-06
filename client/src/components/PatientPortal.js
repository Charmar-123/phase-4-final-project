import React, { useContext } from 'react'
import { useState } from 'react'

import { Container, Typography, TextField, Button,} from '@mui/material';

import { useNavigate } from 'react-router-dom'

import UserContext from './UserContext';


const PatientPortal = () => {

    const {setLoggedInPatient} = useContext(UserContext);

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setLoginData({...loginData, [name]: value})
    }

    const {email, password} = loginData;
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password

        }

        fetch('/patient/login', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            console.log(user);
            if(res.ok){
                res.json().then(user =>{
                    setLoggedInPatient(user)
                    navigate('/patient')
                })
            }
            else {
                res.json().then(json => {
                    console.log(json.errors);
                    setErrors(json.errors)})
            }
        })
    }
  return (
    <Container>
        <Typography>
            Patient Login
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

export default PatientPortal