import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Download,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen my-10">
      <footer className="border-t bg-[#F8F8F8]">
        <div className="px-6 py-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center mb-4 runded-lg jbustify-center m">
                  <img src="/BoostFixter_Website.png" alt="BoostFixter Logo" className="w-3/4" />
                </div>
              </Link>
              <p className="mb-6 text-md leading-relaxed text-[#013F32]">
                Global ad solutions built for growth – fast, secure, and
                performance-driven.
              </p>
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="mb-4  text-lg md:text-xl font-semibold text-[#013F32]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Our Services",
                  "About Us",
                  "Portfolio",
                  "Our Team",
                  "Career",
                  "Blog",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#021c17]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="lg:col-span-5">
              <h3 className="mb-4 text-lg md:text-xl font-semibold text-[#013F32]">
                Contacts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8  text-[#013F32] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+13072893060"
                    className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#042720]"
                  >
                    +1307-289-3060
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8  text-[#013F32] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@boostfixter.com"
                    className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#031d17]"
                  >
                    hello@boostfixter.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8  text-[#013F32] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-md font-semibold text-[#013F32] text-[#013F32]">
                    Rafiq Place, Level 5C, Opp. BM College Mosque Gate Barisal,
                    Barisal, Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colorsbg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <Instagram className="w-5 h-5 text-white " />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-[#013F32] rounded-full hover:bg-green-700"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>

              {/* Company Deck Download */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 transition-colors  text-[#013F32] hover:bg-green-800"
              >
                <div className="flex items-center justify-center text-white p-3 rounded-full bg-[#013F32]">
                  <Download size={28}/>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold md:text-md lg:text-lg">Company Deck</div>
                  <div className="text-sm opacity-90">PDF, 3 MB</div>
                </div>
              </a>
            </div>

            {/* Copyright and Links */}
            <div className="flex flex-col items-center justify-between gap-4 mt-8 text-sm text-[#013F32] md:flex-row">
              <p>© 2025 BoostFixter. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="transition-colors hover:text-green-700">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-green-700">
                  Terms of Service
                </a>
                <a href="#" className="transition-colors hover:text-green-700">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
