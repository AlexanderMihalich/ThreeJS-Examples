import { PerspectiveCamera, MathUtils } from "https://cdn.skypack.dev/three@0.132.2";

const radiansPerSecond = MathUtils.degToRad(0.1);

export class Camera extends PerspectiveCamera {
	constructor() {
		super(35, 1, 0.1, 100);

		this.position.set(-13, 5, 10);
	}
}