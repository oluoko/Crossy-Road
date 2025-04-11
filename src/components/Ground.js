import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Ground(rowIndex) {
  const ground = new THREE.Group();
  ground.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: 0x5c341e })
  );
  foundation.positionz = 1.5;
  foundation.receiveShadow = true;
  ground.add(foundation);

  return ground;
}
