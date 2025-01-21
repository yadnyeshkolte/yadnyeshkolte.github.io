import React from 'react';
import NavigationBar from './Components/NavigationBar';
import './App2.css';
import reactLogo from './assets/react.svg'

const App2 = () => {
  const handleScroll = (e) => {
    const app1Scrollable = document.querySelector('.app1-scrollable');
    if (app1Scrollable && app1Scrollable.scrollTop !== e.target.scrollTop) {
      app1Scrollable.scrollTop = e.target.scrollTop;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    };

  return (
    <div className="app2-container" onScroll={handleScroll}>
      <NavigationBar 
        githubUrl="https://github.com/yourusername"
        blogUrl="https://yourblog.com"
      />
      
      <section className="section intro-section">
        <div className="content-wrapper">
          <div className="profile-image-container">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <h1 className="intro-title">John Doe</h1>
          <h2 className="intro-subtitle">DevOps Engineer</h2>
          <p className="intro-description">
            Dedicated DevOps Engineer specializing in streamlining deployment processes and enhancing efficiency. Experienced in continuous integration, Kubernetes, and workflow automation
          </p>
          <button className="contact-button" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </section>

      <section className="section about-section">
        <div className="content-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg mb-4">
            DevOps engineer focused on building robust CI/CD pipelines and managing cloud infrastructure.
            Expert in automation and infrastructure as code.
          </p>
        </div>
      </section>

      <section className="section skills-section">
        <div className="content-wrapper">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Cloud Platforms</h3>
              <p>AWS, Azure, GCP</p>
            </div>
            <div className="skill-card">
              <h3>CI/CD</h3>
              <p>Jenkins, GitLab CI, GitHub Actions</p>
            </div>
            <div className="skill-card">
              <h3>Infrastructure</h3>
              <p>Terraform, Ansible, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="content-wrapper">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <h3>Lead DevOps Engineer</h3>
            <p>Cloud Solutions Ltd | 2019 - Present</p>
            <ul>
              <li>Implemented infrastructure as code using Terraform</li>
              <li>Reduced deployment time by 60%</li>
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
  );
};

export default App2;