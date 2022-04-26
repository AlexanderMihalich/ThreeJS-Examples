import { SphereBufferGeometry, Mesh, MeshStandardMaterial } from "https://cdn.skypack.dev/three@0.132.2";

export class Circle extends Mesh {
	constructor() {
		const geometry = new SphereBufferGeometry(0.25, 40, 40);
		const material = new MeshStandardMaterial({ color: 'indigo' });
		super(geometry, material);
	}
}