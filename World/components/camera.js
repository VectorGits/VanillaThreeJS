import { PerspectiveCamera, Vector3 } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = field of view
    1, // aspect ratio
    0.1, // near plane
    100, // far plane
  );

  // move the camera back so we can see the scene
  camera.position.set(-5, 5, 7);

  // Animation state variables
  const originalPosition = new Vector3(0, 0, 10);
  const target = new Vector3(0, 0, 0);
  const maxDistance = 10;
  const minDistance = originalPosition.z;
  
  // Animation phases
  const ZOOM_OUT = 'zoom_out';
  const PAN = 'pan';
  const ZOOM_IN = 'zoom_in';
  
  let state = ZOOM_OUT;
  let zoomProgress = 0;
  let panAngle = 0;
  
  // Animation speeds
  const zoomSpeed = 0.2; // units per second
  const panSpeed = 0.3; // radians per second

  // zoom out animation
  camera.tick = (delta) => {
    switch (state) {
      case ZOOM_OUT:
        // Zoom out until we reach maxDistance
        zoomProgress += zoomSpeed * delta;
        camera.position.z = minDistance + zoomProgress * maxDistance;
        
        if (zoomProgress >= 1) {
          zoomProgress = 1;
          state = PAN;
        }
        break;
        
      case PAN:
        // Pan around 360 degrees
        panAngle += panSpeed * delta;
        
        // Calculate new position in a circle
        const radius = minDistance + maxDistance;
        camera.position.x = Math.sin(panAngle) * radius;
        camera.position.z = Math.cos(panAngle) * radius;
        
        // Always look at center
        camera.lookAt(target);
        
        // Complete a full circle
        if (panAngle >= Math.PI * 2) {
          panAngle = 0;
          state = ZOOM_IN;
        }
        break;
        
      case ZOOM_IN:
        // Zoom back in
        zoomProgress -= zoomSpeed * delta;
        
        // Calculate position based on current angle
        const currentRadius = minDistance + zoomProgress * maxDistance;
        camera.position.x = Math.sin(panAngle) * currentRadius;
        camera.position.z = Math.cos(panAngle) * currentRadius;
        
        // Always look at center
        camera.lookAt(target);
        
        if (zoomProgress <= 0) {
          // Reset to original position
          camera.position.copy(originalPosition);
          camera.lookAt(target);
          
          // Restart animation
          zoomProgress = 0;
          state = ZOOM_OUT;
        }
        break;
    }
  };

  return camera;
}

export { createCamera };
// This code creates a perspective camera using the Three.js library.