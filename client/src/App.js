
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import DoctorPortal from './components/DoctorPortal';
import PatientPortal from './components/PatientPortal';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';


import UserContext from './components/UserContext';
import AppointmentsPage from './components/AppointmentsPage';


const App = () => {

  const [doctorsData, setDoctorsData] = useState([]);

  const [loggedInDoctor, setLoggedInDoctor] = useState([]);
  const [loggedInPatient, setLoggedInPatient] = useState([]);



  useEffect(() => {
    fetch('/doctors')
      .then(res => res.json())
      .then(data => setDoctorsData(data))
  }, [])
  // console.log({...loggedInPatient, appointments: [...loggedInPatient.appointments, newAppointment] });

  const addAppointment = (newAppointment) => {

    const newAppointments = [...loggedInPatient.appointments, newAppointment]

    setLoggedInPatient({ ...loggedInPatient, appointments: newAppointments  })
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


  return (
    <>
      <NavigationBar />
      <UserContext.Provider
        value={{ doctorsData, loggedInDoctor, setLoggedInDoctor, loggedInPatient, setLoggedInPatient, deleteAppointment, addAppointment, updateAppointment }}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:id' element={<DoctorPage />} />
          <Route path='/doctors/login' element={<DoctorPortal />} />
          <Route path='/patients/:id' element={<PatientPage />} />
          <Route path='/patients/login' element={<PatientPortal />} />
          <Route path='/appointments/:id' element={<AppointmentsPage />} />

        </Routes>
      </UserContext.Provider>
    </>

  );
}

export default App;
