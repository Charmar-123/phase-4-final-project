import { Typography } from '@mui/material'
import React from 'react'

const PatientPage = ({loggedInPatient}) => {

  const {id, name, doctors, appointments} = loggedInPatient
  return (
    <Typography>Welcome </Typography>
  )
}

export default PatientPage