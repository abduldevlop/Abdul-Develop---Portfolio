import React from "react";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <section className=" container mx-auto py-20">
      <div className="flex flex-row flex-wrap justify-center gap-16">
        {technologies.map((tech) => (
          <div
            className="w-28 h-28 rounded-full 
           shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            key={tech.name}
          >
            <div className="flex justify-center items-center">
              <img
                src={tech.icon}
                alt="icon"
                className="w-[70px] h-[70px] mt-5"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
