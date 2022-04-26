import { AxesHelper, GridHelper } from "https://cdn.skypack.dev/three@0.132.2";

function createAxesHelper() {
	const helper = new AxesHelper(3);
	helper.position.set(-4, -0.25, -4);
	return helper;
}

function createGridHelper() {
	const helper = new GridHelper(6);
	return helper;
}

export { createAxesHelper, createGridHelper };
