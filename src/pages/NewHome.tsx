import TestimonialCarousel from "@/components/TestimonialCarousel"


const aboutUs = [
  {
    icon: "/about-1.png",
    title: "Dedicated Team",
    bodyText: "Our team of qualified professionals from various fields is here to guide you with personalized academic support, every step of the way."
  },
  {
    icon: "/about-2.png",
    title: "24/7 Support",
    bodyText: "Our team is available 24/7 to ensure you get timely support whenever you need it. Because your success doesn’t wait and neither do we."
  },
  {
    icon: "/about-3.png",
    title: "Custom Solutions",
    bodyText: "From writing help to tutoring, every service we offer is thoughtfully tailored to your needs."
  },
]

const ourServices = [
  {
    icon: "/about-4.png",
    title: "Formatting & Citation Support",
    bodyText: "Whether it’s APA, MLA, Chicago, or another style, we make sure your work looks professional and meets every guideline."
  },
  {
    icon: "/about-5.png",
    title: "Exam Preparation",
    bodyText: "We’ll help you study smarter, not harder with targeted revision plans, practice questions, and confidence-building strategies."
  },
  {
    icon: "/about-6.png",
    title: "One-on-One Subject Coaching",
    bodyText: "Get personalized lessons in your subject area, tailored to your pace and learning style."
  },
  {
    icon: "/about-7.png",
    title: "Essay & Research Paper Assistance",
    bodyText: "Turn your ideas into well-structured, compelling papers. We guide you through planning, drafting, and refining so your work shines academically and creatively."
  },
  {
    icon: "/about-8.png",
    title: "Proofreading & Editing",
    bodyText: "From grammar to flow, we ensure your writing is clear, concise, and impactful  making every sentence count."
  },
  {
    icon: "/about-9.png",
    title: "Concept Clarification",
    bodyText: "Struggling with a topic? We break it down into simple, understandable steps and give you strategies to learn more effectively."
  },
]

export default function NewHome() {
  return (
    <main className="w-full mx-auto space-y-16 max-sm:space-y-8 pb-[12em] overflow-x-hidden">

      {/* Section 1 */}
      <section className="mx-auto flex flex-col lg:grid grid-cols-2 w-[95%] lg:w-[76%] gap-[3em] lg:gap-6 place-items-center max-sm:py-[2em] py-[3em] lg:py-[2em]">
        {/* Column 1 */}
        <div className="space-y-6 md:space-y-4 h-fit my-auto text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-12 xl:leading-16">Powering Knowledge, Driving Success</h2>
          <p className="mx-auto lg:mx-0 max-w-[86%]">We offer expert tutoring, writing support, and editing to help you excel academically and professionally.</p>

          <div className="space-x-4 md:mt-8">
            <button className="btn btn-outline">Get a quote</button>
            <button className="btn btn-primary">Explore our services</button>
          </div>

          <div className="flex max-sm:gap-9 gap-6 max-sm:justify-center justify-between mt-8 max-sm:w-full max-w-[86%] mx-auto lg:ml-0 ml-auto md:ml-auto flex-wrap max-sm:text-[0.8em]">
            <p className="flex flex-col font-bold ">500+<span className="text-gray-600 font-semibold">Completed Projects</span></p>
            <p className="flex flex-col font-bold">98%<span className="text-gray-600 font-semibold">Client Satisfaction</span></p>
            <p className="flex flex-col font-bold">30+<span className="text-gray-600 font-semibold">Expert Writers</span></p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid w-full max-sm:place-items-center max-sm:-mt-4s mt-0">
          <div className="grid rounded-2xl overflow-hidden w-[60%] max-sm:w-[95%] lg:w-fit h-full lg:mr-0 ml-auto mx-auto ">
            <img src="/image 1.png" className="w-[100%] h-[100%] object-cover lg:mr-0 ml-auto"></img>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us Section */}
      <section className="flex flex-col lg:grid grid-cols-2 w-[95%] lg:w-[76%] gap-[3em] lg:gap-1 xl:gap-12 mx-auto">
        <div className="grid">
          <img src="/image 2.png" className="mx-auto w-[55vw] max-sm:w-[95%]  lg:w-full" />
        </div>
        <div className="grid lg:mr-0 ml-auto my-auto mx-auto place-items max-sm:w-[95%] w-[55vw] lg:w-[90%] max-sm:mt-[1em]">
          <h3 className="max-sm:text-xl text-3xl mb-4 font-semibold max-sm:font-bold">About Us</h3>
          <p>{`At MASY consulting, we help students like you excel academically and confidently through expertly crafted writing and tutoring services.`}<br></br> <br></br> {`Whether you’re writing a thesis, struggling with an assignment, or preparing for a big exam — we’ve got your back with professional guidance, clear explanations, and reliable support.`}</p>
        </div>
      </section>


      {/* Section 3 */}
      <section className="flex flex-col  md:grid lg:grid-cols-3 md:grid-cols-2  gap-6 w-[95%] md:w-[76%] mx-auto mt-2">
        {aboutUs.map((item, index) => (
          <div key={index} className="bg-gray-100 space-y-1.5 px-7 py-8 rounded-xl">
            <img src={item.icon}></img>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p>{item.bodyText}</p>
          </div>
        ))}
      </section>





        {/* Section 4 */}
        {/* Our Services */}

      <section className="bg-[#ffd7b6b4]/50 gap-6 w-[95%] md:w-[76%] mx-auto mt-6 max-sm:mt-[3em] px-4 md:px-14 py-12 rounded-2xl">
        <h2 className="max-sm:text-xl font-semibold text-3xl mx-auto w-fit mb-3">Our Services</h2>
        <p className="md:max-w-[63%] text-center mx-auto">
          We provide tailored academic support to help you excel — whether you need your ideas shaped into polished papers or want clarity on complex concepts. Our services are designed to meet you where you are and take you where you want to be.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3em]">
        {ourServices.map((item, index) => (
          <div key={index} className="bg-white space-y-1.5 px-7 pt-10 pb-14 rounded-2xl">
            <img src={item.icon}></img>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p>{item.bodyText}</p>
          </div>
        ))}
        </div>
      </section>


      {/* Section 5 */}
      {/* Client Testimonial */}
      <section className="bg-gray-100 space-y-3 pt-12 rounded-xl pb-14 max-sm:mt-[3em] max-sm:w-[95%] mx-auto w-full">
        <h2 className="max-sm:text-xl font-semibold text-3xl mx-auto w-fit mb-3">Client Testimonial</h2>
        <p className="w-[80%] md:max-w-[63%] text-center mx-auto">Success stories from our satisfied students and clients</p>
        <TestimonialCarousel />
      </section>

    </main>
  )
}
