import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Typography, TextField, Button,} from '@mui/material';


const DoctorPortal = ({setLoggedInDoctor}) => {

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

        fetch('/doctor/login', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            console.log(user);
            if(res.ok){
                res.json().then(user =>{
                    console.log(user);
                    setLoggedInDoctor(user)
                    navigate('/doctor')
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
            Login
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