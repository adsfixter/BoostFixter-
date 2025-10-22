import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import './globals.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boost Fixter LLC",
  description: "BoostFixter - Your awesome website",
  icons: {
    icon: '/BoostFixtericon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased primaryText`}
      >
       <Providers>
        <header className="sticky top-0 z-50">
          <Navbar></Navbar>
        </header>
        <main>
          {children}
        </main>
        <footer></footer>
       </Providers>
      </body>
    </html>
  );
}
