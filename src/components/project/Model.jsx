import { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props) {
    const { nodes, materials } = useGLTF('/scene.glb');
    const laptopScreenRef = useRef();
    const modelGroupRef = useRef();
    const screenMeshRef = useRef();
    // Use the prop if provided, otherwise default to false
    const [isOpen, setIsOpen] = useState(props.isOpen || false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const keyboardMeshRef = useRef();

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

        // Get all material names
        const materialNames = Object.keys(materials);

        // Dark mode color scheme with more flexible approach
        const darkModeColors = {
            default: isDarkMode ? new THREE.Color('#3A3A3A') : new THREE.Color('#F0F0F0'),
            surface: isDarkMode ? new THREE.Color('#404040') : new THREE.Color('#75d1ee'),
            accent: isDarkMode ? new THREE.Color('#505050') : new THREE.Color('#ADD8E6'),
            detail: isDarkMode ? new THREE.Color('#505050') : new THREE.Color('#ADD8E6')
        };

        const darkModeMetalness = {
            default: isDarkMode ? 0 : 0.3,
            surface: isDarkMode ? 0 : 0.2,
            accent: isDarkMode ? 0 : 0.4,
            detail: isDarkMode ? 0 : 0.3
        };

        const darkModeRoughness = {
            default: isDarkMode ? 0.9 : 0.5,
            surface: isDarkMode ? 0.9 : 0.6,
            accent: isDarkMode ? 0.9 : 0.4,
            detail: isDarkMode ? 0.9 : 0.5
        };

        // Mapping of color patterns to apply - updated for new material naming convention
        const colorMappings = {
            'back': 'default',
            'palm': 'surface',
            'trackpad': 'accent',
            'buttons': 'detail',
            'logo': 'detail',
            'windows': 'detail'
        };

        // Iterate through materials and apply dark mode transformations
        materialNames.forEach(materialName => {
            const material = materials[materialName];
            if (!material) return;

            // Find the appropriate color mapping
            const matchingKey = Object.keys(colorMappings).find(key =>
                materialName.toLowerCase().includes(key)
            );

            const colorType = matchingKey ? colorMappings[matchingKey] : 'default';

            // Apply color transformations
            material.color = darkModeColors[colorType];
            material.metalness = darkModeMetalness[colorType];
            material.roughness = darkModeRoughness[colorType];

            // Special handling for windows or transparent materials
            if (materialName.toLowerCase().includes('windows')) {
                material.opacity = isDarkMode ? 0.1 : 0;
                material.transparent = true;
            }
        });
    }, [isDarkMode, materials]);

    // Update when the prop changes
    useEffect(() => {
        if (props.isOpen !== undefined) {
            setIsOpen(props.isOpen);
        }
    }, [props.isOpen]);

    // Handle screen texture updates - updated for new mesh reference
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

    // Updated keyboard texture effect for new mesh references
    useEffect(() => {
        if (props.keyboardImage && keyboardMeshRef.current) {
            const textureLoader = new THREE.TextureLoader();

            textureLoader.load(props.keyboardImage, (texture) => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                const image = new Image();
                image.onload = function() {
                    // Set canvas to a larger size to ensure high resolution
                    canvas.width = image.width;
                    canvas.height = image.height;

                    // Draw the original image
                    context.drawImage(image, 0, 0);

                    // Image data processing
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;

                    // Slightly enhance contrast and reduce brightness
                    const contrast = 1.2;
                    const brightness = -40;

                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = Math.min(255, Math.max(0, (data[i] - 128) * contrast + 128 + brightness));
                        data[i+1] = Math.min(255, Math.max(0, (data[i+1] - 128) * contrast + 128 + brightness));
                        data[i+2] = Math.min(255, Math.max(0, (data[i+2] - 128) * contrast + 128 + brightness));
                    }

                    context.putImageData(imageData, 0, 0);

                    // Create texture with better mapping
                    const adjustedTexture = new THREE.CanvasTexture(canvas);
                    adjustedTexture.anisotropy = 16;
                    adjustedTexture.wrapS = THREE.RepeatWrapping;
                    adjustedTexture.wrapT = THREE.RepeatWrapping;

                    // Important: Adjust repeat to cover the entire keyboard surface
                    adjustedTexture.repeat.set(3.83, 4);  // Adjust these values to fit your keyboard texture
                    adjustedTexture.offset.set(0, 0);  // Adjust offset if needed

                    // Create material with adjusted texture and better rendering properties
                    keyboardMeshRef.current.material = new THREE.MeshStandardMaterial({
                        map: adjustedTexture,
                        side: THREE.FrontSide,
                        metalness: 0.1,
                        roughness: 0.7,
                        // Add some ambient occlusion to give depth
                        aoMapIntensity: 0.5
                    });
                };

                image.src = texture.image.src;
            });
        }
    }, [props.keyboardImage]);

    // Animation parameters
    const animationSpeed = 0.1; // Increased from 0.05 for faster animation

    // Animation frame - updated for new structure
    useFrame(() => {
        if (!laptopScreenRef.current) return;

        // Target values based on open/closed state
        // Adjusted for the new model structure
        const targetRotationX = isOpen ? 0 : Math.PI / 2;
        const targetRotationZ = isOpen ? 0 : 0;
        const targetPositionZ = isOpen ? 0 : 0;  // Move screen up when open

        // Smooth interpolation
        laptopScreenRef.current.rotation.x += (targetRotationX - laptopScreenRef.current.rotation.x) * animationSpeed;
        laptopScreenRef.current.rotation.z += (targetRotationZ - laptopScreenRef.current.rotation.z) * animationSpeed;
        laptopScreenRef.current.position.z += (targetPositionZ - laptopScreenRef.current.position.z) * animationSpeed;
    });

    return (
        <group {...props} dispose={null} ref={modelGroupRef}>
            {/* Base keyboard part */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Palm_Rest_0.geometry}
                material={materials['Palm_Rest.006']}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.033, 1.53, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_TrackPad_0.geometry}
                material={materials['TrackPad.006']}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.033, 1.53, 1]}
            />
            <mesh
                ref={keyboardMeshRef}
                castShadow
                receiveShadow
                geometry={nodes.Cube_TrackPad_Buttons_0.geometry}
                material={materials['TrackPad_Buttons.006']}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.033, 1.53, 1]}
            />

            {/* Screen group - referenced for animation */}
            <group ref={laptopScreenRef}
                   position={[0, 0, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rotator2_Back_0.geometry}
                    material={materials['Back.006']}
                    position={[0, 0.053, -2.009]}
                    rotation={[-1.571, 0, -1.571]}
                    scale={[0.034, 0.299, 0.017]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Edge1_Back_0.geometry}
                    material={materials['Back.006']}
                    position={[1.507, 1.985, -2.047]}
                    rotation={[-1.571, 0, -1.571]}
                    scale={[0.024, 0.024, 0.055]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Edge2_Back_0.geometry}
                    material={materials['Back.006']}
                    position={[-1.512, 1.986, -2.047]}
                    rotation={[-1.571, 0, 1.571]}
                    scale={[-0.024, 0.024, 0.055]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen_Back_0.geometry}
                    material={materials['Back.006']}
                    position={[0, 0.053, -2.009]}
                    rotation={[-1.571, 0, -1.571]}
                    scale={[0.018, 1.53, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen_TrackPad_Buttons_0.geometry}
                    material={materials['TrackPad_Buttons.006']}
                    position={[0, 0.053, -2.009]}
                    rotation={[-1.571, 0, -1.571]}
                    scale={[0.018, 1.53, 1]}
                />
                <mesh
                    ref={screenMeshRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Screen_Windows_0.geometry}
                    material={materials['Windows.006']}
                    position={[0, 0.053, -2.009]}
                    rotation={[-1.571, 0, -1.571]}
                    scale={[0.018, 1.53, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.WebCam_WebCam_0.geometry}
                    material={materials['WebCam.006']}
                    position={[0, 1.971, -2.029]}
                    rotation={[-3.141, 0, -1.571]}
                    scale={[0.03, 0.03, 0.001]}
                />
            </group>

            {/* Logos */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane_Processor_logo_0.geometry}
                material={materials['Processor_logo.006']}
                position={[1.231, 0.069, -0.53]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.081, 0.088, 0.081]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane001_GPU_Logo_0.geometry}
                material={materials['GPU_Logo.006']}
                position={[1.196, 0.069, -0.31]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.058, 0.129, 0.081]}
            />
        </group>
    );
}

useGLTF.preload('/scene.glb');