import React from 'react'
import { UnderConstruction } from '../../img/BurgerIngridentImage'

const Services = () => {
    return (


        <div

            className='flex justify-center items-center flex-col p-10'>


            <img
                className=' w-full h-96   pt-12
                '
                src={UnderConstruction}
                alt="vartik anand"
            />

            <div
                className=' text-2xl font-semibold text-textColor items-center justify-start pt-12'
            >Under Construction...</div>
        </div>

    )
}

export default Services
