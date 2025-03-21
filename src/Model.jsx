
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/modern_laptop.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]}>
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
                            position={[-1.58, 0, -2.009]}
                            rotation={[0, -1.571, 0]}
                            scale={[0.034, 0.196, 0.514]}>
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
    )
}

useGLTF.preload('/modern_laptop.glb')