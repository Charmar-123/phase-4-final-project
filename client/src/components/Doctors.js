import React, {useContext} from 'react'
import DoctorCard from './DoctorCard'
import { Grid } from '@mui/material'
import { UserContext } from './UserContext.js'

const Doctors = () => {
    const { doctorsData } = useContext(UserContext);

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