import {motion} from 'framer-motion'
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    className?: string;
    text:string;
    variant: string
}

const Button:React.FC<ButtonProps> =({className, text, variant})=>{
    return(
        <div className={twMerge(`border-2 border-white p-3 w-fit`, className)}>

            <button className={twMerge(` p-5 w-[300px] hover:bg-blue`, variant === 'red' ?'bg-red text-white' : 'bg-white text-black hover:text-white')}>
                <p className="font-bold">
                    {text}
                </p>
            </button>
            {/* <motion.button 
                className='bg-red p-5 w-[300px]' 
                whileHover={{background:'blue'}}
                whileTap={{background: 'white'}}
                
            >Hello</motion.button> */}
        </div>
    )
}

export default Button