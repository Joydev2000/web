import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

function NavFirst() {
  return (
    <div className='w-full flex justify-between px-20 py-4'>
        <div className=' flex gap-8'>
            <a className='flex items-center gap-2'  href=""><span className='text-xl'><MdOutlineLocationOn /></span> Los Angeles Gournadi, 1230 Bariasl</a>
            <a className='flex items-center gap-2' href=""> <span className='text-xl'><MdOutlineMail /></span> contact@pbminfotec.com</a>
        </div>
        <div className='flex gap-8'>
            <a href=""><FaFacebookF /></a>
            <a href=""><TiSocialTwitter /></a>
            <a href=""><FaInstagram /></a>
            <a href=""> <FaYoutube /></a>
        </div>
    </div>
  )
}

export default NavFirst