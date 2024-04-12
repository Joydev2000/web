import React from 'react';
// import { GiMaterialsScience } from "react-icons/gi";
import {  RiLightbulbFlashLine } from "@remixicon/react";


function category() {
  return (
    <div className='w-full flex bg-[#fbb323] py-1'>
   {[
    {icon : <RiLightbulbFlashLine size={40} />, text:"ELECTRICA"},
    {icon : <RiLightbulbFlashLine size={40}/>, text:"ENGINEERING"},
    {icon : <RiLightbulbFlashLine size={40}/>, text:"POLYNER SECTOR"},
    {icon : <RiLightbulbFlashLine size={40}/>, text:"APPLIANCES"},
  
  ].map((items,index) => {
    return (
      <a className={`flex text-[#05284e] items-center ml-4 text-xl font-bold pr-2 border-r-[1px] ${index === 3 && "border-none"}`} key={index} href=""> <span className='text-white font-light' >{items.icon}</span> {items.text}</a>
   )
   })}
    

    
    </div>
  )
}

export default category