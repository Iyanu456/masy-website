import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Facebook } from "lucide-react";
import { i } from "framer-motion/client";

const aboutUs = [
  {
    icon: "/about-1.png",
    title: "Dedicated Team",
    bodyText:
      "Our qualified professionals from diverse fields provide personalized academic support, guiding you every step of the way.",
  },
  {
    icon: "/about-2.png",
    title: "24/7 Support",
    bodyText:
      "We’re available around the clock to ensure you get help whenever you need it — because your success shouldn’t have to wait.",
  },
  {
    icon: "/about-3.png",
    title: "Custom Solutions",
    bodyText:
      "Whether it’s writing support or tutoring, every service is tailored to your unique needs and goals.",
  },
];

const ourServices = [
  {
    icon: "/about-8.png",
    title: "Writing Services",
    bodyText:
      "Expert writing and editing support for students and professionals—from essays and dissertations to business documents and blog content.",
    points: [
      "Academic & Professional Writing.",
      "Content Writing & Copywriting.",
      "Editing, Proofreading & Plagiarism Checks.",
    ],
    link: "/writing",
  },
  {
    icon: "/about-7.png",
    title: "Tutoring Services",
    bodyText:
      "Personalized one-on-one tutoring that makes learning easy and enjoyable. From kindergarten to A-levels, we help your child build confidence and achieve better grades",
    points: [
      "Homework Help & Exam Preparation",
      "Qualified, Patient Tutors",
      "Customized Learning Sessions",
    ],
    link: "/tutoring",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of academic support services including tutoring, writing assistance, proofreading, and exam preparation.",
  },
  {
    question: "How do you ensure quality",
    answer:
      "Our team consists of qualified professionals with expertise in various academic fields. We follow strict quality control measures to ensure the highest standards.",
  },
  {
    question: "What are your turnaround times",
    answer:
      "Turnaround times vary based on the service and complexity of the request. We strive to accommodate urgent needs whenever possible.",
  },
  {
    question: "How do you ensure client confidentiality and anonymity?",
    answer:
      "We prioritize your privacy and ensure all interactions and data are kept secure and confidential.",
  },
];

