import DeckCard from "./deck-card";
import { DeckProps } from "./interfaces";

async function getDecks() {
  const res = await fetch("http://localhost:8000/deck");
  const result = await res.json();
  return result;
}

export default async function Deck() {
  const data = await getDecks();
  console.log(data);

  return (
    <div className="m-20">
      <div className="flex flex-row flex-wrap w-full">
        {data.map((deck: DeckProps) => (
          <DeckCard key={deck.id} {...deck} />
        ))}
      </div>
    </div>
  );
}
