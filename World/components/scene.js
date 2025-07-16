import { Color, Scene } from 'three';

function createScene() {
  const scene = new Scene();

  // Set the background color of the scene
  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };
// This code creates a Three.js scene and sets its background color to sky blue.