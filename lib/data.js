import cocktails from "../data/cocktails.json";

export const BASES = [
  { id: "vodka", label: "Vodka", emoji: "🧛" },
  { id: "gin", label: "Gin", emoji: "🧙" },
  { id: "tequila", label: "Tequila", emoji: "💀" },
  { id: "rum", label: "Rum", emoji: "☠️" },
  { id: "mocktail", label: "No alcohol", emoji: "🍏" },
];

// Only bases that actually have cocktails
export const availableBases = () =>
  BASES.filter((b) => cocktails.some((c) => c.base === b.id));

// Only mixers that lead to at least one cocktail for this base
export const mixersFor = (base) => [
  ...new Set(cocktails.filter((c) => c.base === base).flatMap((c) => c.mixers)),
];

export const cocktailsFor = (base, mixer) =>
  cocktails.filter((c) => c.base === base && c.mixers.includes(mixer));
