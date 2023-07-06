
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

  const [user, setUser] = useState(null)

  console.log(user);

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
      <UserContext.Provider value={[user, setUser]}>
        <Routes>

          <Route path='/' element={<Doctors doctorsData={doctorsData} />} />
          <Route path='/doctor' element={<DoctorPage loggedInDoctor={loggedInDoctor} />} />
          <Route path='/doctor/login' element={<DoctorPortal setLoggedInDoctor={setLoggedInDoctor} />} />
          <Route path='/patient' element={<PatientPage loggedInPatient={loggedInPatient} />} />
          <Route path='/patient/login' element={<PatientPortal setLoggedInPatient={setLoggedInPatient} />} />

        </Routes>
      </UserContext.Provider>
    </>

  );
}

export default App;
