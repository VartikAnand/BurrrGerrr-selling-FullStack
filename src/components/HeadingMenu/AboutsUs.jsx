import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FiInstagram } from "react-icons/fi"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AboutsUsImg } from '../../assets'
import { Link } from 'react-scroll'
import { motion } from "framer-motion";
import { Contactus } from '../../img/BurgerIngridentImage'

const AboutsUs = () => {

    return (


        <div className='px-8'>
            <section className='min-h-screen  text-textColor '>
                <nav className='py-5  flex  justify-between  font-semibold'>
                    <h1 className=' font-mono text-2xl relative before:absolute before:rounded-lg before:content before:w-44  before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-blue-200 to-blue-700 transition-all ease-in-out duration-200'>
                        BrrrGerrr <span className='text-orange-600 text-xl' >DevlopedBy </span></h1>

                    <ul className='flex items-center gap-5'>
                        <li className='text-white'><BsFillMoonStarsFill /></li>
                        <Link
                            to="custom" spy={true} smooth={true}>
                            <motion.li className='px-3 bg-orange-600 text-xl rounded-xl p-1 text-white'
                            >Get More !!</motion.li>
                        </Link>
                    </ul>
                </nav>
                <div className='p-10 text-center '>
                    <h2 className='text-orange-600 text-4xl font-medium'>Vartik Anand</h2>
                    <h3 className='text-xl py-2'>Developer and Desiginer</h3>
                    <p className='text-md py-5 leading-5 text-white'>Vartik Anand is a web and app developer from Madhya Pradesh, India. I have worked on a variety of projects, including the development of the BurrGerrr website.

                        I use the latest technologies and tools to create high-quality apps that are user-friendly and reliable.

                        I always strive to improve our skills and keep up with the latest trends in web & app development. This allows us to provide their clients with the best possible service and products.</p>
                </div>

                < div className='justify-center items-center flex py-5'>
                    <div className='relative  flex flex-col  justify-center shadow-md rounded-xl  bg-cardOverlay h-64 w-56'
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        ><img src={AboutsUsImg} alt="" className="w-46 h-40 mx-auto rounded-full dark:bg-orange-500 aspect-square top " /></motion.div>

                        <div className="space-y-4 text-center divide-y divide-orange-500">
                            <div className="my-2 space-y-1">
                                <h2 className="text- text-orange-600 font-semibold sm:text-2xl">Vartik Anand</h2>
                                <p className="px-5 text-xs sm:text-base text-black">Full-stack developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='  text-white text-5xl flex justify-center gap-16 pt-4  '>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        < FiInstagram onclick="location.href = 'https://www.instagram.com/vartik_anand/" />

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}>
                        <FaFacebook />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}>
                        <AiOutlineLinkedin />
                    </motion.div>
                </div>

            </section >
            <section className='text-textColor  '>
                <nav className='py-5  flex  justify-between  font-semibold'>
                    <h1 className=' font-mono text-2xl relative before:absolute before:rounded-lg before:content before:w-36  before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-blue-200 to-blue-700 transition-all ease-in-out duration-200'>
                        About <span className='text-orange-600 text-xl' >BrrrGerrr </span></h1>
                </nav>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='text-orange-600 text-4xl font-medium'>BrrrGerr</h2>
                    <p className='text-md py-5 leading-5 text-white'>

                        A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan-fried, grilled, smoked, or flame-broiled. Burgers are often served with lettuce, tomato, onion, pickles, cheese, bacon, ham, or egg as toppings. A hamburger topped with cheese is called a cheeseburger.

                        Burgers are popular in many countries and are often served as fast food. They are also common street foods. In some countries burgers may be known by other names such as "hamburgers", "juicy burgers", "burger sandwiches" or just "burgers".

                        The term "burger" can also refer to the meat patty on its own without bread or to the ground meat used to make the patty.
                    </p>

                </div>

                <div>
                    <nav className='py-5  flex  justify-between  font-semibold'>
                        <h1 id="new" className=' font-mono text-2xl relative before:absolute before:rounded-lg before:content before:w-28 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-blue-200 to-blue-700 transition-all ease-in-out duration-200'>
                            What's New <span className='text-orange-600 text-xl' >Here.. </span></h1>
                    </nav>
                    <div
                        id="custom"
                        className='flex justify-center items-center flex-col'>
                        <h2 className='text-orange-600 text-4xl font-medium'>Custom BrrrGerr</h2>
                        <p className='text-md py-5 leading-5 text-white'>
                            A custom burger is a great way to add your own personal touch to your meal. By adding your own toppings and sauces, you can create a burger that is truly unique to you.

                            When ordering a custom burger, be sure to specify what type of bun you would like, as well as whether you would like it grilled or not. Then, add your favorite toppings and condiments. Some popular toppings include cheese, bacon, avocado, tomato, and onion. For the sauce, you can choose from ketchup, mustard, mayonnaise, BBQ sauce, or any other sauce you like.

                            If you're feeling adventurous, you can also add some unconventional toppings to your burger. Some ideas include pineapple, pickles, eggs, and even peanut butter! Just be sure to specify how you want your burger cooked so that it comes out exactly the way you want it.</p> </div>
                </div>
                <div

                    className='flex justify-center items-center flex-col p-10'>


                    <img
                        className=' w-80 p-10'
                        src={Contactus}
                        alt="vartik anand"
                    />
                </div>
            </section >

        </div >
    )
}

export default AboutsUs