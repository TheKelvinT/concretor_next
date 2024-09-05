import React, { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const leftNavigation = [{ name: "CONCRETOR", href: "/" }];

const rightNavigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onClickContactUs = () => {
    router.push("/contact");
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative z-50 text-white py-4 bg-primary">
      <div className="mx-auto max-w-7xl px-4 md:px-16">
        <div className="relative flex items-center justify-between">
          
          {/* Left Navigation for mobile */}
          <div className="flex items-center md:hidden">
            {leftNavigation.map((item) => (
              <a key={item.name} href={item.href} className="text-3xl font-merriweather">
                {item.name}
              </a>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {open ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-grow">
            <div className="flex-grow flex items-center justify-between">
              <div>
                {leftNavigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-3xl font-merriweather">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-x-10">
                {rightNavigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-lg">
                    {item.name}
                  </a>
                ))}
                <Button title={"Get Quote"} styleType="white" onClick={onClickContactUs} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-primary z-50 md:hidden bg-[#E6F3F3]"
          >
            <div className="text-center mt-16">
              {rightNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl text-black block mb-16"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;