import "./style.css";

import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player, initializePlayer } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { DirectionalLight } from "./components/DirectionalLight";
import { animateVehicles } from "./animateVehicles";
import "./collectUserInput";
import { animatePlayer } from "./animatePlayer";
import { hitTest } from "./hitTest";

const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

initializeGame();

document.querySelector("#retry")?.addEventListener("click", () => {
  initializeGame();
  resultDOM.style.visibility = "hidden";
  if (scoreDOM) {
    scoreDOM.innerText = `Score: 0`;
  }
});

function initializeGame() {
  initializePlayer();
  initializeMap();
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();
  animatePlayer();
  hitTest();

  renderer.render(scene, camera);
}
