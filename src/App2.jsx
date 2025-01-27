
import NavigationBar from './smallcomponents/NavigationBar';
import './App2.css';
import reactLogo from './assets/devops.jpg'
import SocialIcons from './smallcomponents/SocialIcons';
import ShaderBackground from './ShaderBackground.jsx';

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
        <ShaderBackground />
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
            <SocialIcons />
          </div>
        </div>
      </section>
      
      <section className="section project-section">
        <div className="project-section-background"></div>
        <div className="content-wrapper">
          <h2 className="text-4xl font-bold mb-6">DevOps Projects</h2>
          <div className="projects-container">
            {[
              {
                name: "Kubernetes Cluster Orchestration",
                description: "Implemented a multi-region Kubernetes deployment with automated scaling and self-healing capabilities.",
                technologies: ["Kubernetes", "Terraform", "AWS"]
              },
              {
                name: "CI/CD Pipeline Optimization",
                description: "Developed a comprehensive CI/CD solution reducing deployment times by 60% and improving reliability.",
                technologies: ["Jenkins", "Docker", "GitLab CI"]
              },
              {
                name: "Microservices Infrastructure",
                description: "Designed a scalable microservices architecture with advanced monitoring and logging solutions.",
                technologies: ["Istio", "Prometheus", "ELK Stack"]
              },
              {
                name: "Cloud Cost Optimization Framework",
                description: "Created an intelligent cost management system for tracking and optimizing cloud resource utilization.",
                technologies: ["AWS", "Python", "CloudWatch"]
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="text-sm">
                  <strong>Technologies:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/10 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
  );
};

export default App2;

/*      <section className="section skills-section">
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
</section> */