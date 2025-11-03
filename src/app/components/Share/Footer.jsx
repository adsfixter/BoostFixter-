import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Download,
} from "lucide-react";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-[#F8F8F8] pt-5 pb-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* ===== Grid Section ===== */}
          <div className="grid grid-cols-2 gap-8 mb-4 md:grid-cols-4 lg:grid-cols-12 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-4 md:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex items-center justify-center mb-4 rounded-lg">
                  <img
                    src="/BoostFixter_Website.png"
                    alt="BoostFixter Logo"
                    className="w-3/4"
                  />
                </div>
              </Link>
              <p className="mb-4 text-md leading-relaxed text-[#013F32]">
                Global ad solutions built for growth – fast, secure, and
                performance-driven.
              </p>
              <div className="max-w-2/3">
                <CustomButton text={"Contact Us"} link={"#"}></CustomButton>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 lg:col-span-3 md:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold text-[#013F32]">
                Quick Links
              </h3>
              <ul className="space-y-1">
                {["About Us", "Portfolio", "Our Team", "Career", "Blog"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#021c17]"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contacts */}
            <div className="col-span-1 lg:col-span-5 md:col-span-1">
              <h3 className="mb-4 text-lg md:text-xl font-semibold text-[#013F32]">
                Contacts
              </h3>
              <div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8 text-[#013F32] mt-0.5 flex-shrink-0"
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
                    href="tel:+8801953825344"
                    className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#042720]"
                  >
                    +8801953-825344
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8 text-[#013F32] mt-0.5 flex-shrink-0"
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
                    href="mailto:boostfixter@gmail.com"
                    className="text-md font-semibold text-[#013F32] transition-colors hover:text-[#031d17]"
                  >
                    boostfixter@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-8 h-8 text-[#013F32] mt-0.5 flex-shrink-0"
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
                  <p className="text-md font-semibold text-[#013F32]">
                    Rafiq Place, Level 5C, Opp. BM College Mosque Gate Barisal,
                    Barisal, Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Bottom Section ===== */}
          <div className="space-y-2">
            {/* social + deck inline even on mobile */}
            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 transition-colors bg-[#013F32] rounded-full hover:bg-green-700"
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
                  <Instagram className="w-5 h-5 text-white" />
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
                className="flex items-center gap-3 px-6 transition-colors text-primary"
              >
                <div className="flex  items-center justify-center text-white p-2 rounded-full bg-[#013F32]">
                  <Download size={26} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold md:text-md lg:text-md">
                    Company Deck
                  </div>
                  <div className="text-xs opacity-90">PDF, 3 MB</div>
                </div>
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#013F32] md:flex-row">
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
