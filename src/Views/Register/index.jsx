import React from 'react'
import { useState } from 'react';
import { register } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';


function Register() {

    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [age,setAge] = useState()
    const navigate = useNavigate()

    const signUp = async ()=>{
        try {
            await register({name,age,email, password});
            alert("Sucessfully register!");
            navigate("/login");
        } catch (e) {
            alert(e.message)   
        }
        
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-500">
          Register Here
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Age
          </label>
          <input
            type="number"
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => signUp()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register
