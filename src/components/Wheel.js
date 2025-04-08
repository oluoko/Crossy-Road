import * as THREE from "three";

export function Wheel(x) {
  const wheel = new THREE.Mesh(
    // new THREE.BoxGeometry(12, 33, 12),
    new THREE.CylinderGeometry(8, 8, 34, 32),
    new THREE.MeshLambertMaterial({
      color: 0x000000,
      flatShading: true,
    })
  );
  wheel.position.x = x;
  wheel.position.z = 8;

  return wheel;
}
