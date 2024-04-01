import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export default function CustomToolTip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CrossCircledIcon />
        </TooltipTrigger>
        <TooltipContent>
          <p>Email already exists</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
