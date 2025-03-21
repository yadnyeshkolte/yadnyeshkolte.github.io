import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Model(props) {
    const { nodes, materials } = useGLTF('/modern_laptop.glb');
    const laptopScreenRef = useRef();
    const modelGroupRef = useRef();
    // Use the prop if provided, otherwise default to false
    const [isOpen, setIsOpen] = useState(props.isOpen || false);

    // Update when the prop changes
    useEffect(() => {
        if (props.isOpen !== undefined) {
            setIsOpen(props.isOpen);
        }
    }, [props.isOpen]);

    // Update materials to silver
    useEffect(() => {
        // Define silver color and properties
        const silverColor = new THREE.Color('#E8E8E8');
        const silverMetalness = 0.8;
        const silverRoughness = 0.2;

        // Apply silver color to all laptop body materials
        if (materials.Back) {
            materials.Back.color = silverColor;
            materials.Back.metalness = silverMetalness;
            materials.Back.roughness = silverRoughness;
        }

        if (materials.Palm_Rest) {
            materials.Palm_Rest.color = silverColor;
            materials.Palm_Rest.metalness = silverMetalness;
            materials.Palm_Rest.roughness = silverRoughness;
        }

        // TrackPad can stay slightly darker
        if (materials.TrackPad) {
            materials.TrackPad.color = new THREE.Color('#D0D0D0');
            materials.TrackPad.metalness = 0.6;
            materials.TrackPad.roughness = 0.3;
        }

        // Buttons can be slightly different shade
        if (materials.TrackPad_Buttons) {
            materials.TrackPad_Buttons.color = new THREE.Color('#CCCCCC');
            materials.TrackPad_Buttons.metalness = 0.7;
            materials.TrackPad_Buttons.roughness = 0.25;
        }

        // Keep screen materials as they are
        if (materials.Windows) {
            materials.Windows.color = new THREE.Color('#F0F0F0');
            materials.Windows.metalness = 0.1;
            materials.Windows.roughness = 0.05;
        }
    }, [materials]);

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

useGLTF.preload('/modern_laptop.glb');