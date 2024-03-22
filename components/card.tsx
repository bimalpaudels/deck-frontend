import Link from "next/link";

interface Props {
  id?: number | undefined;
  name?: string | undefined;
  children?: React.ReactNode;
}

export default function Card({ id, name, children }: Props) {
  return (
    <div className="w-1/4 p-4 ">
      <Link href={`/deck/${id}`}>
        <div className="max-w-sm block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h4>{id}</h4>
          <h3>{name}</h3>
        </div>
      </Link>
      {children}
    </div>
  );
}
