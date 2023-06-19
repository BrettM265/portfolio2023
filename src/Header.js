import React  from 'react';

function Header() {
    return (
        <div className='headerSection'>
            <div className='headerSectionImage'>
                <img src='images/logo small.png' className='headerLogo' />
                <h1>Brett Morrison</h1>
                <h2>Web Dev II</h2>
            </div>
            <div className='navContainer'>
                <button className='navButtons'>Back To Top</button>
                <button className='navButtons'>Skills</button>
                <button className='navButtons'>Projects</button>
                <button className='navButtons'>Contact Me</button>
            </div>
        </div>
        
    )
}

export default Header;