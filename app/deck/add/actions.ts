"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function addCard(
  prevState: {
    message: string;
    status: boolean;
    code: number;
  },
  formData: FormData
) {
  const schema = z.object({
    name: z.string().min(2),
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
  });

  if (!parse.success) {
    console.log("Wrong", parse.success, "400");

    return {
      message: "Something went wrong",
      status: false,
      code: 400,
    };
  }
  const data = parse.data;
  const response = await fetch("http://localhost:8000/deck/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);

  revalidatePath("/deck");

  return { message: "Deck Added Successfully", status: true, code: 200 };
}

export async function testFunc(
  prevState: { message: string },
  formData: FormData
) {
  console.log("Some shit");
  return 0;
}
