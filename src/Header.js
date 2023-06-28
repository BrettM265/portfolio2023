import React  from 'react';

function Header() {
    return (
        <div className='headerSection' id="header">
            <img src='images/logo small.png' className='headerLogo' />
            <div className='headerSectionImage'>
                <img src='images/logo small.png' className='headerImage' />
                <h1>Brett Morrison</h1>
                <h2>Web Dev II</h2>
            </div>
            <div className='navContainer'>
                <a className='navButtons' href="#experience">Experience</a>
                <div className='navDivider'></div>
                <a className='navButtons' href="#skills">Skills</a>
                <div className='navDivider'></div>
                <a className='navButtons' href="#projects">Projects</a>
                <div className='navDivider'></div>
                <a className='navButtons' href="https://github.com/BrettM265?tab=repositories">Github</a>
                <div className='navDivider'></div>
                <a className='navButtons' href="#footer">Contact</a>
            </div>
        </div>
        
    )
}

export default Header;