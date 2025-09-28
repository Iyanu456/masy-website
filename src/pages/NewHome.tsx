import TestimonialCarousel from "@/components/TestimonialCarousel"
import { Plus, Minus, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Facebook } from "lucide-react"


const aboutUs = [
  {
    icon: "/about-1.png",
    title: "Dedicated Team",
    bodyText: "Our qualified professionals from diverse fields provide personalized academic support, guiding you every step of the way."
  },
  {
    icon: "/about-2.png",
    title: "24/7 Support",
    bodyText: "We’re available around the clock to ensure you get help whenever you need it — because your success shouldn’t have to wait."
  },
  {
    icon: "/about-3.png",
    title: "Custom Solutions",
    bodyText: "Whether it’s writing support or tutoring, every service is tailored to your unique needs and goals."
  },
]

const ourServices = [

  {
    icon: "/about-7.png",
    title: "Tutoring Services",
    bodyText: "Our online tutoring sessions simplify complex topics through personalized, one-on-one guidance. Whether it’s homework help, exam preparation, or building long-term study skills, we’re here to boost your confidence and success.",
    points: [
      "Support for every stage of learning, from preschool to A-levels/SATs",
      "Qualified, relatable tutors committed to student growth",
      "Customized sessions that make tough concepts easy to understand"
    ],
    link: "/tutoring"
  },
  {
    icon: "/about-8.png",
    title: "Writing Services",
    bodyText: "We offer end-to-end writing and editing support to help you excel academically and professionally.",
    points: [
      "Academic & Professional Writing – Essays, reports, dissertations, proposals, research papers, and business documents.",
      "Content Writing – Engaging blog posts, articles, and tailored content for academic or professional needs.",
      "Editing &amp; Proofreading – Grammar, structure, clarity improvements, plus plagiarism checks and proper referencing."
    ],
    link: "/writing"
  },
  
]

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of academic support services including tutoring, writing assistance, proofreading, and exam preparation."
  },
  {
    question: "How do you ensure quality",
    answer: "Our team consists of qualified professionals with expertise in various academic fields. We follow strict quality control measures to ensure the highest standards."
  },
  {
    question: "What are your turnaround times",
    answer: "Turnaround times vary based on the service and complexity of the request. We strive to accommodate urgent needs whenever possible."
  },
  {
    question: "How do you ensure client confidentiality and anonymity?",
    answer: "We prioritize your privacy and ensure all interactions and data are kept secure and confidential."
  },
]

