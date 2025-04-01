import {useCallback, useEffect, useState, useRef, lazy, Suspense} from 'react';
import './App1.css';
import reactLogo from '../assets/yadnyesh.jpg'
import NavigationBar from '../smallcomponents/NavigationBar.jsx';
import SocialIcons from '../smallcomponents/SocialIcons.jsx';
import ShaderModel from '../smallcomponents/ShaderModel.jsx'
import {Cloud, Code2, Database, Loader2, Wrench} from "lucide-react";
import { useSharedCarousel } from '../hooks/useSharedCarousel.js';
import awsCert from '../assets/certifications/aws-educate-introduction-to-cloud-101.webp'
import githubCert from '../assets/certifications/github-foundations.webp'
import fdc3Cert from '../assets/certifications/lfel1000-introduction-to-fdc3.webp'
import openSourceCert from '../assets/certifications/lfd137-open-source-contribution-in-finance.webp'
import devopsCert from "../assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.webp";
import { Canvas } from '@react-three/fiber'
import {Html, OrbitControls, Stage} from '@react-three/drei'
// Import ProjectCarousel and ProjectDetails normally as they don't contain heavy 3D components
import ProjectCarousel from './project/ProjectCarousel.jsx';
import ProjectDetails from './project/ProjectDetails.jsx';
// Import the projects data
import projectsData from './project/projectsData.js';
import keyboardLightImage from '../assets/project-section-light-theme/keyboardlight.webp';
import keyboardDarkImage from '../assets/project-section-dark-theme/keyboarddark.webp';

// Lazy load the Model component
const Model = lazy(() => import('./project/Model.jsx').then(module => ({
  default: module.Model
})));

function Loader() {
  return (
      <Html center>
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 z-50">
          <div className="text-center">
            <Loader2 className="animate-spin mx-auto mb-4 text-blue-500 dark:text-blue-300" size={48} />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Loading...
            </p>
          </div>
        </div>
      </Html>
  );
}

// Create a separate component for the 3D model section to better handle loading
// eslint-disable-next-line react/prop-types
const ModelSection = ({ laptopOpen, currentProjectImage, isDarkMode }) => {
  const ref = useRef();
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // Set a timeout to indicate when model should be visible
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsModelLoaded(true);
    }, 500);

    return () => clearTimeout(loadTimer);
  }, []);

  return (
      <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0.8, 0.6, 3.5] }}
          style={{
            width: '50%',
            height: '50%',
            maxHeight: '100%',
            minWidth:'100%',
            opacity: isModelLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onPointerDownCapture={(e) => e.stopPropagation()}
          onWheelCapture={(e) => e.stopPropagation()}
      >
        <Suspense fallback={<Loader />}>
          <Stage
              controls={ref}
              preset="rembrandt"
              intensity={1}
              environment="city"
              shadows={false}
              adjustCamera={false}
          >
            <Model
                isOpen={laptopOpen}
                screenImage={currentProjectImage}
                keyboardImage={isDarkMode ? keyboardDarkImage : keyboardLightImage}
            />
          </Stage>
          <OrbitControls ref={ref} target={[0, 0.6, 0]}/>
        </Suspense>
      </Canvas>
  );
};

