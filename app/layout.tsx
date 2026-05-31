import type { Metadata } from "next";
import { Oswald, Inter, Pirata_One } from "next/font/google";
import "./globals.css";
import PreviewBanner from "@/components/PreviewBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pirata = Pirata_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pirata",
});

export const metadata: Metadata = {
  title: "Rain Alternative — Alternative Fashion, Edmonton (Concept Preview)",
  description:
    "Concept preview of a custom-built store for Rain Alternative: dark, alternative fashion and local consignment in Edmonton, with member rewards and birthday perks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${pirata.variable}`}>
      <body>
        <PreviewBanner />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
