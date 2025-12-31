import { Cache, TextureLoader, Scene, Material, Mesh, WebGLRenderer, Object3D, Light } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";

// Enable caching for all loaders
Cache.enabled = true;

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;
export const textureLoader = new TextureLoader();

/**
 * Clean up a scene's materials and geometry
 * For light theme
 * vec3 color = vec3(vUv * (0.6 - 4.0 * noise), 1.0);  // Increased 0.4 to 0.6
 * vec3 finalColors = vec3(color.b * 1.5, color.b * 0.9, color.b * 0.9);  // Increased from 0.8 and 0.5
 * vec4 diffuseColor = vec4((cos(finalColors * noise * 3.0) + 2.0) * 0.5, 1.0);  // Added offset to keep values higher
 *   ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
 *   vec3 totalEmissiveRadiance = emissive;
 */
export const cleanScene = (scene: Scene) => {
  scene?.traverse((object: Object3D) => {
    if (!(object instanceof Mesh)) return;

    object.geometry.dispose();

    if (Array.isArray(object.material)) {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    } else {
        cleanMaterial(object.material);
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = (material: Material) => {
  material.dispose();

  for (const key of Object.keys(material)) {
    const value = (material as any)[key];
    if (value && typeof value === "object" && "minFilter" in value) {
      value.dispose();

      // Close GLTF bitmap textures
      value.source?.data?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = (renderer: WebGLRenderer) => {
  renderer.dispose();
  // renderer = null; // Cannot assign to parameter
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = (lights: Light[]) => {
  for (const light of lights) {
    if (light.parent) {
        light.parent.remove(light);
    }
  }
};

/**
 * Get child by name
 */
export const getChild = (name: string, object: Object3D) => {
  let node: Object3D | undefined;

  object.traverse((child) => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};
