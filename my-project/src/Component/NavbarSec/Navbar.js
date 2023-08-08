import React from 'react'

import {AiFillFacebook, AiFillInstagram, AiFillLinkedin,} from 'react-icons/ai'
function Navbar() {
  return (
   
<div>
       <div className=" w-[100%] ">
      <nav className="flex w-[100%] justify-between h-[80px] z-111  items-center">
        <div className="logo flex text-[40px] font-bold text-[#3d535f] tracking-[3px]  cursor-pointer uppercase">
          Asif <b className='text-[45px] text-[#7f00ff]'>    .   </b>
        </div>
        <ul className="navItem flex space-x-10 text-[#3d535f] tracking-[3px]  ">
          <li ><a href="#">Home</a></li>
          <li ><a href="#">About</a></li>
          <li ><a href="#">Skills</a></li>
          <li ><a href="#">Blog</a></li>
        </ul>
      
        <div className="links flex space-x-8 text-3xl">
          <a href="https://www.linkedin.com/in/asif-ali-b0526a273/">
        <AiFillLinkedin/>
           
          </a>
          <a href="https://instagram.com/asif_alee005?igshid=MzNlNGNkZWQ4Mg==">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com/asifali.jawadi?mibextid=ZbWKwL">
            <AiFillFacebook />
          </a>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
