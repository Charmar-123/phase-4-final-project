// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);
  const [loggedInPatient, setLoggedInPatient] = useState(null);

  const addAppointment = (newAppointment) => {

    const newAppointments = [...loggedInPatient.appointments, newAppointment]

    setLoggedInPatient({ ...loggedInPatient, appointments: newAppointments })
  }
  const deleteAppointment = (id) => {
    console.log(id);
    const filteredAppointments = loggedInPatient.appointments.filter(appointment => appointment.id !== parseInt(id))
    console.log(filteredAppointments);

    setLoggedInPatient({ ...loggedInPatient, appointments: filteredAppointments })
  }

  const updateAppointment = (updatedAppointment) => {


    const updateAppointments = loggedInPatient.appointments.map((appointment => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment
      } else {
        return appointment
      }
    }))

    setLoggedInPatient({
      ...loggedInPatient, appointments: updateAppointments
    })
  }

  const contextValue = {
    setDoctorsData,
    doctorsData,
    loggedInDoctor,
    setLoggedInDoctor,
    loggedInPatient,
    setLoggedInPatient,
    addAppointment,
    deleteAppointment,
    updateAppointment

  };

  



  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };