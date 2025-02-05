import { startTransition, useEffect, useRef, useState } from 'react';
import './ShaderBackground.css';
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  WebGLRenderer,
} from 'three';
import { cleanRenderer, cleanScene, removeLights } from './shaders/three';
import fragmentShader from './shaders/fragmentlight.glsl?raw';
import vertexShader from './shaders/vertex.glsl?raw';

export const ShaderBackground = props => {
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const lights = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();

  // Smooth rotation tracking
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const smoothRotationX = useRef(0);
  const smoothRotationY = useRef(0);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;

    scene.current = new Scene();

    material.current = new MeshPhongMaterial();
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: 'f', value: 0 } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };

    startTransition(() => {
      geometry.current = new SphereGeometry(32, 128, 128);
      sphere.current = new Mesh(geometry.current, material.current);
      sphere.current.position.set(-30, 15, 1);
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });

    // Lights setup
    const dirLight = new DirectionalLight(0xffffff, 2.0);
    const ambientLight = new AmbientLight(0xffffff, 0.4);
    dirLight.position.set(100, 100, 200);
    lights.current = [dirLight, ambientLight];
    lights.current.forEach(light => scene.current.add(light));

    // Mouse movement handler
    const handleMouseMove = (event) => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };
      setMousePosition(position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      removeLights(lights.current);
    };
  }, []);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      // Smooth, delayed interpolation for rotation
      smoothRotationX.current += (mousePosition.y - smoothRotationX.current) * 0.03;
      smoothRotationY.current += (mousePosition.x - smoothRotationY.current) * 0.03;

      if (sphere.current) {
        // Update uniforms for time-based effects
        if (uniforms.current) {
          uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
        }

        // Apply smooth rotations with reduced intensity
        sphere.current.rotation.z += 0.001;
        sphere.current.rotation.x = (smoothRotationX.current - 0.5) / 2;
        sphere.current.rotation.y = (smoothRotationY.current - 0.5) / 2;

        // Render the scene
        renderer.current.render(scene.current, camera.current);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="shader-background"
      {...props}
    />
  );
};

//Cyan color
/*
vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0); 
vec3 finalColors = vec3(color.b * 1.5, color.r, color.r); 
vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0); */

//Grey shader model
/*  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);
vec3 finalColors = vec3(color.b * 1.5);
vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);
*/

export default ShaderBackground;