import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("white");

const camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

renderer.outputEncoding = THREE.sRGBEncoding;

const loader = new GLTFLoader();
loader.load("shiba/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    gltf.scene.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();
});
