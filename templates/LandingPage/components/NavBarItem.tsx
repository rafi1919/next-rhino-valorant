import { useState } from "react";
import Link from "next/link";
import {motion} from 'framer-motion'


const NavbarItem = () => {

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
         delayChildren: 0.2,
         staggerChildren:0.07
        }
      },
      hidden: {
        opacity:0,
        transition:{
            delayChildren: 0.05,
            staggerChildren:-1
        }
      }
    };

    const navItem = {
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        hidden: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        }
      };
  return (
    <div className="relative">

        <motion.div 
          className="top-0 left-0 right-0 max-w-[200px] h-full bg-white"
          initial="hidden"
          animate={"visible"}
          exit="hidden"
          variants={navContainer}          >
        <div className=" p-4 pr-0">
          <ul>
          {Navlist.map((item, index) => (
                <motion.li className="bg-white hover:bg-slate-50 p-1 rounded-l-md my-5"variants={navItem} key={index}>

                  <Link href={item.link}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
          </ul>
        </div>
        </motion.div>
    </div>
  );
};

export default NavbarItem;
