import React, {useState, useEffect} from 'react'
import { twMerge } from 'tailwind-merge'
import SkillSection from './Skill.Section'
import { motion } from 'framer-motion'

interface AgentProps{
    id:string;
    uuid: any;
    displayName: string;
    description: string;
    background:string;
    banner:string;
    abilities:[];
    role:any;
    fullPortraitV2:string;
  
}


const Agents=()=>{
    const [agents, setAgents] = useState<AgentProps[]>([])
    const [selectAgent, setSelectAgent] = useState<AgentProps | null>(null);    
    const [isActive, setIsActive] = useState(null);

    useEffect(()=>{
    const fetchData=async()=>{
        try {
            const response = await fetch(`https://valorant-api.com/v1/agents`);
            const data = await response.json();
            setAgents(data.data)
        } catch (error) {
            console.error(error)
        }
    }
    fetchData()
    },[])

    const fetchSelectedAgent=async(uuid:any)=>{
        try {
            const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
            const data = await response.json();
            setSelectAgent(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
        <div className='w-full h-[100vh] '>
        <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover object-center'>
                <source src='https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            <div className='max-w-[80vw] mx-auto relative z-10'>
                <div className='grid grid-cols-7'>

                <div className='col-span-3 overflow-y-auto no-scrollbar h-[100vh] flex flex-col' style={{ overflowY: 'scroll', scrollbarWidth: 'none',  }}>
                    {agents.map((agent, index)=>(
                        <motion.div key={agent.id}
                                    className={twMerge(`flex`, 
                                    isActive === agent.uuid? 'text-red pt-0': 'text-white')} 
                                    >
                            <p className='text-2xl font-bold h-fit'>
                                    {index +1}
                            </p>
                            <motion.p 
                               className='font-bold text-[12vh] ml-3'
                                onClick={()=>{fetchSelectedAgent(agent.uuid); setIsActive(agent.uuid)}}
                                animate={{ x:0 }} 
                                whileHover={{ x: '40px' }} 
                                >
                                
                                {agent.displayName}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
                <div className='col-span-4 '>
                    <div className='w-full h-full mt-10'>
                        <p></p>
                    {selectAgent ? (
                        <motion.div className='shadow-lg shadow-slate-800 rounded-2xl h-[90vh] w-full p-6 bg-white'
                            initial={{opacity:0, y:6}}
                            animate={{opacity:1, y:1, }}
                            transition={{duration:1}}  
                        >
                            <motion.div className='grid grid-cols-7 gap-4' key={selectAgent.uuid}>
                                <motion.div className='col-span-4 rounded-xl  bg-red '
                                    initial={{  opacity:0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}>
                                        <img src={selectAgent.fullPortraitV2}  alt={selectAgent.displayName} className='w-full absolute z-40'/>
                                        <img src={selectAgent.background}  alt={selectAgent.displayName} className=''/>

                                </motion.div>
                                <div className='col-span-3 '>

                                    <motion.div className='rounded-xl  bg-grey p-4 mb-4'
                                        initial={{ x: 10, opacity:0 }}
                                        animate={{ x: 0, opacity:1 }}
                                        transition={{ duration: 0.5, delay:0.8 }}>
                                            <div className='bg-black flex flex-col items-center justify-center rounded-lg w-full h-[40%]'>
                                                <img src={selectAgent.role.displayIcon}  alt={selectAgent.displayName} className='p-3'/>
                                                <p className='text-white mx-auto '>{selectAgent.role.displayName}</p>
                                            </div>
                                            <p className='text-black mt-2'>{selectAgent.role.description}</p>

                                    </motion.div>
                                    <motion.div className='col-span-7 rounded-xl  bg-black p-4'
                                        initial={{ x: 10, opacity:0 }}
                                        animate={{ x: 0, opacity:1 }}
                                        transition={{ duration: 0.5, delay:0.8 }}>
                                        <p className='text-white '>{selectAgent.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                            
                        </motion.div>
                    ):(
                    <div className=''>
                    <motion.div
                        animate={{ y: [-10, 10, -10]}}
                        transition={{ opacity:1, duration: 2, repeat: Infinity }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}

                    >
                        <img
                            src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                            width={700}
                            height={700}
                            alt="Picture of the author"
                        />
                        </motion.div>
                    </div>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
        {selectAgent && (

        <SkillSection abilities={selectAgent.abilities} />
        )}
        </>
    )
}
export default Agents