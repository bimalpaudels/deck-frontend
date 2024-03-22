import CardContainer from "@components/FlashCard";
import AnswerCard from "./answer-card";

export default async function DeckDetails({
  params,
}: {
  params: { deckId: number };
}) {
  const deckDetail = await getDeckDetail(params.deckId);

  return (
    <div>
      <AnswerCard {...deckDetail} />
    </div>
  );
}

async function getDeckDetail(deckId: number) {
  const res = await fetch(`http://localhost:8000/deck/${deckId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
