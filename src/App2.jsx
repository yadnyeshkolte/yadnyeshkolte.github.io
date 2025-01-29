
import NavigationBar from './smallcomponents/NavigationBar';
import './App2.css';
import reactLogo from './assets/devops.jpg'
import SocialIcons from './smallcomponents/SocialIcons';
import ShaderBackground from './ShaderBackground.jsx';
import ProjectCard from "./smallcomponents/ProjectCard.jsx";

const App2 = () => {
  const handleScroll = (e) => {
    const app1Scrollable = document.querySelector('.app1-scrollable');
    if (app1Scrollable && app1Scrollable.scrollTop !== e.target.scrollTop) {
      app1Scrollable.scrollTop = e.target.scrollTop;
    }
  };
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
                Code is like humor. When you have to explain it, its bad.
              </blockquote>
              <cite className="quote-author">- Cory House</cite>
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
                  description="Responsive grid layout that adapts to screen size
Consistent styling that works with both themes
Hover effects for interactivity
GitHub links for each project
Proper z-indexing to work with the existing background effects
Backdrop blur for better text readability
Maintains the scrolling synchronization between App1 and App2"
                  githubUrl="https://github.com/username/cloud-cicd"
              />
              <ProjectCard
                  title="Infrastructure as Code"
                  description="Responsive grid layout that adapts to screen size
Consistent styling that works with both themes
Hover effects for interactivity
GitHub links for each project
Proper z-indexing to work with the existing background effects
Backdrop blur for better text readability
Maintains the scrolling synchronization between App1 and App2."
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