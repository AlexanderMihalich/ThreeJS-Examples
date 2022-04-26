import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
	const geometries = createGeometries();
	const materials = createMaterials();

	const cabin = new Mesh(geometries.cabin, materials.body);
	cabin.position.set(1.5, 1, 0);

	const cabinRoof = new Mesh(geometries.cabinRoof, materials.body);
	cabinRoof.position.set(1.5, 2.8, 0);

	const cabinWall = new Mesh(geometries.cabinWall, materials.body);
	cabinWall.position.set(2.45, 2, 0);

	const cabinSeptumRight = new Mesh(geometries.cabinSeptum, materials.detail);
	cabinSeptumRight.position.set(0.7, 2, 0.6);

	const cabinSeptumLeft = cabinSeptumRight.clone();
	cabinSeptumLeft.position.set(0.7, 2, -0.6);
	// cabinSeptum.rotation.z = Math.PI / 2;

	const chimney = new Mesh(geometries.chimney, materials.detail);
	chimney.position.set(-2, 1.9, 0);

	const nose = new Mesh(geometries.nose, materials.body);
	nose.position.set(-1, 1, 0);
	nose.rotation.z = Math.PI / 2;

	const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
	smallWheelRear.position.y = 0.5;
	smallWheelRear.rotation.x = Math.PI / 2;

	const smallWheelCenter = smallWheelRear.clone();
	smallWheelCenter.position.x = -1;

	const smallWheelFront = smallWheelRear.clone();
	smallWheelFront.position.x = -2;

	const bigWheel = smallWheelRear.clone();
	bigWheel.position.set(1.5, 0.9, 0);
	bigWheel.scale.set(2, 1.25, 2);

	const railRight = new Mesh(geometries.rail, materials.rail);
	railRight.position.set(0, -0.1, -0.8);

	const railLeft = railRight.clone();
	railLeft.position.set(0, -0.1, 0.8);

	return {
		nose, cabin, cabinRoof, cabinWall, cabinSeptumRight, cabinSeptumLeft,
		chimney, smallWheelRear, smallWheelCenter, smallWheelFront, bigWheel,
		railRight, railLeft
	};
}

export { createMeshes };
