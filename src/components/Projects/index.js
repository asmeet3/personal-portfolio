import { useState } from 'react';

import AnimatedLetters from '../AnimatedLetters';
import projects from './projectsData';
import './index.scss';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const projectsArray = 'Projects'.split('');

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={projectsArray}
                            idx={15}
                        />
                        <br />
                    </h1>
                    <div className='projects_spacer'></div>
                </div>
                <div className="projects-container">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    GitHub Link
                                </a>
                            </div>
                            {project.image && <img src={project.image} alt={project.title} />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
