import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";
const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>
      <div className="w-full flex">
        <p className="className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <div className="p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
              <img
                src={project.image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer"
                >
                  <Link to={project.source_code_link}>
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain m-auto"
                    />
                  </Link>
                </div>

                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center ml-5 cursor-pointer"
                >
                  <Link to={project.live_web_url}>
                    <img
                      src={live}
                      alt="source code"
                      className="w-10 h-10 object-contain m-auto rounded-full bg-transparent "
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">
                {project.name}
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
