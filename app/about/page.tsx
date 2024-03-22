async function getData() {
  const res = await fetch("http://localhost:8080/deck/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1>List of Decks</h1>
      {data && data.map((item: any) => <h2 key={item.name}>{item.name}</h2>)}
    </div>
  );
}
