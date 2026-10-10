import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const title = "TeachMate AI — Your AI Teaching Assistant";
const description =
  "TeachMate AI helps teachers create lesson plans, quizzes, worksheets, assessments, and differentiated learning materials with AI.";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", siteName: "TeachMate AI", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = { themeColor: "#f7f6f1" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
