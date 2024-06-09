import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); //seterror use kijiye apne api call mein
    useEffect(() => {
        setEmail(null);
        setPassword(null);
        return () => {
          setPassword(null);
          setEmail(null);
        }
      }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        if(!error){
            toast.success('Sign in hogya bhai');
        }
        else{
            toast.error('abe password ya email glt hoga tera');
        }
      };
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-fit h-fit p-2 border-2 border-gray-500 rounded-md bg-purple-200'>
            {}
            <form className='flex flex-col items-center gap-2 px-3' onSubmit={handleSubmit}>
                <h1 className='text-2xl text-center font-bold'>Sign In</h1>
                <input type='text' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='password' minLength="8" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='submit' value='Sign In'className='w-fit p-2 border-2 bg-purple-400 rounded-lg hover:bg-purple-600 border-gray-500'></input>
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SignIn