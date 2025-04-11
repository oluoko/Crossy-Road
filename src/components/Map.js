import * as THREE from "three";
import { Grass } from "./Grass";
import { Ground } from "./Ground";
import { Tree } from "./Tree";
import { Road } from "./Road";
import { Car } from "./Car";
import { Truck } from "./Truck";

export const metadata = [
  {
    type: "car",
    direction: true,
    speed: 188,
    vehicles: [
      { initialTileIndex: -3, color: 0xff0000 },
      { initialTileIndex: 3, color: 0x00ff00 },
      { initialTileIndex: 7, color: 0x0000ff },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 40 },
    ],
  },

  {
    type: "truck",
    direction: true,
    speed: 125,
    vehicles: [
      { initialTileIndex: -4, color: 0x00ff00 },
      { initialTileIndex: 2, color: 0xf3e03b },
      { initialTileIndex: 6, color: 0xff00ff },
    ],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -7, height: 20 },
      { tileIndex: -2, height: 50 },
      { tileIndex: 4, height: 40 },
    ],
  },
];

export const map = new THREE.Group();

export function initializeMap() {
  map.add(new Grass(0));
  for (let rowIndex = -1; rowIndex > -6; rowIndex--) {
    const ground = new Ground(rowIndex);
    map.add(ground);
  }
  addRows();
}

export function addRows() {
  metadata.forEach((rowData, index) => {
    const rowIndex = index + 1;

    if (rowData.type === "forest") {
      const row = Grass(rowIndex);

      rowData.trees.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height);
        row.add(tree);
      });

      map.add(row);
    }

    if (rowData.type === "car") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const car = Car(
          vehicle.initialTileIndex,
          rowData.direction,
          vehicle.color
        );
        vehicle.ref = car;
        row.add(car);
      });
      map.add(row);
    }

    if (rowData.type === "truck") {
      const row = Road(rowIndex);

      rowData.vehicles.forEach((vehicle) => {
        const truck = Truck(
          vehicle.initialTileIndex,
          rowData.direction,
          vehicle.color
        );
        vehicle.ref = truck;
        row.add(truck);
      });
      map.add(row);
    }
  });
}
