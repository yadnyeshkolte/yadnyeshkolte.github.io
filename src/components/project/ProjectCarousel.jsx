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
    // Handle project change with smooth transition
    const handleProjectClick = (id) => {
        // If clicking the same project, deselect (go to default)
        const newActiveProject = activeProject === id ? 'default' : id;

        setIsTransitioning(true);
        onProjectChange(newActiveProject);

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

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Function handlers
        const mouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - carousel.offsetLeft);
            setScrollLeft(carousel.scrollLeft);
            carousel.style.cursor = 'grabbing';
        };

        const mouseUp = () => {
            setIsDragging(false);
            if (carousel) {
                carousel.style.cursor = 'grab';
            }
        };

        const mouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault(); // Note: this means we can't use passive for mouseMove
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5;
            carousel.scrollLeft = scrollLeft - walk;
        };

        const touchStart = (e) => {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - carousel.offsetLeft);
            setScrollLeft(carousel.scrollLeft);
        };

        const touchEnd = () => {
            setIsDragging(false);
        };

        const touchMove = (e) => {
            if (!isDragging) return;
        };

        // Add event listeners with passive option
        carousel.addEventListener('mousedown', mouseDown, { passive: true });
        carousel.addEventListener('mouseup', mouseUp, { passive: true });
        carousel.addEventListener('mouseleave', mouseUp, { passive: true });
        carousel.addEventListener('mousemove', mouseMove); // Can't be passive due to preventDefault

        carousel.addEventListener('touchstart', touchStart, { passive: true });
        carousel.addEventListener('touchend', touchEnd, { passive: true });
        carousel.addEventListener('touchmove', touchMove, { passive: true });

        // Cleanup function
        return () => {
            carousel.removeEventListener('mousedown', mouseDown);
            carousel.removeEventListener('mouseup', mouseUp);
            carousel.removeEventListener('mouseleave', mouseUp);
            carousel.removeEventListener('mousemove', mouseMove);

            carousel.removeEventListener('touchstart', touchStart);
            carousel.removeEventListener('touchend', touchEnd);
            carousel.removeEventListener('touchmove', touchMove);
        };
    }, [isDragging, scrollLeft, startX]);

    return (
        <div
            className={`project-carousel ${isTransitioning ? 'transitioning' : ''}`}
            ref={carouselRef}
        >
            {Object.entries(projects)
                .filter(([id]) => id !== 'default') // Exclude default project
                .map(([id, project]) => (
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