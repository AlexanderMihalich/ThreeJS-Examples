// just waiting for your beautiful creations!
import { BoxBufferGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer, } from "https://cdn.skypack.dev/three@0.132.2";

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color('#282828');

// Create a camera
const fov = 35; // АКА Поле зрения: ширина обзора камеры в градусах.
const aspect = container.clientWidth / container.clientHeight; // соотношение сторон
const near = 0.1; // ближняя плоскость отсечения: все, что находится ближе к камере, будет невидимым.
const far = 100; // дальняя плоскость отсечения: все, что находится дальше от камеры, будет невидимым.

const camera = new PerspectiveCamera(fov, aspect, near, far);

// каждый объект изначально создается в (0, 0, 0)
// переместите камеру назад, чтобы мы могли видеть сцену
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// затем установите средство визуализации того же размера, что и наш элемент-контейнер.
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);