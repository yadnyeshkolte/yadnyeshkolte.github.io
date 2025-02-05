import {useCallback, useEffect, useState} from 'react';
import NavigationBar from './smallcomponents/NavigationBar';
import './App1.css';
import reactLogo from './assets/yadnyesh.jpg'
import SocialIcons from './smallcomponents/SocialIcons';
import ShaderBackground from './ShaderBackground.jsx'
import ProjectCard from "./smallcomponents/ProjectCard.jsx";
import {Cloud, Code2, Database, Wrench} from "lucide-react";
import { useSharedCarousel } from './hooks/useSharedCarousel';
import awsCert from './assets/certifications/aws-educate-introduction-to-cloud-101.png'
import githubCert from './assets/certifications/github-foundations.png'
import fdc3Cert from './assets/certifications/lfel1000-introduction-to-fdc3.png'
import openSourceCert from './assets/certifications/lfd137-open-source-contribution-in-finance.png'
import devopsCert from "./assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.png";


const App1 = () => {

  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [scrollY, setScrollY] = useState(0);
  const [circleSize, setCircleSize] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 200, y: 200 });

  useEffect(() => {
    let animationId;
    let currentSize = circleSize;
    let targetSize = isAnimating ? 250 : 0;

    const animate = () => {
      if (currentSize !== targetSize) {
        // Gradually change the size
        const delta = isAnimating ? 7 : -5; // Speed of growth/shrink
        currentSize = Math.max(0, Math.min(250, currentSize + delta));

        setCircleSize(currentSize);
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAnimating]);


  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setCirclePosition(current => ({
        x: current.x + (targetPosition.x - current.x) * 0.01,
        y: current.y + (targetPosition.y - current.y) * 0.01
      }));

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPosition]);

// In App1.jsx, modify the handleScroll function:
  const handleScroll = useCallback((e) => {
    const scrollTop = e.target.scrollTop;
    setScrollY(scrollTop);

    // Only sync scroll with App2 if not on mobile
    if (window.innerWidth > 768) {
      const app2Container = document.querySelector('.app2-container');
      if (app2Container && app2Container.scrollTop !== scrollTop) {
        app2Container.scrollTop = scrollTop;
      }
    }

    // Only update circle position if not on mobile
    if (window.innerWidth > 768) {
      const lastKnownMouseEvent = window.lastMouseEvent;
      if (lastKnownMouseEvent) {
        setTargetPosition({
          x: lastKnownMouseEvent.clientX - 50,
          y: lastKnownMouseEvent.clientY + scrollTop - 50,
        });

        setCirclePosition({
          x: lastKnownMouseEvent.clientX - 50,
          y: lastKnownMouseEvent.clientY + scrollTop - 50,
        });
      }
    }
  }, []);

