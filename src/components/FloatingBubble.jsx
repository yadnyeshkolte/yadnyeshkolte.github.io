import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

const FloatingBubble = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  });

  if (!isVisible) return null;

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        position: 'fixed',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
        backdropFilter: 'blur(4px)',
        touchAction: 'none',
        zIndex: 1000,
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.9rem',
        textAlign: 'center',
        padding: '1rem',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        transform: 'translate3d(0px, 0px, 0px)'
      }}
    >
      <div>
        <h4 className="text-primary font-bold mb-2">DevOps Engineer</h4>
        <p className="text-sm">
          Kubernetes | Docker | CI/CD | AWS | Terraform | Jenkins | Monitoring
        </p>
      </div>
    </animated.div>
  );
};

export default FloatingBubble;