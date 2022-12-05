import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../RowContainer";
import { useStateValue } from "../../context/StateProvider";

const CartIngridents = () => {
    const [{ foodItems, cartShow },] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => { }, [scrollValue, cartShow]);

    return (
        <section className="w-full my-6">
            <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-72
                 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Add Extra Ingrident <span className="text-orange-600">With Your Brrrgerr</span>
                </p>

                <div className="hidden md:flex gap-3 items-center">
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                        onClick={() => setScrollValue(-200)}
                    >
                        <MdChevronLeft className="text-lg text-white" />
                    </motion.div>
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                        onClick={() => setScrollValue(200)}
                    >
                        <MdChevronRight className="text-lg text-white" />
                    </motion.div>
                </div>
            </div>
            <RowContainer
                scrollValue={scrollValue}
                flag={false}
                data={foodItems?.filter((n) => n.category === "ExtraItems")}
            />
        </section>



    )
}

export default CartIngridents