// Similarly, modify handleMouseMove
  const handleMouseMove = useCallback((e) => {
    // Only handle mouse move if not on mobile
    if (window.innerWidth > 768) {
      window.lastMouseEvent = e;

      const scrollContainer = document.querySelector('.app1-scrollable');
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

      setTargetPosition({
        x: e.clientX - 50,
        y: e.clientY + scrollTop - 50,
      });

      setCirclePosition({
        x: e.clientX - 50,
        y: e.clientY + scrollTop - 50,
      });
    }
  }, []);

  const handleTextHover = () => {
    setIsAnimating(true);
  };

  const handleTextLeave = () => {
    setIsAnimating(false);
  };


  const certifications = [
    {
      id: 1,
      image: awsCert,
      title: "AWS Educate Introduction to Cloud 101",
      skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Computing", "Cloud Foundations"]
    },
    {
      id: 2,
      image: githubCert,
      title: "GitHub Foundations",
      skills: ["Build Pipeline", "Continuous Delivery", "Continuous Integration", "DevOps", "GitHub", "GitHub Actions"]
    },
    {
      id: 3,
      image: devopsCert,
      title: "LFS162: Introduction to DevOps and Site Reliability Engineering",
      skills: ["CI/CD", "Cloud Computing", "Containers", "DevOps", "IAC", "Kubernetes", "SRE"]
    },
    {
      id: 4,
      image: fdc3Cert,
      title: "LFEL1000: Introduction to FDC3",
      skills: ["Application Interoperability", "FDC3 Components", "FDC3 Standard"]
    },
    {
      id: 5,
      image: openSourceCert,
      title: "LFD137: Open Source Contribution in Finance",
      skills: ["Open Source Readiness", "Finance", "Regulation"]
    }
  ];
  const [currentCert, setCurrentCert, isTransitioning] = useSharedCarousel(certifications);

  useEffect(() => {
    console.log('Certification changed:', {
      index: currentCert,
      title: certifications[currentCert]?.title
    });
  }, [currentCert, certifications]);


  return (
      <div className="app1-container" onMouseMove={handleMouseMove}>
        <NavigationBar
            githubUrl="https://github.com/yadnyeshkolte"
            blogUrl="https://cyberconnaught.wordpress.com/"
        />
        <div className="app1-scrollable" onScroll={handleScroll}>
          <div
              className="app1-overlay"
              style={{
                '--x': `${circlePosition.x + 50}px`,
                '--y': `${circlePosition.y + 50}px`,
                '--circle-size': `${circleSize}px`,
              }}
          >
            <div className='shader'>
              <ShaderBackground/>
            </div>
            <section className="section intro-section">
              <div className="intro-quote-side">
                <div className="quote-container hoverable" onMouseEnter={handleTextHover} onMouseLeave={handleTextLeave}>
                  <blockquote className="quote">
                    Great ambition is the passion of a great character
                  </blockquote>
                  <cite className="quote-author">- Napoleon Bonaparte</cite>
                </div>
              </div>
              <div className="intro-content-side">
                <div className="content-wrapper">
                  <div className="profile-title-container hoverable">
                    <img
                        src={reactLogo}
                        alt="Profile"
                        className="profile-image"
                    />
                    <h1 className="intro-title">Yadnyesh Kolte</h1>
                  </div>
                  <p className="intro-description hoverable" onMouseEnter={handleTextHover}
                     onMouseLeave={handleTextLeave}>
                    Motivated Software Engineer with expertise in developing and deploying
                    high-quality solutions. Proficient in full stack development, AI
                    integration, and continuous delivery
                  </p>
                  <SocialIcons/>
                </div>
              </div>
            </section>
            <section className="section project-section">
              <div className="project-section-background"></div>
              <div className="project-content">
                <div className="projects-grid">
                  <ProjectCard
                      title="Cross-platform Markdown editor with AI assistance"
                      description="Developed a cross-platform Markdown editor using Kotlin Compose Multiplatform, featuring real-time preview, dark/light themes, and in-app Markdown guide. Packaged the application for Windows, macOS, Linux, and Android, ensuring native performance and seamless installation across platforms."
                      githubUrl="https://github.com/yadnyeshkolte/CrossDocs"
                      onHover={handleTextHover}
                      onLeave={handleTextLeave}
                  />
                  <ProjectCard
                      title="ESP32-Based ATM-Like Functioning Telegram Bot"
                      description="Developed a cool Telegram bot integrated with an ESP32 microcontroller to simulate advanced ATM functionalities, leveraging Java, C++, and Python to create a robust communication system for remote banking transactions. The project demonstrated programming expertise by implementing hardware-software interaction that optimized microcontroller programming methodologies."
                      githubUrl="https://gist.github.com/yadnyeshkolte/02981d86fcf5e6614c0ebf917a44949a"
                      onHover={handleTextHover}
                      onLeave={handleTextLeave}
                  />
                  <ProjectCard
                      title="Guestbook Application Deployment"
                      description="Developed a comprehensive continuous delivery pipeline leveraging Argo CD and GitOps principles for Kubernetes. The project incorporated tools like Docker, GitHub, Helm, Lens, and DateTree, facilitating efficient container orchestration and version control."
                      githubUrl="https://gist.github.com/yadnyeshkolte/5d095713c84b9f05711c9d0ed1a8080a"
                      onHover={handleTextHover}
                      onLeave={handleTextLeave}
                  />
                </div>
              </div>
            </section>
            <section className="section tech-stack-section">
              <div className="tech-container">
                <div className="content-wrapper">
                  {/* Tech Stack - 70% */}
                  <div className="tech-section">
                    <h2 className="section-title">Technical Expertise</h2>

                    <div className="tech-grid">
                      {/* Frontend */}
                      <div className="tech-card">
                        <div className="card-header">
                          <Code2/>
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
                          <Database/>
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
                          <Cloud/>
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
                          <Wrench/>
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
                      <div className={`cert-card ${isTransitioning ? 'transitioning' : ''}`} onMouseEnter={handleTextHover} onMouseLeave={handleTextLeave}>
                        <img
                            src={certifications[currentCert].image}
                            alt={certifications[currentCert].title}
                        />
                      </div>

                      <div className="carousel-dots">
                        {certifications.map((cert, index) => (
                            <button
                                key={cert.id}
                                className={`dot ${currentCert === index ? 'active' : ''}`}
                                onClick={() => setCurrentCert(index)}
                            />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
            className="peek-circle"
            style={{
              top: circlePosition.y - scrollY,
              left: circlePosition.x,
              transform: `scale(${circleSize > 0 ? 1.2 : 1})`
            }}
        ></div>
      </div>
  );
};

export default App1;