import React from 'react'
import DoctorCard from './DoctorCard'
import { Grid } from '@mui/material'

const Doctors = ({ doctorsData }) => {


    const doctors = doctorsData.map(({ id, name, department, image_url, description }) => {
        return (
            <Grid item xs={12} sm={4} key={id}>
                <DoctorCard
                    key={id}
                    name={name}
                    department={department}
                    image_url={image_url}
                    description={description}
                />
            </Grid>
        )
    })
    return (
        <Grid container spacing={2}>
            {doctors}
        </Grid>
    )
}

export default Doctors;