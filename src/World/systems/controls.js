import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);

	// damping and auto rotation require
	// the controls to be updated each frame

	// controls.autoRotate = true;

	controls.enableDamping = true;

	// controls.enableRotate = false;
	// controls.enableZoom = false;
	// controls.enablePan = false;

	// controls.autoRotate = true;
	// controls.autoRotateSpeed = 1;

	controls.tick = () => controls.update();

	return controls;
}

export { createControls };
