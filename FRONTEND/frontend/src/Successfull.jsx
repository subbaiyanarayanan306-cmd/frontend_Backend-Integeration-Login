import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import ToDOContainer from './Components/ToDOContainer'
import { useLocation } from 'react-router-dom'


const Successfull = () => {
  const location=useLocation();

  const email=location.state?.ename;
  return (
    <div>

      <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
          <h1 className='font-medium text-2xl text-center text-red-700'>LOGIN SUCCESSFULL</h1>
           {/* HEADER COMPONENT'S */}
           <Header email={email}/>
           {/* CARD COMPONENT'S */}
           <div className='flex justify-between my-5 gap-7 flex-wrap'>
           <Card bgcolor={"#8272DA"} title={"40"} subtitle={"Thiruvarure"}/>
           <Card bgcolor={"#FD6663"} title={"June"} subtitle={"26:06:2026"}/>
           <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React App"}/>
           </div>

           {/* TO DO CONTAINER : */}
          <ToDOContainer/>
          
        </div>
      </div>
    </div>
  )
}

export default Successfull
