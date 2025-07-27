import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true; // an animation effect

  controls.target.y = 1;

  controls.tick = () => controls.update(); // update the controls on each frame

  return controls;
}

export { createControls };