import { BoxBufferGeometry, CylinderBufferGeometry } from "https://cdn.skypack.dev/three@0.132.2";

function createGeometries() {
	const cabin = new BoxBufferGeometry(2, 1.5, 1.5);
	const cabinRoof = new BoxBufferGeometry(2, 0.1, 1.5);
	const cabinWall = new BoxBufferGeometry(0.1, 1.5, 1.5);
	const cabinSeptum = new CylinderBufferGeometry(0.05, 0.05, 1.6, 16);

	const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);
	// we can reuse a single cylinder geometry for all 4 wheels
	const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);
	// different values for the top and bottom radius creates a cone shape
	const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

	const rail = new BoxBufferGeometry(7, 0.3, 0.15);

	return { cabin, cabinRoof, cabinWall, cabinSeptum, nose, wheel, chimney, rail };
}

export { createGeometries };
