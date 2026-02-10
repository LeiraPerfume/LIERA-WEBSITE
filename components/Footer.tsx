"use client";
import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Building2,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

export default function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "About",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Shop", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Benefits", href: "#" },
        { label: "Blogs", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms and Conditions", href: "#" },
        { label: "Shipping Policy", href: "#" },
        { label: "Cancellation Policy", href: "#" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Building2 size={18} className="text-pink-500" />,
      text: "AOMAN SERVICES PRIVATE LIMITED",
      href: null,
    },
    {
      icon: <MapPin size={18} className="text-pink-500" />,
      text: "Office No. 48, 7th Floor, ETT Tower 2, Sector -132, Noida UP- 201304",
      href: null,
    },
    {
      icon: <Phone size={18} className="text-pink-500" />,
      text: "9211227024",
      href: "tel:+919211227024",
    },
    {
      icon: <Mail size={18} className="text-pink-500" />,
      text: "info@leira.com",
      href: "mailto:info@leira.com",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/leiraindia?igsh=MXBmY2R2MjNjdzBlaA==" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/people/Leira-India/61581116680790/" },
  ];

  return (
    <footer className="bg-[#0F0F11] relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Leira Logo"
                width={140}
                height={45}
                className="object-contain h-10 w-auto"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Leira is an intimate perfume crafted exclusively for women. Formulated with a luxurious fusion of botanical ingredients for all-day freshness and confidence.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Details
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-0.5 flex-shrink-0">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-pink-500 transition-colors text-sm leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-pink-500 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-center md:text-left">
            Copyright © 2026 Leira | Powered by Leira
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Leira" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
