import React, { useState, useEffect }  from 'react'
import './Logout.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid'

const Logout = () => {

    const user = useSelector(selectUser);
    const [tableData, setTableData] = useState([])

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout())
    }
    //firstname, lastname, email, username, password, imagen
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'firstname', headerName: 'First Name', width: 300 },
        { field: 'lastname', headerName: 'Last Name', width: 300 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'username', headerName: 'Username', width: 300 },
        { field: 'password', headerName: 'Password', width: 300 },
      ]

    useEffect(() => {
        axios.get("https://localhost:3000/api/user")
          .then((data) => data.json())
          .then((data) => setTableData(data))
      }, [])
       console.log(tableData)

    return (
        <div className='logout'>
            <h1>Bienvenido <span className='user__name'>{ user.name }</span></h1>

            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={12}
                />
            </div>

            <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout