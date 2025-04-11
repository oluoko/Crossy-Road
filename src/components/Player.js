import * as THREE from "three";

// export const player = Player();

// function Player() {
//   const body = new THREE.Mesh(
//     new THREE.BoxGeometry(15, 15, 25),
//     new THREE.MeshLambertMaterial({
//       color: "white",
//       flatShading: true,
//     })
//   );
//   body.position.z = 10;
//   body.castShadow = true;
//   body.receiveShadow = true;

//   return body;
// }

export const player = Player();

function Player() {
  // Create a group to hold all body parts
  const player = new THREE.Group();

  // Colors
  const skinColor = 0xf5d0a9;
  const shirtColor = 0x3498db;
  const pantsColor = 0x2c3e50;
  const shoesColor = 0x4b3621;

  // Body
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 18),
    new THREE.MeshLambertMaterial({
      color: shirtColor,
      flatShading: true,
    })
  );
  body.position.z = 22;
  body.castShadow = true;
  body.receiveShadow = true;
  player.add(body);

  // Head
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 9),
    new THREE.MeshLambertMaterial({
      color: skinColor,
      flatShading: true,
    })
  );
  head.position.z = 37;
  head.castShadow = true;
  head.receiveShadow = true;
  player.add(head);

  // hair
  const hair = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 3),
    new THREE.MeshLambertMaterial({
      color: 0x000000,
      flatShading: true,
    })
  );
  hair.position.z = 43;
  hair.castShadow = true;
  hair.receiveShadow = true;
  player.add(hair);

  // Legs
  const leftLeg = new THREE.Mesh(
    new THREE.BoxGeometry(6, 5, 15),
    new THREE.MeshLambertMaterial({
      color: pantsColor,
      flatShading: true,
    })
  );
  leftLeg.position.y = 3;
  leftLeg.position.z = 7.5;
  leftLeg.castShadow = true;
  leftLeg.receiveShadow = true;
  player.add(leftLeg);

  const rightLeg = new THREE.Mesh(
    new THREE.BoxGeometry(6, 5, 15),
    new THREE.MeshLambertMaterial({
      color: pantsColor,
      flatShading: true,
    })
  );
  rightLeg.position.y = -3;
  rightLeg.position.z = 7.5;
  rightLeg.castShadow = true;
  rightLeg.receiveShadow = true;
  player.add(rightLeg);

  // Arms - now at the sides
  const leftArm = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 14),
    new THREE.MeshLambertMaterial({
      color: shirtColor,
      flatShading: true,
    })
  );
  leftArm.position.y = 7.5;
  leftArm.position.z = 22;
  leftArm.castShadow = true;
  leftArm.receiveShadow = true;
  player.add(leftArm);

  const rightArm = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 14),
    new THREE.MeshLambertMaterial({
      color: shirtColor,
      flatShading: true,
    })
  );
  rightArm.position.y = -7.5;
  rightArm.position.z = 22;
  rightArm.castShadow = true;
  rightArm.receiveShadow = true;
  player.add(rightArm);

  // Shoes
  const leftShoe = new THREE.Mesh(
    new THREE.BoxGeometry(10, 5, 6),
    new THREE.MeshLambertMaterial({
      color: shoesColor,
      flatShading: true,
    })
  );
  leftShoe.position.y = 3;
  leftShoe.position.z = 1.5;
  leftShoe.castShadow = true;
  leftShoe.receiveShadow = true;
  player.add(leftShoe);

  const rightShoe = new THREE.Mesh(
    new THREE.BoxGeometry(10, 5, 6),
    new THREE.MeshLambertMaterial({
      color: shoesColor,
      flatShading: true,
    })
  );
  rightShoe.position.y = -3;
  rightShoe.position.z = 1.5;
  rightShoe.castShadow = true;
  rightShoe.receiveShadow = true;
  player.add(rightShoe);

  // Face details (eyes)
  const leftEye = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshLambertMaterial({
      color: 0x000000,
      flatShading: true,
    })
  );
  leftEye.position.x = 6;
  leftEye.position.y = 3;
  leftEye.position.z = 39;
  player.add(leftEye);

  const rightEye = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshLambertMaterial({
      color: 0x000000,
      flatShading: true,
    })
  );
  rightEye.position.x = 6;
  rightEye.position.y = -3;
  rightEye.position.z = 39;
  player.add(rightEye);

  return player;
}

export const position = {
  currentRow: 0,
  currentTile: 0,
};

export const movesQueue = [];

export function queueMove(direction) {
  movesQueue.push(direction);
}

export function stepCompleted() {
  const direction = movesQueue.shift();

  if (direction === "forward") position.currentRow += 1;
  if (direction === "backward") position.currentRow -= 1;
  if (direction === "left") position.currentTile -= 1;
  if (direction === "right") position.currentTile += 1;
}