const strongPoints = [
  {
    stats: "150+",
    point: "Completed Projects",
    icon: "/completed-projects.svg",
  },
  {
    stats: "20+",
    point: "Expert team members",
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

export default function NewHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="w-full mx-auto space-y-16 max-sm:space-y-8 pb-[12em] overflow-x-hidden">
        {/* Section 1 */}
        <section className="mx-auto flex flex-col lg:grid grid-cols-[1.4fr_1fr] w-[95%] lg:w-[76%] gap-[3em] lg:gap-6 place-items-center max-sm:py-[2em] py-[3em] lg:py-[4em] xl:py-[4em]">
          {/* Column 1 */}
          <div className="space-y-6 md:space-y-4 h-fit my-auto text-center lg:text-left">
            <h2 className="text-[1.8em] max-sm:leading-11 max-sm:px-4 font-public-sans lg:text-[2em] xl:text-[2.55em] font-bold max-md:leading-11 md:leading-12 xl:leading-14">
              Stuck on a Writing Project?{<br></br>}Need an Online Tutor for
              Your Child?
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[86%] leading-8 xl:leading-7 max-sm:pb-6 max-sm:pt-2">
              We provide expert academic writing services for students worldwide
              and personalised online tutoring for children from kindergarten to
              A-levels—all in one place.
            </p>

            <div className="max-sm:flex-col-reverse max-sm:w-[80%] max-md:mx-auto w-fit lg:w-[18em] xl:w-fit flex lg:flex-col xl:flex-row gap-4 md:mt-8 md:mx-auto lg:mx-0 max-md:w-fit">
              <a
                href="/tutoring"
                className="btn btn-primary rounded-full md:w-fit lg:w-full xl:w-fit text-center"
              >
                Find a Tutor for My child
              </a>
              <a
                href="/writing"
                className="btn btn-outline rounded-full md:w-fit lg:w-full xl:w-fit text-center"
              >
                Get Professional Writing Help
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid w-full max-sm:place-items-center max-sm:-mt-4s mt-0">
            <div className="grid rounded-full overflow-hidden md:w-[50%] lg:w-[95%] max-sm:w-[68%] h-full lg:mr-0 ml-auto mx-auto ">
              <img
                src="/landing-2.png"
                className="w-[100%] h-[100%] object-cover lg:mr-0 ml-auto"
              ></img>
            </div>
          </div>
        </section>

        <section className="grid place-items-center py-[4em] bg-[#1E3A5F]">
          <div className="max-sm:w-full w-[90%] lg:w-[82%] mx-auto flex-wrap max-sm:text-[0.8em] md:grid md:grid-cols-2 max-md:grid max-md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-7 max-sm:gap-14">
            {strongPoints.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white text-[0.96em]"
              >
                <img src={item.icon} className="mb-2 max-w-[35px]"></img>
                <p className="font-semibold max-md:mt-2.5 mt-3.5 text-lg lg:text-xl xl:text-2xl">
                  {item.stats}
                </p>
                <p className="text-center mt-1">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 - Why choose us section */}

        <section className="my-[7em] md:my-[10em]">
          <div className="max-sm:w-[95%] w-[76%] mx-auto grid gap-5  md:gap-[2em] grid-cols-2 max-md:flex flex-col">
           
            <div>
              <div className="space-y-6 max-md:space-y-4 max-md:items-center">
                <p className="text-left max-md:text-center max-md:text-lg">Why Choose Masy Consulting?</p>
                <h2 className=" md:text-2xl max-md:leading-8 text-2xl lg:text-3xl xl:text-4xl leading-12 font-semibold md:pb-3 max-md:text-center max-md:text-lg">
                  Personalized Support, {<br />}Academic Excellence.
                </h2>
                <div className="block max-sm:hidden max-md:grid place-items-center">
                  <a
                  href="/quote"
                  className="btn btn-primary cursor-pointer rounded-full font-medium max-md:mx-auto max-sm:w-[14em] max-sm:text-center"
                >
                  Get a quote
                </a>
                </div>
                
              </div>
            </div>

            <div className="bg-white space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full max-md:shadow-md/5 shadow-xl/5 border border-gray-200">
              <img src={"/about-2.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                100% Confidential & Original
              </h3>
              <p className=" max-sm:leading-7">
                Your privacy matters. Every piece of work is written from scratch, plagiarism-checked, and completely confidential.
                
              </p>
            </div>
        
          
            <div className="bg-white space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full max-md:shadow-md/5  shadow-xl/5 border border-gray-200">
              <img src={"/about-1.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                Global Support, Personal Touch
              </h3>
              <p className=" max-sm:leading-7">
                We serve students and families worldwide with 24/7 support, but
                every project gets individual attention from our expert team.
              </p>
            </div>
            <div className="bg-white space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full max-md:shadow-md/5  shadow-xl/5 border border-gray-200">
              <img src={"/about-3.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                Proven Results
              </h3>
              <p className=" max-sm:leading-7">
                With 150+ successful projects and 98% client satisfaction, we've helped students excel from kindergarten to PhD level.
              </p>
            </div>

            <div className="max-sm:block hidden mt-[2em]">
                <div className="max-md:grid place-items-center">
                  <a
                  href="/quote"
                  className="btn btn-primary cursor-pointer rounded-full font-medium max-md:mx-auto max-sm:w-[19em] max-sm:text-center"
                >
                  Get a quote
                </a>
                </div>
            </div>
       
          </div>
          
        </section>

        {/* Section 3 */}

       
        {/* Our Services */}

        <section className="w-full grid place-items-center bg-[#F9FAFB] my-[7em] max-sm:mt-[3em] px-4 md:px-14 py-16 mb-[9em]">
          <section
            id="services"
            className=" gap-6 w-[95%] md:w-[76%] lg:w-[80%] mx-auto"
          >
            <h2 className="max-sm:text-2xl font-semibold text-3xl w-fit ">
              Our Services
            </h2>
            <p className="md:max-w-[63%] text-left mt-2.5 leading-7">
              Whether you need expert writing support or personalized tutoring
              for your child, we're here to help you succeed.
            </p>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-[3em]">
              {ourServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-white space-y-1.5 px-7 max-md:px-6 pt-12 max-md:pt-[1.8em]   pb-13 max-md:pb-[2em] rounded-2xl"
                >
                  <img
                    src={item.icon}
                    className="max-h-[52px] max-w-[52px]"
                  ></img>
                  <h3 className="max-md:text-lg text-xl font-semibold mt-4">{item.title}</h3>
                  <p className="max-md:mt-2 max-md:leading-7">
                    {item.bodyText}
                  </p>
                  <div className="space-y-2 text-gray-600 text-[0.95em] max-md:mt-[3em] mt-[2.5em] font-medium">
                    {item.points.map((point, index) => (
                      <p className="flex gap-1" key={index}>
                        <span>
                          <ChevronRight color="#FC9D33" />
                        </span>
                        {point}
                      </p>
                    ))}
                  </div>

                  <p className=" max-md:mt-[2.2em] mt-[3.5em]">
                    <a href={item.link} className="btn btn-primary">
                      Learn more
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* Section 5 */}
        {/* Client Testimonial */}
        <section
          id="testimonials"
          className="bg-gray-100 space-y-3 pt-12 rounded-xl pb-14 max-sm:mt-[3em] max-sm:w-[95%] mx-auto w-full"
        >
          <h2 className="max-sm:text-2xl font-semibold text-3xl mx-auto w-fit mb-3">
            Client Testimonial
          </h2>
          <p className="w-[80%] md:max-w-[63%] text-center mx-auto">
            Success stories from our satisfied students and clients
          </p>
          <TestimonialCarousel />
        </section>

        <section className="max-sm:mt-[4em] mt-[3em] mb-[7em] space-y-6">
          <h3 className="max-sm:text-xl text-center font-semibold text-3xl">
            FAQs
          </h3>
          <div className="w-[95%] md:w-[60%] mx-auto space-y-5">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-md text-lg p-6 max-sm:x-3"
              >
                <div className="flex justify-between items-center font-semibold max-sm:text-[0.95em]">
                  <p>{item.question}</p>
                  <button onClick={() => toggleFAQ(index)}>
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>
                </div>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 max-sm:text-[0.95em]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>


<section className="grid place-items-center py-[5em] max-md:mb-[-2em] md:py-[8em] bg-[#1E3A5F]">
          <div className="flex justify-between w-[90%] xl:w-[85%] mx-auto">
            <img src={'/tutoring-service.png'} className="hidden lg:block lg:max-w-[10em] xl:max-w-[16em] max-h-[50%] object-contain"></img>
            <div className="my-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white text-center flex max-md:gap-1.5 gap-3 justify-center mx-auto w-fit flex-wrap">Let's <span>Help </span><span>You</span> <span className="flex flex-col">Succeed!<img className="max-w0[1em] max-h-[0.4em] object-contain" src="/Stroke.svg" /></span></h2>
              <p className="text-center text-white  mt-8 w-[90%] md:max-w-[68%] mx-auto">Whether you need writing support or tutoring for your child, we're just one message away. Get your free consultation today.</p>
              <div className="flex w-fit mx-auto gap-6 mt-[2em] max-sm:flex-col">
              <a
                href="/quote"
                className="btn btn-outline text-white border-white px-8 rounded-full md:w-fit lg:w-full xl:w-fit text-center"
              >
                Get Started Now
              </a>
              <a
                href="/contact"
                className="btn btn-outline bg-white rounded-full md:w-fit lg:w-full xl:w-fit text-center max-sm:w-[18em]"
              >
                Send us a message
              </a>
            </div>
            </div>
            <img src={'writing-service.png'} className="hidden lg:block lg:max-w-[10em] xl:max-w-[18em] max-h-[50%] object-contain"></img>
          </div>
        </section>


       
      </main>
    </>
  );
}
