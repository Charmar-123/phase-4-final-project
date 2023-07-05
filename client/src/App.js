
import './App.css';
import { useEffect, useState } from 'react';
import Doctors from './components/Doctors';
import DoctorCard from './components/DoctorCard';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import DoctorPortal from './components/DoctorPortal';
import PatientPortal from './components/PatientPortal';
import DoctorPage from './components/DoctorPage';


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
      {/* <Home/> */}
      <DoctorPortal setLoggedInDoctor={setLoggedInDoctor}/>
      <DoctorPage loggedInDoctor={loggedInDoctor}/>
      {/* <PatientPortal/> */}

      {/* <Doctors doctorsData={doctorsData} /> */}
    </>

  );
}

export default App;
