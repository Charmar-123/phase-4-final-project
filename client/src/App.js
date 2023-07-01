
import './App.css';
import { useEffect, useState } from 'react';
import Doctors from './components/Doctors';
import DoctorCard from './components/DoctorCard';


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
      <Doctors doctorsData={doctorsData} />
    </>

  );
}

export default App;
