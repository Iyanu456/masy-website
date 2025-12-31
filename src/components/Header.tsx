"use client"

import { useEffect, useState } from "react"
import { AlignRight, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function NavItem({ to, label }: { to: string; label: string }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <div className="flex flex-col gap-1.5 group">
      <a
        href={to}
        className={`transition duration-200 ${
          isActive
            ? "text-[#212738] font-semibold"
            : "text-gray-400 hover:text-[#FF8C00] font-normal"
        }`}
      >
        {label}
      </a>

      <div
        className={`h-[2.9px] rounded-full transition-all duration-300 ${
          isActive
            ? "bg-[#2e364d] w-full"
            : "bg-[#2e364d] w-0 group-hover:w-full"
        }`}
      />
    </div>
  )
}

function MobileNavItem({
  to,
  label,
  onClick,
}: {
  to: string
  label: string
  onClick: () => void
}) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <a
      href={to}
      onClick={onClick}
      className={`transition ${
        isActive ? "text-[#212738] font-semibold" : "text-gray-400 font-normal"
      }`}
    >
      {label}
    </a>
  )
}

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
        className={`fixed w-full bg-white/80 backdrop-blur-xs max-md:border-b border-gray-100 z-50 transition-transform duration-300 ${
          hidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto py-[1.2em] md:py-[1.4em] w-[90%] md:w-[95%] lg:w-[85%] xl:w-[80%]"> 
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="masy logo"
                className="max-w-10 max-h-10 pt-1"
              />
              <span className="ml-3 md:text-[1.15em] xl:text-xl font-semibold">
                Masy Consulting
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex space-x-8 items-center font-medium my-auto">
              <NavItem to="/" label="Home" />
              <NavItem to="/tutoring" label="Tutoring" />
              <NavItem to="/writing" label="Writing" />
              <NavItem to="/quote" label="Quote" />
              <NavItem to="/#testimonials" label="Testimonial" />

              <Link
                to="/contact"
                className="px-5 mb-2 py-2 text-[0.95em] font-medium bg-[#212738] text-white rounded-xl hover:bg-[#FF8C00] transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile popup menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed text-center right-5 top-[4em] mt-3 w-48 bg-white shadow-lg rounded-lg border border-gray-100 px-8 py-7 flex flex-col space-y-7 font-medium z-50">
          <MobileNavItem
            to="/"
            label="Home"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            to="/tutoring"
            label="Tutoring"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            to="/writing"
            label="Writing"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            to="/quote"
            label="Quote"
            onClick={() => setIsMenuOpen(false)}
          />
          <MobileNavItem
            to="/#testimonials"
            label="Testimonial"
            onClick={() => setIsMenuOpen(false)}
          />

          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-[#212738] text-white hover:bg-[#FF8C00]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  )
}
