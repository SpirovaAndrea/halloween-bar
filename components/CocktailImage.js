"use client";
import { useState } from "react";

// Shows the photo if it exists in /public/img, otherwise falls back to the emoji
export default function CocktailImage({ src, emoji, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <div className="pic fallback">{emoji}</div>;
  return <img className="pic" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
