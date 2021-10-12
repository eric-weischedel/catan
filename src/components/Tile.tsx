import { RegularPolygon, Group, Text } from 'react-konva';
import { Tile as TileData } from '../data/generateBoard';

interface Props {
  x: number;
  y: number;
  tile: TileData | null;
  isOffset: boolean;
}

export default function Tile(props: Props) {
  const offset = props.isOffset ? -15 : -10;

  return (
    <Group x={props.x} y={props.y} offsetX={offset} offsetY={-10}>
      <RegularPolygon
        sides={6}
        radius={5}
        fill={props.tile?.color}
        onMouseDown={function (event) {
          console.log(JSON.stringify(event.target, null, 2));
        }}
      />
      <Text text={props.tile?.number?.toString()} fontSize={2} />
    </Group>
  );
}
