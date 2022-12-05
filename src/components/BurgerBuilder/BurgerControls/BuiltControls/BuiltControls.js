import React from 'react'
import { motion } from "framer-motion";
import { MdAddTask, MdRemove } from 'react-icons/md';

export const BuiltControls = (props, ctrl) => {
    return (



        <div
            className="w-275 h-[140px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg  my-4 px-4 py-5 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative "

        >

            <div className="w-full flex items-center  justify-between">
                < motion.div
                    className='w-40 h-40 -mt-8 drop-shadow-2xl -my-5'
                    whileHover={{ scale: 1.2 }}
                >
                    <img
                        src={props.ImageIngrident}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </motion.div>
                {/* add button */}
                <motion.button
                    className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"

                    whileTap={{ scale: 0.75 }}
                    onClick={props.added}
                    disable={props.disable}
                >
                    <MdAddTask className="text-white " />



                </motion.button>
                {/* remove button */}
                <motion.div
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"

                    whileTap={{ scale: 0.75 }}
                    onClick={props.remove}
                    disable={props.disable}
                >
                    <MdRemove className="text-white" />
                </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-orange-500 font-semibold text-base md:text-lg">
                    {props.Ingrident}
                </p>

                <div className="flex items-center gap-8">
                    <p className="text-lg text-yellow-500 font-semibold">
                        <span className="text-sm text-green-500">₹</span> {props.Price}
                    </p>
                </div>
            </div>

        </div>

    )
}

export default BuiltControls














