import { useEffect, useState, useRef, Suspense } from 'react';
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { Model } from './Model';
import { projectDarkImages, projectLightImages } from '../../constants/remoteImages';

interface ModelSectionProps {
  laptopOpen: boolean;
  currentProjectImage: string;
  isDarkMode: boolean;
}

const ModelSection = ({ laptopOpen, currentProjectImage, isDarkMode }: ModelSectionProps) => {
  const ref = useRef<OrbitControlsImpl>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0.1, -0.6, 3]);
  const [cameraFov, setCameraFov] = useState(50);

  // Set a timeout to indicate when model should be visible
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsModelLoaded(true);
    }, 500);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    // Initial check
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setCameraPosition([1, -0.6, 2.5]);
        setCameraFov(50);
      } else {
        // Use your default camera position for larger screens
        setCameraPosition([0, 0, 4]); // Adjust these values as needed
        setCameraFov(45); // Adjust as needed
      }
    };

    // Set initial value
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: cameraFov, position: cameraPosition }}
      style={{
        width: '50%',
        height: '50%',
        maxHeight: '100%',
        minWidth: '100%',
        opacity: isModelLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
      onPointerDownCapture={(e) => e.stopPropagation()}
      onWheelCapture={(e) => e.stopPropagation()}
    >
      <Suspense fallback={null}>
        <Stage
          preset="rembrandt"
          intensity={1}
          environment="city"
          shadows={false}
          adjustCamera={false}
        >
          <Model
            isOpen={laptopOpen}
            screenImage={currentProjectImage}
            keyboardImage={isDarkMode ? projectDarkImages.keyboardDarkImage : projectLightImages.keyboardLightImage}
          />
        </Stage>
        <OrbitControls ref={ref} target={[0, -0.4, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default ModelSection;
