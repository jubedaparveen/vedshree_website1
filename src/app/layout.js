import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VedShree",
  description: "VedShree is a ayrvedic health and wellness platform that provides personalized solutions for your health and wellness needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-green-950 text-white">
          <Navbar />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
