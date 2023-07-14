import React, { useContext, useState } from 'react'
import UserContext from './UserContext';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TextField } from '@mui/material';

import { useNavigate } from 'react-router-dom'

import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'


import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



const PatientPage = () => {
  const [viewAppFrom, setViewAppForm] = useState(false);
  const navigate = useNavigate();
  const { doctorsData, loggedInPatient, setLoggedInPatient, setSelectedAppointment, patientAppointments } = useContext(UserContext);
  const { name, id } = loggedInPatient
console.log(loggedInPatient);

  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState(dayjs());
  const [appointmentDoctor, setAppointmentDoctor] = useState('');
  const [appointmentRFV, setAppointmentRFV] = useState('');




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

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    console.log(
      {
        date: appointmentDate,
        time: appointmentTime,
        reason_for_visit: appointmentRFV,
        doctor_id: appointmentDoctor,
        patient_id: id
      }

    );
  }



  return (

    <>
      <Typography>HIII</Typography>

      <form onSubmit={handleSubmitAppointment}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            format="DD-MM-YYYY"
            value={appointmentDate}
            onChange={(newValue) => {
              console.log(dayjs(newValue).format('YYYY-MM-DD'));
              setAppointmentDate(dayjs(newValue).format('YYYY-MM-DD'))
            }}
          />
          <TimePicker
            label="Select Appointment Time"
            views={['hours']}
            minTime={dayjs().set('hour', 8)}
            maxTime={dayjs().set('hour', 17)}
            value={appointmentTime}
            onChange={(newValue) => {
              console.log(dayjs(newValue).format('h A'));
              setAppointmentTime(dayjs(newValue).format('h A'))
            }}
          />
        </LocalizationProvider>

        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel>Doctor</InputLabel>
            <Select
              value={appointmentDoctor}
              label="Doctor"
              onChange={(e) => {
                console.log(e.target);
                setAppointmentDoctor(e.target.value)
              }}
            >
              {doctorsData.map(({ id, name }) => <MenuItem key={id} value={id}>{name}</MenuItem>)}

            </Select>
          </FormControl>
        </Box>

    

        <TextField onChange={(e) => setAppointmentRFV(e.target.value)} label="Reason for visit" variant="outlined" />
        <Button
          variant='contained'
          color="error"
          type='submit'
        >SUBMIT</Button>
      </form>












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
              <TableCell>Time</TableCell>
              <TableCell>Date</TableCell>
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