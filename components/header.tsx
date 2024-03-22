import Link from "next/link";
import {
  CardStackMinusIcon,
  ReaderIcon,
  PersonIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-950">
      <div className="container h-14 flex items-center max-w-screen-2xl justify-between">
        <Link
          href="/deck"
          className="flex text-slate-300 font-bold mr-6 space-x-2 items-center gap-2 text-sm"
        >
          <CardStackMinusIcon width="20" height="20" />
          BMlDeck
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-300 justify-between">
          <Link href="/about" className="hover:text-gray-300">
            <ReaderIcon width="20" height="20" />
          </Link>
          <Link href="/help" className="hover:text-gray-300">
            <QuestionMarkCircledIcon width="20" height="20" />
          </Link>
          <Link href="/profile" className="hover:text-gray-300">
            <PersonIcon width="20" height="20" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
