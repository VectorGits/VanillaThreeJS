import { SphereGeometry, Mesh, MeshStandardMaterial } from "three";

function createSphere() {
  const geometry = new SphereGeometry(1, 32, 32); // Create a sphere geometry with radius 1 and 32 segments
  const material = new MeshStandardMaterial({ color: "blue" }); // Create a basic material with blue color
  const sphere = new Mesh(geometry, material); // Create a mesh using the geometry and material

  sphere.position.set(2, 2, -3); // Set the position of the sphere in the scene
  return sphere; // Return the created sphere mesh
}

export { createSphere }; // Export the createSphere function for use in other modules