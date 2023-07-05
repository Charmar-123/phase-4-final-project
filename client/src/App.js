
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


const App = () => {

  const [doctorsData, setDoctorsData] = useState([]);

  const [loggedInDoctor, setLoggedInDoctor] = useState([]);

  useEffect(() => {
    fetch('/doctors')
      .then(res => res.json())
      .then(setDoctorsData)
  }, [])

  console.log(doctorsData);

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path='/' element={ <Doctors doctorsData={doctorsData} />}/>
        <Route path='/doctor' element={ <DoctorPage loggedInDoctor={loggedInDoctor}/>}/>
        <Route path='/doctor/login' element={<DoctorPortal setLoggedInDoctor={setLoggedInDoctor}/>}/>
        <Route path='/patient' element={<PatientPage/>}/>
        <Route path='/patient/login' element={<PatientPortal/>}/>

      </Routes>
      {/* <Home/> */}
      {/* <DoctorPortal setLoggedInDoctor={setLoggedInDoctor}/> */}
      {/* <DoctorPage loggedInDoctor={loggedInDoctor}/> */}
      {/* <PatientPortal/> */}

      {/* <Doctors doctorsData={doctorsData} /> */}
    </>

  );
}

export default App;
