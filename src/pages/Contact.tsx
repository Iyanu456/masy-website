

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

export default function ContactForm() {
  const [service, setService] = useState("Select...");

  return (
    <section className="w-full mb-16">
      {/* Header Section */}
      <div className="w-[90%] mx-auto bg-[#D2DEE4] mt-6 rounded-2xl pt-8 pb-[15em] px-6 text-center">
        {/* Back Button */}
        <div className="w-[95%] lg:w-[80%] mx-auto">
          <a
            href="/"
            className="flex items-center text-sm font-medium text-gray-700 hover:text-black"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to home
          </a>
        </div>

        <h1 className="mt-[2em] text-2xl md:text-3xl font-medium mb-3">
          Send us a message
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Send us a message and we’ll get back to you with the support you need—fast, friendly, and tailored to your goals.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white w-[95%] lg:w-[70%] mx-auto mt-[-10em] shadow-sm rounded-2xl p-6 md:p-10">
        <form className="space-y-9">
          {/* Two-column grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-4 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                />
              </div>

              <div>
                <label className="block mb-4 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                />
              </div>
            </div>

            <div>
                <label className="block mb-4 text-sm font-medium">Message</label>
            <textarea
                  rows={5}
                  placeholder="Enter your message here"
                  className="placeholder:text-[0.95em] w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                />
            </div>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-[#FF8C00] transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
