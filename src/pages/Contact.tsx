import { useState, FormEvent, ChangeEvent } from "react";
import { ArrowLeft } from "lucide-react";

export default function ContactForm(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  const whatsappMessage = `
Hello MASY Consulting Team,

My name is ${name}, and I’m reaching out via your website.

*Email*: ${email}

*Message*:
${message}

I look forward to hearing from you.

Best regards,
${name}
`;


  const phoneNumber = "2349076074997"; // formatted Nigerian number

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setName(e.target.value);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);

  const handleMessageChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => setMessage(e.target.value);

  return (
    <section className="w-full mb-16">
      {/* Header Section */}
      <div className="w-[90%] mx-auto bg-[#D2DEE4] mt-6 rounded-2xl pt-8 pb-[15em] px-6 text-center">
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
          Send us a message and we’ll get back to you with the support you need—fast,
          friendly, and tailored to your goals.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white w-[95%] lg:w-[70%] mx-auto mt-[-10em] shadow-sm rounded-2xl p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-9">
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-4 text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                />
              </div>

              <div>
                <label className="block mb-4 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-4 text-sm font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Enter your message here"
                value={message}
                onChange={handleMessageChange}
                required
                className="placeholder:text-[0.95em] w-full rounded-lg px-4 py-3 text-gray-700 bg-[#FAFAFA]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#212738] text-white py-3 rounded-lg  hover:bg-[#FF8C00] transition-all flex justify-center align-center "
          >
            <img src="/whatsapp-svgrepo-com.svg" alt="" className="inline mr-2 h-6 w-6"/>
            Send us a message
            
          </button>
        </form>
      </div>
    </section>
  );
}
