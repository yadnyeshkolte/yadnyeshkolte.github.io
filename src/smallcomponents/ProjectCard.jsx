import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, githubUrl, onHover, onLeave }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p
                className="project-description hoverable"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {description}
            </p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                <Github size={20} />
                <span>GitHub</span>
            </a>
        </div>
    );
};

export default ProjectCard;