import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header/Header";
import Foooter from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mega Centro Vision",
  description: "Mega Centro Vision",
  keywords: ["Centro", "Vision"],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Foooter />
      </body>
    </html>
  );
}
