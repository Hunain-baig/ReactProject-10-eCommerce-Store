import React, { useState } from 'react'
import { login } from '../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../Config/firebase';

function Login() {
  const[email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const signIn = async () =>{
   try {
    await login(email, password);
    alert("Yoy are Logged In");
    navigate("/");
   } catch (e) {
    alert(e.message)
   }
  }

  const navToRegiter = ()=>{
    navigate("/register")
  }

  


 return (
   <div>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
         <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
           Login Here!
         </h2>
         <div className="mb-6 mt-20">
           <label
             htmlFor="email"
             className="block text-gray-700 text-sm font-bold mb-2"
           >
             Email Address
           </label>
           <input
             onChange={(e) => setEmail(e.target.value)}
             type="email"
             className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
           />
         </div>
         <div>
           <label
             htmlFor="password"
             className="block text-gray-700 text-sm font-bold mb-2"
           >
             Password
           </label>
           <input
             onChange={(e) => setPassword(e.target.value)}
             type="password"
             className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-100"
           />
         </div>
         <div className="flex items-center justify-center gap-5">
           <button
             onClick={() => signIn()}
             className="btn btn-info mt-6  text-white"
           >
             Login
           </button>
         </div>
         <div className="flex items-center justify-center mt-4">
           <button
             onClick={() => signInWithGoogle()}
             className="btn btn-error text-white"
           >
             Sign in with Google
           </button>
         </div>
         <div className="mt-4 text-lg text-center text-gray-600">
           Don't have an account?{" "}
           <a
             className="text-blue-500 hover:underline cursor-pointer"
             onClick={navToRegiter}
           >
             Sign Up
           </a>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Login
