import React, { useState, useEffect } from 'react';
import './App1.css';

const App1 = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setScrollY(scrollTop);
    
    // Sync scroll with App2
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
    <div 
      className="app1-container"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="app1-scrollable"
        onScroll={handleScroll}
      >
        <div 
          className="app1-overlay"
          style={{
            '--x': `${circlePosition.x + 50}px`,
            '--y': `${circlePosition.y + 50}px`,
          }}
        >
          {/* Rest of the App1 content remains the same */}
          <section className="section intro-section">
            <div className="content-wrapper">
              <h1 className="text-5xl font-bold mb-4">John Doe</h1>
              <h2 className="text-3xl mb-6">Software Engineer</h2>
              <p className="text-xl">Building elegant solutions to complex problems</p>
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