import React  from 'react';
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import './App.css';

function SkillsSection() {

  const data = [
    {
      id: 1,
      name: "Coding Knowledge",
      dec: "As a Front-End Developer, I have a strong understanding of HTML, CSS, and JavaScript. React.JS is my preferred framework. Working in this field has allowed me to gain a strong understanding of the fundamentals of coding. I've been exposed to Liquid, PHP, and Hosting Management.",
      image: "./images/logo192.png",
    },
    {
      id: 2,
      name: "Leadership Skills",
      dec: "I have a significant amount of Leadership experience. Before I began my career in Web Development, I was a Manager at my colleges gym. In my current role, I've been fortunate to lead the frontend development of an internal application. I also teach my coworkers about Javascript on a bi-weekly basis.",
      image: "./images/leadership-image-1.png",
    },
    {
      id: 3,
      name: "CMS Expertise",
      dec: "In my current role I work in an expansive amount of CMS's. I have a strong understanding of Shopify, Wordpress, Webflow, and Bigcommerce. I've also worked in various other CMS's, providing me with a strong understanding of the fundamentals of CMS's.",
      image: "./images/wordpress-logo.jpg",
    },
    {
      id: 4,
      name: "Past | Present | Future",
      dec: "In college my studies focused on I.T. I discovered a passion for Web Development and decided to pursue it as a career. I've been working in the field for 2 years now and I'm excited to see what the future holds. Expanding my knowledge and skillset is a top priority. I plan to further my understanding of frontend development and eventually transition into a Full-Stack Developer.",
      image: "./images/future-image.png",
    },
  ];
    
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();
  // animation for list
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 40,
      opacity: 1,
    },
  };

  //  animation for  popup

  const variants = {
    visible: {
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: -100,
      x: 0,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };
  return (
    <section className="skillsSection">
    <div className='sectionTitle' id='skills'>SKILLS</div>
    <div className='ul-container'>
      <motion.ul
        style={{
          filter: show ? "blur(1px)" : "none",
        }}
        className="ul-about"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {data.map((cval) => {
          return (
            <>
              <motion.li
                layout
                className='card-item'
                onClick={() => {
                  setShow(!show);
                  setinfo(cval);
                }}
                variants={item}
              >
                <div
                  className="">
                  <h3>
                    {cval.name}
                  </h3>
                  <img src={cval.image} className="about-image" />
                  <p>Click For More</p>
                </div>
              </motion.li>
            </>
          );
        })}
      </motion.ul>
      </div>
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className="about-item"
              onClick={() => {
                setShow(!show);
              }}
              variants={variants}
              animate={show ? "visible" : "hidden"}
              exit={{ scale: 1, opacity: 0 }}
            >
              <h1 className="card-title"> {info.name}</h1>
              <p className="card-text">{info.dec}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection