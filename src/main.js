import "./style.css";

import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { DirectionalLight } from "./components/DirectionalLight";
import { animateVehicles } from "./animateVehicles";
import "./collectUserInput";
import { animatePlayer } from "./animatePlayer";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  initializeMap();
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();

  renderer.render(scene, camera);
}
