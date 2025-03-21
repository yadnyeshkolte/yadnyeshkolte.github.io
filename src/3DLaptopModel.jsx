import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeLaptopModel = ({ activeProject }) => {
    const mountRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const rendererRef = useRef(null);
    const controlsRef = useRef(null);
    const laptopScreenRef = useRef(null);

    // Project screen textures
    const PROJECT_TEXTURES = {
        "crossdocs": "/assets/project-section-light-theme/1.png",
        "telegram-bot": "/assets/project-section-light-theme/2.png",
        "guestbook": "/assets/project-section-light-theme/3.png",
        "default": "/assets/project-section-light-theme/1.png"
    };

    // Dark mode textures
    const PROJECT_TEXTURES_DARK = {
        "crossdocs": "/assets/project-section-dark-theme/1.png",
        "telegram-bot": "/assets/project-section-dark-theme/2.png",
        "guestbook": "/assets/project-section-dark-theme/3.png",
        "default": "/assets/project-section-dark-theme/1.png"
    };

    useEffect(() => {
        // Initialize Three.js scene
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Create scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);
        sceneRef.current = scene;

        // Create camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0.5, 2);
        cameraRef.current = camera;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        mountRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.7;
        controls.minDistance = 1.5;
        controls.maxDistance = 4;
        controls.maxPolarAngle = Math.PI / 2;
        controlsRef.current = controls;

        // Load GLTF model
        const loader = new GLTFLoader();
        loader.load(
            '/scene.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(1, 1, 1);
                model.position.set(0, -0.5, 0);
                scene.add(model);

                // Find the laptop screen mesh to change its texture
                model.traverse((child) => {
                    if (child.isMesh && child.name === "Screen" || child.name.includes("Screen")) {
                        laptopScreenRef.current = child;

                        // Set the initial texture
                        updateScreenTexture(activeProject);
                    }
                });

                setIsLoaded(true);
            },
            undefined,
            (error) => {
                console.error('Error loading GLTF model:', error);
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (controlsRef.current) {
                controlsRef.current.update();
            }
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();

            rendererRef.current.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    // Update screen texture when active project changes
    useEffect(() => {
        if (isLoaded && laptopScreenRef.current) {
            updateScreenTexture(activeProject);
        }
    }, [activeProject, isLoaded]);

    // Check for dark mode
    useEffect(() => {
        const checkDarkMode = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            if (sceneRef.current) {
                sceneRef.current.background = new THREE.Color(isDarkMode ? 0x222222 : 0xf0f0f0);
            }

            // Update screen texture for dark/light mode
            if (isLoaded && laptopScreenRef.current) {
                updateScreenTexture(activeProject);
            }
        };

        checkDarkMode();

        // Set up a mutation observer to detect theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, [activeProject, isLoaded]);

    const updateScreenTexture = (project) => {
        if (!laptopScreenRef.current) return;

        const isDarkMode = document.documentElement.classList.contains('dark');
        const textureSrc = isDarkMode
            ? PROJECT_TEXTURES_DARK[project || 'default']
            : PROJECT_TEXTURES[project || 'default'];

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(textureSrc, (texture) => {
            texture.encoding = THREE.sRGBEncoding;

            // Create or update material
            if (laptopScreenRef.current.material) {
                laptopScreenRef.current.material.map = texture;
                laptopScreenRef.current.material.needsUpdate = true;
            } else {
                laptopScreenRef.current.material = new THREE.MeshBasicMaterial({ map: texture });
            }
        });
    };

    return (
        <div
            ref={mountRef}
            className="laptop-3d-display"
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default ThreeLaptopModel;