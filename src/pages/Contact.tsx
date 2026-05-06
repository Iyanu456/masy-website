import { useState, ChangeEvent, FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";

export default function ContactForm(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const phoneNumber = "2349076074997";

  const handleSendToWhatsApp = () => {
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendToWhatsApp();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  return (
    <>
      <Helmet>
        <title>MASY Consulting - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with MASY Consulting for tutoring or writing services."
        />
      </Helmet>

      <section className="w-full mb-16">
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
        </div>

        <div className="bg-white w-[95%] lg:w-[70%] mx-auto mt-[-10em] shadow-sm rounded-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full rounded-lg px-4 py-3 bg-[#FAFAFA]"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full rounded-lg px-4 py-3 bg-[#FAFAFA]"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              required
              className="w-full rounded-lg px-4 py-3 bg-[#FAFAFA]"
            />

            <button
              type="submit"
              className="w-full bg-[#212738] text-white py-3 rounded-lg hover:bg-[#FF8C00]"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
