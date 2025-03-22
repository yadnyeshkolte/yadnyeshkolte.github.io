import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
    if (!project) return null;

    return (
        <div className="project-details">
            <h2 className="details-title">{project.title}</h2>

            <div className="details-content">
                <div className="details-summary">
                    <h3>Overview</h3>
                    <p>{project.summary}</p>

                    <div className="details-technologies">
                        <h3>Technologies</h3>
                        <div className="tags-container">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="details-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="details-features">
                        <h3>Key Features</h3>
                        <ul>
                            {/* Generate placeholder features based on project type */}
                            {project.title.toLowerCase().includes('markdown') && (
                                <>
                                    <li>Real-time preview of markdown content</li>
                                    <li>AI-powered writing assistance</li>
                                    <li>Cross-platform compatibility (macOS, Windows, Linux)</li>
                                </>
                            )}

                            {project.title.toLowerCase().includes('telegram') && (
                                <>
                                    <li>Secure authentication system</li>
                                    <li>Real-time transaction processing</li>
                                    <li>Integration with microcontrollers for physical interactions</li>
                                </>
                            )}

                            {(project.title.toLowerCase().includes('guestbook') ||
                                project.title.toLowerCase().includes('github') ||
                                project.title.toLowerCase().includes('lens')) && (
                                <>
                                    <li>GitOps-based deployment workflow</li>
                                    <li>Automated CI/CD pipeline</li>
                                    <li>Kubernetes-native architecture</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;