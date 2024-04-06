import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Skill = {
  abilities: {
    slot: string;
    description: string;
    displayIcon: string;
    displayName: string;
  }[];
};

const SkillSection: React.FC<Skill> = ({ abilities }) => {
  const [desc, setDesc] = useState<string>("");

  const handleDesc = (description: string) => {
    setDesc(description);
  };

  return (
    <div className="w-full bg-black h-[70vh]">
      <div className="bg-white h-[70vh] w-[1px] ml-[11%] absolute"></div>
      <div className="max-w-[80vw] mx-auto">
        <div className="flex justify-center gap-5 py-11">
          {abilities &&
            abilities.map((item) => (
              <>
                <div key={item.slot} className="cursor-pointer">
                  <motion.div
                    onClick={() => handleDesc(item.description)}
                    className={twMerge(
                      `rounded-lg p-3`,
                      desc === item.description
                        ? "shadow-red shadow-lg "
                        : "border-[1px] border-[#636363]"
                    )}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.displayIcon}
                      alt={item.displayName}
                      className="lg:w-12 lg:h-12 md:w-5 md:h-5 "
                    />
                  </motion.div>
                </div>
              </>
            ))}
        </div>
        {desc && (
          <div className="max-w-[600px] border-2 border-white p-4 rounded-lg mx-auto">
            <h1 className="text-white text-lg font-semibold p-2">Abilities</h1>
            <div className="bg-white h-[1px] w-full mx-3 "></div>
            <h1 className="text-white p-2">{desc}</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default SkillSection;
