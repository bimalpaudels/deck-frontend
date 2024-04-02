import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeckProps } from "./interfaces";
import { Button } from "@components/ui/button";
import Link from "next/link";

export default function DeckCard(props: DeckProps) {
  const { id, name, description, number_of_cards } = props;

  return (
    <div className="flex justify-center h-80 w-1/4">
      <Card className="h-5/6 w-5/6 flex flex-col justify-between shadow-xl">
        <CardHeader className="flex items-center justify-between p-6">
          <CardTitle className="text-center">{name}</CardTitle>
          <CardDescription>No. of cards: {number_of_cards}</CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex justify-center w-full">
          <Button
            variant="secondary"
            className="mx-2"
            disabled={!number_of_cards}
          >
            <Link href={`/deck/${id}`}>Study Now</Link>
          </Button>
          <Button variant="default" className="mx-2">
            <Link href="/deck/add">Add Card</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
