import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material';

import { Box, TextField } from '@mui/material'

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { UserContext } from './UserContext.js'
import { DateTimePicker } from '@mui/x-date-pickers';
const AppointmentsPage = () => {


  const [appointmentData, setAppointmentData] = useState([])

  const params = useParams();
  const navigate = useNavigate();
  const { deleteAppointment, updateAppointment, loggedInPatient } = useContext(UserContext);
  

  const selectedAppointment = loggedInPatient.appointments.find(app => app.id === parseInt(params.id));

  const { id, date, time, reason_for_visit, doctor_name, doctor_department } = selectedAppointment;

  const disabledDates = appointmentData.find(app => app.doctor_name === doctor_name)
  // console.log(disabledDates.appointments);


  const [appointmentDate, setAppointmentDate] = useState(date);
  const [appointmentTime, setAppointmentTime] = useState(time);
  const [appointmentRFV, setAppointmentRFV] = useState(reason_for_visit);


  const [errors, setErrors] = useState('')
  const [viewAppFrom, setViewAppForm] = useState(false);



  useEffect(() => {
    fetch('/doctor_app')
    .then(res => res.json())
    .then(data => {
      setAppointmentData(data)
      console.log(data)})
  }, [])

  const handleDeleteAppointment = () => {
    fetch(`/appointments/${params.id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          deleteAppointment(params.id)
          navigate(`/patients/${loggedInPatient.id}`)
        }
      })
  }

  const handleSubmitEditAppointment = (e) => {
    e.preventDefault();
    // console.log("submit");
    fetch(`/appointments/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: appointmentDate,
        time: appointmentTime,
        reason_for_visit: appointmentRFV,


        // Check why your sending back doctor
        // doctor: doctor
      })
    }).then(res => {
      if (res.ok) {
        res.json().then((appoinment) => {
          console.log(appoinment);
          updateAppointment(appoinment)
          setViewAppForm(false)
        })
      } else {
        res.json().then(json => {
          console.log(json.errors);
          setErrors(json.errors)
        })
      }
    })
  }

  return (
    <>

      <Box sx={{ marginTop: 5, marginLeft: 5 }} display={viewAppFrom ? '' : 'none'}>
        <Typography sx={{ marginBottom: 2 }} variant='h3'>Book Your Appointment</Typography>

        <form
          onSubmit={handleSubmitEditAppointment}
        >

          <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DateTimePicker
            disablePast
            label='Select A Date and Time'
              format="DD-MM-YYYY    H"
              views={["day",'hours']}
              ampm={false}
              value={dayjs(`${appointmentDate} ${appointmentTime}`)}
              onChange={(newValue) => {
                setAppointmentDate(dayjs(newValue).format('YYYY-MM-DD'));
                setAppointmentTime(dayjs(newValue).format('H'));
              }}
            />
            {/* <DatePicker
              sx={{ marginRight: 2, marginBottom: 2 }}
              disablePast
              label='Select A Date'
              format="DD-MM-YYYY"
              value={dayjs(appointmentDate)}
              onChange={(newValue) => {
                console.log(dayjs(newValue).format('YYYY-MM-DD'));
                setAppointmentDate(dayjs(newValue).format('YYYY-MM-DD'))
              }}
            />
            <TimePicker
              sx={{ marginRight: 2, marginBottom: 2 }}
              label="Select Appointment Time"
              views={['hours']}
              ampm={false}
              minTime={dayjs().set('hour', 8)}
              maxTime={dayjs().set('hour', 17)}
              value={dayjs(appointmentTime, 'H')}
              onChange={(newValue) => {
                console.log(dayjs(newValue).format('H'));
                setAppointmentTime(dayjs(newValue).format('H'))
              }}
            /> */}
          </LocalizationProvider>


          <TextField
            value={appointmentRFV}
            onChange={(e) => setAppointmentRFV(e.target.value)} label="Reason for visit" variant="outlined"
          />
          <Button
            sx={{ marginLeft: 3 }}
            variant='contained'
            color="error"
            type='submit'
          >SUBMIT</Button>
        </form>
      </Box>

      <Box
      sx={{ marginLeft: 6 }}
      >

        <Typography sx={{ marginTop: 5 }} variant='h4'>Appointment Info</Typography>
        <Typography>Date: {date}</Typography>
        <Typography>Time: {time}</Typography>
        <Typography>Reason For Visit: {reason_for_visit}</Typography>
        <Typography>Doctor: {doctor_name}</Typography>
        <Typography>Department: {doctor_department}</Typography>
        <Button
          variant='contained'
          color="error"
          onClick={handleDeleteAppointment}
        >Cancel Appointment</Button>
        <Button
          sx={{ marginLeft: 3 }}
          variant='contained'
          onClick={() => setViewAppForm(true)}
        >Edit Appointment</Button>
      </Box>


    </>

  )

}

export default AppointmentsPage