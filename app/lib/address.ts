/**
 * 引数に渡した距離圏でランダムな座標を返す
 */
export const getRandomLocation = (center: { lat: number; lng: number }, radius: number) => {
  const lat = center.lat + (Math.random() - 0.5) * (radius / 111000);
  const lng =
    center.lng +
    ((Math.random() - 0.5) * (radius / 111000)) / Math.cos((center.lat * Math.PI) / 180);
  return { lat, lng };
};
