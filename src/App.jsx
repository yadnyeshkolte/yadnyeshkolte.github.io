import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import './App.css';
import PortalBubble from './components/PortalBubble';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <PortalBubble />
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-brand">Y</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <button 
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Top
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Yadnyesh Kolte</h1>
          <p className="subtitle">Software Engineer (Full Stack Developer)</p>
          <p className="location">Nagpur, Maharashtra</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://linkedin.com/in/yadnyesh-kolte" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="mailto:yadnyeshkolte@gmail.com">
              <Mail />
            </a>
            <a href="mailto:yadnyeshkolte@gmail.com">
              <Mail />
            </a>
            <a href="https://linkedin.com/in/yadnyesh-kolte" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
          <ChevronDown className="scroll-indicator" size={32} />
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>Highly motivated and results-oriented Software Engineer with a proven track record in developing and deploying high-quality software solutions. Currently pursuing Bachelor of Technology in Electronics and Communication Engineering at Visvesvaraya National Institute of Technology Nagpur.</p>
          <div className="achievements">
            <h3>Achievements</h3>
            <ul>
              <li>🏆 Gold Award Winner - Citi India Hackathon</li>
              <li>🎖️ Participant Badge - Hackfrost Winter Hackathon</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>CrossDocs</h3>
            <p className="project-date">Jan 2025</p>
            <p>Cross-platform Markdown editor with AI assistance using Kotlin Compose Multiplatform.</p>
            <ul>
              <li>Real-time preview with dark/light themes</li>
              <li>Integrated Google's Gemini AI for writing assistance</li>
              <li>Cross-platform support for Windows, macOS, Linux, and Android</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Argo CD Guestbook</h3>
            <p className="project-date">Dec 2024</p>
            <p>Automated Kubernetes deployment using Argo CD.</p>
            <ul>
              <li>80% reduction in manual intervention</li>
              <li>Deployment time reduced to under 5 minutes</li>
              <li>Real-time processing implementation</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>ESP32 ATM Bot</h3>
            <p className="project-date">Dec 2023</p>
            <p>Telegram bot integrated with ESP32 for ATM-like functionality.</p>
            <ul>
              <li>Hardware-software integration</li>
              <li>40% improvement in response time</li>
              <li>Multi-language implementation (Java, C++, Python)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {['Java', 'JavaScript', 'HTML/CSS', 'Kotlin', 'Git/GitHub', 'SQL', 'ReactJS', 'DBMS', 'ElasticSearch'].map((skill) => (
                <div key={skill} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skills-grid">
              {['English', 'Marathi', 'Hindi', 'German'].map((language) => (
                <div key={language} className="skill-tag">{language}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>📧 yadnyeshkolte@gmail.com</p>
            <p>📱 +91 9665476849</p>
            <p>📍 Nagpur, Maharashtra</p>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/yadnyesh-kolte" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              LinkedIn
            </a>
            <a href="mailto:yadnyeshkolte@gmail.com">
              <Mail />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;