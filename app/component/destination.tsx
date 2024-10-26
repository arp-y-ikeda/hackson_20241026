type DestinationProps = {
  location: { lat: number; lng: number };
};

export const Destination: React.FC<DestinationProps> = async ({ location }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}&language=ja`
  );
  const data = await response.json();
  const address = data.results[0]?.formatted_address || '【エラー】住所が見つかりません';
  return <div>行き先 → {address}</div>;
};
