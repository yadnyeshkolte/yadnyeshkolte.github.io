import React from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import './TechStackSection.css';

const TechStackSection = () => {
    return (
        <section className="tech-stack-section">
            <div className="tech-stack-card">
                <h2 className="tech-stack-title">Technical Expertise</h2>
                <div className="tech-stack-grid">
                    <div className="tech-stack-column">
                        <div className="tech-category">
                            <div className="category-header">
                                <Code2 />
                                <h3>Frontend Development</h3>
                            </div>
                            <div className="category-content">
                                <p className="subtitle">Languages: JavaScript, HTML5, CSS3, XAML</p>
                                <p className="subtitle">Libraries & Frameworks: React, Vite</p>
                                <p className="subtitle">UI & Styling: Compose Multiplatform, Tailwind CSS</p>
                            </div>
                        </div>

                        <div className="tech-category">
                        <div className="category-header">
                                <Database />
                                <h3>Backend Development</h3>
                            </div>
                            <div className="category-content">
                                <p className="subtitle">Languages: Java, Kotlin, Python, C++</p>
                                <p className="subtitle">Frameworks: Node.js</p>
                                <p className="subtitle">Databases: RDBMS (SQL), PostgreSQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="tech-stack-column">
                        <div className="tech-category">
                            <div className="category-header">
                                <Cloud />
                                <h3>DevOps & Cloud</h3>
                            </div>
                            <div className="category-content">
                                <p className="subtitle">Containerization & Orchestration: Docker, Kubernetes, Argo CD</p>
                                <p className="subtitle">Cloud Services: AWS, Google Cloud, Firebase</p>
                                <p className="subtitle">CI/CD & Automation: GitHub Actions, CI/CD</p>
                            </div>
                        </div>

                        <div className="tech-category">
                            <div className="category-header">
                                <Wrench />
                                <h3>Tools & Technologies</h3>
                            </div>
                            <div className="category-content">
                                <p className="subtitle">Version Control: Git, GitHub</p>
                                <p className="subtitle">Operating Systems: Linux, Windows</p>
                                <p className="subtitle">Development Methodologies: Agile, Scrum, OOP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;