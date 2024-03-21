import {motion} from 'framer-motion'
import { twMerge } from 'tailwind-merge';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

type ButtonProps = {
    className?: string;
    text:string;
    link?: string;
}

const RoundedButton:React.FC<ButtonProps> =({className, text, link})=>{
    return(
        <motion.div className={twMerge(`hover:shadow-md  hover:shadow-red active:shadow-green-500 cursor-pointer flex justify-end items-center gap-x-3 rounded-full w-fit h-fit p-3`, className)}
            initial={{y:0}}
            whileHover={{y:-5}}
            >
            <Link href={`${link}`} className=" text-red font-semibold" >{text}</Link>
            <motion.div className=' rounded-full p-3 bg-blackGrey'>
                <FaArrowRight className='text-white' />
            </motion.div>
        </motion.div>
    )
}

export default RoundedButton