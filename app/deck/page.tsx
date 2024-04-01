import FlexCard from "@components/FlexCard";

import AddDeck from "./add/add-deck";

async function getDecks() {
  const res = await fetch("http://localhost:8000/deck");

  const result = await res.json();
  // console.log(result);
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  return result;
}

export default async function Deck() {
  const data = await getDecks();

  return (
    <div>
      <div className="flex justify-end m-2">
        <AddDeck />
      </div>

      <div className="grid grid-cols-4 p-4 gap-4 ">
        {data.map((item: any) => (
          <FlexCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
