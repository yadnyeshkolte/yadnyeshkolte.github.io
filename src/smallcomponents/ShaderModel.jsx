import { startTransition, useEffect, useRef, useState } from 'react';
import './ShaderModel.css';
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
import { cleanRenderer, cleanScene, removeLights } from '../shaders/three';
import fragmentLightShader from '../shaders/fragmentlight.glsl?raw';
import fragmentDarkShader from '../shaders/fragmentdark.glsl?raw';
import vertexShader from '../shaders/vertex.glsl?raw';

export const ShaderModel = props => {
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

    const createMaterial = (isDark) => {
        const newMaterial = new MeshPhongMaterial();
        newMaterial.onBeforeCompile = shader => {
            uniforms.current = UniformsUtils.merge([
                shader.uniforms,
                { time: { type: 'f', value: uniforms.current ? uniforms.current.time.value : 0 } },
            ]);

            shader.uniforms = uniforms.current;
            shader.vertexShader = vertexShader;
            shader.fragmentShader = isDark ? fragmentDarkShader : fragmentLightShader;
            newMaterial.userData.shader = shader;
        };
        return newMaterial;
    };

    const updateShader = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (sphere.current) {
            const newMaterial = createMaterial(isDark);
            sphere.current.material.dispose();
            sphere.current.material = newMaterial;
            material.current = newMaterial;
        }
    };

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

        const isDark = document.documentElement.classList.contains('dark');
        material.current = createMaterial(isDark);

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

        // Theme change observer
        const observer = new MutationObserver(() => {
            updateShader();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Handle storage changes for cross-tab sync
        const handleStorageChange = (e) => {
            if (e.key === 'darkMode') {
                updateShader();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
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

export default ShaderModel;