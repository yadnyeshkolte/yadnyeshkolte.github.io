import { useState, useEffect } from 'react';
import App2 from './App2';

const Portal = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPortal(true), 1000);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - 50,
        y: e.clientY - 50
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="portal-container">
      {/* Background Layer (App2) */}
      <div className="background-layer">
        <App2 />
      </div>

      {/* Foreground Layer (App) with mask */}
      <div 
        className="foreground-layer"
        style={{
          maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 50px, black 51px)`,
          WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 50px, black 51px)`
        }}
      >
        <div className="content">
          <h1>Foreground Content</h1>
        </div>
      </div>

      {/* Portal Ring */}
      <div
        className={`portal-ring ${showPortal ? 'show' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default Portal;
