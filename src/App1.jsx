import React, { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import './App1.css';


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

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
          <section className="section intro-section">
            <div className="content-wrapper">
              <div className="profile-image-container">
                <img 
                  src="/api/placeholder/192/192" 
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <h1 className="intro-title">John Doe</h1>
              <h2 className="intro-subtitle">Software Engineer</h2>
              <p className="intro-description">
                Buildinlems with modern technologies
              </p>
              <button className="contact-button" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </section>

          <section className="section about-section">
            <div className="content-wrapper">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-4">
                Passionate software engineer with 5+ years of experience in full-stack development.
                Specialized in React, Node.js, and cloud technologies.
              </p>
            </div>
          </section>

          <section className="section skills-section">
            <div className="content-wrapper">
              <h2 className="text-4xl font-bold mb-6">Skills</h2>
              <div className="skills-grid">
                <div className="skill-card">
                  <h3 className="text-xl font-bold mb-2">Frontend</h3>
                  <p>React, Vue.js, TypeScript</p>
                </div>
                <div className="skill-card">
                  <h3 className="text-xl font-bold mb-2">Backend</h3>
                  <p>Node.js, Python, Java</p>
                </div>
                <div className="skill-card">
                  <h3 className="text-xl font-bold mb-2">Database</h3>
                  <p>PostgreSQL, MongoDB, Redis</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section experience-section">
            <div className="content-wrapper">
              <h2 className="text-4xl font-bold mb-6">Experience</h2>
              <div className="experience-card">
                <h3 className="text-2xl font-bold">Senior Software Engineer</h3>
                <p className="text-xl mb-2">Tech Corp Inc. | 2020 - Present</p>
                <ul className="list-disc ml-6">
                  <li>Led development of microservices architecture</li>
                  <li>Optimized application performance by 40%</li>
                </ul>
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