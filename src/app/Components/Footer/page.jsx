"use client"

import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { TiSocialTwitter, TiSocialInstagram, TiSocialFacebookCircular } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import LOGO from '@/../../public/Logo.png';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Dynamic Data
  const SocialIcons = [
    { icon: <TiSocialInstagram className="icon relative z-10" />, link: "https://www.instagram.com" },
    { icon: <TiSocialFacebookCircular className="icon relative z-10" />, link: "https://www.facebook.com" },
    { icon: <TiSocialTwitter className="icon relative z-10" />, link: "https://www.twitter.com" },
    { icon: <IoMdMail className="icon relative z-10" />, link: "mailto:support@alishaimpex.com" },
  ];

  const addresses = [
    { city: "Faisalabad", address: "2nd floor,HK Plaza,Makkah Commercial, 208 Chak Road, Adjecent, Canal Road, Eden Valley, Faisalabad, Punjab" },
    // { city: "Lahore", address: "123 Main St, Suite 200\nLahore, Punjab 54000 Pakistan" },
  ];

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Products", id: "products" },
    { label: "Contact us", id: "contact" },
    // { label: "Blogs", id: "blogs" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -70; // Adjust this value as needed
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <footer className="flex flex-col gap-6 background font-bold p-[5%] relative">
        
        <div className="ft_cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 py-[3%] gap-6">

          <div className="flex col-span-3 flex-col gap-4">
            <div className="logo flex gap-2 items-center">
              <Image src={LOGO} width={200} alt="Logo" />
            </div>
            <div className="sin">
              <h2 className="text-transparent text-[4rem]">since 2005.</h2>
            </div>
            <span className="mt-8">
              2025<span className="text-green-800 cursor-pointer">Alishaimpex.</span> All Rights reserved.
            </span>
          </div>

          <div className="footer_card col-span-2">
            {addresses.map((address, index) => (
              <div className="child" key={index}>
                <span className="text-[1.5rem]">{address.city}</span>
                <p className="font-light text-base whitespace-pre-line">{address.address}</p>
              </div>
            ))}
            <div className="child">
              <span className="text-[1.5rem]">Social links</span>
              <div className="social_links flex">
                {SocialIcons.map((value, index) => (
                  <a
                    className="s_link border border-green-800 p-2 text-[1.5rem] relative overflow-hidden"
                    key={index}
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.icon}
                    <span className="footer_animation"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer_card col-span-2">
            <div className="child">
              <span className="text-[1.5rem]">Contact</span>
              <ul className="list-none px-2">
                <li className="text-green-800 font-light text-lg hover:text-gray-200 cursor-pointer transition-all">
                  +1934719 8948
                </li>
                <li className="text-green-800 font-light text-lg hover:text-gray-200 cursor-pointer transition-all">
                  +1934719 8948
                </li>
              </ul>
            </div>
            <div className="child">
              <span className="text-[1.5rem]">Email</span>
              <Link href="mailto:support@alishaimpex.com" className="font-light">
                <span className="text-green-800">support@alishaimpex.com</span>
              </Link>
            </div>
          </div>

          <div className="child col-span-2">
            <span className="text-[1.5rem]">Main Menu</span>
            <div className="nav_links flex flex-col items-start gap-1 font-bold">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-green-800 hover:pl-4 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        <hr className="w-full" />

        <span className="self-center">
          2025 <span className="text-green-800 cursor-pointer">Alishaimpex.</span> All Rights reserved.
        </span>

      </footer>
    </div>
  );
};

export default Footer;