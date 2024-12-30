import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/Navigation/TopNavigation";
import FooterNavigation from "@/components/Navigation/FooterNavigation";

const crimsonpro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Cemetery Grounds",
  description: "Coffee Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={crimsonpro.className}
      >
          <TopNavigation />
          <div className="flex flex-col h-full overflow-y-scroll">
            <div className="width-full height-full p-4 flex flex-col gap-6">
              {children}
            </div>
          </div>
          <FooterNavigation />
      </body>
    </html>
  );
}
