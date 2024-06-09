import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        setName(null);
        setCPassword(null);
        setPassword(null);
        setEmail(null);
      return () => {
        setName(null);
        setCPassword(null);
        setPassword(null);
        setEmail(null);
      }
    }, []);
    
    let err=1;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!==cPassword) {
            setError(1);
            err=0;
        }
        else{
            setError(null);
            err=1;
        }
        if(err){
            console.log('Form submitted');
            toast.success('Form submitted successfully');
        }
        else{
            console.log('Form submitted fail');
        }
      };
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-fit h-fit p-2 border-2 border-gray-500 rounded-md bg-purple-200'>
            <form className='flex flex-col items-center gap-2 px-3' onSubmit={handleSubmit}>
                <h1 className='text-2xl text-center font-bold'>Sign Up</h1>
            {error && <h1 className='text-red-700'>Abe password toh dhang se dal</h1>}
                <input type='text' required value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='text' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='password' minLength="8" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='password' minLength="8" required value={cPassword} onChange={(e)=>setCPassword(e.target.value)} placeholder='Confirm Password' className='w-fit p-2 border-2 border-gray-500 rounded-md'></input>
                <input type='submit' value='Sign Up' className='w-fit p-2 border-2 bg-purple-400 rounded-lg hover:bg-purple-600 border-gray-500'></input>
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SignUp