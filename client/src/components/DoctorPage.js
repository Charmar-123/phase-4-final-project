import React, { useContext } from 'react'
import { UserContext } from './UserContext.js'
import { useNavigate } from 'react-router-dom'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box } from '@mui/material';

const DoctorPage = () => {

  const navigate = useNavigate();
  const { setLoggedInDoctor, loggedInDoctor } = useContext(UserContext);

  const { name, department } = loggedInDoctor


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
      <Box sx={{ marginLeft: 5 }}>
        <Typography>Welcome {name}</Typography>
        <Typography>{department}</Typography>
        <Button
          variant='contained'
          color="error"
          onClick={handleLogOut}
        >LOGOUT</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>History</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loggedInDoctor.patients && loggedInDoctor.patients.map(({ id, name, date_of_birth, history, email }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{date_of_birth}</TableCell>
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


