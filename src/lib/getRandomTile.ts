import { TileData } from "../components/NewBoard";

export default function getRandomTile(): TileData {
  return {
    type: Math.floor(Math.random() * 5),
    number: Math.ceil(Math.random() * 12),
  };
}
