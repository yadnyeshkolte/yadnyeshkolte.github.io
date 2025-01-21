import React from 'react';
import './App2.css';

const App2 = () => {
  return (
    <div className="app2-container">
      {/* Introduction Section */}
      <section className="section intro-section">
        <div className="content-wrapper">
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <h2 className="text-3xl mb-6">DevOps Engineer</h2>
          <p className="text-xl">Automating and optimizing infrastructure</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="content-wrapper">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            DevOps engineer focused on building robust CI/CD pipelines and managing cloud infrastructure.
            Expert in automation and infrastructure as code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="content-wrapper">
          <h2 className="text-4xl font-bold mb-6">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-2">Cloud Platforms</h3>
              <p>AWS, Azure, GCP</p>
            </div>
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-2">CI/CD</h3>
              <p>Jenkins, GitLab CI, GitHub Actions</p>
            </div>
            <div className="skill-card">
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p>Terraform, Ansible, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="content-wrapper">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>
          <div className="experience-card">
            <h3 className="text-2xl font-bold">Lead DevOps Engineer</h3>
            <p className="text-xl mb-2">Cloud Solutions Ltd | 2019 - Present</p>
            <ul className="list-disc ml-6">
              <li>Implemented infrastructure as code using Terraform</li>
              <li>Reduced deployment time by 60%</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App2;