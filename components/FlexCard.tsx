import Link from "next/link";

interface Props {
  id?: number | undefined;
  name?: string | undefined;
  children?: React.ReactNode;
}

export default function FlexCard({ id, name, children }: Props) {
  return (
    <Link href={`/deck/${id}`}>
      <div className="rounded-xl shadow-xl bg-slate-300 h-48 hover:bg-slate-400">
        <h4 className="text-center pt-4">{name}</h4>
        {children}
      </div>
    </Link>
  );
}
