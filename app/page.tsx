import Link from "next/link";

export default function Page() {
  //   return <h1>Home Page</h1>;
  return (
    <div>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <Link href="/deck">Decks</Link>
    </div>
  );
}
