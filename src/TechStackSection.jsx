import React, { useState, useEffect } from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import './TechStackSection.css';

const TechStackSection = () => {
    const [currentCert, setCurrentCert] = useState(0);
    const [showSkills, setShowSkills] = useState(false);

    const certifications = [
        {
            id: 1,
            image: "src/assets/certifications/aws-educate-introduction-to-cloud-101.png",
            title: "AWS Educate Introduction to Cloud 101",
            skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Computing", "Cloud Foundations"]
        },
        {
            id: 2,
            image: "src/assets/certifications/gihub-foundation.png",
            title: "GitHub Foundations",
            skills: ["Build Pipeline", "Continuous Delivery", "Continuous Integration", "DevOps", "GitHub", "GitHub Actions"]
        },
        {
            id: 3,
            image: "src/assets/certifications/introduction-to-fdc3.png",
            title: "LFEL1000: Introduction to FDC3",
            skills: ["Application Interoperability", "FDC3 Components", "FDC3 Standard"]
        },
        {
            id: 4,
            image: "src/assets/certifications/open-source-contribution-in-finance.png",
            title: "LFD137: Open Source Contribution in Finance",
            skills: ["Open Source Readiness", "Finance", "Regulation"]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCert((prev) => (prev + 1) % certifications.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="tech-container">
            <div className="content-wrapper">
                {/* Tech Stack - 70% */}
                <div className="tech-section">
                    <h2 className="section-title">Technical Expertise</h2>

                    <div className="tech-grid">
                        {/* Frontend */}
                        <div className="tech-card">
                            <div className="card-header">
                                <Code2 />
                                <h3>Frontend Development</h3>
                            </div>
                            <div className="card-content">
                                <p>Languages: JavaScript, HTML5, CSS3, XAML</p>
                                <p>Libraries & Frameworks: React, Vite</p>
                                <p>UI & Styling: Compose Multiplatform, Tailwind CSS</p>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="tech-card">
                            <div className="card-header">
                                <Database />
                                <h3>Backend Development</h3>
                            </div>
                            <div className="card-content">
                                <p>Languages: Java, Kotlin, Python, C++</p>
                                <p>Frameworks: Node.js</p>
                                <p>Databases: RDBMS (SQL), PostgreSQL</p>
                            </div>
                        </div>

                        {/* DevOps */}
                        <div className="tech-card">
                            <div className="card-header">
                                <Cloud />
                                <h3>DevOps & Cloud</h3>
                            </div>
                            <div className="card-content">
                                <p>Containerization: Docker, Kubernetes, Argo CD</p>
                                <p>Cloud Services: AWS, Google Cloud, Firebase</p>
                                <p>CI/CD & Automation: GitHub Actions, CI/CD</p>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="tech-card">
                            <div className="card-header">
                                <Wrench />
                                <h3>Tools & Technologies</h3>
                            </div>
                            <div className="card-content">
                                <p>Version Control: Git, GitHub</p>
                                <p>Operating Systems: Linux, Windows</p>
                                <p>Development Methodologies: Agile, Scrum, OOP</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications - 20% */}
                <div className="cert-section">
                    <h2 className="section-title">Certifications</h2>

                    <div className="cert-carousel">
                        <div
                            className="cert-card"
                            onMouseEnter={() => setShowSkills(true)}
                            onMouseLeave={() => setShowSkills(false)}
                        >
                            <img
                                src={certifications[currentCert].image}
                                alt={certifications[currentCert].title}
                            />

                            {showSkills && (
                                <div className="skills-overlay">
                                    <h3>{certifications[currentCert].title}</h3>
                                    <div className="skills-container">
                                        {certifications[currentCert].skills.map((skill, index) => (
                                            <span key={index} className="skill-tag">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="carousel-dots">
                            {certifications.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${currentCert === index ? 'active' : ''}`}
                                    onClick={() => setCurrentCert(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackSection;