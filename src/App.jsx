import React, { useState } from 'react';
import './App.css';
import App2 from './App2.jsx';
import './App2.css';

function App() {
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
    <div className="container" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <App2 />
      <div 
        className={`overlay ${isDragging ? 'dragging' : ''}`}
        style={{
          '--x': `${circlePosition.x + 50}px`,
          '--y': `${circlePosition.y + 50}px`
        }}
      >
        <h1 className="app1-heading">Hello World</h1>
        <div
          className="circle"
          style={{ top: circlePosition.y, left: circlePosition.x }}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
}

export default App;