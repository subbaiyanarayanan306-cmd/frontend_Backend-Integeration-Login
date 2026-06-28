import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const signup = async () => {
  if (email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await axios.post(
      "https://frontend-backend-integeration-login-seven.vercel.app/signup",
      {
        email,
        password,
      }
    );

    alert(res.data);

    navigate("/");
  } catch (err) {
    alert("Signup Failed");
  }
};
  
  return (
    <div className='bg-black p-10 flex justify-center text-center'>
       <div className='bg-[#EFEFEF] p-10 rounded flex flex-col flex-wrap gap-3'>
               <h1 className='text-2xl font-medium'>SignUp Here :</h1>
              {/* <input type="email" placeholder='Enter you Gmail' className=' w-72 p-1 bg-grey border border-black rounded'/>
              <input type="password" placeholder='Enter you Password' className=' w-72 p-1 bg-grey border border-black rounded'/>
              <button className='w-72 bg-green-500 p-1 rounded font-medium hover:bg-orange-500'>SignUp</button> */}
              <input
  type="email"
  placeholder="Enter your Gmail"
  className="w-72 p-1 border border-black rounded"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  placeholder="Enter your Password"
  className="w-72 p-1 border border-black rounded"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<button
  onClick={signup}
  className="w-72 bg-green-500 p-1 rounded font-medium hover:bg-orange-500"
>
  SignUp
</button>
       </div>
    </div>
  )
}

export default SignUp
