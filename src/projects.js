import React  from 'react';
import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import './App.css';

function ProjectSection() {
    return (
      <div className="projectSection">
      <div className='sectionTitle' id='projects'>PROJECTS</div>

      <div className='project-list' id='gs'>
        <div className='left-pane'>
        <a href="https://brettm265.github.io/game-shop/">
          <img src='./images/binoclassics.PNG' className='project-image'/>
          </a>
        </div>

        <div className='right-pane text-box'>
        <a href="https://brettm265.github.io/game-shop/"><h4>Game Shop</h4></a>
          <p>This is my favorite project I've created so far. Utilizing React.JS, I was able to create this pho game shop. The product filtering via price, console, and game title works seamlessly. The cart is fully functioning, allowing product removal and price tallying.</p>
          <div className='text-box-link'>
          <a href="https://brettm265.github.io/game-shop/">View Project -></a>
          <a href="https://github.com/BrettM265/game-shop">Github Project Repository -></a>
          </div>
        </div>
      </div>

      <div className='border-bottom-project'></div>

      <div className='project-list' id='ttt'>
        <div className='left-pane text-box'>
        <a href="https://brettm265.github.io/TicTacToe/"><h4>TicTacToe</h4></a>
          <p>This simple TicTacToe game was one of my original projects. I later revisited this project to make the appearance visually appealing. As well as updating the codebase to better reflect my coding knowledge today.</p>
          <div className='text-box-link'>
          <a href="https://brettm265.github.io/TicTacToe/">View Project -></a>
          <a href="https://github.com/BrettM265/TicTacToe">Github Project Repository -></a>
          </div>
        </div>

        <div className='right-pane-img'><a href='https://brettm265.github.io/TicTacToe/'>
          <img src='./images/TicTacToe-Project-Image.png' className='project-image'/></a>
        </div>
      </div>

      <div className='border-bottom-project'></div>

    <div className='project-list' id='wa'>
      <div className='left-pane'>
      <a href='https://brettm265.github.io/Weather-App/'>
        <img src='./images/Weather-App-Image.png' className='project-image'/>
        </a>
      </div>

      <div className='right-pane text-box'>
      <a href="https://brettm265.github.io/Weather-App/"><h4>Weather App</h4></a>
        <p>This Application was created utilizing the <a href="https://openweathermap.org/">OpenWeatherMap.org</a> API. The background image will change depending on the weather description.</p>
        <div className='text-box-link'>
        <a href="https://brettm265.github.io/Weather-App/">View Project -></a>
        <a href="https://github.com/BrettM265/Weather-App">Github Project Repository -></a>
        </div>
      </div>
    </div>

    </div>
    );
  }
  
  export default ProjectSection;