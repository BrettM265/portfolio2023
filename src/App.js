import React  from 'react';
import {motion} from "framer-motion/dist/framer-motion";
import './App.css';
import IntroSection from './introduction';
import Header from './Header';
import AboutSection from './about-section';
import ProjectSection from './project-section';
import Footer from './footer';

function App() {
  return (
    <div className="App">
     {/*<IntroSection />*/}
      <Header />
      <div className='Body'>
      <AboutSection />
      <ProjectSection />
      <Footer />
      </div>
    </div>
  );
}

export default App;
