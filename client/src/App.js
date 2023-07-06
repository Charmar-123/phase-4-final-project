
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors';
import DoctorCard from './components/DoctorCard';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import DoctorPortal from './components/DoctorPortal';
import PatientPortal from './components/PatientPortal';
import DoctorPage from './components/DoctorPage';
import PatientPage from './components/PatientPage';

import UserContext from './components/UserContext';


const App = () => {

  const [doctorsData, setDoctorsData] = useState([]);

  const [loggedInDoctor, setLoggedInDoctor] = useState([]);
  const [loggedInPatient, setLoggedInPatient] = useState([]);

  useEffect(() => {
    fetch('/doctors')
      .then(res => res.json())
      .then(setDoctorsData)
  }, [])


  return (
    <>
      <NavigationBar />
      <UserContext.Provider value={{loggedInDoctor, setLoggedInDoctor, loggedInPatient, setLoggedInPatient}}>
        <Routes>

          <Route path='/' element={<Doctors doctorsData={doctorsData} />} />
          <Route path='/doctor' element={<DoctorPage/>} />
          <Route path='/doctor/login' element={<DoctorPortal/>} />
          <Route path='/patient' element={<PatientPage/>} />
          <Route path='/patient/login' element={<PatientPortal/>} />

        </Routes>
      </UserContext.Provider>
    </>

  );
}

export default App;
