import { Geist, Geist_Mono, Michroma, Moderustic} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  style: "normal",
  variable: "--font-michroma",
  subsets: ["latin"],
});

const moderustic = Moderustic({
  style: "normal",
  variable: "--font-moderustic",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${moderustic.variable}
        antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
