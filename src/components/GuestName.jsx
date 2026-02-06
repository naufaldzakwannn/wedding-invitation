export default function GuestName() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");

  if (!guest) return null;

  return (
    <p className="text-center text-sm text-gray-500">
      Kepada Yth: <strong>{guest}</strong>
    </p>
  );
}