const App1 = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [scrollY, setScrollY] = useState(0);
  const [circleSize, setCircleSize] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 200, y: 200 });
  const [hoveredElementType, setHoveredElementType] = useState('default');
  const [activeProject, setActiveProject] = useState('default');
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [currentProjectImage, setCurrentProjectImage] = useState(projectsData.crossdocs.image); // Default image
  const [shouldRenderModel, setShouldRenderModel] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projects = projectsData;

  // Implement Intersection Observer to load model only when in viewport
  useEffect(() => {
    // Create observer for the project section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only start loading the 3D model when the project section is in view
        if (entry.isIntersecting) {
          setShouldRenderModel(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible

    // Observe the project section
    const projectSection = document.querySelector('.project-section');
    if (projectSection) {
      observer.observe(projectSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Function to check dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Observer for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeProject && projects[activeProject]) {
      // Select image based on dark mode
      const projectImage = isDarkMode
          ? projects[activeProject].darkImage || projects[activeProject].image
          : projects[activeProject].image;
      setCurrentProjectImage(projectImage);
    }
  }, [activeProject, isDarkMode]);

  useEffect(() => {
    let animationId;
    let currentSize = circleSize;
    // Set different target sizes based on the hovered element type
    let targetSize = isAnimating
        ? (hoveredElementType === 'intro' ? 120 :
            hoveredElementType === 'certificate' ? 200 :
                hoveredElementType === 'quote' ? 180 :
                    hoveredElementType === 'project' ? 250 :
                        250) // Default size for other elements
        : 0;

    const animate = () => {
      if (currentSize !== targetSize) {
        // Use the same animation speed for both growing and shrinking
        // Using a smaller value creates a smoother transition
        const delta = isAnimating
            ? Math.min(5, (targetSize - currentSize) * 0.1) // Growing
            : Math.max(-5, (targetSize - currentSize) * 0.1); // Shrinking

        // Ensure we make at least minimal progress each frame to avoid stalling
        const minStep = isAnimating ? 0.5 : -0.5;
        const effectiveDelta = Math.abs(delta) < Math.abs(minStep) ? minStep : delta;

        currentSize = currentSize + effectiveDelta;

        // Ensure we never go below 0 or above max size
        currentSize = Math.max(0, Math.min(250, currentSize));

        setCircleSize(currentSize);

        // Continue animation if we haven't reached target
        if (Math.abs(currentSize - targetSize) > 0.5) {
          animationId = requestAnimationFrame(animate);
        } else {
          // Snap to exact target when we're very close
          setCircleSize(targetSize);
        }
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAnimating, hoveredElementType, circleSize]);


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
    const projectSection = document.querySelector('.project-section');
    if (projectSection) {
      const rect = projectSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 &&
          rect.bottom > window.innerHeight * 0.25;
      setLaptopOpen(isVisible);
    }
  }, []);

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

  const handleTextHover = (elementType = 'default') => {
    setIsAnimating(true);
    setHoveredElementType(elementType);
  };

  const handleTextLeave = () => {
    setIsAnimating(false);
    // We keep the element type when leaving to maintain the same
    // proportional shrinking as growing
  };

  const handleProjectClick = (projectId) => {
    // If clicking the same project, deselect and go to default
    setActiveProject(prevProject =>
        prevProject === projectId ? 'default' : projectId
    );

    // Ensure laptop is open when a project is selected or when in default state
    setLaptopOpen(true);
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


  return (
      <div className="app1-container" onMouseMove={handleMouseMove}>
        <NavigationBar
            githubUrl="https://github.com/yadnyeshkolte"
            blogUrl="https://yadnyeshkolte.github.io/blog/"
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
              <ShaderModel/>
            </div>
            <section className="section intro-section">
              <div className="intro-quote-side">
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
                  <p className="intro-description hoverable" onMouseEnter={() => handleTextHover('intro')} onMouseLeave={handleTextLeave}>
                    Motivated Software Engineer with expertise in developing and deploying
                    high-quality solutions. Proficient in full stack development, AI
                    integration, and continuous delivery
                  </p>
                  <SocialIcons/>
                </div>
              </div>
            </section>
            <section className="section project-section">
              {/* Project details sidebar - 20% width */}
              <div className="project-info">
                <ProjectDetails project={projects[activeProject]} />
              </div>

              {/* Container for 3D model and carousel - 80% width */}
              <div className="project-display-container">
                {/* Carousel area - 10% height */}
                <div className="project-carousel-container">
                  <ProjectCarousel
                      projects={projects}
                      activeProject={activeProject}
                      onProjectChange={handleProjectClick}
                  />
                </div>
                {/* 3D model area - 90% height */}
                <div className="project-model-view">
                  {shouldRenderModel ? (
                      <ModelSection
                          laptopOpen={laptopOpen}
                          currentProjectImage={currentProjectImage}
                          isDarkMode={isDarkMode}
                      />
                  ) : (
                      <div className="model-placeholder flex items-center justify-center h-full">
                        <Loader2 className="animate-spin text-blue-500 dark:text-blue-300" size={48} />
                      </div>
                  )}
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
                      <div className={`cert-card ${isTransitioning ? 'transitioning' : ''}`} onMouseEnter={() => handleTextHover('certificate')} onMouseLeave={handleTextLeave}>
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