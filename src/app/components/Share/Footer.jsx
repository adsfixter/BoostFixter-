"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  PhoneOutgoing,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t-6 border-secondary">
      {/* Top Section */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quick Access */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Access</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Our Concerns & Products</a></li>
            <li><a href="#" className="hover:text-blue-600">Give Feedback</a></li>
            <li><a href="#" className="hover:text-blue-600">Artist/Model List</a></li>
            <li><a href="#" className="hover:text-blue-600">Quotation Request</a></li>
            <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
            <li><a href="#" className="hover:text-blue-600">Our Clients</a></li>
            <li><a href="#" className="hover:text-blue-600">Ad Scope Tool</a></li>
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Know More</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between">
              <a href="#" className="hover:text-blue-600">Career</a>
             
            </li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Community</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600">Company Profile</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><PhoneOutgoing className="w-4 h-4"/> +880 1953-825344</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> +880 1953-825344</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> +880 1953-825344</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> boostfixter@gmail.com</li>
            <li className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1" />
              Rafiq Place, Level 5C, Opp.BM College Mosque Gate, Barisal, Bangladesh, 8200
            </li>
          </ul>
        </div>

        {/* Membership / Apps */}
        <div>
         
          <div className="flex items-center mt-8">
            <img src="/hero/Basis.png" alt="BASIS" className="h-8" />
            <img src="/hero/Eclub.png" alt="e-CAB" className="h-8" />
            <img src="/hero/ecol.png" alt="E-Club" className="h-8" />
                  </div>
                  <h1 className="mt-2">Registered Member

</h1>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <img src="/footer/dmca-badge-w200-5x1-10.png" alt="Google Play" className="h-10" />
                      <img src="/footer/download-for-windows.png" alt="Windows" className="h-10" />
                      <img src="/footer/pay-bill-now.png" alt="Google Play" className="h-10" />
            <img src="/footer/playstore.png" alt="Windows" className="h-10" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-4">
            <a href="#" className="hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-600"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-600"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-600"><Youtube className="w-5 h-5" /></a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © Boost Fixter LLC. 2016–2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
