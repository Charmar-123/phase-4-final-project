import React, { useContext } from 'react'
import UserContext from './UserContext';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';



import { useNavigate } from 'react-router-dom'

const PatientPage = () => {
  const navigate = useNavigate();


  const { loggedInPatient, setLoggedInPatient } = useContext(UserContext);
  const { id, name, email } = loggedInPatient

  let appointments = [];
  if (Array.isArray(loggedInPatient.appointments)) {
    appointments = loggedInPatient.appointments
  }

  const columns = [
    { field: 'date', headerName: 'Date', width: 130 },
    {
      field: 'time',
      headerName: 'Time',
      type: 'number',
      width: 130,
    },
    { field: 'reason_for_visit', headerName: 'Reason for visit', width: 300 },

  ];

  // const rows = appointments.map(({id, reason_for_visit, time, date, doctor}) => {
  //   return (
  //     {id: id, reason_for_visit: reason_for_visit ,time: time, date: date}
  //   )
  // })

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
  return (

    <>
      <Typography>Welcome {name}</Typography>
      <Button style={{ alignSelf: 'flex-end' }}>LOGOUT</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>View Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map(({ id, reason_for_visit, time, date }) => (
              <TableRow key={id}>
                <TableCell>{reason_for_visit}</TableCell>
                <TableCell>{time}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <Button variant="outlined"

                  >Button</Button>
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