import React from 'react'
import DoctorCard from './DoctorCard'
import { Grid } from '@mui/material'

const Doctors = ({ doctorsData }) => {


    const doctors = doctorsData.map(({ id, name, department, image_url, description }) => {
        return (
 
                <DoctorCard
                    key={id}
                    name={name}
                    department={department}
                    image_url={image_url}
                    description={description}
                />
        )
    })
    return (
        <Grid container spacing={2}
        justifyContent="center"
        alignItems="center">
            {doctors}
        </Grid>
    )
}

export default Doctors;