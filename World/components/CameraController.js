import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = field of view
    1, // aspect ratio
    0.1, // near plane
    100, // far plane
  );

  // move the camera back so we can see the scene
  camera.position.set(0, 0, 10);

  // zoom out animation
  camera.tick = (delta) => {
    camera.position.z -= 5 * delta; // move the camera back
    if (camera.position.z < 5) {
      camera.position.z = 10; // reset the camera position
    }
  };

  return camera;
}

export { createCamera };
// This code creates a perspective camera using the Three.js library.