import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#212738] text-white py-18 mt-10 max-md:mt-1">
      <div className="w-[95%] md:w-[85%] flex flex-col justify-center lg:w-[76%] mx-auto md:grid grid-cols-2 gap-4">

        {/*<div className="hidden max-md:block text-center mb-9 space-y-4 mx-auto w-[90%] lg:w-[80%]">
          <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
          <div className="flex bg-white p-1 rounded-xl w-[100%]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4  outline-none text-black  w-[100%] max-sm:w-[100%]"
            />
            <button className="btn btn-primary py-2.5 bg-[#212738]">
              Subscribe
            </button>
          </div>
        </div>*/}

        <div className="flex flex-col  max-md:text-center lg:grid grid-cols-2 gap-7">
        <div className="space-y-4">
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Our Services</li>
            <li>About</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium mb-2">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>+234 907 607 4997</li>
            <li>masywritings@gmail.com</li>
          </ul>
        </div>
        </div>

        {/*<div className="max-md:hidden block space-y-4 mr-0 mx-auto w-full lg:w-[80%]">
          <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
          <div className="flex bg-white p-1 rounded-xl w-[100%]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4  outline-none text-black  w-[100%] max-sm:w-[100%]"
            />
            <button className="btn btn-primary py-2.5 bg-[#212738]">
              Subscribe
            </button>
          </div>
        </div>*/}
      </div>

      <div className="mt-[2em] mb-2 flex max-md:flex-col-reverse justify-between w-[95%] md:w-[85%] lg:w-[76%] mx-auto">
          <div className="text-center text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} MASY Consulting. All rights reserved.
        </div>

        <div className="mb-0 mt-auto max-md:mx-auto max-md:mt-[3em] text-sm">
          <ul className="flex space-x-3">
            <li className="mb-0 mt-auto text-gray-300">Follow us on:</li>
            <li><a href="https://www.facebook.com/share/19ZdFXwVRb/?mibextid=wwXIfr" ><img src="./Facebook.png" className='max-w-[24px] mb-0 mt-auto' /></a></li>
            <li><a href="https://www.instagram.com/masyconsulting?igsh=cmhobXFlajI0cDN3&utm_source=qr"><img src="./Instagram.png" className='max-w-[24px] mb-0 mt-auto' /></a></li>
            <li><a href="https://www.linkedin.com/company/masy-consultings/"><img src="./LinkedIn.png" className='max-w-[24px] mb-0 mt-auto' /></a></li>
          </ul>
        </div>
      </div>
      <hr className="max-sm:my-5 w-[80%] md:w-[85%] lg:w-[76%] mx-auto bg-gray-500 border-gray-500"></hr>

      
    </footer>
  )
}
