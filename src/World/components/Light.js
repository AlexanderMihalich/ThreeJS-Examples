import { AmbientLight, DirectionalLight, HemisphereLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
	// const ambientLight = new AmbientLight('white', 2);

	const ambientLight = new HemisphereLight(
		'white', // bright sky color
		'darkslategrey', // dim ground color
		3, // intensity
	);

	const mainLight = new DirectionalLight('#fff', 2);
	mainLight.position.set(10, 10, 10);

	return { ambientLight, mainLight };
}

export { createLights };