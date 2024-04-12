import React from 'react';
import { TbPhoneCall } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

function NavbarMain() {
  return (
    <div className='flex justify-between border-t-[1px]'>
      <div className='px-10 logo border-r-[1px]'>
        <img src="src\assets\Homelogo.png" alt="" />
      </div>
      <div className="links flex gap-[5vw] pl-9 items-center">
        {[
          { icon: <FaChevronDown />, text: "Home" },
          {icon: <FaChevronDown />,text:"pages"},
         { icon: <FaChevronDown />,text:"services"},
         { icon: <FaChevronDown />,text:"project"},
         { icon: <FaChevronDown />,text:"blog"},
         {icon: <FaChevronDown />,text:"contact us"}
        ].map((item, index) => {
          return (
            <a className='hover:text-[#fbb323]  uppercase font-semibold flex items-center duration-200' key={index} href="">

                {item.text} <span className=''>{item.icon}</span>

            </a>
        )
        })}
      </div>
      <div className='contact flex items-center gap-4'>
        <span className='p-4 bg-[#05284e] text-xl rounded-full text-[#faa516]'><TbPhoneCall /></span>
        <div>
          <p>call us Now</p>
          <a className='font-semibold text-nowrap' href="">+(123) 567-8901</a>
        </div>
        <span className='text-2xl pl-8'>
          <IoSearchOutline />
        </span>
      </div>
      <div className="menu flex bg-[#febd61] px-6 items-center">
        <span className='text-4xl'><AiOutlineMenu /></span>
      </div>
    </div>
  );
}

export default NavbarMain;
