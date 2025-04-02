import {useCallback, useEffect, useState, useRef, lazy, Suspense} from 'react';
import './App1.css';
import reactLogo from '../assets/yadnyesh.jpg'
import NavigationBar from '../smallcomponents/NavigationBar.jsx';
import SocialIcons from '../smallcomponents/SocialIcons.jsx';
import {Cloud, Code2, Database, Loader2, Wrench} from "lucide-react";
import { useSharedCarousel } from '../hooks/useSharedCarousel.js';
import awsCert from '../assets/certifications/aws-educate-introduction-to-cloud-101.webp'
import githubCert from '../assets/certifications/github-foundations.webp'
import fdc3Cert from '../assets/certifications/lfel1000-introduction-to-fdc3.webp'
import openSourceCert from '../assets/certifications/lfd137-open-source-contribution-in-finance.webp'
import devopsCert from "../assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.webp";
// Import ProjectCarousel and ProjectDetails normally as they don't contain heavy 3D components
import ProjectCarousel from './project/ProjectCarousel.jsx';
import ProjectDetails from './project/ProjectDetails.jsx';
// Import the projects data
import projectsData from './project/projectsData.js';
import keyboardLightImage from '../assets/project-section-light-theme/keyboardlight.webp';
import keyboardDarkImage from '../assets/project-section-dark-theme/keyboarddark.webp';
import {OrbitControls, Stage} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';


// Lazy load the ShaderModel component
const ShaderModel = lazy(() => import('../smallcomponents/ShaderModel.jsx'));

// Lazy load the Model component
const Model = lazy(() => import('./project/Model.jsx').then(module => ({
  default: module.Model
})));


function Loader() {
  return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center' }}>
          <Loader2
              style={{
                animation: 'spin 1s linear infinite',
                color: '#606060'
              }}
              size={48}
          />
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#4b5563'
          }}>
            Loading...
          </p>
        </div>
      </div>
  );
}


const ModelSection = lazy(() => import('./project/Model').then(() => ({
  default: ({ laptopOpen, currentProjectImage, isDarkMode }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cameraPosition, setCameraPosition] = useState([0.1, -0.6, 3]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cameraFov, setCameraFov] = useState(50);

    // Set a timeout to indicate when model should be visible
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const loadTimer = setTimeout(() => {
        setIsModelLoaded(true);
      }, 500);

      return () => clearTimeout(loadTimer);
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Initial check
      const handleResize = () => {
        if (window.innerWidth > 1024) {
          setCameraPosition([1, -0.6, 2.5]);
          setCameraFov(50);
        } else {
          // Use your default camera position for larger screens
          setCameraPosition([0, 0, 4]); // Adjust these values as needed
          setCameraFov(45); // Adjust as needed
        }
      };

      // Set initial value
      handleResize();

      // Listen for window resize
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: cameraFov, position: cameraPosition }}
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
          <Suspense fallback={null}>
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
            <OrbitControls ref={ref} target={[0, -0.4, 0]}/>
          </Suspense>
        </Canvas>
    );
  }
})));

// Define certifications array outside the component
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
  const [shouldRenderShader, setShouldRenderShader] = useState(false);
  const projects = projectsData;

  // Use memo for heavy operations
  const animationTargetSize = useCallback(() => {
    if (!isAnimating) return 0;

    switch(hoveredElementType) {
      case 'intro': return 120;
      case 'certificate': return 200;
      case 'quote': return 180;
      case 'project': return 250;
      default: return 250;
    }
  }, [isAnimating, hoveredElementType]);

  // Implement Intersection Observer to load model only when in viewport
  useEffect(() => {
    const observerOptions = { threshold: 0.1 }; // Trigger when 10% of element is visible

    // Create observer for the project section
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only start loading the 3D model when the project section is in view
        if (entry.isIntersecting) {
          setShouldRenderModel(true);
          projectObserver.disconnect();
        }
      });
    }, observerOptions);

    // Create observer for the shader section
    const shaderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShouldRenderShader(true);
          shaderObserver.disconnect();
        }
      });
    }, observerOptions);

    // Observe the sections
    const projectSection = document.querySelector('.project-section');
    if (projectSection) {
      projectObserver.observe(projectSection);
    }

    const shaderSection = document.querySelector('.shader');
    if (shaderSection) {
      shaderObserver.observe(shaderSection);
    }

    return () => {
      projectObserver.disconnect();
      shaderObserver.disconnect();
    };
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
  }, [activeProject, isDarkMode, projects]);

  // Debounced circle animation
  useEffect(() => {
    let animationId;
    const targetSize = animationTargetSize();
    let currentSize = circleSize;

    const animate = () => {
      if (Math.abs(currentSize - targetSize) > 0.5) {
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
        animationId = requestAnimationFrame(animate);
      } else {
        // Snap to exact target when we're very close
        setCircleSize(targetSize);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isAnimating, hoveredElementType, circleSize, animationTargetSize]);

  // Throttled mouse position update
  useEffect(() => {
    let animationFrameId;
    let lastUpdateTime = 0;
    const THROTTLE_MS = 16; // Roughly 60fps

    const animate = (timestamp) => {
      if (timestamp - lastUpdateTime >= THROTTLE_MS) {
        setCirclePosition(current => ({
          x: current.x + (targetPosition.x - current.x) * 0.1,
          y: current.y + (targetPosition.y - current.y) * 0.1
        }));
        lastUpdateTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPosition]);

  // Throttled scroll handler
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
      }
    }

    // Check if project section is visible
    const projectSection = document.querySelector('.project-section');
    if (projectSection) {
      const rect = projectSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 &&
          rect.bottom > window.innerHeight * 0.25;
      setLaptopOpen(isVisible);
    }
  }, []);

  // Debounced mouse move handler
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
    }
  }, []);

  // Use a throttled version of handleMouseMove
  const throttledMouseMove = useCallback((e) => {
    if (!window.throttleTimer) {
      window.throttleTimer = setTimeout(() => {
        handleMouseMove(e);
        window.throttleTimer = null;
      }, 16); // ~60fps
    }
  }, [handleMouseMove]);

  const handleTextHover = useCallback((elementType = 'default') => {
    setIsAnimating(true);
    setHoveredElementType(elementType);
  }, []);

  const handleTextLeave = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const handleProjectClick = useCallback((projectId) => {
    // If clicking the same project, deselect and go to default
    setActiveProject(prevProject =>
        prevProject === projectId ? 'default' : projectId
    );

    // Ensure laptop is open when a project is selected or when in default state
    setLaptopOpen(true);
  }, []);

  const [currentCert, setCurrentCert, isTransitioning] = useSharedCarousel(certifications);

  return (
      <div className="app1-container" onMouseMove={throttledMouseMove}>
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
              {shouldRenderShader && (
                  <Suspense>
                    <ShaderModel />
                  </Suspense>
              )}
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
                      <Suspense fallback={<Loader />}>
                        <ModelSection
                            laptopOpen={laptopOpen}
                            currentProjectImage={currentProjectImage}
                            isDarkMode={isDarkMode}
                        />
                      </Suspense>
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