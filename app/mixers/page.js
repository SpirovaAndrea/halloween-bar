import Link from "next/link";
import { BASES, mixersFor } from "../../lib/data";

export default async function Mixers({ searchParams }) {
  const { base } = await searchParams;
  const baseInfo = BASES.find((b) => b.id === base);
  const mixers = baseInfo ? mixersFor(base) : [];
  
  return (
    <>
      <Link href="/" className="back">← Change base</Link>
      <h1>What are we mixing it with?</h1>
      <p className="sub">{baseInfo ? `Base: ${baseInfo.label}` : "Pick a base first."}</p>
      <div className="grid">
        {mixers.map((m) => (
          <Link key={m} className="card" href={`/results?base=${base}&mixer=${encodeURIComponent(m)}`}>
            <span className="label">{m}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
