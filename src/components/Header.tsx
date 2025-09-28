"use client"

import { useEffect, useState } from "react"
import { AlignRight, X } from "lucide-react"

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let scrollTimeout: NodeJS.Timeout

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentScrollY)

      // auto tuck after idle
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) setHidden(true)
      }, 2000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [lastScrollY])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full bg-white/80 backdrop-blur-xs z-50 border-b border-gray-100 transition-transform duration-300 ${
          hidden ? isMenuOpen ? "" : "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto max-sm:w-full px-4 py-4 w-[95%] lg:w-[80%]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="masy logo"
                className="max-w-10 max-h-10 pt-1"
              />
              <span className="ml-3 md:text-xl font-semibold">
                Masy Consulting
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex space-x-8 items-center font-medium">
              <a href="/">Home</a>
              <a href="#about">About us</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonial</a>
            </div>

            {/* Desktop button */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/contact"
                className="px-5 text-[0.95em] py-2 font-medium bg-[#131111] text-white rounded-xl hover:bg-[#FF8C00] transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden block relative">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
              </button>

             
            </div>

           
          </div>
        </div>
      </nav>

      {/* Overlay for closing when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

       {/* Popup Menu */}
              {isMenuOpen && (
                <div className="md:hidden fixed text-center text-[0.95em] left-auto z-50 right-5  top-[4em] mt-3 w-48 bg-white shadow-lg rounded-lg border border-gray-100 px-8 py-7 flex flex-col space-y-7 font-medium">
                  <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                  <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonial</a>
                  <a
                    href="/contact"
                    className="px-4 text-[0.95em] py-2 rounded-lg bg-[#131111] text-white hover:bg-[#FF8C00] text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              )}
    </>
  )
}
