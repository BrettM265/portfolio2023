import React  from 'react';
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import './App.css';

function AboutSection() {

  const data = [
    {
      id: 1,
      name: "Coding Knowledge",
      dec: "test desc.",
      image: "/images/logo192.png",
    },
    {
      id: 2,
      name: "Leadership Skills",
      dec: "test desc.",
      image: "/images/leadership-image-1.png",
    },
    {
      id: 3,
      name: "CMS Expertise",
      dec: "test desc.",
      image: "/images/wordpress-logo.jpg",
    },
    {
      id: 4,
      name: "Past | Present | Future",
      dec: "test desc.",
      image: "/images/future-image.png",
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
      scale: 1.5,
      boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
      y: -100,
      x: 0,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };
  return (
    <section className="aboutBody">
    <div className='aboutTitle'>ABOUT</div>
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

export default AboutSection