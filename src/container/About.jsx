import React from "react";
import { styles } from "../styles";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

      <p className="mt-4 text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service) => (
          <div
            key={service.title}
            className="py-5 px-12 rounded-[20px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex justify-evenly items-center min-h-[280px] flex-col w-[300px] xs:w-[250px]"
          >
            <img src={service.icon} alt="icon" className="h-[80px] w[80px] " />
            <p className="text-white text-[20px] font-bold text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
