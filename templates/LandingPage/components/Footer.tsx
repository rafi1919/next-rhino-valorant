import { FaInstagram, FaFacebook, FaYoutube} from "react-icons/fa";



const Footer=()=>{
    return(
        <div className="w-full h-[60vh] bg-black">
            <div className="w-full h-[13vh] bg-blackGrey items-center  justify-center flex">
                <p className="font-semibold text-md text-white text-center p-2">
                    UNDUH GAME
                </p>
            </div>

            <div className="max-w-[700px] mx-auto flex flex-col justify-center items-center m-3 gap-y-4">
                <div className="flex gap-3">
                    <div className="p-2 rounded-[50%] bg-blackGrey w-fit">
                        <FaInstagram className="text-white text-lg" />
                    </div>
                    <div className="p-2 rounded-[50%] bg-blackGrey w-fit">
                        <FaFacebook className="text-white text-lg" />
                    </div>
                    <div className="p-2 rounded-[50%] bg-blackGrey w-fit">
                        <FaYoutube className="text-white text-lg" />
                    </div>
                </div>

                <div className="">
                    <p className="text-blackGrey text-center">just for portofolio</p>
                </div>

                <ul className="grid md:grid-cols-3 grid-cols-1 justify-items-center">
                    <li className="text-white hover:bg-blackGrey bg-none p-2 rounded-md w-fit font-semibold">
                        KENIJAKAN PRIVASI
                    </li>
                    <li className="text-white hover:bg-blackGrey bg-none p-2 rounded-md w-fit font-semibold">
                        KETENTUAN PENGGUNAAN
                    </li>
                    <li className="text-white hover:bg-blackGrey bg-none p-2 rounded-md w-fit font-semibold">
                        REFRENSI COOKIE
                    </li>
                </ul>
            </div>

        </div>
    )
};

export default Footer