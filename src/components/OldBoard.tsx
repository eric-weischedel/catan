import { Stage, Layer, RegularPolygon, Circle } from "react-konva";
import Tile from "./Tile";

export default function Board() {
  return (
    <>
      <Stage width={1000} height={1000} scale={{ x: 3, y: 3 }}>
        {/* Ocean */}
        <Layer>
          <RegularPolygon
            x={125}
            y={125}
            sides={6}
            radius={95}
            rotationDeg={90}
            fill="deepskyblue"
          />
        </Layer>

        {/* Tiles */}
        <Layer>
          <Tile x={103} y={87} />
          <Tile x={147} y={87} />

          <Tile x={81} y={125} />
          <Tile x={125} y={125} isDesert />
          <Tile x={169} y={125} />

          <Tile x={103} y={163} />
          <Tile x={147} y={163} />
        </Layer>

        {/* Robber */}
        <Layer>
          <Circle
            x={125}
            y={125}
            fill="#333333"
            radius={6}
            shadowColor="#333333"
            shadowBlur={5}
            shadowOpacity={0.75}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
}
