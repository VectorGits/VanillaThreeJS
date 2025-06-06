import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils } from 'three';

function createCube() {
  
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a material
  const material = new MeshStandardMaterial({ color: 'orange' });

  // create a mesh 
  const cube = new Mesh(geometry, material);
  cube.position.set(-1, 1, -3); // Set the position of the cube in the scene
  cube.rotation.set(-0.5, -0.1, 0.8); // Set the rotation of the cube in the scene
  
  const radiansPerSecond = MathUtils.degToRad(30);
  
  // this method would be called once per frame
  cube.tick = (delta) => {
    // Increase the cube's rotation each frame
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
// This code creates a cube mesh using Three.js. It defines a function `createCube` that creates a box geometry, a basic material with an orange color, and then combines them into a mesh. The mesh is returned for use in the scene.