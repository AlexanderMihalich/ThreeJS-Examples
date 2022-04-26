import { Camera } from './components/Camera.js';
import { loadBirds } from './components/birds/birds.js';
import { createSparkleHorse } from './components/horse/sparkleHorse.js';

import { createControls } from './systems/controls.js';
import { createRender } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

export class World {
	constructor(container, instance, birds, horse) {
		this._container = container;
		this._scene = instance;
		this._birds = birds;
		this._horse = horse;

		this._camera = new Camera();
		this._renderer = createRender();
		this._controls = new createControls(this.camera, this.container);

		this._loop = new Loop(this.camera, this.scene, this.renderer, this.controls);
		if (this.birds) {
			this.camera.position.set(-1.5, 1.4, 8.5);
			this.scene.scale.set(0.8, 0.8, 0.8)
		}
		if (this.horse) {
			this.camera.position.set(8, 1, 10.5);
			this.scene.position.y = -2;
		}
		if (this.birds || this.horse) {
			this.loop.updatables.push(this.controls);
		} else this.loop.updatables.push(this.controls, this.scene.child);

		container.append(this.renderer.domElement);

		new Resizer(this.container, this.camera, this.renderer);
	}

	get container() { return this._container; }
	get birds() { return this._birds; }
	get horse() { return this._horse; }
	get scene() { return this._scene; }
	get camera() { return this._camera; }
	get renderer() { return this._renderer; }
	get controls() { return this._controls; }
	get loop() { return this._loop; }

	async init() {
		if (this.birds) {
			const { parrot, flamingo, stork } = await loadBirds();

			// // move the target to the center of the front bird
			this.controls.target.copy(parrot.position);
			this.loop.updatables.push(parrot, flamingo, stork);
			this.scene.add(parrot, flamingo, stork);
		}
		if (this.horse) {
			const sparkleHorse = await createSparkleHorse();

			this.loop.updatables.push(sparkleHorse);
			this.scene.add(sparkleHorse);
		}
	}

	render() { this.renderer.render(this.scene, this.camera); }

	start() { this.loop.start(); }

	stop() { this.loop.stop(); }
}