import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Share/Navbar";
import Footer from "./components/Share/Footer";
import { LocaleProvider } from "@/context/LocaleContext";
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Boost Fixter LLC",
  description: "BoostFixter - Your awesome website",
  icons: {
    icon: "/BoostFixtericon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased primaryText font-nunito">
        <LocaleProvider>
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
