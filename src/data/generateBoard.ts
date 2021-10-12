export interface Tile {
  type: TileType;
  number?: number;
  resource?: Resource;
  color?: string;
}

export enum Resource {
  Wood,
  Brick,
  Sheep,
  Wheat,
  Ore,
}

export enum TileType {
  Forest,
  Hill,
  Pasture,
  Field,
  Mountain,
  Ocean,
}

function resourceTile(): Tile {
  const type = Math.floor(Math.random() * 5);
  const number = Math.ceil(Math.random() * 12);
  let resource: Resource | undefined;
  let color: string | undefined;

  switch (type) {
    case TileType.Forest:
      resource = Resource.Wood;
      color = 'green';
      break;
    case TileType.Hill:
      resource = Resource.Brick;
      color = 'red';
      break;
    case TileType.Pasture:
      resource = Resource.Sheep;
      color = 'lightgreen';
      break;
    case TileType.Field:
      resource = Resource.Wheat;
      color = 'yellow';
      break;
    case TileType.Mountain:
      resource = Resource.Ore;
      color = 'gray';
      break;
  }

  return {
    type,
    number,
    resource,
    color,
  };
}

export default function generateBoard(): Array<Array<Tile | null>> {
  const ocean = { type: TileType.Ocean, color: 'blue' };

  return [
    [null, ocean, ocean, ocean, null],
    [ocean, resourceTile(), resourceTile(), ocean],
    [ocean, resourceTile(), resourceTile(), resourceTile(), ocean],
    [ocean, resourceTile(), resourceTile(), ocean],
    [null, ocean, ocean, ocean, null],
  ];
}
