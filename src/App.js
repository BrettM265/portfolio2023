import React  from 'react';
import {motion} from "framer-motion/dist/framer-motion";
import './App.css';
import IntroSection from './introduction';
import AboutSection from './about-section';
import ProjectSection from './project-section';
import Footer from './contact-me';

function App() {
  return (
    <div className="App">
     {/*<IntroSection />*/}
      <div className='Body'>
      <AboutSection />
      <ProjectSection />
      <Footer />
      </div>
    </div>
  );
}

export default App;
