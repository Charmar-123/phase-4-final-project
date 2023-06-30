
import './App.css';
import { useEffect, useState } from 'react';
import Doctors from './components/Doctors';

const App = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctors')
    .then(res => res.json())
    .then(setDoctors)
  }, [])
  return (
   <Doctors />
  );
}

export default App;
