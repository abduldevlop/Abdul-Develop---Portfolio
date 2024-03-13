import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [succses, setSuccses] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xi89fmi",
        "template_44qad5i",
        form.current,
        "iok5yHbnlYq8YALF6"
      )
      .then(
        (result) => {
          setSuccses(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <>
      <div className=" sm:block xl:flex justify-around mt-[-100px]">
        <div>
          <h1 className={styles.heroHeadText}>
            Let's Work <br /> together
          </h1>
          <h3 className="mt-2 font-bold text-xl text-white">Mail</h3>
          <span className="text-[14px]">
            <a href="mailto: abduldevelop@gmail.com">abduldevelop@gmail.com</a>
          </span>
          <h3 className="mt-2 font-bold text-xl text-white">Phone</h3>
          <a href="tel:9339254656" className="text-[14px]">
            9339254656
          </a>
        </div>
        <div className="flex flex-row mt-10 ">
          <form ref={form} onSubmit={sendEmail} className="mx-auto">
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className=" sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />
            <br />
            <input
              type="text"
              required
              name="email"
              placeholder="Email"
              className="sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] my-5 bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />
            <br />

            <textarea
              rows={8}
              type="text"
              required
              name="message"
              placeholder="Message"
              className="sm:w-[200px] w-full  py-3 px-4 xl:w-[350px] my-5 bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none "
            />
            <br />
            {error && (
              <span className="text-red-500 px-2 text-center">
                Something went't wrong
              </span>
            )}
            {succses && (
              <span className="text-green-500 px-2 text-center">
                Successfull send email
              </span>
            )}
            <br />
            <button
              type="submit"
              className="py-3 px-4 w-[250px] xl:w-[350px] bg-transparent  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-xl outline-none border-none  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
