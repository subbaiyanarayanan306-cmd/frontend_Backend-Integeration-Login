import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from 'react-router-dom'
import SignUp from "./SignUp";

const App = () => {
  const [ename, setEname] = useState("");
  const [pname, setPname] = useState("");

  function handleemail(e) {
    setEname(e.target.value);
  }

  function handlepname(e) {
    setPname(e.target.value);
  }
  const navigation = useNavigate();

  function checkuser() {
    if (ename === "" || pname === "") {
      alert("Please Enter the Required email and password");
      return;
    }
    var logindetailes = axios.get(
      `https://frontend-backend-integeration-login-seven.vercel.app/home?email=${ename}&password=${pname}`,
      // { email: ename, password: pname },
    );
    console.log(logindetailes);
    logindetailes.then(function (data) {
      if (data.data === true) {
        navigation("/success", { state: { ename: ename } });
      } else {
        navigation("/fail");
      }
    });
    setEname("");
    setPname("");
  }
  return (
    <div className="bg-black flex justify-center text-center p-10">
      <div className="bg-[#EFEFEF] p-6 md:p-10 border rounded-md flex flex-col gap-5 justify-center text-center flex-wrap p-20">
        <h1 className="font-medium text-2xl text-red-500">LOGIN PAGE</h1>
        <div className="relative">
          <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            className=" w-64 border border-black rounded-md p-1 text-center"
            value={ename}
            onChange={handleemail}
            name="email"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            required
          />
        </div>
        <div className="relative">
          <RiLockPasswordFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
          <input
            className=" w-64 border border-black rounded-md p-1 text-center"
            value={pname}
            onChange={handlepname}
            name="password"
            type="password"
            placeholder="ENTER YOUR PASSWORD"
            required
          />
        </div>
        <button
          className="w-26 border border-black p-1 rounded-md  hover:bg-red-400 font-bold"
          onClick={checkuser}
        >
          Login
        </button>
        <Link to={"/Signup"} className="w-26 border border-black p-1 rounded-md  hover:bg-red-400 font-bold">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default App;

//  `http://localhost:5000/home?email=${ename}&password=${pname}`,
// { email: ename, password: pname },