export default function NewHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <main className="w-full mx-auto space-y-16 max-sm:space-y-8 pb-[12em] overflow-x-hidden">

      {/* Section 1 */}
      <section className="mx-auto flex flex-col lg:grid grid-cols-[1.4fr_1fr] w-[95%] lg:w-[76%] gap-[3em] lg:gap-6 place-items-center max-sm:py-[2em] py-[3em] lg:py-[3.5em] xl:py-[3.5em]">
        {/* Column 1 */}
        <div className="space-y-6 md:space-y-4 h-fit my-auto text-center lg:text-left">
          <h2 className="text-3xl lg:text-[2em] xl:text-[2.55em] font-bold max-sm:leading-12 lg:leading-12 xl:leading-14">From Knowledge to Achievement</h2>
          <p className="mx-auto lg:mx-0 max-w-[86%] leading-8 xl:leading-7 max-sm:pb-6 max-sm:pt-2">We provide academic and professional writing support including plagiarism checks and thorough proofreading, alongside expert online tutoring for all levels worldwide— all designed to help you excel academically and beyond.</p>

          <div className="max-sm:flex-col-reverse max-sm:w-[75%] max-sm:mx-auto flex gap-4 md:mt-8">
            <a href="/quote" className="btn btn-outline">Get a quote</a>
            <a href="#services" className="btn btn-primary">Explore our services</a>
          </div>

          <div className="flex max-sm:gap-9 gap-6 max-sm:justify-center justify-between mt-8 max-sm:w-full max-w-[86%] mx-auto lg:ml-0 ml-auto md:ml-auto flex-wrap max-sm:text-[0.8em]">
            <p className="flex flex-col font-bold ">500+<span className="text-gray-600 font-semibold">Completed Projects</span></p>
            <p className="flex flex-col font-bold">98%<span className="text-gray-600 font-semibold">Client Satisfaction</span></p>
            <p className="flex flex-col font-bold">30+<span className="text-gray-600 font-semibold">Expert Writers</span></p>
          </div>
        </div>

        {/* Column 2 */}
        <div  className="grid w-full max-sm:place-items-center max-sm:-mt-4s mt-0">
          <div className="grid rounded-2xl overflow-hidden w-[60%] max-sm:w-[95%] lg:w-fit h-full lg:mr-0 ml-auto mx-auto ">
            <img src="/image 1.png" className="w-[100%] h-[100%] object-cover lg:mr-0 ml-auto"></img>
          </div>
        </div>
      </section>

   

      {/* Section 2 - About Us Section */}
      <section id="about" className="flex flex-col lg:grid grid-cols-2 w-[95%] lg:w-[76%] gap-[3em] lg:gap-1 xl:gap-12 mx-auto">
        <div className="grid">
          <img src="/image 2.png" className="mx-auto w-[55vw] max-sm:w-[95%]  lg:w-full" />
        </div>
        <div className="grid lg:mr-0 ml-auto my-auto mx-auto place-items max-sm:w-[95%] w-[55vw] lg:w-[90%] max-sm:mt-[1em]">
          <h3 className="max-sm:text-xl text-3xl mb-4 font-semibold max-sm:font-bold">About Us</h3>
          <p className="max-md:text-[0.95em] max-md:leading-7">{`At Masy Consulting, we believe learning never stops. We provide academic and professional
writing support — from essays and dissertations to proofreading and plagiarism checks — as
well as personalized online tutoring for learners worldwide, from kindergarten to A-levels.`}<br></br> <br></br> {`Our
mission is simple: to empower students and professionals with the guidance and expertise they
need to achieve lasting success.`}</p>
        </div>
      </section>


      {/* Section 3 */}
      <section className="flex flex-col  md:grid lg:grid-cols-3 md:grid-cols-2  gap-6 w-[95%] md:w-[76%] mx-auto mt-2">
        {aboutUs.map((item, index) => (
          <div key={index} className="bg-gray-100 space-y-1.5 px-7 py-8 rounded-xl">
            <img src={item.icon}></img>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="max-sm:text-[0.95em] max-sm:leading-7">{item.bodyText}</p>
          </div>
        ))}
      </section>





        {/* Section 4 */}
        {/* Our Services */}

      <section id="services" className="bg-[#ffd7b6b4]/50 gap-6 w-[95%] md:w-[76%] mx-auto mt-6 max-sm:mt-[3em] px-4 md:px-14 py-12 rounded-2xl">
        <h2 className="max-sm:text-2xl font-semibold text-3xl mx-auto w-fit mb-3">Our Services</h2>
        <p className="md:max-w-[63%] text-center mx-auto leading-7">
          We provide tailored academic support to help you excel — whether you need your ideas shaped into polished papers or want clarity on complex concepts. Our services are designed to meet you where you are and take you where you want to be.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-[3em]">
        {ourServices.map((item, index) => (
          <div key={index} className="bg-white space-y-1.5 px-7 max-md:px-6 pt-12 max-md:pt-[1.8em]  pb-13 max-md:pb-[2em] rounded-2xl">
            <img src={item.icon} className="max-h-[52px] max-w-[52px]"></img>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="max-md:text-[0.95em] max-md:leading-7">{item.bodyText}</p>
            <div className="space-y-6 text-gray-600 text-[0.95em] max-md:mt-[3em] mt-[2.5em] font-medium">
              {item.points.map((point, index) => (
                <p className="flex gap-1" key={index}><span><ChevronRight color="#FC9D33"/></span>{point}</p>
              ))}
            </div>

            <p className=" max-md:mt-[2.2em] mt-[3.5em]"><a href={item.link} className="btn btn-primary">Learn more</a></p>
          </div>
        ))}
        </div>
      </section>


      {/* Section 5 */}
      {/* Client Testimonial */}
      <section id="testimonials" className="bg-gray-100 space-y-3 pt-12 rounded-xl pb-14 max-sm:mt-[3em] max-sm:w-[95%] mx-auto w-full">
        <h2 className="max-sm:text-2xl font-semibold text-3xl mx-auto w-fit mb-3">Client Testimonial</h2>
        <p className="w-[80%] md:max-w-[63%] text-center mx-auto">Success stories from our satisfied students and clients</p>
        <TestimonialCarousel />
      </section>



      <section className="max-sm:mt-[4em] mt-[3em] space-y-6">
        <h3 className="max-sm:text-xl text-center font-semibold text-3xl">FAQs</h3>
        <div className="w-[95%] md:w-[60%] mx-auto space-y-5">
          {faqs.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-md text-lg p-6 max-sm:x-3">
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
            <p className="mt-4 text-gray-600 max-sm:text-[0.95em]">{item.answer}</p>
          )}
        </div>
      ))}
        </div>
      </section>


      <section className="w-[95%] md:w-[76%] overflow-hidden mx-auto max-md:pt-14 md:pt-14 pt-0 flex-flex-col lg:grid md:grid-cols-[1.08fr_1fr] lg:grid-cols-2 bg-[#0F6395]  text-white rounded-2xl max-sm:mt-[4em]">
        <div className="space-y-4 px-10 my-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Join the Community That Trusts Us</h2>
          <p className="text-gray-100 max-sm:text-[0.95em]">Need support? Send a message or get a quick quote today!</p>
          <div className="space-x-4 mt-[2em]">
            <a href="/quote" className="btn btn-outline border-white text-white">Get a quote</a>
            <a href="/contact" className="btn btn-primary bg-white text-[#0F6395] hover:text-white ">Send a message</a>
          </div>
        </div>

        <div className="w-full max-sm:h-[25em] h-[27em]">
          <img src="/image 13.png" className="w-full h-full object-cover rounded-r-xl mt-10 max-sm:mt-4" />
        </div>
      </section>

    </main>
    
    </>
  )
}
