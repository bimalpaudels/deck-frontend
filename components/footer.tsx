import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 bg-gray-950 fixed bottom-0 w-full">
      <div className="flex flex-col items-center text-sm justify-between gap-4 text-slate-300">
        <p>
          &copy; {new Date().getFullYear()} BMlDeck. All rights reserved. Code
          available on{" "}
          <Link
            href="https://github.com/bimalpaudels"
            className="underline text-green-400 "
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}
