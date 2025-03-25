import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf');
    const laptopScreenRef = useRef();
    const modelGroupRef = useRef();
    const screenMeshRef = useRef();
    // Use the prop if provided, otherwise default to false
    const [isOpen, setIsOpen] = useState(props.isOpen || false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setIsDarkMode(isDark);
        };

        // Initial check
        checkDarkMode();

        // Observer for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Dark mode material changes
    useEffect(() => {
        if (!materials) return;

        // Dark mode color scheme
        const darkModeColors = {
            back: isDarkMode ? new THREE.Color('#3A3A3A') : new THREE.Color('#F0F0F0'),
            palmRest: isDarkMode ? new THREE.Color('#404040') : new THREE.Color('#75d1ee'),
            trackPad: isDarkMode ? new THREE.Color('#2C2C2C') : new THREE.Color('#FFFFFF'),
            trackPadButtons: isDarkMode ? new THREE.Color('#505050') : new THREE.Color('#ADD8E6'),
            windows: isDarkMode ? new THREE.Color('#1E1E1E') : new THREE.Color('#ADD8E6')
        };

        const darkModeMetalness = {
            back: isDarkMode ? 0 : 0.3,
            palmRest: isDarkMode ? 0 : 0.2,
            trackPad: isDarkMode ? 0 : 0.4,
            trackPadButtons: isDarkMode ? 0 : 0.3,
            windows: isDarkMode ? 0 : 0.1
        };

        const darkModeRoughness = {
            back: isDarkMode ? 0.9 : 0.5,
            palmRest: isDarkMode ? 0.9 : 0.6,
            trackPad: isDarkMode ? 0.9 : 0.4,
            trackPadButtons: isDarkMode ? 0.9 : 0.5,
            windows: isDarkMode ? 0.9 : 0.05
        };

        // Apply colors to materials
        if (materials.Back) {
            materials.Back.color = darkModeColors.back;
            materials.Back.metalness = darkModeMetalness.back;
            materials.Back.roughness = darkModeRoughness.back;
        }

        if (materials.Palm_Rest) {
            materials.Palm_Rest.color = darkModeColors.palmRest;
            materials.Palm_Rest.metalness = darkModeMetalness.palmRest;
            materials.Palm_Rest.roughness = darkModeRoughness.palmRest;
        }

        if (materials.TrackPad) {
            materials.TrackPad.color = darkModeColors.trackPad;
            materials.TrackPad.metalness = darkModeMetalness.trackPad;
            materials.TrackPad.roughness = darkModeRoughness.trackPad;
        }

        if (materials.TrackPad_Buttons) {
            materials.TrackPad_Buttons.color = darkModeColors.trackPadButtons;
            materials.TrackPad_Buttons.metalness = darkModeMetalness.trackPadButtons;
            materials.TrackPad_Buttons.roughness = darkModeRoughness.trackPadButtons;
        }

        if (materials.Windows) {
            materials.Windows.color = darkModeColors.windows;
            materials.Windows.metalness = darkModeMetalness.windows;
            materials.Windows.roughness = darkModeRoughness.windows;
            materials.Windows.opacity = isDarkMode ? 0.1 : 0;
            materials.Windows.transparent = true;
        }
    }, [isDarkMode, materials]);


    // Update when the prop changes
    useEffect(() => {
        if (props.isOpen !== undefined) {
            setIsOpen(props.isOpen);
        }
    }, [props.isOpen]);

    // Handle screen texture updates
    useEffect(() => {
        if (props.screenImage && screenMeshRef.current) {
            // Create a new texture loader
            const textureLoader = new THREE.TextureLoader();

            // Load the texture
            textureLoader.load(props.screenImage, (texture) => {
                // Create an offscreen canvas to manipulate the texture
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                // Create an image to draw onto the canvas
                const image = new Image();
                image.onload = function() {
                    // Set canvas dimensions to match the image
                    canvas.width = image.width;
                    canvas.height = image.height;

                    // Draw the image
                    context.drawImage(image, 0, 0);

                    // Get the image data
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;

                    // Adjust contrast and brightness
                    const contrast = 1;  // Higher contrast
                    const brightness = -90; // Slightly darker to offset the white overlay

                    for (let i = 0; i < data.length; i += 4) {
                        // Apply contrast and brightness adjustments to RGB channels
                        data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrast + 128 + brightness));
                        data[i+1] = Math.min(255, Math.max(0, (data[i+1] - 128) * contrast + 128 + brightness));
                        data[i+2] = Math.min(255, Math.max(0, (data[i+2] - 128) * contrast + 128 + brightness));
                    }

                    // Put the modified image data back on the canvas
                    context.putImageData(imageData, 0, 0);

                    // Create a new texture from the canvas
                    const adjustedTexture = new THREE.CanvasTexture(canvas);
                    adjustedTexture.anisotropy = 16;

                    // Create material with the adjusted texture
                    const newMaterial = new THREE.MeshBasicMaterial({
                        map: adjustedTexture,
                        side: THREE.DoubleSide
                    });

                    // Apply the new material
                    screenMeshRef.current.material = newMaterial;
                };

                // Set image source to the texture image
                image.src = texture.image.src;
            });
        }
    }, [props.screenImage]);


    // Animation parameters
    const animationSpeed = 0.1; // Increased from 0.05 for faster animation

    // Animation frame
    useFrame(() => {
        if (!laptopScreenRef.current) return;

        // Target values based on open/closed state
        const targetYRotation = isOpen ? -1.571 : -1.40;
        const targetScaleX = isOpen ? 0.034 : 0.934;
        const targetScaleZ = isOpen ? 0.514 : 0.0175;

        // Current values
        const currentYRotation = laptopScreenRef.current.rotation.y;
        const currentScaleX = laptopScreenRef.current.scale.x;
        const currentScaleZ = laptopScreenRef.current.scale.z;

        // Smooth interpolation
        laptopScreenRef.current.rotation.y += (targetYRotation - currentYRotation) * animationSpeed;
        laptopScreenRef.current.scale.x += (targetScaleX - currentScaleX) * animationSpeed;
        laptopScreenRef.current.scale.z += (targetScaleZ - currentScaleZ) * animationSpeed;
    });

    return (
        <group {...props} dispose={null} ref={modelGroupRef} position={[0, 0, 0]}>
            {/* Adjust the rotation to place laptop in the center of the view */}
            <group rotation={[2*Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
                <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
                    <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[3.347, 153, 100]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Palm_Rest_0.geometry}
                            material={materials.Palm_Rest}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_TrackPad_Buttons_0.geometry}
                            material={materials.TrackPad_Buttons}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_TrackPad_0.geometry}
                            material={materials.TrackPad}
                        />
                        <group
                            ref={laptopScreenRef}
                            position={[-1.58, 0, -2.009]}
                            rotation={[0,-1.571, 0]}
                            scale={[0.934, 0.196, 0.0175]}
                        >
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Rotator2_Back_0.geometry}
                                material={materials.Back}
                            />
                            <group scale={[0.532, 5.112, 58.181]}>
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Screen_Back_0.geometry}
                                    material={materials.Back}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Screen_TrackPad_Buttons_0.geometry}
                                    material={materials.TrackPad_Buttons}
                                />
                                <mesh
                                    ref={screenMeshRef}
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Screen_Windows_0.geometry}
                                    material={materials.Windows}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.WebCam_WebCam_0.geometry}
                                    material={materials.WebCam}
                                    position={[-1.103, 0, 1.918]}
                                    rotation={[0, -1.571, 0]}
                                    scale={[0.03, 0.02, 0.041]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Edge1_Back_0.geometry}
                                    material={materials.Back}
                                    position={[-2.088, 0.985, 1.933]}
                                    scale={[1.33, 0.016, 0.055]}
                                />
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Edge2_Back_0.geometry}
                                    material={materials.Back}
                                    position={[-2.088, -0.989, 1.933]}
                                    rotation={[0, 0, -Math.PI]}
                                    scale={[-1.33, 0.016, 0.055]}
                                />
                            </group>
                        </group>
                    </group>
                    <group
                        position={[-130.703, 124.06, 6.694]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[6.521, 11.075, 0.849]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_TrackPad_0.geometry}
                            material={materials.TrackPad}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube004_Material_0.geometry}
                            material={materials.Material}
                        />
                    </group>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Processor_logo_0.geometry}
                        material={materials.Processor_logo}
                        position={[123.149, 52.954, 6.896]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[8.108, 8.837, 8.108]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane001_GPU_Logo_0.geometry}
                        material={materials.GPU_Logo}
                        position={[119.561, 30.985, 6.896]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[5.779, 12.851, 8.108]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane002_Windows_Logo_0.geometry}
                        material={materials.Windows_Logo}
                        position={[-102.437, 89.688, 7.617]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={6.416}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/scene.gltf');