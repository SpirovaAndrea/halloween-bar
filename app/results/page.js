import Link from "next/link";
import { cocktailsFor } from "../../lib/data";
import CocktailImage from "../../components/CocktailImage";

export default async function Results({ searchParams }) {
  const { base, mixer } = await searchParams;
  const list = base && mixer ? cocktailsFor(base, mixer) : [];
  
  return (
    <>
      <Link href={`/mixers?base=${base ?? ""}`} className="back">← Change mixer</Link>
      <h1>Your cocktails</h1>
      <p className="sub">Tap one to see the recipe.</p>
      {list.length === 0 && <p>No cocktails for that combo. Go back and pick again.</p>}
      {list.map((c) => (
        <details key={c.name} className="recipe">
          <summary>
            <CocktailImage src={c.image} emoji={c.emoji} alt={c.name} />
            <span className="name">{c.name}</span>
          </summary>
          <div className="body">
            <h2>Ingredients</h2>
            <ul>{c.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
            <h2>Steps</h2>
            <ol>{c.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        </details>
      ))}
      <Link href="/" className="again">Make another</Link>
    </>
  );
}
