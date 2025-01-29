// ProjectCard.jsx
import { useState, useEffect } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSlide = (direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const totalProjects = projects.length;

        if (direction === 'right') {
            setCurrentIndex((prev) => (prev + 1) % totalProjects);
        } else {
            setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
        }

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    const getVisibleProjects = () => {
        const visibleCount = isMobile ? 1 : 4;
        const visibleProjects = [];

        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % projects.length;
            visibleProjects.push(projects[index]);
        }

        return visibleProjects;
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={() => handleSlide('left')}>←</button>
            <button className="carousel-button right" onClick={() => handleSlide('right')}>→</button>

            <div className={`carousel-track ${isAnimating ? 'animating' : ''}`}
                 style={{ '--current-index': currentIndex }}>
                {getVisibleProjects().map((project, index) => (
                    <div className="project-card" key={`${project.name}-${index}`}>
                        <div className="icon-container">
                            <a href={project.liveUrl} className="icon-link" title="Live Demo">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                            </a>
                            <a href={project.githubUrl} className="icon-link" title="View Code">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                            </a>
                        </div>
                        <h3 className="project-title">{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="tech-container">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;