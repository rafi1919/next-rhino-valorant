// AboutSection.js
import React, {useState, useEffect} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import dayjs from 'dayjs';
import RoundedButton from '@/templates/LandingPage/components/RoundedButton';

interface Events{
    id:string
    date: string;
    title: string;
    article_type: string;
    url:string;
    banner: { url: string }; 
    category:{title:string}[];
}

const AboutSection = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 300]);

    const [events, setEvents] = useState<Events[]>([])

    useEffect(()=>{
        
        const fetchData=async()=>{
            try {
                const response = await fetch('https://playvalorant.com/page-data/id-id/news/page-data.json');
                const data = await response.json();

                if ( data.result.data.allContentstackArticles) {
                    const articlesData = data.result.data.allContentstackArticles.nodes;

                    setEvents(articlesData);
                } else{
                    console.log('error')
                }

            } catch (error) {
                console.error(error)
            }
        };

        fetchData()
    }, [])


    return (
        <div className="w-full h-[80vh]">
            <div className='max-w-[80vw] mx-[auto]'>
                <div className='mt-7 flex justify-between items-center'>
                    <h3 className='text-red text-[5vw] p-0 font-thin'>ARTIKEL TERBARU</h3>
                    <RoundedButton text='Lihat semua artikel'/>
                </div>  
                <div className=" md:grid grid-cols-3 flex flex-row relative md:gap-3 gap-1 overflow-x-auto">
                    {events.slice(0,3).map(events=> (
                        <div key={events.id} >
                            <div className="bg-red w-[350px] md:w-full md:max-h-[250px] border-4  border-blue">
                                    <img
                                        src={events.banner.url}
                                        alt="Event"
                                        className="object-cover w-fit  transition duration-300 ease-in-out transform hover:opacity-30"
                                    />
                            </div>
                            <p className="text-sm text-blackGrey font-medium py-2 mt-4">{dayjs(events.date).format('DD/MM/YYYY')} . <span className="text-red">{events.category.map(tag => tag.title).join(', ')}</span></p>
                            <h5 className="text-2xl text-blackGrey font-bold">{events.title}</h5>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default AboutSection;

{/* <div className="w-full h-[80vh] ">
<div className="bg-black h-[80vh] w-[1px] ml-[11%] absolute"></div>
<div className="max-w-[80vw] mx-[auto]">
    <div className='mt-7 flex justify-between'>
        <h3 className='text-red text-[6vw] p-0 font-bold'>ARTIKEL TERBARU</h3>
        <p className="flex justify-end items-center text-red">Read more <FaArrowRight className="ml-1" /></p>
    </div>
    <div className="flex justify-center items-center ">
        <div className=" md:grid grid-cols-3 flex flex-row relative md:gap-3 gap-1 overflow-x-auto">
            {events.slice(0,3).map(events=> (
                <div key={events.id} >
                    <div className="bg-red w-[350px] md:w-full md:max-h-[250px] border-4  border-blue">
                            <img
                                src={events.banner.url}
                                alt="Event"
                                className="object-cover w-fit  transition duration-300 ease-in-out transform hover:opacity-30"
                            />
                    </div>
                    <p className="text-sm text-blackGrey font-medium py-2 mt-4">{dayjs(events.date).format('DD/MM/YYYY')} . <span className="text-red">{events.category.map(tag => tag.title).join(', ')}</span></p>
                    <h5 className="text-2xl text-blackGrey font-bold">{events.title}</h5>
                </div>
            ))}
        </div>
    </div>
</div>
</div> */}
