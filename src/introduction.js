import React from 'react';
import { useState } from "react";
import {motion} from "framer-motion/dist/framer-motion";
import './App.css';

const variants = {
    open: { y:-100 + 'vh'},
    closed: { y: 0},
  }

function IntroSection() {
    const [isOpen, setIsOpen] = useState(false)

    function removeIntro(){
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <motion.div className='introScreen'
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 10}}
        onClick={removeIntro}
        >
            <h1>Brett Morrison</h1>
            <motion.div className='motionTwo'>
            <h3>Web Developer</h3>
            <h4>Current Role<br />SEO Web Dev</h4>
            </motion.div>
            <motion.div className='introContinue'>
            Click To Continue
            </motion.div>
        </motion.div>
    )}

    export default IntroSection