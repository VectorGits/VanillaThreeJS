import { Clock } from "three";

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // Tell every animated object to move forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    // only call the getDelta method once per frame
    const delta = clock.getDelta();


    for (const object of this.updatables) {
      // Check if the object has a tick method before calling it
      if (object.tick && typeof object.tick === 'function') {
        object.tick(delta);
      } else {
        console.warn('Object in updatables does not have a tick method:', object);
      }
    }
  }

  // console.log(
  //   `The last frame rendered in ${delta * 1000} milliseconds`,
  // );
}


export { Loop };