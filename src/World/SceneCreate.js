import { Scene, Color } from "https://cdn.skypack.dev/three@0.132.2";
import { loadBirds } from './components/birds/birds.js';

import { createLights } from './components/Light.js';

export class SceneCreate extends Scene {
	constructor(birds, instance, helpers) {
		super();

		this.birds = birds;
		this.background = new Color('#282828');

		if (!birds) this.child = instance;

		const { ambientLight, mainLight } = createLights();

		if (!birds) this.add(ambientLight, mainLight, this.child);
		else this.add(ambientLight, mainLight);

		if (helpers) for (let key in helpers) this.add(helpers[key]);
	}
}