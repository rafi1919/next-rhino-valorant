import { useState } from "react";
import Link from "next/link";
import {motion, AnimatePresence} from 'framer-motion'
import { BsGrid3X3GapFill, BsList } from 'react-icons/bs';
import NavbarItem from "./NavBarItem";

const Navbar = () => {
    const [navbarOpen, isNavBarOpen] = useState(false);

    const toggleNavbar=()=>{
        isNavBarOpen(!navbarOpen)
    }

    interface list {
      label: string,
      link: string,
    }

    const Navlist:list[] =[
      {
        label:'Home',
        link:'/'
      },
      {
        label:'About',
        link:'/about'
      },
      {
        label:'Agent',
        link:'/'
      },
      {
        label:'Map',
        link:'/'
      },
    ]

    const navContainer ={
      visible: {
        opacity:1,
        x:0,
        transition: {
          duration: 0.3,
          ease:"easeOut"
        }
      },
      hidden: {
        opacity:0,
        x:"-100%",
        transition:{
          duration: 0.3,
          ease:"easeIn"

        }
      }
    };
  return (
    <div className="relative z-10">
        <div className="fixed rounded-full h-[40px] w-[40px] flex items-center justify-center m-11 bg-black">
        <BsGrid3X3GapFill onClick={toggleNavbar} className="fixed text-white font-lg" size = '30px'/>
        </div>
        <AnimatePresence>
        {navbarOpen ? (
        <motion.div 
          className="fixed top-0 left-0 w-[70px] h-[90vh] bg-black rounded-full m-7"
          initial="hidden"
          animate={navbarOpen  ? "visible" : "hidden"}
          exit="hidden"
          variants={navContainer} >
        <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center m-4 bg-white">
          <BsList onClick={toggleNavbar} size = '30px'/>
        </div>
       <NavbarItem />
        </motion.div>

        ):null}
        </AnimatePresence>
    </div>
  );
};

export default Navbar;
