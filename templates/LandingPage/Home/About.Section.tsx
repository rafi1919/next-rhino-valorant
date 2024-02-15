// AboutSection.js
import Button from '../components/Button';
import {motion, useScroll, useTransform} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";


interface NewsProps{
    image: string;
    title: string;
}

const News:NewsProps[] =[
    {
        image: 'https://media.istockphoto.com/id/97999276/id/foto/petani-tua-frustrasi.jpg?s=612x612&w=0&k=20&c=i8ghTRO-3JWf7xCcTgPp03WYJ6jnEzDtAbU1ADOulYI=',
        title:'New Map' 
    },   
    {
        image: 'https://media.istockphoto.com/id/97999276/id/foto/petani-tua-frustrasi.jpg?s=612x612&w=0&k=20&c=i8ghTRO-3JWf7xCcTgPp03WYJ6jnEzDtAbU1ADOulYI=',
        title:'New Character' 
    },    
    {
        image: 'https://media.istockphoto.com/id/97999276/id/foto/petani-tua-frustrasi.jpg?s=612x612&w=0&k=20&c=i8ghTRO-3JWf7xCcTgPp03WYJ6jnEzDtAbU1ADOulYI=',
        title:'Update Patch 8.2' 
    },    


]

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
    return (
        <div className="w-full h-[70vh] ">
        <div className="bg-black h-[70vh] w-[1px] ml-[11%] absolute"></div>
        <div className="max-w-[80vw] mx-[auto]">
            <div className='mt-7 flex justify-between'>
                <h3 className='text-red text-[6vw] p-0 font-bold'>ARTIKEL TERBARU</h3>
                <p className="flex justify-end items-center text-red">Read more <FaArrowRight className="ml-1" /></p>
            </div>
            <div className="flex justify-center items-center ">
                <div className="grid grid-cols-3 md:gap-5 gap-1">
                    {News.map((item, index) => (
                        <div key={index} >
                            <div className="bg-red  border-4 border-blue">
                                <img src={item.image} className="object-cover md:max-w-[380px] md:max-h-[250px] transition duration-300 ease-in-out transform hover:opacity-30" />
                            </div>
                            <p className="text-sm text-blackGrey font-medium py-2">12/4/1014 <span className="text-red">{item.title}</span></p>
                            <h5 className="text-2xl text-blackGrey font-bold">CATATAN PATCH VALORANT 8.02</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    );
}

export default AboutSection;
