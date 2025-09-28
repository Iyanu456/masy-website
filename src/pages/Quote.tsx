

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

export default function QuoteForm() {
  const [service, setService] = useState("Select...");

  return (
    <section className="w-full mb-16">
      {/* Header Section */}
      <div className="w-[90%] mx-auto bg-[#F7E3C8] mt-6 rounded-2xl pt-8 pb-[15em] px-6 text-center">
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
          Request a quote
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Tell us what you’re looking for, and we’ll tailor a quote just for you.
          Whether it’s writing, tutoring, or editing, we’re here to help you succeed.
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

            {/* Service Select */}
            <CustomSelect
              label="Service"
              options={["Select...", "Writing", "Tutoring"]}
              onChange={(val: string) => setService(val)}
            />

            {/* Writing Service Fields */}
            {service === "Writing" && (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <CustomSelect
                    label="Academic Level"
                    options={["Select...", "Undergraduate", "Masters", "PhD"]}
                  />

                  <CustomSelect
                    label="Type of paper"
                    options={["Select...", "Essay", "Research", "Assignment"]}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <CustomSelect
                    label="Subject Area"
                    options={["Select...", "Law", "Business", "Finance"]}
                  />

                  <div>
                    <label className="block mb-4 text-sm font-medium">
                      Number of pages
                    </label>
                    <input
                      type="number"
                      placeholder="Number of pages"
                      className="w-full items-center rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <CustomSelect
                    label="Deadline"
                    options={["Select...", "3 Days", "1 Week", "2 Weeks"]}
                  />

                  <CustomSelect
                    label="Writing Style"
                    options={["Select...", "APA", "MLA", "Chicago"]}
                  />
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Drag file or click the button
                  </p>
                  <button
                    type="button"
                    className="bg-black text-white px-5 py-2 rounded-lg hover:bg-[#FF8C00] transition-all"
                  >
                    Upload File
                  </button>
                </div>

                {/* Paper Instructions */}
                <div>
                <label className="block mb-4 text-sm font-medium">Paper instruction</label>
                <textarea
                  rows={5}
                  placeholder="Enter the title of your paper and write what’s important for the writer to consider to meet your expectation. include class notes, textbook pages, and grading scales if applicable"
                  className="placeholder:text-[0.95em] w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA] outline-orange-200"
                />
                </div>
              </>
            )}

            {/* Tutoring Service Fields */}
            {service === "Tutoring" && (
              <>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <CustomSelect
                    label="Level"
                    options={[
                      "Select...",
                      "Primary School",
                      "Secondary School",
                      "A-Levels/GCSE",
                      "SATs",
                    ]}
                  />

                  <CustomSelect
                    label="Subject"
                    options={[
                      "Select...",
                      "English",
                      "Mathematics & Statistics",
                      "Biology",
                      "Chemistry",
                      "Physics",
                      "Business & Economics",
                      "Coding & Graphics Design",
                    ]}
                  />
                </div>

                <div>
                <label className="block mb-4 text-sm font-medium">Learning goals</label>
                <textarea
                  rows={5}
                  placeholder="Enter details about the student’s needs, challenges, or specific learning goals."
                  className="placeholder:text-[0.95em] w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA] outline-orange-200"
                />
                </div>
              </>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-[#FF8C00] transition-all"
          >
            Get the quote
          </button>
        </form>
      </div>
    </section>
  );
}
