"use client";
import { useFormStatus, useFormState } from "react-dom";
import { addCard } from "./actions";

const initialState = {
  message: "",
  code: 200,
  status: true,
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-sky-500 hover:bg-sky-700 rounded-md p-3 text-slate-100">
      Add Card
    </button>
  );
}

export default function AddCard() {
  const [state, formAction] = useFormState(addCard, initialState);
  return (
    <div className="p-6 max-w-sm mx-auto rounded-xl shadow-xl flex flex-col items-center space-y-4">
      <div className="shrink-0 mx-auto">
        <img className="h-12 w-12" src="/next.svg" alt="ChitChat Logo" />
      </div>

      <form action={formAction} className="flex flex-col items-center w-full">
        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-slate-700">
            Card Front
          </label>
          <input
            type="text"
            name="front"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Der Regenschrim"
          />
        </div>
        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-slate-700">
            Card Back
          </label>
          <input
            type="text"
            name="back"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-400 placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="The Umbrella"
          />
        </div>
        <SubmitButton />
        <p>{state?.message}</p>
      </form>
    </div>
  );
}
