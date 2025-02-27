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
import { FaWhatsapp } from "react-icons/fa";

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
  const [placement, setPlacement] = React.useState("right");

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
      <div className="flex min-[770px]:hidden flex-wrap gap-3 ">
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
        className="transition-all duration-300  "
      >
        <DrawerContent className="bg-white p-[10%]  shadow-lg w-full">
          {(onClose) => (
            <>
              <DrawerBody className="flex">
                <div className="flex flex-col items-start justify-center space-y-2">
                  <Link
                    href="/"
                    className="fade_right w-full  font-bold text-[1.8rem]"
                    onClick={() => {
                      onClose(); // Close the drawer
                    }}
                  >
                    Home
                  </Link>
                  {navItems.map((item) => (
                    <button
                      key={item.id}

                      
                      onClick={() => {
                        scrollToSection(item.id); // Scroll to section
                        onClose(); // Close the drawer after clicking the item
                      }}


                      className={`${
                        pathname === `#${item.id}` ? "fade_right" : ""
                      }   font-bold text-[1.8rem]`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="w-full mt-4 flex flex-col gap-2">
                    <h3 className="fade_right w-full  font-bold text-[1.8rem]">Related Products</h3>
                    {relatedProducts.map((product) => (
                      <Link
                        key={product.name}
                        href={product.link || "/"}
                        className=" flex flex-col  w-full font-bold  text-[1.2rem]"
                        onClick={() => {
                          onClose(); // Close the drawer
                        }}

                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex  w-full">
                    <Link href={"https://api.whatsapp.com/send?phone=923216678600&text&type=phone_number&app_absent=0"} target="blank"><button
                      className="web_btn"
                      >
                    <span className="z-10 relative text-[#32673B] flex gap-4">Contact us<FaWhatsapp className=" h-6 w-6"/></span>
                  </button>
                  </Link>
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