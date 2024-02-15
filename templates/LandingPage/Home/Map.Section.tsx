import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";
// import localFont from "next/font/local"

// const myFont = localFont({src: 'public/font/FontsFree-Net-Tungsten-Bold.ttf'})
const MapSection =()=>{
    const {scrollYProgress: CompleteProgress} = useScroll()


    return(
        <div className="w-full h-[100vh] bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png')] bg-cover bg-center">
            <div className="bg-black h-full w-[1px] ml-[11%] absolute"></div>

            <div className="max-w-[80vw] mx-auto">
                <div className="pt-[10%]">
                    {/* <div className="flex justify-end">
               
                      <motion.div
                        className=" bg-white w-[100px] origin-right h-[1px]"
                        style={{ scaleX: CompleteProgress }}
                        />
                    </div> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:mx-6 mx-2">
                    <div className="">
                            <h3 className='text-black text-[6vw] font-bold'>MAPS</h3>
                            <div className="w-[400px]">
                                <p className="text-blackGrey text-sm w-[300px]">Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen bersenjatakan kemampuan yang adaptif, tangkas, dan mematikan untuk membuktikan keahlian menembakmu. Sejalan dengan berbedanya kepiawaian dalam menembak, begitu pula di sini; tak akan ada Agen dengan karakteristik sama.</p>
                            </div>
                            <Button text="Maps" variant="red"/>

                        </div>
                        <div className="">
                            {/* <Image
                                src="/img/valorant-jett-and-phoenix.png"
                                width={700}
                                height={700}
                                alt="Picture of the author"
                            /> */}
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>

    )
};
export default MapSection