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

export async function getNewToken(refreshToken: string) {
  const response = await fetch(
    "http:localhost:8000/user/login/token/refresh/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
    }
  );

  const result = await response.json();

  if (result.access) {
    console.log("New tokens!!");
    return result;
  } else {
    return;
  }
}

export async function registration(formData: FormData) {
  const schema = z.object({
    email: z.string().min(2),
    password: z.string().min(4),
    full_name: z.string().min(4),
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    full_name: formData.get("fullname"),
  });
  if (!parse.success) {
    console.log(parse.error);
    return {
      message: "Something went wrong",
    };
  }
  const data = parse.data;
  console.log(JSON.stringify(data));
  const response = await fetch("http://localhost:8000/user/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (response.status === 201) {
    redirect("/user?register=success");
  }
  console.log(result);
  return result;
}

export async function checkEmailExists(email: string) {
  const response = await fetch(`http://localhost:8000/user/check-email/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const result = await response.json();

  return result.success;
}
