import { useState } from 'react';
import './ProjectSection.css';

const ProjectCard = ({ title, description, technologies, link, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`project-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="project-image-container">
                <img
                    src={image || "/api/placeholder/400/300"}
                    alt={title}
                    className="project-image"
                />
            </div>
            <div className="project-overlay">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="technology-tag">
              {tech}
            </span>
                    ))}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

const ProjectSection = () => {
    const projects = [
        {
            title: "Cloud Infrastructure Automation",
            description: "Automated cloud infrastructure deployment using Terraform and AWS, reducing deployment time by 60%",
            technologies: ["AWS", "Terraform", "Python", "Docker"],
            link: "#",
            image: "/api/placeholder/400/300"
        },
        {
            title: "CI/CD Pipeline Optimization",
            description: "Implemented and optimized CI/CD pipelines using Jenkins and GitLab CI, improving build times by 40%",
            technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
            link: "#",
            image: "/api/placeholder/400/300"
        },
        {
            title: "Microservices Architecture",
            description: "Designed and implemented microservices architecture using Spring Boot and Docker",
            technologies: ["Spring Boot", "Docker", "Kubernetes", "MongoDB"],
            link: "#",
            image: "/api/placeholder/400/300"
        },
        {
            title: "Monitoring Solution",
            description: "Set up comprehensive monitoring using Prometheus and Grafana for cloud infrastructure",
            technologies: ["Prometheus", "Grafana", "ELK Stack", "Python"],
            link: "#",
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <div className="projects-wrapper">
            <h2 className="projects-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;