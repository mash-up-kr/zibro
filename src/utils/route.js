export const selectBusstop = (x, y, busStop) => {
  const distanceArr = busStop.map(stop => ({
    ...stop,
    distance: ((x - stop.x) ** 2) + ((y - stop.y) ** 2),
  }));
  distanceArr.sort((a, b) => a.distance - b.distance);
  return distanceArr.splice(0, 3);
};
