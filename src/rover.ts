function getStartPostion() {
  return [0, 0];
}

function setPlateauArea(x: number, y: number): {} {
  return { width: x || 5, height: y || 5 };
}

export { getStartPostion, setPlateauArea };
