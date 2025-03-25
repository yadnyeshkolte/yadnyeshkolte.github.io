import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDetails.css';
import { Github, Globe, Box, Download, Gitlab, Cloud } from 'lucide-react';

// Helper function to get the right icon based on link type
const getLinkIcon = (type) => {
    switch (type.toLowerCase()) {
        case 'github':
            return <Github size={16} />;
        case 'gitlab':
            return <Gitlab size={16} />;
        case 'live':
            return <Globe size={16} />;
        case 'demo':
            return <Globe size={16} />;
        case 'releases':
        case 'release':
            return <Download size={16} />;
        case 'aws':
            return <Cloud size={16} />;
        default:
            return <Box size={16} />;
    }
};

const ProjectDetails = ({ project }) => {
    const [animationStage, setAnimationStage] = useState(0);
    const [currentProject, setCurrentProject] = useState(null);

    // Reset animation when project changes
    useEffect(() => {
        if (project && project !== currentProject) {
            setAnimationStage(0);
            setCurrentProject(project);
        }
    }, [project]);

    // Animate through stages
    useEffect(() => {
        let timer;
        if (project) {
            if (animationStage < 5) {
                timer = setTimeout(() => {
                    setAnimationStage(prev => prev + 1);
                }, 300); // Adjust timing as needed
            }
        }
        return () => clearTimeout(timer);
    }, [animationStage, project]);

    // If no project, return null
    if (!project) return null;

    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const descriptionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const linksVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const featuresVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2
            }
        }
    };

    const tagsVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <div className="project-details">
            <AnimatePresence mode="wait">
                {/* Title Animation */}
                {animationStage >= 1 && (
                    <motion.h3>
                        {project.title}
                    </motion.h3>
                )}

                <div className="details-content">
                    <div className="details-summary">
                        {/* Description Animation */}
                        {animationStage >= 2 && (
                            <motion.p
                                key={`description-${project.title}`}
                                initial="hidden"
                                animate="visible"
                                variants={descriptionVariants}
                            >
                                {project.summary}
                            </motion.p>
                        )}

                        {/* Project Links Animation */}
                        {animationStage >= 3 && project.links && project.links.length > 0 && (
                            <div className="details-links">
                                <h3>Project Links</h3>
                                <motion.div
                                    className="links-container"
                                    initial="hidden"
                                    animate="visible"
                                    variants={linksVariants}
                                >
                                    {project.links.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-button"
                                            initial="hidden"
                                            animate="visible"
                                            variants={linksVariants}
                                        >
                                            {getLinkIcon(link.type)}
                                            <span>{link.label || link.type}</span>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        )}

                        {/* Key Features Animation */}
                        {animationStage >= 4 && project.features && project.features.length > 0 && (
                            <div className="details-features">
                                <h3>Key Features</h3>
                                <motion.ul
                                    initial="hidden"
                                    animate="visible"
                                    variants={featuresVariants}
                                >
                                    {project.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial="hidden"
                                            animate="visible"
                                            variants={featuresVariants}
                                        >
                                            {feature}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        )}

                        {/* Technologies Animation */}
                        {animationStage >= 5 && project.tags && project.tags.length > 0 && (
                            <div className="details-technologies">
                                <h3>Technologies</h3>
                                <motion.div
                                    className="tags-container"
                                    initial="hidden"
                                    animate="visible"
                                    variants={tagsVariants}
                                >
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            className="details-tag"
                                            initial="hidden"
                                            animate="visible"
                                            variants={tagsVariants}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;