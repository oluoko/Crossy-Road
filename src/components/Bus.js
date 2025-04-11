import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Bus(initialTileIndex, direction, color) {
  const bus = new THREE.Group();
  bus.position.x = initialTileIndex * tileSize;
  if (!direction) bus.rotation.z = Math.PI;

  // Bus body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(85, 30, 20),
    new THREE.MeshLambertMaterial({
      color: color,
      flatShading: true,
    })
  );
  body.position.x = 0;
  body.position.z = 23;
  body.castShadow = true;
  body.receiveShadow = true;
  bus.add(body);

  // Add wheels
  const frontWheel = Wheel(30);
  bus.add(frontWheel);

  const middleWheel = Wheel(-12);
  bus.add(middleWheel);

  const backWheel = Wheel(-30);
  bus.add(backWheel);

  // Bus roof
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(85, 30, 15),
    new THREE.MeshLambertMaterial({
      color: 0x444444,
      flatShading: true,
    })
  );
  roof.position.x = 0;
  roof.position.z = 40;
  roof.castShadow = true;
  roof.receiveShadow = true;
  bus.add(roof);

  // Headlights
  const leftHeadlight = new THREE.Mesh(
    new THREE.BoxGeometry(2, 5, 5),
    new THREE.MeshLambertMaterial({
      color: 0xffffcc,
      flatShading: true,
    })
  );
  leftHeadlight.position.x = 42;
  leftHeadlight.position.y = 10;
  leftHeadlight.position.z = 18;
  bus.add(leftHeadlight);

  const rightHeadlight = new THREE.Mesh(
    new THREE.BoxGeometry(2, 5, 5),
    new THREE.MeshLambertMaterial({
      color: 0xffffcc,
      flatShading: true,
    })
  );
  rightHeadlight.position.x = 42;
  rightHeadlight.position.y = -10;
  rightHeadlight.position.z = 18;
  bus.add(rightHeadlight);

  return bus;
}
