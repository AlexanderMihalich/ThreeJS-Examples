import { Clock } from "https://cdn.skypack.dev/three@0.132.2";

export class Loop {
	constructor(camera, scene, renderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		// somewhere in the Loop class:
		this.updatables = []

		this.clock = new Clock();
	}

	start() {
		// start the loop
		this.renderer.setAnimationLoop(() => {
			// tell every animated object to tick forward one frame
			this.tick();

			// render a frame
			this.renderer.render(this.scene, this.camera)
		});
	}

	stop() { this.renderer.setAnimationLoop(null); }

	tick() {
		// only call the getDelta function once per frame!
		this.delta = this.clock.getDelta();
		for (const object of this.updatables) object.tick(this.delta);
	}
}
