
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
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState([])


  useEffect(()=> {
    fetch('/doctors')
    .then(res=> res.json())
    .then(data => setDoctorsData(data))
}, [])

const addAppointment = (appointment) => setPatientAppointments(current => [...current, appointment])

const deleteAppointment = (id) => setPatientAppointments(current => current.filter(p => p.id !== id))

const updateAppointment = (updatedAppointment) => {
  
  setSelectedAppointment(updatedAppointment)
  setPatientAppointments(current => {
  return current.map(appointment => {
    if (appointment.id === updatedAppointment.id){
      return updatedAppointment
    } else {
      return appointment
    }
  })
})}


  return (
    <>
      <NavigationBar />
      <UserContext.Provider
       value={{doctorsData, loggedInDoctor, setLoggedInDoctor, loggedInPatient, setLoggedInPatient, selectedAppointment, setSelectedAppointment, patientAppointments, setPatientAppointments, deleteAppointment, addAppointment, updateAppointment}}>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={<Doctors doctorsData={doctorsData} />} />
          <Route path='/doctors/:id' element={<DoctorPage />}/>
          <Route path='/doctors/login' element={<DoctorPortal/>} />
          <Route path='/patients/:id' element={<PatientPage/>} />
          <Route path='/patients/login' element={<PatientPortal/>} />
          <Route path='/appointments/:id' element={<AppointmentsPage/>} />

        </Routes>
      </UserContext.Provider>
    </>

  );
}

export default App;
