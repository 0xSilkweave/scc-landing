import React from "react";
import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[48px] text-[52px]  
          text-white ss:leadnig-[100px] leadnig-[75px]"
          >
            We are <br />{" "}
            <span className="text-gradient">activist-investors</span> specialized in <span className="text-gradient">blockchain-enabled</span> innovation
          </h1>

        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our primary areas of focus are projects involved in the Web3, Gaming, DeFi and Metaverse spaces.
        </p>

      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>

      </div>

      
    </section>
  );
};

export default Hero;
