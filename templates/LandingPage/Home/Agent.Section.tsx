import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";

// import localFont from "next/font/local"

// const myFont = localFont({src: 'public/font/FontsFree-Net-Tungsten-Bold.ttf'})
const AgentSection =()=>{
    const {scrollYProgress: CompleteProgress} = useScroll()


    return(
        <div className="w-full md:h-[90vh] h-[100%] bg-red overflow-y-hidden">
            <div className="bg-white h-full w-[1px] ml-[11%] absolute"></div>

            <div className="max-w-[80vw] mx-auto">
                <div className="pt-[10%]">
                    {/* <div className="flex justify-end">
               
                      <motion.div
                        className=" bg-white w-[100px] origin-right h-[1px]"
                        style={{ scaleX: CompleteProgress }}
                        />
                    </div> */}
                    <div className="md:grid flex md:grid-cols-2 lg:grid-cols-2 flex-col-reverse md:mx-6 mx-2">
                        <div className="">
                            <Image
                                src="/img/valorant-jett-and-phoenix.png"
                                width={700}
                                height={700}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-black text-[6vw] font-bold'>AGENTS</h3>
                            <div className="w-[300px]">
                                <p className="text-white text-sm">Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen bersenjatakan kemampuan yang adaptif, tangkas, dan mematikan untuk membuktikan keahlian menembakmu. Sejalan dengan berbedanya kepiawaian dalam menembak, begitu pula di sini; tak akan ada Agen dengan karakteristik sama.</p>
                            </div>
                            <Button  variant="white" text="Lihat semua agent"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default AgentSection