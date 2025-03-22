import React, { useState, useRef, useEffect } from 'react';
import './ProjectCarousel.css';

const ProjectCarousel = ({ projects, activeProject, onProjectChange }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse events for drag scrolling
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Scroll to active project when it changes
    useEffect(() => {
        if (carouselRef.current && activeProject) {
            const activeElement = carouselRef.current.querySelector(`[data-project-id="${activeProject}"]`);
            if (activeElement) {
                const containerWidth = carouselRef.current.offsetWidth;
                const cardLeft = activeElement.offsetLeft;
                const cardWidth = activeElement.offsetWidth;

                // Center the active card
                carouselRef.current.scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
            }
        }
    }, [activeProject]);

    return (
        <div
            className="project-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            {Object.entries(projects).map(([id, project]) => (
                <div
                    key={id}
                    data-project-id={id}
                    className={`project-card ${activeProject === id ? 'active' : ''}`}
                    onClick={() => onProjectChange(id)}
                >
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-tags">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCarousel;