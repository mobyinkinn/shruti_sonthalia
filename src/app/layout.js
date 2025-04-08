import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shruti Sonthalia",
  description: "Made by Nikhil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ position: "relative" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
