import React, { useContext } from 'react'
import UserContext from './UserContext';
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Button } from '@mui/material';


const AppointmentsPage = () => {

  const params = useParams();
  const navigate = useNavigate();
  const { selectedAppointment, deleteAppointment } = useContext(UserContext);
  const {id, date, time, reason_for_visit, doctor } = selectedAppointment

  const handleDeleteAppointment = () => {
    fetch(`/appointments/${params.id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if(res.ok) {
        deleteAppointment(id)
        navigate(-1)
      }
    })
  }
  return (
    <>
      <Typography>{date}</Typography>
      <Typography>{time}</Typography>
      <Typography>{reason_for_visit}</Typography>
      <Typography>{doctor.name}</Typography>
      <Typography>{doctor.department}</Typography>
      <Button
        variant='contained'
        color="error"
        onClick={handleDeleteAppointment}
      >Cancel Appointment</Button>
    </>

  )
}

export default AppointmentsPage