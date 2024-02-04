import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true);
     const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
     }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img alt="bg-img" src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg'/>
        </div>
        <form className='absolute text-white bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'> 
           <h1 className=' font-bold py-4 text-3xl'>
            {isSignInForm ? "Sign In":"Sign Up"}</h1>
            
             {!isSignInForm &&  <input 
            type='text' placeholder='Full Name'
            className='p-2 my-2 w-full bg-gray-500'/>}         
         
            <input 
            type='text' placeholder='Email Address'
            className='p-2 my-2 w-full bg-gray-500'/>
            
            <input
             type='text'
              placeholder='Password' 
            className='p-2 my-2 w-full  bg-gray-500 '/> 

            <button
             className='p-2 rounded-lg  my-4 w-full bg-red-700'>
                {isSignInForm ? "Sign In":"Sign Up"}</button>
                <p className="cursor-pointer"
                 onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix ? Sign Up Now":"Alredy Registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login