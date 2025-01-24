import React, { useState } from "react";
import NavigationBar from "./smallcomponents/NavigationBar";
import "./App1.css";
import reactLogo from "./assets/yadnyesh.png";
import ShaderBackground from "./ShaderBackground.jsx"; // Assuming you save the previous artifact as ContactForm.jsx

const App1 = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [scrollY, setScrollY] = useState(0);

  // Previous handlers remain the same
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    setScrollY(scrollTop);

    const app2Container = document.querySelector(".app2-container");
    if (app2Container && app2Container.scrollTop !== scrollTop) {
      app2Container.scrollTop = scrollTop;
    }
  };

  const handleMouseMove = (e) => {
    const scrollContainer = document.querySelector(".app1-scrollable");
    const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

    setCirclePosition({
      x: e.clientX - 50,
      y: e.clientY + scrollTop - 50,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
            "--x": `${circlePosition.x + 50}px`,
            "--y": `${circlePosition.y + 50}px`,
          }}
        >
          <div className="shader">
            <ShaderBackground />
          </div>
          <section className="section intro-section">
            <div className="intro-quote-side">
              <div className="quote-container">
                <blockquote className="quote">
                  "Whatever the mind can conceive and believe, it can achieve."
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
                  Motivated Software Engineer with expertise in developing and
                  deploying high-quality solutions. Proficient in full stack
                  development, AI integration, and continuous delivery
                </p>
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
                    name: "CrossDocs, cross-platform Markdown editor with AI assistance",
                    description:
                      "Developed a cross-platform Markdown editor using Kotlin Compose Multiplatform, integrating Google's Gemini AI for real-time writing assistance. The application provides real-time preview, dark/light themes, and an in-app Markdown guide. By implementing rigorous automated testing and packaging for Windows, macOS, Linux, and Android, I ensured native performance, seamless cross-platform installation, and high-quality code with minimal bugs.",
                  },
                  {
                    name: "Argo CD Guestbook Application Deployment",
                    description:
                      "successfully automated the deployment of a Kubernetes-based guestbook application using Argo CD for continuous delivery in a Linux environment. By leveraging Python scripts and implementing advanced deployment strategies, I dramatically reduced manual intervention by 80%, streamlining the deployment process and cutting deployment time to under five minutes. This optimization significantly enhanced operational efficiency and demonstrated advanced proficiency in containerization and continuous delivery technologies.",
                  },
                  {
                    name: "Real-time Collaborative Editor",
                    description:
                      "I developed a Telegram bot integrated with an ESP32 microcontroller to simulate ATM functionalities, enabling remote transactions through seamless hardware-software interaction. By implementing Java, C++, and Python code following SDLC best practices, I optimized communication between the bot and ESP32. My microcontroller programming initiatives enhanced response time efficiency by approximately 40%, significantly improving transactional throughput and system performance.",
                  },
                ].map((project, index) => (
                  <div key={index} className="project-card">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className="peek-circle"
        style={{
          top: circlePosition.y - scrollY,
          left: circlePosition.x,
        }}
      ></div>
    </div>
  );
};

export default App1;

/*          <section className="section skills-section">
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
</section> */
