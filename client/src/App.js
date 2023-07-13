
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



  useEffect(()=> {
    fetch('/doctors')
    .then(res=> res.json())
    .then(data => setDoctorsData(data))
}, [])



  return (
    <>
      <NavigationBar />
      <UserContext.Provider value={{loggedInDoctor, setLoggedInDoctor, loggedInPatient, setLoggedInPatient}}>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={<Doctors doctorsData={doctorsData} />} />
          <Route path='/doctors/:id' element={<DoctorPage />}/>
          <Route path='/doctors/login' element={<DoctorPortal/>} />
          <Route path='/patients/:id' element={<PatientPage loggedInPatient={loggedInPatient}/>} />
          <Route path='/patients/login' element={<PatientPortal/>} />

        </Routes>
      </UserContext.Provider>
    </>

  );
}

export default App;
