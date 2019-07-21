export const selectBusstop = (x, y, busStop) => {
  const distanceArr = busStop.map(stop => ({
    ...stop,
    distance: ((x - stop.X) ** 2) + ((y - stop.Y) ** 2),
  }));
  distanceArr.sort((a, b) => a.distance - b.distance);
  return distanceArr.splice(0, 3);
};
