import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, PresentationControls, Environment } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

// Model component that loads and displays the GLTF laptop
function LaptopModel({ activeProject, isOpen, ...props }) {
    const group = useRef();
    const { nodes, materials, scene } = useGLTF('/scene.gltf');
    const [hovered, setHovered] = useState(false);

    // Find the screen mesh to display content
    const screenMesh = useRef();

    useEffect(() => {
        // Find the screen mesh in the loaded model
        scene.traverse((object) => {
            if (object.isMesh && object.name.toLowerCase().includes('screen')) {
                screenMesh.current = object;
            }
        });

        // Set up animation for opening/closing the laptop
        if (group.current) {
            const laptopLid = group.current.children.find(child =>
                child.name.toLowerCase().includes('lid') ||
                child.name.toLowerCase().includes('screen')
            );

            if (laptopLid) {
                // Animate the laptop lid based on isOpen state
                if (isOpen) {
                    laptopLid.rotation.x = -Math.PI * 0.6; // Open position
                } else {
                    laptopLid.rotation.x = -Math.PI * 0.05; // Closed position
                }
            }
        }
    }, [scene, isOpen]);

    // Animate the laptop
    useFrame((state) => {
        if (group.current) {
            // Gentle floating animation
            group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;

            // If we have a screen mesh and active project, we could update a texture here
            if (screenMesh.current && activeProject) {
                // Here we could update the screen material with content based on activeProject
            }
        }
    });

    return (
        <group
            ref={group}
            {...props}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <primitive
                object={scene}
                scale={1.5}
                position={[0, -1, 0]}
            />
        </group>
    );
}

// The main component that renders the Canvas and model
const LaptopDisplay = ({ activeProject }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Use Intersection Observer to detect when laptop is in viewport
    const { ref: laptopRef, inView } = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    // Handle opening/closing animation based on visibility
    useEffect(() => {
        let timer;
        if (inView && !isOpen) {
            timer = setTimeout(() => setIsOpen(true), 300);
        } else if (!inView && isOpen) {
            timer = setTimeout(() => setIsOpen(false), 300);
        }

        return () => clearTimeout(timer);
    }, [inView, isOpen]);

    // Display project info panel
    const ProjectInfo = () => {
        if (!activeProject) {
            return (
                <div className="default-message">
                    <h3>Select a project from the sidebar</h3>
                    <p>Click on any project card to view it on this screen</p>
                </div>
            );
        }

        const projectData = {
            "crossdocs": {
                title: "Cross-platform Markdown Editor",
                description: "A Kotlin Compose Multiplatform application with:",
                features: [
                    "Real-time Markdown preview",
                    "Dark/light theme support",
                    "Cross-platform compatibility",
                    "AI-assisted editing features"
                ]
            },
            "telegram-bot": {
                title: "ESP32-Based ATM-Like Telegram Bot",
                description: "An IoT project featuring:",
                features: [
                    "Telegram API integration",
                    "ESP32 microcontroller",
                    "Remote banking transaction simulation",
                    "Multi-language implementation (Java, C++, Python)"
                ]
            },
            "guestbook": {
                title: "Guestbook Application Deployment",
                description: "A DevOps project featuring:",
                features: [
                    "Continuous delivery pipeline with Argo CD",
                    "GitOps principles for Kubernetes",
                    "Docker containerization",
                    "Helm charts for deployment"
                ]
            }
        };

        const project = projectData[activeProject];

        return (
            <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div ref={laptopRef} className="laptop-container">
            {/* 3D Canvas for the laptop model */}
            <div className="laptop-model-canvas">
                <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 5] }}>
                    <Suspense fallback={null}>
                        <PresentationControls
                            global
                            rotation={[0, -Math.PI / 12, 0]}
                            polar={[-Math.PI / 8, Math.PI / 8]}
                            azimuth={[-Math.PI / 4, Math.PI / 4]}
                        >
                            <LaptopModel
                                activeProject={activeProject}
                                isOpen={isOpen}
                            />
                        </PresentationControls>
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>

            {/* Project info panel - This will be displayed separately from the 3D model */}
            <div className="project-info-panel">
                <div className="browser-chrome">
                    <div className="browser-controls">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-address-bar">
                        {activeProject === "crossdocs" && "https://github.com/yadnyeshkolte/CrossDocs"}
                        {activeProject === "telegram-bot" && "https://gist.github.com/yadnyeshkolte/02981d86fcf5e6614c0ebf917a44949a"}
                        {activeProject === "guestbook" && "https://gist.github.com/yadnyeshkolte/5d095713c84b9f05711c9d0ed1a8080a"}
                        {!activeProject && "Select a project to view details"}
                    </div>
                </div>
                <div className="browser-content">
                    <ProjectInfo />
                </div>
            </div>
        </div>
    );
};

// Make sure to preload the model
useGLTF.preload('/scene.gltf');

export default LaptopDisplay;