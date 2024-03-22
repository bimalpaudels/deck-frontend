"use client";
import { useState } from "react";
import EditCardSheet from "./edit-sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@components/ui/button";

interface answerCardProps {
  front?: string;
  back?: string;
  deck: number;
  id: number;
}

export default function AnswerCard(deckDetail: answerCardProps[]) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleCardFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleNextCard() {
    setIsFlipped(false);
    const keys = Object.keys(deckDetail);
    setCardIndex((cardIndex + 1) % keys.length);
  }

  return (
    <div className="flex justify-center h-96">
      <Card className="w-1/5 m-20 h-3/4 flex flex-col justify-between shadow-xl">
        <CardHeader className="flex items-center justify-between p-6">
          <CardTitle className="text-center">Deck Name</CardTitle>
          <div className="flex items-center ">
            <EditCardSheet {...deckDetail[cardIndex]} />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <Button variant="ghost" onClick={toggleCardFlip}>
            {isFlipped
              ? deckDetail[cardIndex].back
              : deckDetail[cardIndex].front}
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button variant="default" onClick={handleNextCard}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
