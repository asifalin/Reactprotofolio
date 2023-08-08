import React from "react";

import {Cv , Pic } from '../../Pictures/index.js'

function Header() {
  return (
    <div>
      <div className="wrapper flex w-[100%] h-[100vh] justify-center items-center p-[0 9%] overflow-hidden ">
        <div className="cols   cols0 w-[50%]  z-10">
          <h1 className="text-[35px] tracking-[5px] text-[#3d535f]">Welcome to my portfolio</h1>
          <span className="topline block relative text-[35px] tracking-[5px] text-[#3d535f]">Hello   </span>  <div className=" h-[3px] w-[40px] bg-[#7f00ff] relative left-28 bottom-4"></div>
          <h1 className="block text-[6rem] font-bold text-[#3d535f]">
            I'm <span className="multiText text-[#7f00ff uppercase]">Asif</span>
          </h1>
          <p className="block w-[90%] text-[1.3em] text-[#3d535f]">
          I specialize in creating immersive and dynamic web experiences through front-end development. With a passion for blending design and technology, I craft websites that are not only visually appealing but also highly functional. My goal is to bring ideas to life on the digital canvas and create user-friendly interfaces that leave a lasting impression.

          </p>
          <div className="btns w-[100%] relative left-[150px] mt-[40px]">
            <a href={Cv} download="Asif">
              <button className="cv outline-none border-none cursor-pointer text-[25px] font-[400px] text-[#fff] bg-[#3d535f] p-[7px] m-[5px] tracking-[2px] uppercase shadow-[0 15px 10px rgba(0, 0, 0,0.4)] hover:bg-[#7f00ff]  ">Download CV</button>
            </a>
            <a href="#"><button className="outline-none border-none cursor-pointer text-[25px] font-[400px] text-[#fff] bg-[#3d535f] p-[7px] m-[5px] tracking-[2px] uppercase shadow-[0 15px 10px rgba(0, 0, 0,0.4)] hover:bg-[#7f00ff]  "> Hair me</button> </a>
          </div>
        </div>
        <div className="cols  cols1 ">
          <div className="imgbox relative w-[100%] h-[100%] overflow-hidden">
            <img
              className="relative top-[-100px] right-[px]  h-[70%] transform -scale-x-100"
              src={Pic}
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
