import { WebGLRenderer } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
  });

  renderer.setClearColor('skyblue');
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
// This code creates a WebGL renderer using the Three.js library.