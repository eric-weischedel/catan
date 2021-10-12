import { Stage, Layer } from 'react-konva';
import Tile from './Tile';
import { useState } from 'react';
import generateBoard, { Resource } from '../data/generateBoard';

export default function Board() {
  const [dice, setDice] = useState<[number, number] | null>(null);
  const [board] = useState(generateBoard());

  function roll() {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);

    setDice([die1, die2]);

    const number = die1 + die2;

    for (const row of board) {
      for (const tile of row) {
        if (tile?.number === number) {
          console.log(number, Resource[tile.resource!]);
        }
      }
    }
  }

  return (
    <>
      <button
        style={{
          width: '100px',
          height: '100px',
          fontSize: '24px',
        }}
        onClick={roll}
      >
        {dice && dice[0] + dice[1]}
      </button>

      <Stage width={1000} height={1000} scale={{ x: 10, y: 10 }}>
        <Layer>
          {board.map((row, y) =>
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
