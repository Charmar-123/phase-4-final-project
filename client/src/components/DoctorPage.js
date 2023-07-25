import React, { useContext } from 'react'
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const DoctorPage = () => {

  const navigate = useNavigate();
  const { setLoggedInDoctor, loggedInDoctor } = useContext(UserContext);

  const { name, department } = loggedInDoctor
  let patients = [];
  if (Array.isArray(loggedInDoctor.patients)) {
    patients = loggedInDoctor.patients
  }


  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setLoggedInDoctor([])
          navigate('/')
        }
      })
  }


  return (

    <>
      <Typography>Welcome {name}</Typography>
      <Typography>{department}</Typography>
      <Button
        variant='contained'
        color="error"
        onClick={handleLogOut}
      >LOGOUT</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>History</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(({ id, name, age, history, email }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{age}</TableCell>
                <TableCell>{history}</TableCell>
                <TableCell>{email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>

  )
}

export default DoctorPage


