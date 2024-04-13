import React, { useState } from 'react';
import {  RiArrowRightUpLine } from "@remixicon/react";


function Landing() {
  
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    if (isCartVisible) {
      setIsCartVisible(false);
    } else {
      setIsCartVisible(true);
    }
  };
  
  
  return (
    <div className="relative px-10 pt-44 z-[99] -top-[48px] bg-[url(src/assets/Home.png)] bg-cover bg-top bg-no-repeat w-full h-screen ">
      <h1 className='font-bold text-[4.2vw] capitalize w-[43%] leading-none'>
        laading <span className='text-[blue]'>electrical products</span>  distributor in india
      </h1>
      <p className='font-[400] text-[1.2vw] mt-10 capitalize w-[50%]'>
        adipisicing elit. Exercitationem quae distinctio nobis nesciunt architecto quidem tempore sit recusandae debitis accusamus iste consequuntur quas cum fuga aspernatur, veritatis perspiciatis adipisci dolorum?
      </p>

      {/* <div className="flex gap-4 div mt-20">
      <button
        onClick={toggleButtons}
        className={`hover:bg-red-900 duration-200 flex items-center bg-black text-white text-2xl uppercase py-4 px-8 ${
          activeButton === 1 ? "" : "hidden"
        }`}
      >
        Learn More <RiArrowRightUpLine size={40} />
      </button>

      <button
        onClick={toggleButtons}
        className={`hover:bg-red-900 duration-200 flex items-center bg-black text-white text-2xl uppercase py-4 px-8 ${
          activeButton === 2 ? "" : "hidden"
        }`}
      >
        Learn More <RiArrowRightUpLine size={40} />
      </button>
    </div> */}

    <div>
      <button className="cart_logo" onClick={toggleCart}>Cart Logo</button>
      <div className={`cartt ${isCartVisible == false ?  'hidden':'block' }`}>
       dddddddddddddddddd
      </div>
    </div>

    </div>
  )
}

export default Landing