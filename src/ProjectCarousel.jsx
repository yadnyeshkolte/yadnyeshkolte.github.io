import React, { useState, useRef, useEffect } from 'react';
import './ProjectCarousel.css';

const ProjectCarousel = ({ projects, activeProject, onProjectChange }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Smoother scrolling to active project
    const scrollToActiveProject = (projectId, smooth = true) => {
        if (!carouselRef.current) return;

        const activeElement = carouselRef.current.querySelector(`[data-project-id="${projectId}"]`);
        if (!activeElement) return;

        const containerWidth = carouselRef.current.offsetWidth;
        const cardLeft = activeElement.offsetLeft;
        const cardWidth = activeElement.offsetWidth;

        // Center the active card
        const targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        if (smooth) {
            carouselRef.current.scrollTo({
                left: targetScrollLeft,
                behavior: 'smooth'
            });
        } else {
            carouselRef.current.scrollLeft = targetScrollLeft;
        }
    };

    // Mouse events for drag scrolling - using smoother approach
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
        // Change cursor style
        carouselRef.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Restore cursor style
        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Reduced for smoother movement
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile - smoother implementation
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
        const walk = (x - startX) * 1.5; // Reduced for smoother movement
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    // Handle project change with smooth transition
    const handleProjectClick = (id) => {
        if (id === activeProject) return;

        setIsTransitioning(true);
        onProjectChange(id);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 400); // Match to transition duration
    };

    // Scroll to active project when it changes
    useEffect(() => {
        if (activeProject) {
            scrollToActiveProject(activeProject);
        }
    }, [activeProject]);

    // Initial scroll to active project on mount (without smooth scrolling)
    useEffect(() => {
        if (activeProject) {
            scrollToActiveProject(activeProject, false);
        }
    }, []);

    return (
        <div
            className={`project-carousel ${isTransitioning ? 'transitioning' : ''}`}
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
                    onClick={() => handleProjectClick(id)}
                >
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectCarousel;