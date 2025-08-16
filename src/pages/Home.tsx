import { GraduationCap, LineChart, Pencil, Send, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-xs z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#FF8C00] rounded-full"></div>
              <span className="ml-3 text-xl font-semibold">Masy Consultings</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-900 hover:text-[#FF8C00] transition-colors">Services</a>
              <a href="#contact" className="px-6 py-2 bg-black text-white rounded-full hover:bg-[#FF8C00] transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              <div className="font-mono inline-flex">
                <Typewriter
                  options={{
                    strings: ['POWERING KNOWLEDGE, DRIVING SUCCESS'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 75,
                    wrapperClassName: 'inline-flex',
                    cursorClassName: 'text-[#FF8C00]'
                  }}
                />
              </div>
            </div>
            <div className="text-xl text-gray-600">
              RESEARCH • WRITE • ELEVATE
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional consulting services specializing in writing, research & data analysis. 
              Precision in every way.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="px-8 py-3 bg-black text-white rounded-full hover:bg-[#FF8C00] transition-all flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600 mt-4">Comprehensive solutions for your academic and professional needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Pencil className="w-6 h-6 text-[#FF8C00]" />,
                title: "Professional Writing",
                description: "Expert writing services for academic papers, articles, and professional documents."
              },
              {
                icon: <GraduationCap className="w-6 h-6 text-[#FF8C00]" />,
                title: "Academic Research",
                description: "Thorough research assistance and methodology development for academic projects."
              },
              {
                icon: <LineChart className="w-6 h-6 text-[#FF8C00]" />,
                title: "Data Analysis",
                description: "Comprehensive data analysis and interpretation for informed decision-making."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#FF8C00]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#FF8C00]"
                  />
                </div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-hidden focus:border-[#FF8C00]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black text-white rounded-full hover:bg-[#FF8C00] transition-all flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#FF8C00] rounded-full"></div>
              <span className="ml-2 text-lg font-semibold">Masy Consultings</span>
            </div>
            <div className="flex space-x-6">
              <a href="tel:090-7607-4997" className="text-gray-900 hover:text-[#FF8C00]">090-7607-4997</a>
              <a href="mailto:masywrtings@gmail.com" className="text-gray-900 hover:text-[#FF8C00]">masywrtings@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}