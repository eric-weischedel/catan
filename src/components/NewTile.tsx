import { RegularPolygon, Group, Text } from "react-konva";
import { TileData, TileType } from "./NewBoard";

interface Props {
  x: number;
  y: number;
  tile: TileData | null;
  isOffset: boolean;
}

function colorFromTile(tile: TileData | null): string {
  switch (tile?.type) {
    case TileType.Forest:
      return "green";
    case TileType.Hill:
      return "red";
    case TileType.Pasture:
      return "lightgreen";
    case TileType.Field:
      return "yellow";
    case TileType.Mountain:
      return "gray";
    case TileType.Ocean:
      return "blue";
    default:
      return "white";
  }
}

export default function Tile(props: Props) {
  const color = colorFromTile(props.tile);
  const offset = props.isOffset ? -15 : -10;

  return (
    <Group x={props.x} y={props.y} offsetX={offset} offsetY={-10}>
      <RegularPolygon
        sides={6}
        radius={5}
        fill={color}
        onMouseDown={function (event) {
          console.log(JSON.stringify(event.target, null, 2));
        }}
      />
      <Text text={props.tile?.number?.toString()} fontSize={2} />
    </Group>
  );
}
