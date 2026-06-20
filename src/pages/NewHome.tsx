import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { useState } from "react";

const ourServices = [
  {
    icon: "/about-8.png",
    title: "Writing Services",
    bodyText:
      "Professional writing support for businesses, executives, and organisations. Proposals, pitch decks, company profiles, grant applications, and executive reports. Delivered with clarity and purpose.",
    points: [
      "Professional & Business Writing.",
      "Proposals, Pitch Decks & Company Profiles.",
      "Editing, Proofreading & Content Writing.",
    ],
    link: "/writing",
  },
  {
    icon: "/about-7.png",
    title: "Tutoring Services",
    bodyText:
      "A complete learning experience for your child. School subjects, African language classes, and coding skills. One trusted team. The African way of teaching.",
    points: [
      "School Curriculum (KG to A-Levels).",
      "Language Classes (Yoruba, Igbo, Hausa, French, Arabic).",
      "Coding & Tech Skills.",
    ],
    link: "/tutoring",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer two main services:<br /><br /> 1. <strong>Professional writing support</strong> including business documents, content writing, proposals, pitch decks, and proofreading. <br/><br />2. <strong>Personalized online tutoring</strong> for children from kindergarten to A-levels across school subjects, African language classes, and coding.",
  },
  {
    question: "How do you ensure quality",
    answer:
      "Every project is handled by qualified experts with relevant experience in the subject area. All written work is original, plagiarism-checked, and reviewed before delivery. We also offer free revisions within 7-14 days to ensure your complete satisfaction.",
  },
  {
    question: "What are your turnaround times",
    answer:
      "We offer flexible deadlines based on your needs. For writing projects, we can accommodate urgent requests with 24-72 hour delivery. Standard projects typically take 5-10 days depending on complexity. Tutoring sessions are scheduled at times convenient for you and your child.",
  },
  {
    question: "How do you ensure client confidentiality and anonymity?",
    answer:
      "We take your privacy seriously. All client information and project details are kept strictly confidential and secure. We never share your personal information, academic work, or any details with third parties. Your trust is our priority.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies based on project complexity, length, and deadline. We offer transparent quotes with no hidden fees. Contact us for a free consultation and personalized quote tailored to your specific needs.",
  },
];

const strongPoints = [
  {
    stats: "150+",
    point: "Students & Projects Served",
    icon: "/completed-projects.svg",
  },
  {
    stats: "20+",
    point: "Expert Team Members",
    icon: "/team-members.svg",
  },
  {
    stats: "98%",
    point: "Client Satisfaction",
    icon: "/client-satisfaction.svg",
  },
  {
    stats: "24/7",
    point: "Support Available",
    icon: "/24-7.svg",
  },
];

const masyPackage = [
  {
    icon: "🎓",
    heading: "School Subjects",
    body: "Maths, English, Sciences, and more. We cover the curriculum where your child lives and help them stay ahead in class.",
    tags: ["Maths", "English", "Biology", "Chemistry", "Physics", "Business", "Economics"],
    note: "Kindergarten to A-Levels and GCSE",
    theme: "#EDF4FC",
  },
  {
    icon: "🌍",
    heading: "African Language Classes",
    body: "Your child does not have to grow up without their mother tongue. We teach Yoruba, Igbo, Hausa, French, and Arabic the African way. For children and adults, at any level.",
    tags: ["Yoruba", "Igbo", "Hausa", "French", "Arabic"],
    note: "",
    theme: "#FFF8F0",
  },
  {
    icon: "💻",
    heading: "Coding & Tech Skills",
    body: "Give your child a head start in the digital world. From Python to Web Development and Data Analysis, we build real skills that open real doors.",
    tags: ["Python", "Web Development", "Data Analysis", "Graphic Design"],
    note: "",
    theme: "#E9F1EA",
  },
];

