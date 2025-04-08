import * as THREE from "three";

export function DirectionalLight() {
  const dirLight = new THREE.DirectionalLight();
  dirLight.position.set(-100, -100, 200);
  dirLight.up.set(0, 0, 1);
  dirLight.castShadow = true;

  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;

  dirLight.shadow.camera.up.set(0, 0, 1);
  dirLight.shadow.camera.left = -800;
  dirLight.shadow.camera.right = 800;
  dirLight.shadow.camera.top = 800;
  dirLight.shadow.camera.bottom = -800;
  dirLight.shadow.camera.near = 50;
  dirLight.shadow.camera.far = 800;

  return dirLight;
}
