import { Group, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

import { createMeshes } from './meshes.js';

const wheelSpeed = MathUtils.degToRad(24);

export class Train extends Group {
	constructor() {
		super();

		this.meshes = createMeshes();

		this.add(
			this.meshes.nose,
			this.meshes.cabin,
			this.meshes.cabinRoof,
			this.meshes.cabinWall,
			this.meshes.cabinSeptumRight,
			this.meshes.cabinSeptumLeft,
			this.meshes.chimney,
			this.meshes.smallWheelRear,
			this.meshes.smallWheelCenter,
			this.meshes.smallWheelFront,
			this.meshes.bigWheel,
			this.meshes.railRight,
			this.meshes.railLeft,
		);
	}

	tick(delta) {
		this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
		this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
	}
}