export default function NewHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="w-full mx-auto max-sm:space-y-8 pb-[12em] overflow-x-hidden">

        {/* Hero Section */}
        <section className="max-md:mb-[-0.5em] lg:py-0 md:mt-[3em] mx-auto flex flex-col lg:grid md:grid-cols-[1.8fr_1fr] max-md::grid-cols-[1.8fr_1.1fr] lg:grid-cols-[1.4fr_1.1fr] w-[95%] md:w-[98%] lg:w-[85%] xl:w-[80%] gap-[3em] lg:gap-6 place-items-center h-[fit-content]">
          <div className="max-md:mx-auto max-md:w-fit lg:py-[4em] md:py-0 md:pt-5 space-y-6 md:space-y-6 h-fit my-auto text-center lg:text-left">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide max-md:pt-[3em]">
              Trusted by diaspora families in the UK, USA, Canada & Nigeria
            </p>
            <h2 className="text-[1.05em] max-sm:px-4 font-inter md:text-[1.45em] lg:text-[1.25em] xl:text-[1.45em] 2xl:text-[1.65em] font-semibold leading-8 md:leading-9 lg:leading-9 xl:leading-10 max-md:max-w-[95%] max-md:mx-auto">
              Your child can top their class in London,<br />
              speak Yoruba to their grandmother,<br />
              and learn to code before their classmates.<br />
              <span style={{ color: "#F5821F" }}>At Masy, all three are possible.</span>
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[86%] md:text-[0.95em] leading-7 max-sm:pb-2 max-sm:pt-2">
              School subjects, mother tongue language classes, and coding. All in one place. All taught the African way. No Duolingo. No separate tutors. Just Masy.
            </p>
            <div className="space-x-2.5 md:py-6 max-md:flex flex-col max-md:gap-2.5 max-md:w-[80%] max-md:mx-auto">
              <a href="/tutoring" className="btn btn-primary rounded-full md:w-fit lg:w-full xl:w-fit text-center">
                Find a Tutor for My Child
              </a>
              <a href="/writing" className="btn btn-outline rounded-full lg:w-full xl:w-fit text-center">
                Get Business Writing Support
              </a>
            </div>
          </div>

          <div className="grid w-full max-sm:place-items-center mt-0 lg:mt-[-2.6em]">
            <div className="grid lg:mr-0 ml-auto mx-auto">
              <img
                src="/landing-image-2.png"
                className="w-[80%] h-[100%] max-md:mx-auto md:w-[80%] md:h-[100%] md:mx-auto lg:w-[120%] lg:h-[120%] xl:w-[110%] xl:h-[110%] xl:mb-[3em] object-cover lg:mr-0 ml-auto"
              />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="w-full bg-[#2D2D8F] py-[1.4em] px-4">
          <div className="w-[95%] lg:w-[85%] xl:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0">
            {[
              "Pay in Naira or Pounds",
              "All subjects, languages & coding",
              "Available 24/7, every time zone",
              "Nigerian tutors, African way",
              "One-on-one only, no group classes",
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-2 text-white text-[0.85em] font-medium justify-center text-center">
                <span style={{ color: "#F5821F" }} className="font-bold text-base flex-shrink-0">✓</span>
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Stats Bar */}
        <section className="grid place-items-center py-[2.2em] max-md:py-[4em] bg-white relative border-b border-gray-100">
          <div className="max-sm:w-full w-[90%] lg:w-[82%] mx-auto flex-wrap max-sm:text-[0.8em] md:grid md:grid-cols-2 max-md:grid max-md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-7 max-sm:gap-14">
            {strongPoints.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-[#1E3A5F] text-[0.96em]">
                <img src={item.icon} className="mb-1 max-w-[35px]" />
                <p className="font-semibold max-md:mt-2.5 mt-3.5 text-lg lg:text-xl xl:text-2xl">{item.stats}</p>
                <p className="text-center mt-1">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Masy */}
        <section className="my-[7em] md:my-[10em] max-sm:w-[95%] w-[76%] mx-auto">
          <h2 className="max-sm:text-2xl font-semibold text-3xl w-fit max-md:mx-auto">
            Why Diaspora Families and Businesses Choose Masy
          </h2>
          <p className="md:max-w-[63%] text-left mt-2.5 leading-7 mb-[2em] max-md:mx-auto w-fit">
            Personalised support, proven results.
          </p>
          <div className="grid gap-5 md:gap-[2em] grid-cols-3 max-md:flex flex-col">
            <div className="bg-[#EDF4FC] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full">
              <img src={"/about-2.png"} />
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">We Understand Your World</h3>
              <p className="max-sm:leading-7">
                You live abroad but your values did not travel with you. We get that. Our tutors teach with the warmth, discipline, and cultural grounding that African parents trust. Your child is in good hands.
              </p>
            </div>
            <div className="bg-[#E9F1EA] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full">
              <img src={"/about-2.png"} />
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">Everything in One Place</h3>
              <p className="max-sm:leading-7">
                School curriculum. Mother tongue languages. Coding and tech skills. No more juggling five different platforms and tutors. Masy brings it all together for your child.
              </p>
            </div>
            <div className="bg-[#FCF3ED] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full">
              <img src={"/about-2.png"} />
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">Flexible Around Your Life</h3>
              <p className="max-sm:leading-7">
                We work across UK, US, Canadian, and Nigerian time zones. Evenings, weekends, whenever works for your family. 24/7 support always available.
              </p>
            </div>
          </div>
        </section>

        {/* The Masy Package */}
        <section className="w-full bg-[#F9FAFB] py-[5em] px-4 md:px-14 my-[3em]">
          <div className="w-[95%] md:w-[76%] lg:w-[80%] mx-auto">
            <span className="inline-block bg-[#1E3A5F] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Built for Diaspora Families
            </span>
            <h2 className="max-sm:text-2xl font-semibold text-3xl leading-snug mb-4">
              One Basket. Everything Your Child Needs.
            </h2>
            <p className="leading-7 md:max-w-[70%] mb-10 text-gray-700">
              Why send your child to one tutor for Maths, a language app for Yoruba, and a coding platform for Python? At Masy they get it all in one place, from one trusted team, taught the African way.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {masyPackage.map((pillar, i) => (
                <div key={i} className="rounded-2xl p-8 space-y-4" style={{ backgroundColor: pillar.theme }}>
                  <span className="text-3xl">{pillar.icon}</span>
                  <h3 className="font-semibold text-xl">{pillar.heading}</h3>
                  <p className="text-gray-700 leading-7 text-[0.95em]">{pillar.body}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pillar.tags.map((tag) => (
                      <span key={tag} className="bg-white text-[#1E3A5F] text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {pillar.note && (
                    <p className="text-gray-500 text-sm">{pillar.note}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="/quote" className="btn btn-primary rounded-full inline-block">
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="w-full grid place-items-center bg-[#F9FAFB] my-[7em] max-sm:mt-[3em] px-4 md:px-14 py-16 mb-[9em]">
          <section className="gap-6 w-[95%] md:w-[76%] lg:w-[80%] mx-auto">
            <h2 className="max-sm:text-2xl font-semibold text-3xl w-fit">Our Services</h2>
            <p className="md:max-w-[63%] text-left mt-2.5 leading-7">
              Whether you need expert writing support or personalised tutoring for your child, we are here to help you succeed.
            </p>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-[3em]">
              {ourServices.map((item, index) => (
                <div key={index} className="bg-white space-y-1.5 px-7 max-md:px-6 pt-12 max-md:pt-[1.8em] pb-13 max-md:pb-[2em] rounded-2xl">
                  <img src={item.icon} className="max-h-[52px] max-w-[52px]" />
                  <h3 className="max-md:text-lg text-xl font-semibold mt-4">{item.title}</h3>
                  <p className="max-md:mt-2 max-md:leading-7">{item.bodyText}</p>
                  <div className="space-y-2 text-gray-600 text-[0.95em] max-md:mt-[3em] mt-[2.5em] font-medium">
                    {item.points.map((point, index) => (
                      <p className="flex gap-1" key={index}>
                        <span><ChevronRight color="#FC9D33" /></span>
                        {point}
                      </p>
                    ))}
                  </div>
                  <p className="max-md:mt-[2.2em] mt-[3.5em]">
                    <a href={item.link} className="btn btn-primary">Learn more</a>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Client Testimonials */}
        <section id="testimonials" className="bg-gray-100 space-y-3 pt-12 rounded-xl pb-14 max-sm:mt-[3em] max-sm:w-[95%] mx-auto w-full">
          <h2 className="max-sm:text-2xl font-semibold text-3xl mx-auto w-fit mb-3">Client Testimonials</h2>
          <p className="w-[80%] md:max-w-[63%] text-center mx-auto">
            Real results from the families and businesses we have worked with
          </p>
          <div className="mt-6 px-4 md:px-10 w-[95%] md:w-[90%] mx-auto">
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              Tutoring & Language Families
            </span>
          </div>
          <TestimonialCarousel tutoring />
          <div className="mt-8 px-4 md:px-10 w-[95%] md:w-[90%] mx-auto">
            <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
              Writing & Business Clients
            </span>
          </div>
          <TestimonialCarousel writing />
        </section>

        {/* FAQs */}
        <section className="max-sm:mt-[4em] mt-[3em] mb-[7em] space-y-6">
          <h3 className="max-sm:text-xl text-center font-semibold text-3xl">FAQs</h3>
          <div className="w-[95%] md:w-[60%] mx-auto space-y-5">
            {faqs.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-md text-lg p-6 max-sm:x-3">
                <div className="flex justify-between items-center font-semibold max-sm:text-[0.95em]">
                  <p>{item.question}</p>
                  <button onClick={() => toggleFAQ(index)}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </div>
                {openIndex === index && (
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} className="mt-4 text-gray-600 max-sm:text-[0.95em]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="grid place-items-center py-[5em] max-md:mb-[-2em] md:py-[8em] bg-[#1E3A5F]">
          <div className="flex justify-between w-[90%] xl:w-[85%] mx-auto">
            <img src={'/tutoring-service.png'} className="hidden lg:block lg:max-w-[10em] xl:max-w-[16em] max-h-[50%] object-contain" />
            <div className="my-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white text-center mx-auto">
                Your Child Deserves the Best of Both Worlds
              </h2>
              <p className="text-center text-white mt-8 w-[90%] md:max-w-[68%] mx-auto">
                Academic excellence. Cultural identity. Future-ready skills. All in one place, all taught with the warmth and structure African parents trust. Book a free consultation today and let us find the right programme for your child.
              </p>
              <div className="flex w-fit mx-auto gap-6 mt-[2em] max-sm:flex-col">
                <a href="/quote" className="btn btn-outline text-white border-white px-8 rounded-full md:w-fit lg:w-full xl:w-fit text-center">
                  Get Started Now
                </a>
                <a href="/contact" className="btn btn-outline bg-white rounded-full md:w-fit lg:w-full xl:w-fit text-center max-sm:w-[18em]">
                  Send us a message
                </a>
              </div>
            </div>
            <img src={'writing-service.png'} className="hidden lg:block lg:max-w-[10em] xl:max-w-[18em] max-h-[50%] object-contain" />
          </div>
        </section>

      </main>
    </>
  );
}
