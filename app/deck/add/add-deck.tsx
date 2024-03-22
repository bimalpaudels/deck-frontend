"use client";
import { useFormStatus, useFormState } from "react-dom";
import { addCard } from "./actions";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const initialState = {
  message: "",
  status: true,
  code: 200,
};
export function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>Add Deck</Button>;
}
export default function AddDeckDialog() {
  const [state, formAction] = useFormState(addCard, initialState);
  const [triggerToast, setTriggerToast] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state && !state.status && triggerToast) {
      toastLoader();
    }
  }, [state]);

  function toastLoader() {
    toast({
      title: "Opps..!!",
      description: "It's done for you..",
      variant: "default",
      duration: 2500,
    });
  }
  async function formHandler(formData: FormData) {
    try {
      await formAction(formData);
      setTriggerToast(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Deck</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={formHandler}>
          <DialogHeader>
            <DialogTitle>Add Deck</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Greetings, Work, College, etc."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <SubmitButton />
          </DialogFooter>
          <div>
            {state && !state.status ? (
              <>
                <p className="text-red-500">{state.message}</p>
              </>
            ) : (
              <p className="text-green-400">{state.message}</p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
