import { useCallback, useEffect, useState, useRef, lazy, Suspense } from 'react';
import './App1.css';
import reactLogo from '../assets/yadnyesh.jpg'
import NavigationBar from '../smallcomponents/NavigationBar';
import SocialIcons from '../smallcomponents/SocialIcons';
import ProgressiveImage from '../smallcomponents/ProgressiveImage';
import { Cloud, Code2, Database, Loader2, Wrench } from "lucide-react";
import { useSharedCarousel } from '../hooks/useSharedCarousel';
// Import ProjectCarousel and ProjectDetails normally as they don't contain heavy 3D components
import ProjectCarousel from './project/ProjectCarousel';
import ProjectDetails from './project/ProjectDetails';
// Import the projects data
import projectsData from './project/projectsData';
import { certificationImages, projectDarkImages, projectLightImages } from '../constants/remoteImages';
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';


// Lazy load the ShaderModel component
const ShaderModel = lazy(() => import('../smallcomponents/ShaderModel'));

// Lazy load the Model component
const Model = lazy(() => import('./project/Model').then(module => ({
  default: module.Model
})));

// Add type for window property
declare global {
  interface Window {
    lastMouseEvent: MouseEvent;
    throttleTimer: ReturnType<typeof setTimeout> | null;
  }
}

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

interface ModelSectionProps {
  laptopOpen: boolean;
  currentProjectImage: string;
  isDarkMode: boolean;
}

const ModelSection = lazy(() => import('./project/Model').then(() => ({
  default: ({ laptopOpen, currentProjectImage, isDarkMode }: ModelSectionProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef<OrbitControlsImpl>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0.1, -0.6, 3]);
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
          minWidth: '100%',
          opacity: isModelLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        onPointerDownCapture={(e) => e.stopPropagation()}
        onWheelCapture={(e) => e.stopPropagation()}
      >
        <Suspense fallback={null}>
          <Stage
            preset="rembrandt"
            intensity={1}
            environment="city"
            shadows={false}
            adjustCamera={false}
          >
            <Model
              isOpen={laptopOpen}
              screenImage={currentProjectImage}
              keyboardImage={isDarkMode ? projectDarkImages.keyboardDarkImage : projectLightImages.keyboardLightImage}
            />
          </Stage>
          <OrbitControls ref={ref} target={[0, -0.4, 0]} />
        </Suspense>
      </Canvas>
    );
  }
})));

// Define certifications array outside the component
const certifications = [
  {
    id: 1,
    image: certificationImages.awsCert,
    title: "AWS Educate Introduction to Cloud 101",
    skills: ["Amazon Web Services (AWS)", "AWS Cloud", "AWS Cloud Computing", "Cloud Foundations"]
  },
  {
    id: 2,
    image: certificationImages.githubCert,
    title: "GitHub Foundations",
    skills: ["Build Pipeline", "Continuous Delivery", "Continuous Integration", "DevOps", "GitHub", "GitHub Actions"]
  },
  {
    id: 3,
    image: certificationImages.devopsCert,
    title: "LFS162: Introduction to DevOps and Site Reliability Engineering",
    skills: ["CI/CD", "Cloud Computing", "Containers", "DevOps", "IAC", "Kubernetes", "SRE"]
  },
  {
    id: 4,
    image: certificationImages.fdc3Cert,
    title: "LFEL1000: Introduction to FDC3",
    skills: ["Application Interoperability", "FDC3 Components", "FDC3 Standard"]
  },
  {
    id: 5,
    image: certificationImages.openSourceCert,
    title: "LFD137: Open Source Contribution in Finance",
    skills: ["Open Source Readiness", "Finance", "Regulation"]
  }
];

