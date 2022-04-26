import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";
import { Circle } from "./Circle.js";

const radiansPerSecond = MathUtils.degToRad(30);

export class MeshGroup extends Group {
	constructor() {
		super();
		const protoSphere = new Circle();
		// add the protoSphere to the group
		this.add(protoSphere);

		// create twenty clones of the protoSphere
		// and add each to the group
		for (let i = 0; i < 1; i += 0.005) {
			const sphere = protoSphere.clone();

			// position the spheres on around a circle
			sphere.position.x = Math.cos(2 * Math.PI * i);
			sphere.position.y = Math.sin(2 * Math.PI * i);
			sphere.position.z = -i * 5;;
			sphere.scale.multiplyScalar(0.2 + i);
			this.add(sphere);
		}

		// every sphere inside the group will be scaled
		this.scale.multiplyScalar(2);
	}

	tick(delta) {
		// each frame, rotate the entire group of spheres
		this.rotation.z -= delta * radiansPerSecond;
		this.rotation.x -= delta * radiansPerSecond;
	};
}
