
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
  const [appointment, setAppointment] = useState([])


  useEffect(()=> {
    fetch('/doctors')
    .then(res=> res.json())
    .then(data => setDoctorsData(data))
}, [])



  return (
    <>
      <NavigationBar />
      <UserContext.Provider value={{loggedInDoctor, setLoggedInDoctor, loggedInPatient, setLoggedInPatient, appointment, setAppointment}}>
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
