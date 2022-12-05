import React, { useState } from 'react'
import { BurgerIngredient } from "./index"
import "./Burger.css"
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa"

import { WiLightning } from "react-icons/wi"
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const refreshPage = () => {
    window.location.reload();
}


const Burger = (props) => {

    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        // reduce is buitin function which help to redece elemet in a one
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log(transformedIngredients)
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p className='text-textColor text-center text-sm font-mono'>Please start Adding Ingredients!</p>;
    }

    // add to cart

    return (
        <div >
            <div className="Burger scrollbar-hide">
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                {/* <BurgerIngredient type="salad" />
                <BurgerIngredient type="bacon" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="tamato" /> */}
                <BurgerIngredient type="bread-bottom" />
            </div>
            <br></br>
            <div className=' flex flex-row justify-between px-14'>
                <motion.button
                    whileTap={{ scale: 0.75 }}


                    onClick={refreshPage}
                    type="button" id="btn"
                    className="w-full h-14 bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8 md:w-auto px-4 py-2  rounded-lg  transition-all ease-in-out duration-100"
                >
                    <WiLightning className="text-white h-12 w-12 " />
                    <span className='pl-2 text-lg border-l text-white'>

                        Re-Make</span>

                </motion.button>

                <motion.button
                    className="w-full h-14 bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8 md:w-auto px-4 py-2  rounded-lg  transition-all ease-in-out duration-100 disabled:animate-none"

                    whileTap={{ scale: 0.75 }}
                    onClick={props.addtocart}
                    disabled={!props.puchase}

                >
                    <FaOpencart className="text-white h-12 w-12 pr-1 " />
                    <span className='pl-2 text-lg border-l text-white'>
                        Order Now</span>
                </motion.button>



            </div>
        </div >

    );
};

export default Burger