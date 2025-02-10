"use client";

import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideDrawer() {
  const pathname = usePathname();

  // Define the navigation items
  const navItems = [
    { id: "services", label: "Services" },
    { id: "about", label: "About us" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact us" },
  ];

  // Function to scroll to a specific section with an offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -70; // Adjust this value as needed
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: "smooth",
      });
    } else {
      // Navigate to the home page and then scroll to the section
      window.location.href = `/#${id}`;
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  const handleOpen = (placement) => {
    setPlacement(placement);
    onOpen();
  };

  const relatedProducts = [
    { name: "Reactive Dyes", link: "/Products" },
    { name: "Disperse Dyes", link: "/Products/DisperseDyes" },
    { name: "Acrylic Dyes", link: "/Products/AcrylicDyes" },
    { name: "Direct Dyes", link: "/Products/DirectDyes" },
    { name: "Sulphur Dyes", link: "/Products/SulphurDyes" },
    { name: "HPMC", link: "/Products/HPMC" },
  ];

  return (
    <>
      <div className="flex min-[770px]:hidden flex-wrap gap-3">
        <Button
          className="p-0 bg-transparent min-w-fit rounded-full transition-colors duration-200"
          onPress={() => handleOpen("left")}
        >
          <SlMenu className="text-2xl text-gray-800 hover:text-[#32673B] transition-colors duration-300" />
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onOpenChange={onOpenChange}
        className="transition-all duration-300"
      >
        <DrawerContent className="bg-white p-6 w-72 shadow-lg">
          {(onClose) => (
            <>
              <DrawerBody>
                <div className="flex flex-col items-start space-y-4">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-[#32673B] transition-colors duration-200 text-lg font-medium"
                  >
                    Home
                  </Link>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`${
                        pathname === `#${item.id}` ? "text-[#32673B]" : "text-gray-700"
                      } hover:text-[#32673B] transition-colors duration-200 text-lg font-medium`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="w-full mt-4">
                    <h3 className="text-gray-800 font-semibold mb-4 w-full">Related Products</h3>
                    {relatedProducts.map((product) => (
                      <Link
                        key={product.name}
                        href={product.link || "/"}
                        className="block text-gray-700 hover:text-[#32673B] transition-colors duration-200 text-lg font-medium mb-2"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}