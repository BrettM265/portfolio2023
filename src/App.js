import React  from 'react';
import {motion} from "framer-motion/dist/framer-motion";
import './App.css';
import IntroSection from './introduction';
import Header from './Header';
import Experience from './experience';
import SkillsSection from './skills';
import ProjectSection from './projects';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     {/*<IntroSection />*/}
      <Header />
      <div className='Body'>
      <Experience />
      <SkillsSection />
      <ProjectSection />
      <Footer />
      </div>
    </div>
  );
}

export default App;
