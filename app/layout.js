import { Creepster } from "next/font/google";
import "./globals.css";

const creepster = Creepster({ weight: "400", subsets: ["latin"], variable: "--font-spooky" });

export const metadata = { title: "Halloween Bar", description: "Pick a spirit, pick a mixer, get a cocktail." };
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={creepster.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
