import { useState } from 'react';
import NavigationBar from './smallcomponents/NavigationBar';
import './App1.css';
import reactLogo from './assets/yadnyesh.jpg'
import SocialIcons from './smallcomponents/SocialIcons';
import ShaderBackground from './ShaderBackground.jsx'
import ProjectCard from './smallcomponents/ProjectCard';

const App1 = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [scrollY, setScrollY] = useState(0);

  // Previous handlers remain the same
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setScrollY(scrollTop);
    
    const app2Container = document.querySelector('.app2-container');
    if (app2Container && app2Container.scrollTop !== scrollTop) {
      app2Container.scrollTop = scrollTop;
    }
  };

  const handleMouseMove = (e) => {
    const scrollContainer = document.querySelector('.app1-scrollable');
    const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
    
    setCirclePosition({
      x: e.clientX - 50,
      y: e.clientY + scrollTop - 50,
    });
  };


  return (
    <div className="app1-container" onMouseMove={handleMouseMove}>
      <NavigationBar 
        githubUrl="https://github.com/yourusername"
        blogUrl="https://yourblog.com"
      />
      <div className="app1-scrollable" onScroll={handleScroll}>
        <div
            className="app1-overlay"
            style={{
              '--x': `${circlePosition.x + 50}px`,
              '--y': `${circlePosition.y + 50}px`,
            }}
        >
          <div className='shader'>
            <ShaderBackground/>
          </div>
          <section className="section intro-section">
            <div className="intro-quote-side">
              <div className="quote-container">
                <blockquote className="quote">
                  Whatever the mind can conceive and believe, it can achieve
                </blockquote>
                <cite className="quote-author">- Napolean Hill</cite>
              </div>
            </div>
            <div className="intro-content-side">
              <div className="content-wrapper">
                <div className="profile-title-container">
                  <img
                      src={reactLogo}
                      alt="Profile"
                      className="profile-image"
                  />
                  <h1 className="intro-title">Yadnyesh Kolte</h1>
                </div>
                <p className="intro-description">
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
            <div className="content-wrapper">
              <h2 className="text-4xl font-bold mb-6">Projects</h2>
              <div className="projects-container">
                {[
                  {
                    name: "AI-Powered Task Manager",
                    description: "Developed an intelligent task management system using machine learning to predict task priorities and optimize workflow.",
                    technologies: ["React", "Python", "Machine Learning"],
                    githubUrl: "https://github.com/yourusername/project",
                    liveUrl: "https://project-demo.com"
                  },
                  {
                    name: "Blockchain Payment Gateway",
                    description: "Created a secure, decentralized payment platform integrating multiple cryptocurrency protocols.",
                    technologies: ["Solidity", "Web3.js", "Node.js"],
                    githubUrl: "https://github.com/yourusername/project",
                    liveUrl: "https://project-demo.com"
                  },
                  {
                    name: "Real-time Collaborative Editor",
                    description: "Built a web-based collaborative text editor with live synchronization and version control.",
                    technologies: ["WebSockets", "React", "Firebase"],
                    githubUrl: "https://github.com/yourusername/project",
                    liveUrl: "https://project-demo.com"
                  },
                  {
                    name: "IoT Home Automation System",
                    description: "Designed a comprehensive IoT solution for smart home management and energy optimization.",
                    technologies: ["Raspberry Pi", "MQTT", "React Native"],
                    githubUrl: "https://github.com/yourusername/project",
                    liveUrl: "https://project-demo.com"
                  }
                ].map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>
          <section className="section contact-section">
            <div className="content-wrapper">
              <h2 className="section-title">Contact</h2>
              <div className="contact-grid">
                <div className="contact-card">
                  <h3>Get in Touch</h3>
                  <p>Feel free to reach out for collaborations or just a friendly hello</p>
                  <div className="contact-info">
                    <p>📧 john.doe@example.com</p>
                    <p>📱 +1 (555) 123-4567</p>
                    <p>📍 San Francisco, CA</p>
                  </div>
                </div>
                <div className="contact-card">
                  <h3>Social Media</h3>
                  <div className="contact-info">
                    <p>LinkedIn: @johndoe</p>
                    <p>Twitter: @johndoe</p>
                    <p>GitHub: @johndoe</p>
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
            left: circlePosition.x
          }}
      ></div>
    </div>
  );
};

export default App1;