const App1 = () => {
  // Use refs for high-frequency animation values to avoid re-renders
  const circlePositionRef = useRef({ x: 200, y: 200 });
  const scrollYRef = useRef(0);
  const circleSizeRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const targetPositionRef = useRef({ x: 200, y: 200 });
  const hoveredElementTypeRef = useRef('default');
  const peekCircleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState('default');
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [currentProjectImage, setCurrentProjectImage] = useState(projectsData.crossdocs.image);
  const [shouldRenderModel, setShouldRenderModel] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [shouldRenderShader, setShouldRenderShader] = useState(false);
  const projects = projectsData;

  // Compute target size from refs — no dependencies needed
  const getTargetSize = () => {
    if (!isAnimatingRef.current) return 0;
    switch (hoveredElementTypeRef.current) {
      case 'intro': return 120;
      case 'certificate': return 200;
      case 'quote': return 180;
      case 'project': return 250;
      default: return 250;
    }
  };

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

  // Single stable animation loop for circle position + size — runs once, reads refs
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Interpolate circle position toward target
      const pos = circlePositionRef.current;
      const target = targetPositionRef.current;
      pos.x += (target.x - pos.x) * 0.1;
      pos.y += (target.y - pos.y) * 0.1;

      // Animate circle size toward target
      const targetSize = getTargetSize();
      let currentSize = circleSizeRef.current;
      if (Math.abs(currentSize - targetSize) > 0.5) {
        const delta = isAnimatingRef.current
          ? Math.min(5, (targetSize - currentSize) * 0.1)
          : Math.max(-5, (targetSize - currentSize) * 0.1);
        const minStep = isAnimatingRef.current ? 0.5 : -0.5;
        const effectiveDelta = Math.abs(delta) < Math.abs(minStep) ? minStep : delta;
        currentSize = Math.max(0, Math.min(250, currentSize + effectiveDelta));
      } else {
        currentSize = targetSize;
      }
      circleSizeRef.current = currentSize;

      // Direct DOM updates — no React re-renders
      if (peekCircleRef.current) {
        peekCircleRef.current.style.top = `${pos.y - scrollYRef.current}px`;
        peekCircleRef.current.style.left = `${pos.x}px`;
        peekCircleRef.current.style.transform = `scale(${currentSize > 0 ? 1.2 : 1})`;
      }
      if (overlayRef.current) {
        overlayRef.current.style.setProperty('--x', `${pos.x + 50}px`);
        overlayRef.current.style.setProperty('--y', `${pos.y + 50}px`);
        overlayRef.current.style.setProperty('--circle-size', `${currentSize}px`);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Scroll handler
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (e.target as HTMLDivElement).scrollTop;
    scrollYRef.current = scrollTop;

    if (window.innerWidth > 768) {
      const app2Container = document.querySelector('.app2-container');
      if (app2Container && app2Container.scrollTop !== scrollTop) {
        app2Container.scrollTop = scrollTop;
      }
    }

    if (window.innerWidth > 768) {
      const lastKnownMouseEvent = window.lastMouseEvent;
      if (lastKnownMouseEvent) {
        targetPositionRef.current = {
          x: lastKnownMouseEvent.clientX - 50,
          y: lastKnownMouseEvent.clientY + scrollTop - 50,
        };
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

  // Mouse move — update ref directly, no state
  const throttledMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth > 768) {
      window.lastMouseEvent = e.nativeEvent;
      const scrollContainer = document.querySelector('.app1-scrollable');
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
      targetPositionRef.current = {
        x: e.clientX - 50,
        y: e.clientY + scrollTop - 50,
      };
    }
  }, []);

  const handleTextHover = useCallback((elementType = 'default') => {
    isAnimatingRef.current = true;
    hoveredElementTypeRef.current = elementType;
  }, []);

  const handleTextLeave = useCallback(() => {
    isAnimatingRef.current = false;
  }, []);

  const handleProjectClick = useCallback((projectId: string) => {
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
          ref={overlayRef}
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
                  <ProgressiveImage
                    src={reactLogo}
                    alt="Profile"
                    className="profile-image"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <h1 className="intro-title">Yadnyesh Kolte</h1>
                </div>
                <p className="intro-description hoverable" onMouseEnter={() => handleTextHover('intro')} onMouseLeave={handleTextLeave}>
                  Motivated Software Engineer with expertise in developing and deploying
                  high-quality solutions. Proficient in full stack development, AI
                  integration, and continuous delivery
                </p>
                <SocialIcons />
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
                    <div className={`cert-card ${isTransitioning ? 'transitioning' : ''}`} onMouseEnter={() => handleTextHover('certificate')} onMouseLeave={handleTextLeave}>
                      <ProgressiveImage
                        src={certifications[currentCert].image}
                        alt={certifications[currentCert].title}
                        loading="lazy"
                        fetchPriority="low"
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
        ref={peekCircleRef}
      ></div>
    </div>
  );
};

export default App1;
