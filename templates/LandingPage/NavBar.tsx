import { useState } from "react";
import Link from "next/link";
import {motion, AnimatePresence} from 'framer-motion'
import { BsGrid3X3GapFill, BsList } from 'react-icons/bs';
import NavbarItem from "./components/NavBarItem";

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
        transition: {
          x: {valocity: 100},
          duration: 0.3
        }
      },
      hidden: {
        opacity:0,
        transition:{
          x:{velocity: 100},
          duration: 0.3
        }
      }
    };
  return (
    <div className="relative">
        <BsGrid3X3GapFill onClick={toggleNavbar} className="fixed text-white font-lg m-5 z-100" size = '30px'/>
        <AnimatePresence>
        {navbarOpen ? (
        <motion.div 
          className="fixed top-0 left-0 right-0 max-w-[200px] h-full bg-white"
          initial="hidden"
          animate={navbarOpen  ? "visible" : "hidden"}
          exit="hidden"
          variants={navContainer}          >
        <BsList onClick={toggleNavbar} className="m-5"   size = '30px'/>
       <NavbarItem />
        </motion.div>

        ):null}
        </AnimatePresence>
    </div>
  );
};

export default Navbar;
