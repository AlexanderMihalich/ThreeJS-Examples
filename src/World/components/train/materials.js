import { MeshStandardMaterial } from "https://cdn.skypack.dev/three@0.132.2";

function createMaterials() {
	const body = new MeshStandardMaterial({
		color: 'firebrick',
		flatShading: true,
	});

	const detail = new MeshStandardMaterial({
		color: 'darkslategray',
		flatShading: true,
	});

	const rail = new MeshStandardMaterial({ color: '#56252F' });

	return { body, detail, rail };
}

export { createMaterials };
