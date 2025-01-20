import React, { useState } from 'react';
import './App1.css';

function App1() {
  const [circlePosition, setCirclePosition] = useState({ x: 200, y: 200 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCirclePosition({
      x: e.clientX - 50,
      y: e.clientY - 50,
    });
  };

  return (
    <div 
      className="app1-container"
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp}
    >
      <div 
        className={`app1-overlay ${isDragging ? 'dragging' : ''}`}
        style={{
          '--x': `${circlePosition.x + 50}px`,
          '--y': `${circlePosition.y + 50}px`
        }}
      >
        <section>
        <h1 className="app1-heading">Hello World</h1>
        </section>
        <div
          className="app1-circle"
          style={{ top: circlePosition.y, left: circlePosition.x }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
}

export default App1;