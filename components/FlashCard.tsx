"use client";

import { useState } from "react";

interface FlashCardProps {
  front?: string;
  back?: string;
  isFlipped?: boolean;
  toggleFlip?: () => void;
}

function FlashCard({ front, back, isFlipped, toggleFlip }: FlashCardProps) {
  return (
    <div onClick={toggleFlip}>{isFlipped ? <p>{back}</p> : <p>{front}</p>}</div>
  );
}

export default function CardContainer({ flashcards }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleNextCard() {
    setIsFlipped(false);
    setCardIndex((cardIndex + 1) % flashcards.length);
  }
  return (
    <div className="w-1/4 p-4 ">
      <div className="max-w-sm block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <FlashCard
          front={flashcards[cardIndex].front}
          back={flashcards[cardIndex].back}
          isFlipped={isFlipped}
          toggleFlip={toggleFlip}
        />
        <div className="bottom-0 left-0 w-full flex justify-center">
          <button
            onClick={handleNextCard}
            className="bg-slate-600 hover:bg-slate-8b00 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
