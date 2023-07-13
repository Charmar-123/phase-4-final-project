import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';



import { useNavigate } from 'react-router-dom'

const PatientPage = () => {

  
  const [viewAppFrom, setViewAppForm] = useState(false);


  const navigate = useNavigate();


  const { loggedInPatient, setLoggedInPatient, setSelectedAppointment, patientAppointments } = useContext(UserContext);
  const {name} = loggedInPatient
  // setAppointments(loggedInPatient.appointments)
  console.log(patientAppointments);

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setLoggedInPatient([])
          navigate('/')
        }
      })
  }


  const handleViewAppointment = (id) => {
    fetch(`/appointments/${id}`)
    .then(res => res.json())
    .then(appointment => {
      console.log(appointment)
      setSelectedAppointment(appointment)
      navigate(`/appointments/${appointment.id}`)
    })
  }



  return (

    <>


      <Typography>Welcome {name}</Typography>
      <Button 
      variant='contained' 
      color="error" 
      onClick={handleLogOut}
      >LOGOUT</Button>
      <Button 
      variant='contained' 
      color="error" 
      onClick={() => setViewAppForm(true)}
      >Book Appointment</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Reason</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>View Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientAppointments.map(({ id, reason_for_visit, time, date }) => (
              <TableRow key={id}>
                <TableCell>{reason_for_visit}</TableCell>
                <TableCell>{time}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <Button variant="outlined"
                    onClick={() => handleViewAppointment(id)}
                  >View Appointment</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default PatientPage