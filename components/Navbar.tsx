import Image from "next/image";
import React, { useState, Fragment, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const leftNavigation = [
  { name: "CONCRETOR", href: "/app" }
]


const rightNavigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (menuRef?.current && !menuRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const isBlogPath =
    pathname === "/blog" ||
    pathname === "/reservations" ||
    pathname === "/admin" ||
    pathname === "/careers";
  const bgColor = isBlogPath ? "bg-secondary" : "bg-transparent";

  return(
    <div className = {`relative z-50 text-white py-4 overflow-hidden ${"bg-primary"}`}>
      <div className = "bg-transparent">
        <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className = "relative flex items-center h-84 justify-between">
            <div className = "hidden md:block">
              {leftNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-merriweather"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <div className="flex gap-x-10">
                {rightNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

  
//   return (
//     <nav
//       className={`relative z-50 text-black py-4 max-w-screen overflow-hidden ${"bg-primary"}`}
//     >
//       <div className="bg-transparent">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="flex flex-1 items-center justify-start md:justify-center ">
//               <div className="hidden md:block">
//                 <div className="flex gap-x-5">
//                   {leftNavigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="rounded-md px-3 py-2 text-sm"
//                       // aria-current={item.current ? "page" : undefined}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="hidden md:block">
//                 <div className="flex gap-x-5">
//                   {rightNavigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="px-2 py-2 text-sm "
//                       // aria-current={item.current ? "page" : undefined}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center md:hidden">
//               {/* Mobile menu button*/}
//               <button
//                 className="inline-flex items-center justify-center rounded-md p-2 text-white   "
//                 onClick={() => setOpen(!open)}
//               >
//                 {open ? (
//                   <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
//                 ) : (
//                   <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {open && (
//           <div
//             style={{ position: "fixed" }}
//             className=" md:hidden absolute right-0 top-[70px] overflow-hidden"
//             ref={menuRef}
//           >
//             <div className="space-y-4 pr-6 pl-12 py-6 flex flex-col text-sm bg-white/15 backdrop-blur-md w-screen xs:w-[160px] h-full">
//               <div className="flex flex-col items-center xs:items-end gap-y-4">
//                 {leftNavigation.map((item) => (
//                   <motion.div
//                     className="hover:font-bold"
//                     key={item.name}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                     variants={{
//                       hidden: { opacity: 0, y: -25 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                   >
//                     <Link href={item.href}>{item.name}</Link>
//                   </motion.div>
//                 ))}
//               </div>
//               <div className="flex flex-col items-center xs:items-end gap-y-4">
//                 {rightNavigation.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                     variants={{
//                       hidden: { opacity: 0, y: -25 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                   >
//                     <Link href={item.href}>{item.name}</Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }



export default Navbar;
