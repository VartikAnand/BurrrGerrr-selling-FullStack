import { controls } from '../../../utils/data';

import BuiltControls from "./BuiltControls/BuiltControls"








const BurgerControls = (props) => {



    return (
        <div className='grid grid-rows-3 grid-flow-col '>
            {/* //price */}



            {


                controls.map((ctrl) => (

                    <BuiltControls
                        key={ctrl.Ingrident}
                        Ingrident={ctrl.Ingrident}
                        Price={ctrl.price}
                        ImageIngrident={ctrl.imageSrc}
                        added={() => props.addedingrident(ctrl.type)}
                        remove={() => props.removeIngrident(ctrl.type)}
                        disable={props.disable[ctrl.type]}
                    />

                ))}
            <div
                className="w-275 h-[140px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg  my-4 px-4 py-5 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative "

            ><span className='flex fill-textColor -m-8 p-0  text-yellow-500 font-semibold text-lg h-5'>Total Price</span>
                <p className=' text-orange-500 font-semibold text-lg h-5'> Current prise :
                    <span className=' text-green-500 font-semibold text-lg h-5'>{props.price.toFixed(2)}</span></p></div>

        </div>
    )
}

export default BurgerControls
