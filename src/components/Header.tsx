import { AlignRight } from "lucide-react"
export default function Header() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xs z-50 border-b border-gray-100">
      <div className=" mx-auto max-sm:w-full px-4  py-4 w-[95%] lg:w-[80%]">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            <img src="/logo.png" alt="masy logo" className="max-w-10 max-h-10 pt-1"></img>
            <span className="ml-3 md:text-xl font-semibold">Masy Consultings</span>
          </div>

          <div className="hidden lg:flex space-x-8 items-center font-medium">
            <a href="/">Home</a>
            <a href="about">About us</a>
            <a href="services">Services</a>
            <a href="testimonials">Testimonial</a>
          </div>

          <div className="max-sm:hidden flex items-center space-x-8">
            <a href="#contact" className="px-5 text-[0.95em] py-2 font-medium bg-[#131111] text-white rounded-xl hover:bg-[#FF8C00] transition-all">
              Contact Us
            </a>
          </div>

          <div className="max-sm:block hidden">
            <AlignRight />
          </div>
        </div>
      </div>
    </nav>
  )
}