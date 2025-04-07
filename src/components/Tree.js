import * as THREE from "three";
import { tileSize } from "../constants";

export function Tree(titleIndex, height) {
  const tree = new THREE.Group();
  tree.position.x = titleIndex * tileSize;

  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshLambertMaterial({ color: 0x4d2926, flatShading: true })
  );

  trunk.position.z = 10;
  tree.add(trunk);

  const crown = new THREE.Mesh(
    new THREE.SphereGeometry(20, 30, height),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true })
  );
  crown.position.z = height / 2 + 20;
  tree.add(crown);

  return tree;
}
