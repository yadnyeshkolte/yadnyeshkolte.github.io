import React, { useEffect, useRef } from 'react';
import { useSpring } from 'framer-motion';
import * as THREE from 'three';

const ParticlesBackground = () => {
  const canvasRef = useRef();
  const start = useRef(Date.now());
  const mouse = useRef(new THREE.Vector2(0.8, 0.5));
  const springConfig = { stiffness: 30, damping: 20, mass: 2 };
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
    });
    
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(1);
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.position.z = 52;

    // Sphere setup
    const sphereGeometry = new THREE.SphereGeometry(32, 128, 128);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.z = 0;
    scene.add(sphere);

    // Particles setup
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#ffffff',
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    dirLight.position.set(100, 100, 200);
    scene.add(dirLight, ambientLight);

    // Animation
    const animate = () => {
      const time = 0.00005 * (Date.now() - start.current);
      sphere.rotation.z += 0.001;
      sphere.rotation.x = rotationX.get();
      sphere.rotation.y = rotationY.get();

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x = mouse.current.y * 0.3;
      particlesMesh.rotation.z = mouse.current.x * 0.3;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Mouse movement
    const onMouseMove = event => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      rotationX.set(mouse.current.y / 2);
      rotationY.set(mouse.current.x / 2);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.7,
        transition: 'opacity 3s',
      }}
    />
  );
};

export default ParticlesBackground;