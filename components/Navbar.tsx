import Image from "next/image"
import React, { useState, Fragment, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

const leftNavigation = [{ name: "CONCRETOR", href: "/" }]

const rightNavigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  let menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let handler = (e: { target: any }) => {
      if (menuRef?.current && !menuRef?.current?.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div
      className={`relative z-50 text-white py-4 overflow-hidden ${"bg-primary"}`}
    >
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl px-16">
          <div className="relative flex items-center h-84 justify-between">
            <div className="hidden md:block">
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
                  <a key={item.name} href={item.href} className="text-lg">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
