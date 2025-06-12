import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import { Lexend } from "next/font/google";
import "./globals.css";

// Load fonts
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${geistMono.variable} font-geistMono antialiased`}>
        {children}
      </body>
    </html>
  );
}
