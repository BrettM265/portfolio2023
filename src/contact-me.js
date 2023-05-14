import React  from 'react';
import './App.css';

function Footer() {
    return(
        <>
        <div className='footerSection'>
            <h2 className='footerTitle'>Contact Me</h2>
            <div className='footerOne'>

            <div className='footer-left'>
            <img src='/images/logo192.png' className='footerLogo small'/>
            <p>This Portfolio was built using React.js</p>
            </div>
            <div className='footer-left'>
            <a href='https://github.com/BrettM265'><img src='images/github-mark-white.png' className='footerLogo small'/></a>
            <a href='https://github.com/BrettM265'><p>My Github</p></a>
            </div>
            <div className='footer-left'>
            <a href='https://www.linkedin.com/in/brett-morrison-1309a7205'><img src='images/LI-In-Bug.png' className='footerLogo small'/></a>
            <a href='https://www.linkedin.com/in/brett-morrison-1309a7205'><p>My LinkedIn</p></a>
            </div>
            <div className='footer-left'>
            <a href='#'><img src='images/github-mark-white.png' className='footerLogo small'/></a>
            <p>Resume PDF</p>
            </div>

            </div>
            
            <div className='footerTwo'>
                <div className='footerAbout'>
                <img src="/images/mypic.jpg" className='small'/>
                <h3>Brett Morrison</h3>
                <h4>About</h4>
                <p>Currently I'm not looking for work. But i'm continuously improving my skills and yadayada</p>
                </div>
            </div>
        </div>
        </>
    )
    }

    export default Footer