import React from 'react';
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
    if (!project) return null;

    return (
        <div className="project-details">
            <h3 className="details-title">{project.title}</h3>

            <div className="details-content">
                <div className="details-summary">
                    <p>{project.summary}</p>

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="details-links">
                            <h3>Project Links</h3>
                            <div className="links-container">
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-button"
                                    >
                                        {getLinkIcon(link.type)}
                                        <span>{link.label || link.type}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Key Features */}
                    {project.features && project.features.length > 0 && (
                        <div className="details-features">
                            <h3>Key Features</h3>
                            <ul>
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies */}
                    {project.tags && project.tags.length > 0 && (
                        <div className="details-technologies">
                            <h3>Technologies</h3>
                            <div className="tags-container">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="details-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;