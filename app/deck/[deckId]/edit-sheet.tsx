import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@components/ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { editCard, deleteCard } from "./actions";
import { useFormState } from "react-dom";

interface editCardProps {
  id: number;
  front?: string;
  back?: string;
  deck: number;
}

const initialState = {
  message: "",
};

export default function EditCardSheet(props: editCardProps) {
  const editCardWithId = editCard.bind(null, {
    cardId: props.id,
    deckId: props.deck,
  });

  const deleteCardWithId = deleteCard.bind(null, props.id);

  const [updateState, updateFormAction] = useFormState(
    editCardWithId,
    initialState
  );
  const [deleteState, deleteFormAction] = useFormState(
    deleteCardWithId,
    initialState
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil2Icon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Card</SheetTitle>
        </SheetHeader>
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="front" className="text-right">
                Front
              </Label>
              <Input
                name="front"
                defaultValue={props.front}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="back" className="text-right">
                Back
              </Label>
              <Input
                name="back"
                defaultValue={props.back}
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter className="sm:justify-center">
            <Button formAction={updateFormAction}>Update Card</Button>
            <Button variant="destructive" formAction={deleteFormAction}>
              Delete Card
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
