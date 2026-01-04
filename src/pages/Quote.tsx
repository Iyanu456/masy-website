import { useState, FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";
import { Helmet } from "react-helmet";


type QuoteFormState = {
  name: string;
  email: string;
  service: "Select..." | "Writing" | "Tutoring";

  writing: {
    writingType: string; // All writing types
    academicLevel: string; // Only for academic/thesis writing
    subjectArea: string;
    pages: string;
    deadline: string;
    writingStyle: string;
    instructions: string;
  };

  tutoring: {
    level: string;
    subject: string;
    learningGoals: string;
  };
};

export default function QuoteForm(): JSX.Element {
  const [form, setForm] = useState<QuoteFormState>({
    name: "",
    email: "",
    service: "Select...",

    writing: {
      writingType: "Select...",
      academicLevel: "Select...",
      subjectArea: "Select...",
      pages: "",
      deadline: "Select...",
      writingStyle: "Select...",
      instructions: "",
    },

    tutoring: {
      level: "Select...",
      subject: "Select...",
      learningGoals: "",
    },
  });

  const updateField = (field: keyof QuoteFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateWritingField = (
    field: keyof QuoteFormState["writing"],
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      writing: { ...prev.writing, [field]: value },
    }));
  };

  const updateTutoringField = (
    field: keyof QuoteFormState["tutoring"],
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      tutoring: { ...prev.tutoring, [field]: value },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let serviceDetails = "";

    if (form.service === "Writing") {
      serviceDetails = `
*Type of Writing*: ${form.writing.writingType}
${
  form.writing.writingType === "Academic Writing" ||
  form.writing.writingType === "Theses & Dissertations"
    ? `*Academic Level*: ${form.writing.academicLevel}`
    : ""
}
*Subject Area*: ${form.writing.subjectArea}
*Number of Pages*: ${form.writing.pages}
*Deadline*: ${form.writing.deadline}
*Writing Style*: ${form.writing.writingStyle}

*Instructions*:
${form.writing.instructions}
      `;
    }

    if (form.service === "Tutoring") {
      serviceDetails = `
*Level*: ${form.tutoring.level}
*Subject*: ${form.tutoring.subject}

*Learning Goals*:
${form.tutoring.learningGoals}
      `;
    }

    const whatsappMessage = `
Hello MASY Consulting Team,

I would like to request a quote via your website. Please find my details below:

*Name*: ${form.name}
*Email*: ${form.email}
*Service Requested*: ${form.service}

${serviceDetails}

I look forward to your response.

Best regards,
${form.name}
    `;

    const phoneNumber = "2349076074997";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
    <Helmet>
        <title>Request a Quote - MASY Consulting</title>
        <meta name="description" content="Request a quote for tutoring or writing services from Masy Consulting." />
      </Helmet>
    <section className="w-full mb-16">
      {/* Header */}
      <div className="w-[90%] mx-auto bg-[#F7E3C8] mt-6 rounded-2xl pt-8 pb-[15em] px-6 text-center">
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
        </p>
      </div>

      {/* Form */}
      <div className="bg-white w-[95%] lg:w-[70%] mx-auto mt-[-10em] shadow-sm rounded-2xl p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-9">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              className="rounded-lg px-4 py-3 bg-[#FAFAFA]"
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              className="rounded-lg px-4 py-3 bg-[#FAFAFA]"
            />
          </div>

          {/* Service */}
          <CustomSelect
            label="Service"
            options={["Select...", "Writing", "Tutoring"]}
            onChange={(val: string) => updateField("service", val)}
          />

          {/* Writing */}
          {form.service === "Writing" && (
            <>
              <CustomSelect
                label="Type of Writing"
                options={[
                  "Select...",
                  "Business Writing",
                  "Content Writing",
                  "Editing & Proofreading",
                  "Academic Writing",
                  "Theses & Dissertations",
                  "Research Papers & Reports",
                  "Journal Articles & Publications",
                  "Conference Papers & Presentations",
                  "Others, please specify",
                ]}
                onChange={(val) => updateWritingField("writingType", val)}
              />

              {/* Show academic level only for certain writing types */}
              {(form.writing.writingType === "Academic Writing" ||
                form.writing.writingType === "Theses & Dissertations") && (
                <CustomSelect
                  label="Academic Level"
                  options={[
                    "Select...",
                    "Undergraduate",
                    "Masters",
                    "PhD",
                    "Others, please specify",
                  ]}
                  onChange={(val) => updateWritingField("academicLevel", val)}
                />
              )}

              {/* Subject Area */}
              <CustomSelect
                label="Subject Area"
                options={[
                  "Select...",
                  "Law",
                  "Business",
                  "Finance",
                  "Science",
                  "Arts & Humanities",
                  "Others, please specify",
                ]}
                onChange={(val) => updateWritingField("subjectArea", val)}
              />

              {/* Number of Pages */}
              <div>
                <label className="block mb-4 text-sm font-medium">
                  Number of pages
                </label>
                <input
                  type="number"
                  placeholder="Number of pages"
                  value={form.writing.pages}
                  onChange={(e) => updateWritingField("pages", e.target.value)}
                  className="rounded-lg px-4 py-3 bg-[#FAFAFA]"
                />
              </div>

              {/* Deadline */}
              <CustomSelect
                label="Deadline (if applicable)"
                options={[
                  "Select...",
                  "3 Days",
                  "1 Week",
                  "2 Weeks",
                  "Others, please specify",
                ]}
                onChange={(val) => updateWritingField("deadline", val)}
              />

              {/* Writing Style */}
              <CustomSelect
                label="Writing Style"
                options={[
                  "Select...",
                  "APA",
                  "MLA",
                  "Chicago",
                  "Others, please specify",
                ]}
                onChange={(val) => updateWritingField("writingStyle", val)}
              />

              {/* Instructions */}
              <div>
                <label className="block mb-4 text-sm font-medium">
                  Instructions
                </label>
                <textarea
                  rows={5}
                  placeholder="Instructions for your writing project"
                  value={form.writing.instructions}
                  onChange={(e) =>
                    updateWritingField("instructions", e.target.value)
                  }
                  className="rounded-lg px-4 py-3 bg-[#FAFAFA] w-full"
                />
              </div>
            </>
          )}

          {/* Tutoring */}
          {form.service === "Tutoring" && (
            <>
              <CustomSelect
                label="Level"
                options={[
                  "Select...",
                  "Primary School",
                  "Secondary School",
                  "A-Levels/GCSE",
                  "SATs",
                  "Others, please specify",
                ]}
                onChange={(val) => updateTutoringField("level", val)}
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
                  "Others, please specify",
                ]}
                onChange={(val) => updateTutoringField("subject", val)}
              />

              <div>
                <label className="block mb-4 text-sm font-medium">
                  Learning goals
                </label>
                <textarea
                  rows={5}
                  placeholder="Learning goals"
                  value={form.tutoring.learningGoals}
                  onChange={(e) =>
                    updateTutoringField("learningGoals", e.target.value)
                  }
                  className="rounded-lg px-4 py-3 bg-[#FAFAFA] w-full"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#212738] text-white py-3 rounded-lg font-medium hover:bg-[#FF8C00] flex justify-center items-center"
          >
            <img
              src="/whatsapp-svgrepo-com.svg"
              alt=""
              className="inline mr-2 h-6 w-6"
            />
            Get the quote
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
