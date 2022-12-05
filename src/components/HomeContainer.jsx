import React from "react";
import { heroData } from "../utils/data";
import { bgpng, Logo } from "../assets";
import { motion } from "framer-motion";
import { WavyLink } from "react-wavy-transitions";
import { BsArrowBarRight } from 'react-icons/bs';
const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className={"text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor"}>
          Make Your Own !!!
          <span className="text-orange-600 text-[3rem] lg:text-[3.5rem] ">
            Custom  BrrrGerrr
          </span>

        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          A custom burger is a great way to add your own personal touch to your meal. By adding your own toppings and sauces, you can create a burger that is truly unique to you.


        </p>

        <WavyLink to={'CustomBurger'} color="#FB8C00">
          <motion.div
            whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.1 }}
            type="button" id="btn"
            className="bg-gradient-to-br from-pink-600 to-rose-600 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            <p className="text-base text-white font-semibold flex">
              Customize Now <BsArrowBarRight className="text-2xl text-white" />     <div className="w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl">
                <img
                  src={Logo}
                  className="w-full h-full object-contain"
                  alt="LOGO"
                />
              </div></p>
          </motion.div>
        </WavyLink>
      </div >
      {/* SIDE MAIN MENU TOP ITEMS */}

      < div className="py-2 flex-1 flex items-center relative" >
        <img
          src={bgpng}
          className=" ml-auto h-full  w-full lg:w-max lg:h-550 rounded-3xl"
          alt="bgpng"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-6 flex-wrap">









          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-MainCard backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg gap-0"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₹</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div >
    </section >
  );
};

export default HomeContainer;
