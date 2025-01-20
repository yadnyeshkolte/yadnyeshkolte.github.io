import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import { Terminal, Cloud, Server, Database } from 'lucide-react';

const PortalBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [{ x, y }, api] = useSpring(() => ({ x: 100, y: 100 }));

  const bind = useDrag(({ down, movement: [mx, my], first, memo = { startX: x.get(), startY: y.get() } }) => {
    if (first) memo = { startX: x.get(), startY: y.get() };
    api.start({ 
      x: memo.startX + mx, 
      y: memo.startY + my, 
      immediate: down 
    });
    return memo;
  });

  if (!isVisible) return null;

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        position: 'fixed',
        width: '300px',
        height: '300px',
        touchAction: 'none',
        zIndex: 1000,
        cursor: 'grab'
      }}
    >
      {/* Bubble container */}
      <div className="bubble-portal">
        {/* Alternate content visible through the bubble */}
        <div className="portal-content">
          <section className="alt-hero-section">
            <h1>Yadnyesh Kolte</h1>
            <p className="subtitle">DevOps Engineer</p>
            <div className="tech-icons">
              <Terminal />
              <Cloud />
              <Server />
              <Database />
            </div>
          </section>

          <section className="alt-projects">
            <div className="project-card">
              <h3>Kubernetes Cluster Management</h3>
              <p>Managed multi-region K8s clusters with 99.9% uptime</p>
            </div>
            <div className="project-card">
              <h3>CI/CD Pipeline Automation</h3>
              <p>Reduced deployment time by 70% using Jenkins and ArgoCD</p>
            </div>
          </section>

          <section className="alt-skills">
            <div className="skills-grid">
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
              <span>AWS</span>
              <span>Jenkins</span>
              <span>Prometheus</span>
            </div>
          </section>
        </div>
      </div>
    </animated.div>
  );
};

export default PortalBubble;