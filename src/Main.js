import { World } from './World/World.js';
import { SceneCreate } from './World/SceneCreate.js';

import { createAxesHelper, createGridHelper, } from './World/components/helpers.js';

import { Cube } from './World/components/cube/Cube.js';
import { Train } from './World/components/train/Train.js';
import { MeshGroup } from './World/components/group/MeshGroup.js';

export class Main {
	constructor() {
		this.container = document.querySelector('#scene-container');
		this.canvas = null;
		this.scene = null;

		this.defaultScene("horse");
		this.subscribe();
	}

	defaultScene(scene) {
		if (scene === "cube") this.createCube();
		if (scene === "train") this.createTrain();
		if (scene === "group") this.createMeshGroup();
		if (scene === "birds") this.createBirds();
		if (scene === "horse") this.createHorse();
	}

	subscribe() {
		this.toogleScene('.button-horse', 'horse', this.createHorse.bind(this));
		this.toogleScene('.button-birds', 'birds', this.createBirds.bind(this));
		this.toogleScene('.button-train', 'train', this.createTrain.bind(this));
		this.toogleScene('.button-cube', 'cube', this.createCube.bind(this));
		this.toogleScene('.button-group', 'group', this.createMeshGroup.bind(this));
	}

	toogleScene(buttonName, name, callback) {
		const play = document.querySelector(buttonName);
		play.addEventListener('click', () => {
			if (this.scene === name) return;
			this.canvas.remove();
			callback();
		});
	}

	async createBirds() {
		this.scene = "birds";
		const birds = new SceneCreate(true);
		const world = new World(this.container, birds, true);
		// complete async tasks
		await world.init();
		this.start(world);
	};

	async createHorse() {
		this.scene = "horse";
		const horse = new SceneCreate(true);
		const world = new World(this.container, horse, false, true);
		// complete async tasks
		await world.init();
		this.start(world);
	};

	createTrain() {
		this.scene = "train";
		const train = new SceneCreate(false, new Train(), [createAxesHelper(), createGridHelper()]);
		const world = new World(this.container, train);
		this.start(world);
	};

	createCube() {
		this.scene = "cube";
		const cube = new SceneCreate(false, new Cube());
		const world = new World(this.container, cube);
		this.start(world);
	};

	createMeshGroup() {
		this.scene = "group";
		const meshGroup = new SceneCreate(false, new MeshGroup());
		const world = new World(this.container, meshGroup);
		this.start(world);
	};

	start(instance) {
		this.canvas = document.querySelector('canvas');
		instance.start();
	}
}

new Main();