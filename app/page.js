import Link from "next/link";
import { availableBases } from "../lib/data";

export default function Home() {
  return (
    <>
      <h1>Pick your poison</h1>
      <p className="sub">Choose a base for your drink.</p>
      <div className="grid">
        {availableBases().map((b) => (
          <Link key={b.id} className="card" href={`/mixers?base=${b.id}`}>
            <span className="emoji">{b.emoji}</span>
            <span className="label">{b.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
