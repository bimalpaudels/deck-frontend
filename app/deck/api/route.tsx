export async function GET(request: Request) {
  const res = await fetch(`http://localhost:8000/deck/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
