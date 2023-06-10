import React  from 'react';
import './App.css';

function Footer() {
    return(
        <>
        <div className='footerSection'>
            <div className='footerWrapper'>
            <div className='footerOne'>
            <div className='footerNavigation'>
            <ul>
            <li>Top of Page</li>
            <li>Skills</li>
            <li>Projects</li>
            <ul>
            <li>Game Shop</li>
            <li>Tic Tac Toe</li>
            <li>Weather App</li>
            </ul>

            </ul>
            </div>

            </div>
        
            <div className='footerTwo'>
                <div className='footerAbout'>
                <h3>About</h3>
                <p>Currently I'm not looking for work. But i'm continuously improving my skills and yadayada</p>
                <div className='social-icons'>
                <a href='https://www.linkedin.com/in/brett-morrison-1309a7205'><img src='images/LI-In-Bug.png' className='footerLogo small'/></a>
                <a href='https://github.com/BrettM265'><img src='images/github-mark-white.png' className='footerLogo small'/></a>
                <a href='https://github.com/BrettM265'><img src='images/github-mark-white.png' className='footerLogo small'/></a>
                <a href='https://github.com/BrettM265'><img src='images/github-mark-white.png' className='footerLogo small'/></a>
                </div>

                </div>
            </div>
            </div>
            <div className='footer-bottom'>
            <img src='/images/logo192.png' className='footerLogo small'/>
            <p>This Portfolio was built using React.js</p>
            </div>
        </div>
        </>
    )
    }

    export default Footer