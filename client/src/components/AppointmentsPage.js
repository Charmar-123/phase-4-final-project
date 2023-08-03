import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material';

import { Box, TextField } from '@mui/material'

import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserContext } from './UserContext.js'
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const AppointmentsPage = () => {



  const params = useParams();
  const navigate = useNavigate();
  const { deleteAppointment, updateAppointment, loggedInPatient } = useContext(UserContext);


  const selectedAppointment = loggedInPatient.appointments.find(app => app.id === parseInt(params.id));

  const { date, time, reason_for_visit, doctor_name, doctor_department } = selectedAppointment;



  const [appointmentDate, setAppointmentDate] = useState(date);
  const [appointmentTime, setAppointmentTime] = useState(time);
  const [appointmentRFV, setAppointmentRFV] = useState(reason_for_visit);


  const [errors, setErrors] = useState('')
  const [viewAppFrom, setViewAppForm] = useState(false);



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

    fetch(`/appointments/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: appointmentDate,
        time: appointmentTime,
        reason_for_visit: appointmentRFV,



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
        <Typography sx={{ marginBottom: 2 }} variant='h3'>Edit Your Appointment</Typography>

        <form
          onSubmit={handleSubmitEditAppointment}
        >

          <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DateTimePicker

              views={["day", 'hours']}
              ampm={false}
              label='Select A Date and Time'
              format="DD-MM-YYYY    H"
              minDate={dayjs()}
              maxDate={dayjs().add(30, "day")}
              minTime={dayjs(`${appointmentDate} ${appointmentTime}`).isSame(dayjs(), "day") && dayjs().isAfter(dayjs().set("hour", 8))
                ? dayjs()
                : dayjs(`${appointmentDate} ${appointmentTime}`).set("hour", 8)}
              maxTime={dayjs().set("hour", 17)}

              value={dayjs(`${appointmentDate} ${appointmentTime}`)}
              onChange={(newValue) => {
                setAppointmentDate(dayjs(newValue).format('YYYY-MM-DD'));
                setAppointmentTime(dayjs(newValue).format('H'));
              }}
            />
          </LocalizationProvider>
          {errors.date && errors.date.map((err, index) => {
            return (
              <Box key={index}>
                <Typography variant='h9'>{err}</Typography>
              </Box>
            )

          })}


          <Box sx={{ marginTop: 5 }}>
            <TextField
              value={appointmentRFV}
              onChange={(e) => setAppointmentRFV(e.target.value)} label="Reason for visit" variant="outlined"
            />
            {errors.reason_for_visit && errors.reason_for_visit.map((err, index) => {
              return (
                <Box key={index}>
                  <Typography variant='h9'>{err}</Typography>
                </Box>
              )

            })}
          </Box>

          <Button
            sx={{ marginTop: 3 }}
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
        <Box sx={{marginTop:2}}>
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

      </Box>


    </>

  )

}

export default AppointmentsPage