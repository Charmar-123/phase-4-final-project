import React, { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import UserContext from './UserContext';
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom'

const DoctorPage = () => {

  const navigate = useNavigate();
  const {setLoggedInDoctor, loggedInDoctor} = useContext(UserContext);

  const patients = loggedInDoctor.patients



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        { field: 'history', headerName: 'History', width: 300 },
        { field: 'email', headerName: 'Email', width: 300 },
      ];
      
      if (!patients) return <h1>Not logged in</h1>
      const rows = patients.map(({id, name, age, history, email}) => {
        return (
          {id: id,name: name, age: age, history: history, email: email}
        )
      })

      const handleLogOut = () => {
        fetch('/logout',{
          method:'DELETE'
        })
        .then(res =>{
          if(res.ok){
            setLoggedInDoctor(null)
            navigate.push('/')
          }
        })
      }

 
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <Button onClick={handleLogOut}>Logout</Button>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
    />
  </div>
  )
}

export default DoctorPage


