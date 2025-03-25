
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
            geometry={nodes.Cube001_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-133.316, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-133.448, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-132.88, 141.035, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 8.683, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-127.345, 106.765, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 13.834, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-134.651, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-118.301, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-103.334, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-88.749, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-73.603, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-58.636, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-43.89, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-28.743, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-13.776, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[0.808, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[15.955, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[30.922, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[45.794, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[60.94, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[75.908, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[90.492, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[105.639, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[120.606, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[135.081, 172.278, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[4.152, 6.171, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-117.425, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-101.932, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-86.041, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-70.945, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-55.055, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-39.561, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-23.671, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-8.178, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[7.713, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[23.206, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[39.097, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[54.193, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[72.616, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 10.775, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[91.031, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[105.753, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[120.482, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[134.642, 158.169, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-114.983, 141.035, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-99.541, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-83.65, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-68.554, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-52.664, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube047_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-37.171, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-21.28, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-5.787, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[10.104, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[25.597, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube052_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[41.488, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[56.584, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[72.474, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube055_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[87.967, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube056_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[103.858, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[120.146, 141.234, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube058_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-110.667, 124.1, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube059_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-95.224, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube060_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-79.334, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube061_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-64.238, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube062_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-48.347, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube063_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-32.854, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube064_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-16.963, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube065_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-1.47, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube066_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[14.421, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube067_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[29.914, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube068_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[45.804, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube069_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[67.056, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 11.727, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube070_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[88.745, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube071_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[104.238, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube072_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[120.129, 124.299, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube073_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-104.358, 106.501, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube074_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-88.915, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube075_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-73.024, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube076_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-57.928, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube077_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-42.038, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube078_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-26.545, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube079_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-10.654, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube080_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[4.839, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube081_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[20.73, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube082_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[36.223, 106.7, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube083_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[62.407, 107.032, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 16.058, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube084_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[88.413, 107.032, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube085_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[103.906, 107.032, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube086_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[119.797, 107.032, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube087_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-118.38, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube088_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-102.441, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube089_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-86.17, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube090_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-35.032, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 41.467, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube091_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[16.437, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube092_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[32.708, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube093_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[48.647, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube094_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[75.212, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube095_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[97.46, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 12.504, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube096_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[119.708, 89.726, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[6.521, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube097_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[134.974, 132.601, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[14.651, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube098_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[134.974, 98.73, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[15.098, 6.501, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube099_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[61.92, 92.971, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[3.187, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube100_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[61.92, 86.311, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[3.187, 6.521, 0.849]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text_Kays_0.geometry}
            material={materials.Kays}
            position={[-136.886, 171.478, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text001_Kays_0.geometry}
            material={materials.Kays}
            position={[-119.163, 170.773, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text002_Kays_0.geometry}
            material={materials.Kays}
            position={[-104.296, 170.877, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text003_Kays_0.geometry}
            material={materials.Kays}
            position={[-90.103, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text004_Kays_0.geometry}
            material={materials.Kays}
            position={[-75.31, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text005_Kays_0.geometry}
            material={materials.Kays}
            position={[-60.516, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text006_Kays_0.geometry}
            material={materials.Kays}
            position={[-45.394, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text007_Kays_0.geometry}
            material={materials.Kays}
            position={[-30.271, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text008_Kays_0.geometry}
            material={materials.Kays}
            position={[-15.477, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text009_Kays_0.geometry}
            material={materials.Kays}
            position={[-0.684, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text010_Kays_0.geometry}
            material={materials.Kays}
            position={[13.453, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text011_Kays_0.geometry}
            material={materials.Kays}
            position={[27.917, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text012_Kays_0.geometry}
            material={materials.Kays}
            position={[43.04, 170.976, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text013_Kays_0.geometry}
            material={materials.Kays}
            position={[55.532, 173.606, 7.599]}
            scale={[4.315, 3.653, 13.511]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text014_Kays_0.geometry}
            material={materials.Kays}
            position={[55.861, 169.661, 7.599]}
            scale={[3.575, 3.026, 11.193]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text015_Kays_0.geometry}
            material={materials.Kays}
            position={[70.655, 170.976, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text016_Kays_0.geometry}
            material={materials.Kays}
            position={[85.449, 170.976, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text017_Kays_0.geometry}
            material={materials.Kays}
            position={[102.215, 170.976, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text018_Kays_0.geometry}
            material={materials.Kays}
            position={[116.022, 171.634, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text019_Kays_0.geometry}
            material={materials.Kays}
            position={[130.487, 171.305, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text020_Kays_0.geometry}
            material={materials.Kays}
            position={[-138.201, 161.615, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text021_Kays_0.geometry}
            material={materials.Kays}
            position={[-133.599, 152.739, 7.599]}
            scale={[11.356, 9.613, 35.554]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text022_Kays_0.geometry}
            material={materials.Kays}
            position={[-122.672, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text023_Kays_0.geometry}
            material={materials.Kays}
            position={[-107.581, 160.959, 7.599]}
            scale={[4.249, 3.597, 13.303]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text024_Kays_0.geometry}
            material={materials.Kays}
            position={[-91.833, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text025_Kays_0.geometry}
            material={materials.Kays}
            position={[-76.305, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text026_Kays_0.geometry}
            material={materials.Kays}
            position={[-60.448, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text027_Kays_0.geometry}
            material={materials.Kays}
            position={[-44.591, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text028_Kays_0.geometry}
            material={materials.Kays}
            position={[-29.062, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text029_Kays_0.geometry}
            material={materials.Kays}
            position={[-13.314, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text030_Kays_0.geometry}
            material={materials.Kays}
            position={[1.887, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text031_Kays_0.geometry}
            material={materials.Kays}
            position={[18.4, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text032_Kays_0.geometry}
            material={materials.Kays}
            position={[34.038, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text033_Kays_0.geometry}
            material={materials.Kays}
            position={[49.457, 160.741, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text034_Kays_0.geometry}
            material={materials.Kays}
            position={[67.538, 156.951, 7.599]}
            scale={[3.592, 3.041, 11.247]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text035_Kays_0.geometry}
            material={materials.Kays}
            position={[62.084, 156.172, 7.599]}
            scale={[5.788, 4.899, 18.121]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text036_Kays_0.geometry}
            material={materials.Kays}
            position={[63.447, 157.146, 7.599]}
            scale={[3.592, 3.041, 11.247]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text037_Kays_0.geometry}
            material={materials.Kays}
            position={[87.007, 159.288, 7.599]}
            scale={[4.285, 3.627, 13.415]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text038_Kays_0.geometry}
            material={materials.Kays}
            position={[104.344, 155.392, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text039_Kays_0.geometry}
            material={materials.Kays}
            position={[118.174, 154.029, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text040_Kays_0.geometry}
            material={materials.Kays}
            position={[133.174, 156.366, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text041_Kays_0.geometry}
            material={materials.Kays}
            position={[131.81, 130.458, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text042_Kays_0.geometry}
            material={materials.Kays}
            position={[129.473, 96.759, 7.599]}
            scale={[5.003, 4.235, 15.663]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text043_Kays_0.geometry}
            material={materials.Kays}
            position={[85.449, 138.055, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text044_Kays_0.geometry}
            material={materials.Kays}
            position={[101.422, 137.861, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text045_Kays_0.geometry}
            material={materials.Kays}
            position={[117.59, 137.861, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text046_Kays_0.geometry}
            material={materials.Kays}
            position={[117.59, 121.303, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text047_Kays_0.geometry}
            material={materials.Kays}
            position={[102.006, 121.303, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text048_Kays_0.geometry}
            material={materials.Kays}
            position={[86.617, 121.303, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text049_Kays_0.geometry}
            material={materials.Kays}
            position={[86.033, 104.161, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text050_Kays_0.geometry}
            material={materials.Kays}
            position={[101.811, 104.161, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text051_Kays_0.geometry}
            material={materials.Kays}
            position={[117.395, 104.161, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text052_Kays_0.geometry}
            material={materials.Kays}
            position={[118.564, 88.967, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text053_Kays_0.geometry}
            material={materials.Kays}
            position={[117.612, 85.119, 7.599]}
            scale={[3.575, 3.026, 11.193]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text054_Kays_0.geometry}
            material={materials.Kays}
            position={[95.989, 85.509, 7.599]}
            scale={[3.575, 3.026, 11.193]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text055_Kays_0.geometry}
            material={materials.Kays}
            position={[95.383, 88.382, 7.599]}
            scale={[10.686, 9.045, 33.456]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text056_Kays_0.geometry}
            material={materials.Kays}
            position={[-119.303, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text057_Kays_0.geometry}
            material={materials.Kays}
            position={[-102.837, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text058_Kays_0.geometry}
            material={materials.Kays}
            position={[-87.626, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text059_Kays_0.geometry}
            material={materials.Kays}
            position={[-72.835, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text060_Kays_0.geometry}
            material={materials.Kays}
            position={[-57.066, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text061_Kays_0.geometry}
            material={materials.Kays}
            position={[-41.716, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text062_Kays_0.geometry}
            material={materials.Kays}
            position={[-25.669, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text063_Kays_0.geometry}
            material={materials.Kays}
            position={[-10.179, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text064_Kays_0.geometry}
            material={materials.Kays}
            position={[5.589, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text065_Kays_0.geometry}
            material={materials.Kays}
            position={[21.358, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text066_Kays_0.geometry}
            material={materials.Kays}
            position={[37.545, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text067_Kays_0.geometry}
            material={materials.Kays}
            position={[52.476, 155.144, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text068_Kays_0.geometry}
            material={materials.Kays}
            position={[-139.956, 140.22, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text069_Kays_0.geometry}
            material={materials.Kays}
            position={[-131.723, 143.15, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text070_Kays_0.geometry}
            material={materials.Kays}
            position={[-126.249, 138.876, 7.599]}
            rotation={[0, 0, -3.101]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text071_Kays_0.geometry}
            material={materials.Kays}
            position={[-127.737, 137.699, 7.599]}
            rotation={[0, 0, 0.978]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text072_Kays_0.geometry}
            material={materials.Kays}
            position={[-127.749, 137.977, 7.599]}
            rotation={[0, 0, 2.245]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text073_Kays_0.geometry}
            material={materials.Kays}
            position={[-128.273, 137.118, 7.599]}
            rotation={[0, 0, 1.611]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text074_Kays_0.geometry}
            material={materials.Kays}
            position={[-130.188, 144.267, 7.599]}
            rotation={[0, 0, -2.204]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text075_Kays_0.geometry}
            material={materials.Kays}
            position={[-130.188, 143.988, 7.599]}
            rotation={[0, 0, -0.938]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text076_Kays_0.geometry}
            material={materials.Kays}
            position={[-129.63, 144.825, 7.599]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text077_Kays_0.geometry}
            material={materials.Kays}
            position={[-140.514, 121.8, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text078_Kays_0.geometry}
            material={materials.Kays}
            position={[-118.745, 138.539, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text079_Kays_0.geometry}
            material={materials.Kays}
            position={[-104.093, 137.98, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text080_Kays_0.geometry}
            material={materials.Kays}
            position={[-85.812, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text081_Kays_0.geometry}
            material={materials.Kays}
            position={[-71.3, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text082_Kays_0.geometry}
            material={materials.Kays}
            position={[-55.252, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text083_Kays_0.geometry}
            material={materials.Kays}
            position={[-39.623, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text084_Kays_0.geometry}
            material={materials.Kays}
            position={[-24.413, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text085_Kays_0.geometry}
            material={materials.Kays}
            position={[-6.97, 138.399, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text086_Kays_0.geometry}
            material={materials.Kays}
            position={[6.566, 138.539, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text087_Kays_0.geometry}
            material={materials.Kays}
            position={[23.59, 138.539, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text088_Kays_0.geometry}
            material={materials.Kays}
            position={[12.706, 121.235, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text089_Kays_0.geometry}
            material={materials.Kays}
            position={[-3.621, 121.654, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text090_Kays_0.geometry}
            material={materials.Kays}
            position={[-17.436, 122.072, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text091_Kays_0.geometry}
            material={materials.Kays}
            position={[-36.135, 121.793, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text092_Kays_0.geometry}
            material={materials.Kays}
            position={[-51.205, 121.375, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text093_Kays_0.geometry}
            material={materials.Kays}
            position={[-66.276, 121.235, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text094_Kays_0.geometry}
            material={materials.Kays}
            position={[-82.742, 121.514, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text095_Kays_0.geometry}
            material={materials.Kays}
            position={[-96.836, 121.514, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text096_Kays_0.geometry}
            material={materials.Kays}
            position={[-113.163, 121.514, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text097_Kays_0.geometry}
            material={materials.Kays}
            position={[-137.026, 104.915, 7.599]}
            scale={[5.659, 4.79, 17.717]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text098_Kays_0.geometry}
            material={materials.Kays}
            position={[-121.647, 108.12, 7.599]}
            rotation={[0, 0, 2.491]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text099_Kays_0.geometry}
            material={materials.Kays}
            position={[-121.534, 108.124, 7.599]}
            rotation={[0, 0, -2.525]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text100_Kays_0.geometry}
            material={materials.Kays}
            position={[-120.902, 107.713, 7.599]}
            rotation={[0, 0, 3.125]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text101_Kays_0.geometry}
            material={materials.Kays}
            position={[-107.442, 103.094, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text102_Kays_0.geometry}
            material={materials.Kays}
            position={[-91.952, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text103_Kays_0.geometry}
            material={materials.Kays}
            position={[-76.463, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text104_Kays_0.geometry}
            material={materials.Kays}
            position={[-60.694, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text105_Kays_0.geometry}
            material={materials.Kays}
            position={[-44.228, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text106_Kays_0.geometry}
            material={materials.Kays}
            position={[-29.855, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text107_Kays_0.geometry}
            material={materials.Kays}
            position={[-14.087, 103.792, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text108_Kays_0.geometry}
            material={materials.Kays}
            position={[-1.249, 105.885, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text109_Kays_0.geometry}
            material={materials.Kays}
            position={[6.538, 102.411, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text110_Kays_0.geometry}
            material={materials.Kays}
            position={[15.497, 106.304, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text111_Kays_0.geometry}
            material={materials.Kays}
            position={[23.702, 102.411, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text112_Kays_0.geometry}
            material={materials.Kays}
            position={[30.847, 106.304, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text113_Kays_0.geometry}
            material={materials.Kays}
            position={[39.052, 102.411, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text114_Kays_0.geometry}
            material={materials.Kays}
            position={[48.29, 110.072, 7.599]}
            scale={[3.419, 2.894, 10.704]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text115_Kays_0.geometry}
            material={materials.Kays}
            position={[67.267, 104.915, 7.599]}
            scale={[5.659, 4.79, 17.717]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text116_Kays_0.geometry}
            material={materials.Kays}
            position={[64.143, 107.784, 7.599]}
            rotation={[0, 0, 2.491]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text117_Kays_0.geometry}
            material={materials.Kays}
            position={[64.143, 107.788, 7.599]}
            rotation={[0, 0, -2.525]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text118_Kays_0.geometry}
            material={materials.Kays}
            position={[64.831, 107.356, 7.599]}
            rotation={[0, 0, 3.125]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text119_Kays_0.geometry}
            material={materials.Kays}
            position={[65.592, 122.079, 7.599]}
            scale={[5.659, 4.79, 17.717]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text120_Kays_0.geometry}
            material={materials.Kays}
            position={[58.049, 122.01, 7.599]}
            rotation={[0, 0, -2.174]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text121_Kays_0.geometry}
            material={materials.Kays}
            position={[58.058, 122.01, 7.599]}
            rotation={[0, 0, -0.907]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text122_Kays_0.geometry}
            material={materials.Kays}
            position={[58.59, 122.725, 7.599]}
            rotation={[0, 0, -1.54]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text123_Kays_0.geometry}
            material={materials.Kays}
            position={[65.148, 123.841, 7.599]}
            rotation={[0, 0, 3.131]}
            scale={[5.457, 2.496, 9.232]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text124_Kays_0.geometry}
            material={materials.Kays}
            position={[61.381, 122.725, 7.599]}
            rotation={[0, 0, -1.54]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text125_Kays_0.geometry}
            material={materials.Kays}
            position={[40.754, 123.468, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text126_Kays_0.geometry}
            material={materials.Kays}
            position={[48.123, 120.133, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text127_Kays_0.geometry}
            material={materials.Kays}
            position={[24.986, 125.282, 7.599]}
            scale={[9.104, 7.707, 28.505]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text128_Kays_0.geometry}
            material={materials.Kays}
            position={[32.354, 120.133, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text129_Kays_0.geometry}
            material={materials.Kays}
            position={[36.568, 142.167, 7.599]}
            scale={[6.184, 5.235, 19.362]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text130_Kays_0.geometry}
            material={materials.Kays}
            position={[44.355, 137.158, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text131_Kays_0.geometry}
            material={materials.Kays}
            position={[51.22, 142.167, 7.599]}
            scale={[6.184, 5.235, 19.362]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text132_Kays_0.geometry}
            material={materials.Kays}
            position={[59.007, 137.158, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text133_Kays_0.geometry}
            material={materials.Kays}
            position={[68.244, 142.167, 7.599]}
            scale={[6.184, 5.235, 19.362]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text134_Kays_0.geometry}
            material={materials.Kays}
            position={[76.031, 137.158, 7.599]}
            scale={[5.056, 4.28, 15.83]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text135_Kays_0.geometry}
            material={materials.Kays}
            position={[46.881, 89.775, 7.599]}
            rotation={[0, 0, -2.174]}
            scale={[7.847, 6.642, 24.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text136_Kays_0.geometry}
            material={materials.Kays}
            position={[46.899, 89.775, 7.599]}
            rotation={[0, 0, -0.907]}
            scale={[-7.847, 6.642, 24.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text137_Kays_0.geometry}
            material={materials.Kays}
            position={[76.343, 89.775, 7.599]}
            rotation={[0, 0, 2.174]}
            scale={[-7.847, 6.642, 24.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text138_Kays_0.geometry}
            material={materials.Kays}
            position={[76.325, 89.775, 7.599]}
            rotation={[0, 0, 0.907]}
            scale={[7.847, 6.642, 24.567]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text139_Kays_0.geometry}
            material={materials.Kays}
            position={[61.771, 93.132, 7.599]}
            rotation={[0, 0, 2.491]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text140_Kays_0.geometry}
            material={materials.Kays}
            position={[61.771, 93.136, 7.599]}
            rotation={[0, 0, -2.525]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text141_Kays_0.geometry}
            material={materials.Kays}
            position={[61.91, 86.159, 7.599]}
            rotation={[0, 0, -0.65]}
            scale={[3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text142_Kays_0.geometry}
            material={materials.Kays}
            position={[61.91, 86.154, 7.599]}
            rotation={[0, 0, 0.616]}
            scale={[-3.738, 3.164, 11.703]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text143_Kays_0.geometry}
            material={materials.Kays}
            position={[29.033, 87.744, 7.599]}
            scale={[4.814, 4.075, 15.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text144_Kays_0.geometry}
            material={materials.Kays}
            position={[13.962, 87.744, 7.599]}
            scale={[4.814, 4.075, 15.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text145_Kays_0.geometry}
            material={materials.Kays}
            position={[-88.547, 87.744, 7.599]}
            scale={[4.814, 4.075, 15.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text146_Kays_0.geometry}
            material={materials.Kays}
            position={[-119.967, 88.137, 7.599]}
            scale={[4.814, 4.075, 15.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Text147_Kays_0.geometry}
            material={materials.Kays}
            position={[-137.837, 88.137, 7.599]}
            scale={[4.814, 4.075, 15.073]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube101_TrackPad_0.geometry}
            material={materials.TrackPad}
            position={[-0.492, 185.906, 6.694]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[1.719, 6.171, 0.849]}
          />
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
