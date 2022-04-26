import { Mesh, BoxBufferGeometry, MeshStandardMaterial, MathUtils, TextureLoader, } from "https://cdn.skypack.dev/three@0.132.2";

const radiansPerSecond = MathUtils.degToRad(30);

export class Cube extends Mesh {
	constructor() {
		const geometry = new BoxBufferGeometry(1.5, 1.5, 1.5);
		// create a texture loader.
		const textureLoader = new TextureLoader();
		const material = new MeshStandardMaterial({
			// map: texture,
			color: '#444'
		});
		material.map = textureLoader.load('./assets/textures/uv-test-col.png',);

		super(geometry, material);

		this.scale.set(1.1, 1.1, 1.1);
		this.rotation.set(-0.9, -0.2, 0.7);
		this.position.set(0, -0.5, 0);
	}

	tick(delta) {
		// increase the cube's rotation each frame
		this.rotation.z += radiansPerSecond * delta;
		this.rotation.x += radiansPerSecond * delta;
		this.rotation.y += radiansPerSecond * delta;
	};
}