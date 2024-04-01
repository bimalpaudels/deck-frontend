"use client";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { Button } from "@components/ui/button";
import { CardStackMinusIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { registration, checkEmailExists } from "./../actions";
import { useFormState } from "react-dom";
import { useState } from "react";

export default function RegistrationForm() {
  const [emailExists, setEmailExists] = useState<boolean | undefined>(false);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/4">
        <form action={registration}>
          <div className="flex items-center justify-center text-slate-900 font-bold gap-2 text-lg">
            <CardStackMinusIcon width="40" height="40" />
            BMlDeck
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 mb-4">
            Create an account
          </h2>

          <Input
            onBlur={(event) => {
              if (event.target.value === "") {
                console.log("Empty");
              }
            }}
            className="p-4 mb-4 rounded-md"
            placeholder="Full Name"
            name="fullname"
            required
          ></Input>

          <div className="relative">
            <Input
              onBlur={async (e) => {
                const resp = await checkEmailExists(e.target.value);
                // console.log(message);
                setEmailExists(resp);
              }}
              className={`p-4 mb-4 rounded-md ${
                emailExists
                  ? "focus-visible:outline-red-600 border-red-600 focus:border-transparent"
                  : ""
              }`}
              placeholder="example@example.com"
              name="email"
              type="email"
              required
            ></Input>

            {/* Style for email checking */}
            {emailExists ? (
              <div className="absolute inset-y-0 right-0 m-3">
                <div className="relative group">
                  <CrossCircledIcon className="h-5 w-5 text-red-600 group-hover:text-red-600" />
                  <p className="invisible absolute py-1 px-2 -bottom-0.5 right-6 whitespace-nowrap text-xs text-red-600 rounded-lg group-hover:visible">
                    Email Already exists
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <Input
            className="p-4 mb-4 rounded-md"
            type="password"
            placeholder="password"
            name="password"
          ></Input>
          <Input
            className="p-4 mb-4 rounded-md"
            type="password"
            placeholder="confirm password"
            name="confirmpw"
          ></Input>

          <Button type="submit" className="w-full h-10" disabled={emailExists}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
