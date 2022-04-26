import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.132.2";

function createRender() {
	const renderer = new WebGLRenderer({ antialias: true });

	renderer.setPixelRatio(window.devicePixelRatio);

	// turn on the physically correct lighting model
	renderer.physicallyCorrectLights = true;

	return renderer;
}

export { createRender }
