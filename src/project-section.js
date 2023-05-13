import React  from 'react';
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import './App.css';

function ProjectSection() {
    return (
      <div className="projectSection">
      <div className='aboutTitle'>PROJECTS</div>

      <div className='project-list'>
        <div className='left-pane'>
        <a href="https://brettm265.github.io/game-shop/">
          <img src='/images/binoclassics.png' className='project-image'/>
          </a>
        </div>

        <div className='right-pane text-box'>
          <h4>Game Shop Site</h4>
          <p>test description</p>
        </div>
      </div>

      <div className='border-bottom-project'></div>

      <div className='project-list'>
        <div className='left-pane text-box'>
          <h4>TicTacToe</h4>
          <p>test description</p>
        </div>

        <div className='right-pane-img'><a href='https://brettm265.github.io/TicTacToe/'>
          <img src='/images/TicTacToe Project Image.png' className='project-image'/></a>
        </div>
      </div>

      <div className='border-bottom-project'></div>

    <div className='project-list'>
      <div className='left-pane'>
      <a href='https://brettm265.github.io/Weather-App/'>
        <img src='/images/Weather App Image.png' className='project-image'/>
        </a>
      </div>

      <div className='right-pane text-box'>
        <h4>Weather App</h4>
        <p>test description</p>
      </div>
    </div>

    </div>
    );
  }
  
  export default ProjectSection;