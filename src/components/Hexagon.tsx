import React from "react";
import { RegularPolygon, Group, Circle, Text } from "react-konva";
import getRandomColor from "../lib/getRandomColor";

interface Props {
  x: number;
  y: number;
  isDesert?: true;
}

export default function Hexagon(props: Props) {
  const fill = props.isDesert ? "navajowhite" : getRandomColor();
  return (
    <Group>
      <RegularPolygon
        x={props.x}
        y={props.y}
        sides={6}
        radius={25}
        fill={fill}
        stroke="beige"
        strokeWidth={2}
      />
      {!props.isDesert && (
        <>
          <Circle x={props.x} y={props.y} fill="beige" radius={10} />
          <Text
            x={props.x - 3}
            y={props.y - 4}
            text={`${Math.ceil(Math.random() * 6)}`}
            align="center"
            verticalAlign="middle"
            fontSize={10}
            fontStyle="bold"
          />
        </>
      )}
    </Group>
  );
}
