import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function Portal() {
  const portalRef = useRef(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition({ x: window.innerWidth / 2 - 50, y: window.innerHeight });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - portalRef.current.offsetWidth / 2,
      y: e.clientY - portalRef.current.offsetHeight / 2,
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div
      ref={portalRef}
      className="portal"
      style={{
        top: position.y,
        left: position.x,
        backgroundPosition: `${-position.x}px ${-position.y}px`,
      }}
      onMouseDown={handleMouseDown}
    ></div>
  );
}

export default Portal;
