import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import { FaHome,FaInfo, FaGrunt, FaMap } from "react-icons/fa";

const NavbarItem = () => {

    interface list {
        label: string,
        link: string,
        icon: any,
    }

    const Navlist: list[] = [
        {
            label: 'Home',
            icon: FaHome,
            link: '/'
        },
        {
            label: 'News',
            icon: FaInfo,
            link: '/News'
        },
        {
            label: 'Agent',
            icon: FaGrunt,
            link: '/Agents'
        },
        {
            label: 'Map',
            icon: FaMap,
            link: '/'
        },
    ]

    const navContainer = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                delayChildren: 0.05,
                staggerChildren: -1
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

    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <div className="relative">
            <motion.div
                className="top-0 left-0 right-0 max-w-[200px] h-full bg-black"
                initial="hidden"
                animate={"visible"}
                exit="hidden"
                variants={navContainer}
            >
                <div className=" p-4 ">
                    <ul>
                        {Navlist.map((item, index) => (
                            <motion.li
                                className="p-3 relative my-5"
                                variants={navItem}
                                key={index}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >                                
                            <Link href={item.link}>
                                    <p className="text-lg text-white hover:text-red  flex flex-col items-center">
                                        <span className="text-[24px]"><item.icon /></span>
                                        {hoveredItem === index && (
                                            <motion.p
                                                className=" font-semibold mt-5 text-[14px]"
                                                initial={{ opacity: 0, y: -10, rotate:0 }}
                                                animate={{ opacity: 1, y: 0 , rotate:90}}
                                                exit={{ opacity: 0, y: -10, rotate:0 }}
                                            >
                                                {item.label}
                                            </motion.p>
                                        )}
                                    </p>
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
