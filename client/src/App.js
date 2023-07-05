
import './App.css';
import { useEffect, useState } from 'react';
import Doctors from './components/Doctors';
import DoctorCard from './components/DoctorCard';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import DoctorPortal from './components/DoctorPortal';


const App = () => {

  const [doctorsData, setDoctorsData] = useState([]);

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
      {/* <DoctorPortal/> */}
      <Doctors doctorsData={doctorsData} />
    </>

  );
}

export default App;
