"use server";
import { z } from "zod";

import { redirect } from "next/navigation";
import { setTokens, getAccessToken } from "./../../lib/user";

export async function login(formData: FormData) {
  const schema = z.object({
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email("Valid email required."),
    password: z.string().min(1),
  });

  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parse.success) {
    return {
      message: "Something went wrong",
    };
  }
  const data = parse.data;
  console.log(data);
  const response = await fetch("http:localhost:8000/user/login/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (result.access) {
    console.log("Login successful");
    setTokens(result.access, result.refresh);

    redirect("/deck");
  } else {
    console.log("Login failed");
  }
}
