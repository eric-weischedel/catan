import React from "react";
import Hexagon from "./components/Hexagon";
import { Circle, Layer, RegularPolygon, Stage } from "react-konva";

const WIDTH = 1920;
const HEIGHT = 1080;
const CENTER = [WIDTH / 2, HEIGHT / 2];

const TILESIZE = 25;

function App() {
  return (
    <>
      <Stage width={1000} height={1000} scale={{ x: 3, y: 3 }}>
        {/* Ocean */}
        <Layer>
          <RegularPolygon
            x={125}
            y={125}
            sides={6}
            radius={100}
            rotationDeg={90}
            fill="deepskyblue"
          />
        </Layer>

        {/* Tiles */}
        <Layer>
          <Hexagon x={102.5} y={87} />
          <Hexagon x={147.5} y={87} />

          <Hexagon x={80} y={125} />
          <Hexagon x={125} y={125} isDesert />
          <Hexagon x={170} y={125} />

          <Hexagon x={102.5} y={163} />
          <Hexagon x={147.5} y={163} />
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

export default App;
