"use client"; // Mark as client-side component

import { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname from Next.js 14
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import LOGO from "@/../../public/Logo.png";
import Image from "next/image";
import SideDrawer from "./Drawer";
import Productsection from "@/app/Sections/Productssection/page";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility

  // Define the navigation items
  const navItems = [
    { id: "services", label: "Services" },
    { id: "about", label: "About us" },
    // { id: "products", label: "Products" },
    // { id: "contact", label: "Contact us" },
    // { id: "blogs", label: "Blogs" },
  ];

  // Function to scroll to a specific section with an offset
  const scrollToSection = (id) => {
    // If already on the home page, just scroll to the section
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const offset = -70; // Adjust this value as needed
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop + offset,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to the home page and then scroll to the section
      window.location.href = `/#${id}`;
    }
  };

  // Handle dropdown toggle and closing on link click
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown when a link is clicked
  };

  return (
    <main>
      <header className="header flex items-center w-full px-[5%] max-[770px]:px-4 py-3  z-50 fixed bg-white text_color">
        <nav className="flex justify-between items-center w-full cursor-pointer">
          <div className="logo max-[770px]:w-full max-[770px]:!justify-between max-[770px]:flex-row-reverse flex gap-4 items-center">
            <SideDrawer />
            <Image src={LOGO} className="!w-64" alt="Logo" />
          </div>

          <div className="navi max-[770px]:hidden flex items-center gap-5 font-bold">
            <Link 
              className="fade_right hover:text-[#32673B]" 
              href={"/"}>
                Home
            </Link>
            
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="fade_right hover:text-[#32673B]"
              >
                {item.label}
              </button>
            ))} 

            {/* Products Dropdown */}
            <div className="product_dropdown relative">
              <button 
                className="relative fade_right" 
                onClick={handleDropdownToggle} // Toggle dropdown on button click
              >
                Products
              </button>
              <div 
                className={`drop absolute flex flex-col w-[200px] top-10 bg-white ${isOpen ? 'opacity-100 visibility-visible' : 'opacity-0 visibility-hidden'}`}
              >
                <Link className="drop_items w-full p-4" href="/Products" onClick={handleLinkClick}>Reactive Dyes</Link>
                <Link className="drop_items w-full p-4" href="/Products/DisperseDyes" onClick={handleLinkClick}>Disperse Dyes</Link>
                <Link className="drop_items w-full p-4" href="/Products/AcrylicDyes" onClick={handleLinkClick}>Acrylic Dyes</Link>
                <Link className="drop_items w-full p-4" href="/Products/DirectDyes" onClick={handleLinkClick}>Direct Dyes</Link>
                <Link className="drop_items w-full p-4" href="/Products/SulphurDyes" onClick={handleLinkClick}>Sulphur Dyes</Link>
                <Link className="drop_items w-full p-4" href="/Products/HPMC" onClick={handleLinkClick}>HPMC</Link>
              </div>
            </div>
          </div>

          <div className="md:block hidden gap-0 items-center">
            <Link href="https://api.whatsapp.com/send?phone=923216678600&text&type=phone_number&app_absent=0" target="blank">
              <button className="web_btn relative max-[770px]:px-1 max-[770px]:text-sm overflow-hidden">
                <span className="z-10 relative text-[#32673B] flex gap-4">
                  Contact us<FaWhatsapp className=" h-6 w-6"/>
                </span>
              </button>
            </Link>
          </div>
          
        </nav>
      </header>
    </main>
  );
};

export default Header;
