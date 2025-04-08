import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Truck(initialTileIndex, direction, color) {
  const truck = new THREE.Group();
  truck.position.x = initialTileIndex * tileSize;
  if (!direction) truck.rotation.z = Math.PI;

  const cargo = new THREE.Mesh(
    new THREE.BoxGeometry(70, 35, 35),
    new THREE.MeshLambertMaterial({
      color: 0x909090,
      flatShading: true,
    })
  );

  cargo.position.x = -15;
  cargo.position.z = 25;
  truck.add(cargo);

  const cabinBottom = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 17),
    new THREE.MeshLambertMaterial({ color, flatShading: true })
  );
  cabinBottom.position.x = 35;
  cabinBottom.position.z = 20;
  truck.add(cabinBottom);

  const cabinTop = new THREE.Mesh(
    new THREE.BoxGeometry(27, 30, 10),
    new THREE.MeshLambertMaterial({ color: "white", flatShading: true })
  );
  cabinTop.position.x = 35;
  cabinTop.position.z = 33;
  truck.add(cabinTop);

  const frontWheel = Wheel(37);
  truck.add(frontWheel);

  const middleWheel = Wheel(5);
  truck.add(middleWheel);

  const backWheel = Wheel(-30);
  truck.add(backWheel);

  return truck;
}
