import { Stage, Layer } from "react-konva";
import getRandomTile from "../lib/getRandomTile";
import Tile from "./NewTile";
import { useState } from "react";

export enum TileType {
  Forest,
  Hill,
  Pasture,
  Field,
  Mountain,
  Ocean,
}

export interface TileData {
  type: TileType;
  number?: number;
}

const ocean = { type: TileType.Ocean };
const data: Array<TileData | null>[] = [
  [null, ocean, ocean, ocean, null],
  [ocean, getRandomTile(), getRandomTile(), ocean],
  [ocean, getRandomTile(), getRandomTile(), getRandomTile(), ocean],
  [ocean, getRandomTile(), getRandomTile(), ocean],
  [null, ocean, ocean, ocean, null],
];

export default function Board() {
  const [dice, setDice] = useState<[number, number] | null>(null);
  const [board] = useState(data);

  function roll() {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);

    setDice([die1, die2]);

    const number = die1 + die2;

    for (const row of board) {
      for (const tile of row) {
        if (tile?.number === number) {
          console.log(number, TileType[tile.type]);
        }
      }
    }
  }

  return (
    <>
      <button
        style={{
          width: "100px",
          height: "100px",
          fontSize: "24px",
        }}
        onClick={roll}
      >
        {dice && dice[0] + dice[1]}
      </button>

      <Stage width={1000} height={1000} scale={{ x: 10, y: 10 }}>
        <Layer>
          {data.map((row, y) =>
            row.map((tile, x) => {
              return (
                <Tile
                  tile={tile}
                  x={x * 10}
                  y={y * 10}
                  key={`${x},${y}`}
                  isOffset={y % 2 !== 0}
                />
              );
            })
          )}
        </Layer>
      </Stage>
    </>
  );
}
