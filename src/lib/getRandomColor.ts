const COLORS = ["darkgreen", "firebrick", "lightgreen", "gold", "slategray"];

export default function () {
  const index = Math.floor(Math.random() * 5);
  return COLORS[index];
}
