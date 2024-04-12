import React from 'react';
import { GiMaterialsScience } from "react-icons/gi";

function category() {
  return (
    <div className='w-full flex bg-[#fbb323] py-4'>
    <a className='flex ' href=""><span> <GiMaterialsScience /> ELECTRICAL</span></a>
    <a className='flex ' href=""><span><GiMaterialsScience /> ENGINEERING </span></a>
    <a  className='flex 'href=""><span> <GiMaterialsScience /> POLYNER SECTOR</span></a>
    <a className='flex ' href=""><span> <GiMaterialsScience /> APPLIANCES</span></a>
    </div>
  )
}

export default category