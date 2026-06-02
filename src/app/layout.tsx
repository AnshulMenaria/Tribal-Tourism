import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vagad & Mewal Safaris | Rajasthan Tribal Tourism (Banswara, Dungarpur, Pratapgarh, Salumbar)",
  description: "Experience authentic tribal culture, eco-safaris, historic forts, and pristine lakes in the southern Vagad & Mewal regions of Rajasthan. Book custom 1-day and multi-day packages.",
  keywords: [
    "Tribal Tourism Rajasthan",
    "Vagad & Mewal Tourism",
    "Banswara tourism",
    "Dungarpur heritage",
    "Pratapgarh Sitamata wildlife sanctuary",
    "Salumbar Hadi Rani Kund",
    "Indigenous tribal culture",
    "Mahi dam islands"
  ],
  authors: [{ name: "Vagad & Mewal Safaris Development Team" }],
  openGraph: {
    title: "Vagad & Mewal Safaris | Rajasthan Tribal Tourism",
    description: "Explore the untouched tribal landscapes, historic forts, and holy confluences in Vagad and Mewal (Banswara, Dungarpur, Pratapgarh, and Salumbar).",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
