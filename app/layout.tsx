import type { Metadata } from "next";
import { Oswald, Inter, Pirata_One } from "next/font/google";
import "./globals.css";
import PreviewBanner from "@/components/PreviewBanner";
import Marquee from "@/components/Marquee";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CartProvider from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";

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
  metadataBase: new URL("https://rain-alternative-demo.vercel.app"),
  title: {
    default: "Rain Alternative — Alternative Fashion, Edmonton (Concept Preview)",
    template: "%s",
  },
  description:
    "Concept preview of a custom-built store for Rain Alternative: dark, alternative fashion and local consignment in Edmonton, with member rewards and birthday perks.",
  openGraph: {
    title: "Rain Alternative — Alternative Fashion, Edmonton",
    description:
      "Alternative fashion, accessories, and one-of-a-kind local consignment. Member rewards, birthday perks, and stock you can trust.",
    type: "website",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${pirata.variable}`}>
      <body>
        <CartProvider>
          <PreviewBanner />
          <Marquee />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
