import React  from 'react';

function Experience(){
    return(
        <section className='experienceSection'>
        <div className='sectionTitle' id='experience'>Experience</div>
            <div className='experienceContainer'>
                <div className='experienceleft'>
                    <h2 className='experienceTitle'>Experience</h2>
                        <p>Web Dev 2 Logical Position</p>
                        <p>Web Dev 1 Logical Position</p>
                        <p>Jr Web Dev Logical Position</p>
                        <p>Manager Harper College<br /> (2019-2020 / 2022)</p>
                        <p>Grocery Associate at Heinens<br /> (2015-2017)</p>
                        <a href=''><button className='resumeButton'>Download Resume</button></a>
                </div>
                <div className='experienceright'>
                    <h2 className='experienceTitle'>Current Role</h2>
                    <p>I'm currently a Web Dev 2 at the SEO Company Logical Position. I was hired over 2 years ago as a Junior Web Dev. After a few months I was given the opporotunity to move up to a Web Dev 1. This new role had many more responsibilities and complex troubleshooting. Eight months later I was moved up into the Web Dev 2 role.</p>
                    <p>In my Web Dev 2 role I have taken on extra responsibilities. Leading frontend development of in house applications. As well as frequent coding meetings where I help my coworkers become more familiar with Javascript and other Frontend practices.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience;