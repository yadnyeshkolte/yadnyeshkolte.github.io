
import NavigationBar from './smallcomponents/NavigationBar';
import './App2.css';
import reactLogo from './assets/devops.jpg'
import SocialIcons from './smallcomponents/SocialIcons';
import ShaderBackground from './ShaderBackground.jsx';
import ProjectCard from "./smallcomponents/ProjectCard.jsx";
import {Cloud, Code2, Database, Wrench} from "lucide-react";
import {useEffect} from "react";
import { useSharedCarousel } from './hooks/useSharedCarousel';
import awsCert from './assets/certifications/aws-educate-introduction-to-cloud-101.png'
import githubCert from './assets/certifications/github-foundations.png'
import fdc3Cert from './assets/certifications/lfel1000-introduction-to-fdc3.png'
import openSourceCert from './assets/certifications/lfd137-open-source-contribution-in-finance.png'
import devopsCert from './assets/certifications/lfs162-introduction-to-devops-and-site-reliability-.png'

const App2 = () => {
  const handleScroll = (e) => {
    const app1Scrollable = document.querySelector('.app1-scrollable');
    if (app1Scrollable && app1Scrollable.scrollTop !== e.target.scrollTop) {
      app1Scrollable.scrollTop = e.target.scrollTop;
    }
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
      <div className="app2-container" onScroll={handleScroll}>
        <NavigationBar
            githubUrl="https://github.com/yourusername"
            blogUrl="https://yourblog.com"
        />
        <div className='shader'>
          <ShaderBackground/>
        </div>
        <section className="section intro-section">
          <div className="intro-quote-side">
            <div className="quote-container">
              <blockquote className="quote">
                Nothing is more difficult, and therefore more precious, than to be able to decide
              </blockquote>
              <cite className="quote-author">- Napoleon Bonaparte</cite>
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
                Aspiring DevOps Engineer specializing in streamlining deployment processes
                and enhancing efficiency. Experienced in continuous integration,
                Kubernetes, and workflow automation
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
                  title="Cloud-Native CI/CD Pipeline"
                  description="Created a real-time monitoring dashboard using Prometheus and Grafana for tracking system metrics and application performance"
                  githubUrl="https://github.com/username/cloud-cicd"
              />
              <ProjectCard
                  title="Infrastructure as Code"
                  description="Created a real-time monitoring dashboard using Prometheus and Grafana for tracking system metrics and application performance"
                  githubUrl="https://github.com/username/iac-terraform"
              />
              <ProjectCard
                  title="Monitoring Dashboard"
                  description="Created a real-time monitoring dashboard using Prometheus and Grafana for tracking system metrics and application performance."
                  githubUrl="https://github.com/username/monitoring-dashboard"
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
                  <div className={`cert-card ${isTransitioning ? 'transitioning' : ''}`}>
                    <img
                        src={certifications[currentCert].image}
                        alt={certifications[currentCert].title}
                    />
                    <div className="skills-overlay">
                      <h3>{certifications[currentCert].title}</h3>
                      <div className="skills-container">
                        {certifications[currentCert].skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
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
  );
};

export default App2;