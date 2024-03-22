"use server";
import { revalidatePath } from "next/cache";

import { z } from "zod";

export async function editCard(
  id: {
    cardId: number;
    deckId: number;
  },
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    front: z.string().min(2),
    back: z.string().min(2),
    deck: z.number().min(1),
  });

  const parse = schema.safeParse({
    front: formData.get("front"),
    back: formData.get("back"),
    deck: id.deckId,
  });
  if (!parse.success) {
    return {
      message: "Length is too short",
    };
  }
  const data = parse.data;
  const response = await fetch(`http://localhost:8000/deck/item/${id.cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);

  revalidatePath("/deck/[deckId]", "page");

  return { message: "Deck Updated Successfully" };
}

export async function deleteCard(id: number) {
  console.log("Delete card off of a Deck");
  const response = await fetch(`http://localhost:8000/deck/item/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "applicaiton/json",
    },
    body: JSON.stringify({ foo: "bar" }),
  });
  // It throws SyntaxError for some reason but still works
  try {
    const result = await response.json();
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/deck/[deckId]", "page");
  return {
    message: "Gone",
  };
}
