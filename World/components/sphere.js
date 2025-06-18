import { 
  SphereGeometry, 
  Mesh, 
  MeshStandardMaterial,
  TextureLoader,
  MathUtils
 } from "three";

function createMaterial() {
  // Create a texture loader
  const textureLoader = new TextureLoader();

  // Load a texture
  const texture = textureLoader.load(
    "/assets/textures/uv-test-bw.png"
  );

  // Create a "standard" material using the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material; // Return the created material
}

function createSphere() {
  const geometry = new SphereGeometry(1, 32, 32); // Create a sphere geometry with radius 1 and 32 segments
  const material = createMaterial(); // Create a material using the createMaterial function
  const sphere = new Mesh(geometry, material); // Create a mesh using the geometry and material

  sphere.rotation.set(-0.5, -0.1, 0.8); 

  const radiansPerSecond = MathUtils.degToRad(30); 

  sphere.tick = (delta) => {
    // Increase the sphere's rotation each frame
    sphere.rotation.z += delta * radiansPerSecond;
    sphere.rotation.x += delta * radiansPerSecond;
    sphere.rotation.y += delta * radiansPerSecond;
  }

  sphere.position.set(2, 2, -3); // Set the position of the sphere in the scene
  return sphere; // Return the created sphere mesh
}

export { createSphere }; // Export the createSphere function for use in other modules