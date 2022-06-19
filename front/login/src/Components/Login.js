import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import axios from 'axios';
import './Login.css';

export const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: name,
            password
        }

        await axios.post(`https://localhost:3000/api/auth`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
            
            dispatch(
                login({
                    name: name, 
                    password: password,
                    loggedIn: true
                })
            );
        })

        console.log('ALGO FALLO')
        
    }

    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>

                <input 
                    type="name" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' className='submit__btn'>
                    Ingresar
                </button>
            </form>
        </div>
    )
}

export default Login