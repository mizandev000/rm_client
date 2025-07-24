import LenisWrapper from "@/components/LenisWrapper"; // Import client component
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import { Yantramanav } from "next/font/google";

import Footer from "@/components/Footer";
import QueryProvider from "@/providers/QueryProvider";
import "../styles/bootstrap-grid.css";
import "../styles/globals.scss";
import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RM Moving Express",
  description: "RM Moving Express",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={yantramanav.className}>
        <QueryProvider>
          <LenisWrapper>
            {/* <IntersectionAnimationWrapper> */}
            {children}
            <Footer />
            {/* </IntersectionAnimationWrapper> */}
          </LenisWrapper>
        </QueryProvider>
      </body>
    </html>
  );
}
