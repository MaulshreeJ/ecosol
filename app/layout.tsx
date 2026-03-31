import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoSol Technologies — AI Infrastructure for Sustainable Enterprise",
  description: "EcoSol Technologies engineers AI-powered ESG compliance systems, sustainability intelligence platforms, and regulatory automation frameworks for enterprises and governments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <body style={{fontFamily:"'Montserrat', sans-serif"}}>{children}</body>
    </html>
  );
}
