import { World } from '../World/World.js';

async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async task
  await world.init();

  // draw the scene
  world.start();
}

main().catch((err) => {
  console.error(err);
  alert('An error occurred while starting the world. Check the console for details.');
});
