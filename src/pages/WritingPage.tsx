import React from "react";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

const point2 = [
  {
    image: "/homework.svg",
    title: "100% Original & Plagiarism-Free",
    caption: "Every paper written from scratch, with report on request.",
  },
  {
    image: "/puzzle.svg",
    title: "Flexible Deadlines ",
    caption: "Urgent delivery available within 24–72 hours.",
  },
  {
    image: "/hand.svg",
    title: "Confidential & Secure",
    caption: "Your work and details kept private at all times.",
  },
  {
    image: "/pen.svg",
    title: "Free Consultation",
    caption: "Discuss your project needs before we begin.",
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


const ourServices = [
  {
    icon: "/writing-icon-1.svg",
    title: "Conference Papers and Presentations",
    bodyText:
      "We prepare concise papers and polished presentations for  conferences. Support includes structure, visuals, and guidance for impactful delivery",
    link: "/tutoring",
  },
  {
    icon: "/writing-icon-2.svg",
    title: "Academic Writing",
    bodyText:
      "We help students and researchers turn ideas into well-structured, original academic work—essays, papers, dissertations, or proposals—tailored to your needs and academic standards.",
    link: "/writing",
  },
  {
    icon: "/writing-icon-3.svg",
    title: "Journal Activities",
    bodyText:
      "We draft, edit, and format articles to meet publishing standards. Each piece is refined for clarity, coherence, and academic tone.",

    link: "/writing",
  },

  {
    icon: "/writing-icon-4.svg",
    title: "Essays, Term Papers & Coursework",
    bodyText:
      "We provide well-researched assignments tailored to course requirements and academic standards. Each piece is original, plagiarism-free, and properly formatted.",

    link: "/writing",
  },
  {
    icon: "/writing-icon-5.svg",
    title: "Theses & Dissertations ",
    bodyText:
      "We offer comprehensive support across all stages of thesis and dissertation writing. Assistance includes literature reviews, data analysis, and proper formatting.",

    link: "/writing",
  },
  {
    icon: "/writing-icon-6.svg",
    title: "Research Proposals & Reports",
    bodyText:
      "Our proposals and reports clearly outline research aims, methods, and findings. They are structured for academic precision and effective communication.",

    link: "/writing",
  },
];

const subjects = [
  "Business Management",
  "Accounting",
  "Law",
  "Computer Science",
  "Sciences",
  "Finance",
];

const pricingDetails = [
  {
    services: "Essays and Reports",
    priceBasis: "Per word",
    details: "Pricing depends on length and complexity",
  },
  {
    services: "Proposals, Thesis & Dissertations",
    priceBasis: "Per project",
    details: "Flexible milestones available",
  },
  {
    services: "Editing & Proofreading",
    priceBasis: "Per page",
    details: "Improve grammar, structure and clarity Improvements",
  },
  {
    services: "Journal ",
    priceBasis: "Per project",
    details: "Drafting, editing, and formatting for publication",
  },
];

export default function WritingPage() {
  return (
    <>
    <Helmet>
        <title>Masy Consulting - Professional Writing Services</title>
        <meta
          name="description"
          content="Masy Consulting provides expert writing services for academic, business, and content writing needs. Editing, proofreading, and plagiarism checks included."
        />
        <meta
          name="keywords"
          content="Masy Consulting, writing services, academic writing, business writing, content writing, editing, proofreading"
        />
        <meta property="og:title" content="Masy Consulting - Writing Services" />
        <meta
          property="og:description"
          content="Professional writing services for academic, business, and content needs. Quality, plagiarism-free work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masyconsulting.com/writing" />
        <meta property="og:image" content="https://masyconsulting.com/images/writing-og.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Masy Consulting - Writing Services",
            "provider": {
              "@type": "Organization",
              "name": "Masy Consulting",
              "url": "https://masyconsulting.com",
              "logo": "https://masyconsulting.com/logo.png"
            },
            "description": "Expert writing services for academic, business, and content writing needs including essays, research papers, dissertations, business documents, blogs, and proofreading.",
            "serviceType": [
              "Academic Writing",
              "Business Writing",
              "Content Writing",
              "Editing & Proofreading",
              "Research Papers & Reports",
              "Journal Articles & Publications",
              "Conference Papers & Presentations"
            ],
            "url": "https://masyconsulting.com/writing"
          })}
        </script>
      </Helmet>
    
    <main className="mb-[8em]">
      <section className="grid w-full h-[90vh] md:h-[41em] overflow-y-hidden relative max-md:mt-[-1em]">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/writing-page-image.jpg"
          ></img>
        </div>

        <div className="grid place-items-center w-full h-[105%] absolute top-auto bottom-auto left-auto right-auto bg-[#0827468c] mt-[-2em]">
          <div className="flex flex-col gap-3 text-white w-fit m-auto">
            <h1 className="max-w-[90%] max-sm:mt-[2em] max-sm:text-[2.2em] max-md:text-[2.5em] md:text-[3em] xl:text-[3.8em] text-white text-shadow-sm/5 m-auto text-center font-semibold font-public-sans leading-[1.4em] xl:max-w-[80%]">
              Academic & Content Writing Support You Can Trust
            </h1>

            <p className="font-poppins lg:text-[1.1em] max-sm:max-w-[85%] max-w-[75%] lg:max-w-[60%] text-center m-auto font-light">
              From business documents and web content to academic papers—we
              handle all your writing needs with quality, confidentiality and
              on-time delivery.
            </p>

            <div className="space-x-4 mt-[2.5em] max-md:mt-[2.5em] max-md:flex flex-col-reverse max-md:w-[80%] max-md:mx-auto gap-[1em] m-auto">
              <a
                href="/quote"
                className="btn btn-outline border-white text-white bg-none max-md:w-full z-[60] max-md:text-center"
              >
                Get a quote
              </a>
              <a
                href="/quote"
                className="btn btn-primary bg-white text-black hover:text-white max-md:w-full z-[60] max-md:text-center"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="grid place-items-center py-[4em] pt-[3em] bg-[#1a2547]">
        <div className="max-sm:w-full w-[90%] lg:w-[82%] mx-auto flex-wrap max-sm:text-[0.8em] md:grid md:grid-cols-2 max-md:grid max-md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-7 max-sm:gap-14">
          {strongPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 text-white text-[0.96em]"
            >
              <img src={item.icon} className=" max-w-[50px] max-md:max-w-[35px]"></img>
              <p className="text-2xl font-medium">{item.stats}</p>

              <p className="text-centertext-[1.1em] -mt-1">
                {item.point}
              </p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Section 2 - Why choose us section */}

        <section className="mt-[6em] max-sm:w-[95%] w-[76%] mx-auto">
           <h2 className="max-sm:text-lg font-semibold text-3xl w-fit max-md:mx-auto ">
              Why Choose Masy Consulting
            </h2>
            <p className="md:max-w-[63%] text-left mt-2.5 leading-7 mb-[2em] max-md:mx-auto w-fit">
              Personalized support, Academic Excellence.
            </p>
          <div className=" grid gap-5  md:gap-[2em] grid-cols-3 max-md:flex flex-col">
           
            

            <div  className=" bg-[#EDF4FC] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full">
              <img src={"/about-2.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                Global Support, Personal Touch
              </h3>
              <p className=" max-sm:leading-7">
                We serve students and families worldwide with 24/7 support, but every project gets individual attention from our expert teams
                
              </p>
            </div>

            <div  className="bg-[#E9F1EA] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full ">
              <img src={"/about-2.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                Proven Results Over Years
              </h3>
              <p className=" max-sm:leading-7">
                We serve students and families worldwide with 24/7 support, but every project gets individual attention from our expert teams
                
              </p>
            </div>

            <div  className="bg-[#FCF3ED] space-y-1.5 px-7 py-10 pt-12 rounded-xl w-full  ">
              <img src={"/about-2.png"}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                100% Confidential & Original
              </h3>
              <p className=" max-sm:leading-7">
                Your privacy matters. Every piece of work is written from scratch, plagiarism-checked and completely confidential
                
              </p>
            </div>

            
            </div>
       
          
          
        </section>


      <section className="grid place-items-center w-full h-max mt-[8em] max-md:mt-[4em]">
        <div className="flex flex-col-reverse max-md:gap-[21em] md:grid md:grid-cols-[1.6fr_1fr] lg:grid-cols-[1.2fr_1fr] gap-[1.5em] xl:gap-[1em] max-md:w-[95%] w-[80%] h-fit">
          <div className="space-y-3 my-auto h-fit mt-[6vw] max-md:mt-[2em]">
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold max-md:text-center">
              Quality You Can Rely On
            </h3>
            <p className="text-gray-600 font-medium max-md:text-center max-md:text-[0.95em] max-md:w-[90%] max-md:mx-auto">
              Work with a team that values originality, integrity, and timely
              delivery.
            </p>
            <div className="grid xl:grid-cols-2 max-md:gap-[3em] gap-[2.5em]  xl:gap-[3em] mt-[3em]">
              {[
                point2.map((point, index) => (
                  <div
                    key={index}
                    className="max-md:flex flex-col max-md:gap-5 justify-center grid grid-cols-[40px_auto] gap-2"
                  >
                    <div className="h-full grid place-items-center w-full">
                      <img src={point.image} className="my-auto mx-auto"></img>
                    </div>
                    <div>
                      <p className="font-bold font-public-sans max-md:text-center max-md:mb-1">
                        {point.title}
                      </p>
                      <p className="text-gray-600 font-medium text-[0.95em] max-md:text-center max-md:w-[90%] max-md:mx-auto">
                        {point.caption}
                      </p>
                    </div>
                  </div>
                )),
              ]}
            </div>
          </div>

          <div className="relative grid w-full h-full max-md:mt-[2em]">
            <div className="bg-[#ffb730] top-[20%]  bottom-auto left-[20%] max-md:left-0 right-[10%] rounded-3xl max-md:h-[19em] xl:h-[28vw] h-[23em] absolute"></div>
            <div className="absolute overflow-hidden shadow-xl  bg-[#D2DEE4] rounded-3xl right-0 left-[32%] top-[35%] bottom-0 xl:h-[25em] max-md:h-[19em] h-[20em] grid mr-0 ml-auto ">
              <img
                src="/quality-image.jpg"
                className="my-auto max-md:max-w-[100%] max-w-[104%] "
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D2DEE4] gap-6 w-[95%] xl:w-[80%] mx-auto max-sm:mt-[4em] mt-[13em] px-4 md:px-8 lg:px-14 py-12 rounded-2xl">
        <h2 className="max-md:text-lg max-md:text-center font-semibold text-3xl md:w-fit mb-3">
          Comprehensive Writing Services
        </h2>
        <p className="max-md:text-sm max-md:text-center  md:max-w-[63%]">
          From first drafts to final submissions, we support every stage of your
          academic journey.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[3em]">
          {ourServices.map((item, index) => (
            <div
              key={index}
              className="bg-white space-y-1.5 px-7 max-md:px-6 pt-6 xl:pt-12 max-md:pt-[1.8em] pb-7 xl:pb-13 max-md:pb-[0em] rounded-2xl"
            >
              <img src={item.icon} className="max-h-[52px] max-w-[52px]"></img>
              <h3 className="text-[1em] md:text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-[0.95em] max-md:text-[0.9em] max-md:leading-[2.1em]">{item.bodyText}</p>
              <div className="space-y-4 text-gray-600 text-[0.95em] mt-[2.5em] font-semibold"></div>
            </div>
          ))}
        </div>
        <div className="grid place-items-center w-[100%] mt-12 text-lg font-semibold">
          <p>We specialize on all Fields and not limited to</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="px-6 py-2 rounded-full border border-[#042B73] text-[#042B73] font-semibold text-[0.9em]"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[6em] w-[90%] lg:w-[80%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold max-md:text-center">How it works</h2>
        <p className="text-gray-600 font-medium md:max-w-[45%] mt-3.5 max-md:text-sm max-md:text-center max-md:w-[90%] max-md:mx-auto">
          A straightforward system designed to make your writing experience
          simple and stress-free.
        </p>

        {/** Group 1 */}

        <div className="flex flex-col md:grid grid-cols-[1.3fr_1fr] max-sm:gap-6 gap-4 mt-[2em] md:mt-[4em]">
          <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
            <div className="px-4 md:px-8 py-6 md:py-9">
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                1
              </div>
              <h3 className="font-semibold">Book a free conultation</h3>
              <p className="text-gray-600 font-medium lg:max-w-[60%] mt-3 max-md:text-[0.9em]">
                Start by scheduling a free 15–30 minute session to discuss your
                project needs and goals.
              </p>
            </div>
            <div className="p-2 mb-0 mt-auto">
              <img
                src="/pana.png"
                className="max-w-[45%] lg:max-w-[37%] mr-0 ml-auto"
              ></img>
            </div>
          </div>

          <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
            <div className="px-4 md:px-8 py-6 md:py-9">
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                2
              </div>
              <h3 className="font-semibold">Get a Transparent Quote</h3>
              <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3  max-md:text-[0.9em]">
                We provide a clear, upfront cost estimate for your work with no
                hidden fees.
              </p>
            </div>
            <div className="p-2 grid mb-0 mt-auto">
              <img
                src="/amico.png"
                className="max-w-[40%] lg:max-w-[40%] mr-0 ml-auto"
              ></img>
            </div>
          </div>
        </div>

        {/* Group 2 */}

        <div className="flex flex-col md:grid grid-cols-[1fr_1.3fr] max-sm:gap-6 gap-4 max-sm:mt-[1.5em] mt-[2em] md:mt-[1em]">
          <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
            <div className="px-4 md:px-8 py-6 md:py-9">
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                3
              </div>
              <h3 className="font-semibold">Writing & Support</h3>
              <p className="text-gray-600 font-medium lg:max-w-[80%] mt-3  max-md:text-[0.9em]">
                Our team carries out research, writing, editing, and formatting
                tailored to your requirements.
              </p>
            </div>
            <div className="p-2 mb-0 mt-auto">
              <img
                src="/rafiki.png"
                className="max-w-[47%] lg:max-w-[48%] mr-0 ml-auto"
              ></img>
            </div>
          </div>

          <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
            <div className="px-4 md:px-8 py-6 md:py-9">
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                4
              </div>
              <h3 className="font-semibold">Review & Revise</h3>
              <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3  max-md:text-[0.9em]">
                You review the draft and request free revisions within 7–14 days
                to ensure satisfaction.
              </p>
            </div>
            <div className="p-2 grid mb-0 mt-auto">
              <img
                src="/bro.png"
                className="max-w-[32%] lg:max-w-[31%] mr-0 ml-auto"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D2DEE4] gap-6 w-[95%] xl:w-[80%] mx-auto max-sm:mt-[4em] mt-[13em] px-2 md:px-8 lg:px-14 max-md:py-[2.2em] py-12 rounded-2xl">
        <h2 className="max-md:text-lg max-md:text-center font-semibold text-3xl max-md:w-full w-fit mb-3">
          Transparent & Flexible Pricing
        </h2>
        <p className="md:max-w-[63%] max-md:text-sm max-md:w-[90%] max-md:mx-auto max-md:text-center">
          Clear quotes and fair rates so you know exactly what to expect.
        </p>

        <div className="w-full h-fit md:bg-white rounded-xl max-sm:py-6 py-12 max-sm:px-1 px-6 mt-3">
          <div className="grid max-md:hidden grid-cols-[1fr_0.7fr_1.6fr]">
            <div className="text-center font-bold py-7 border-b-2 border-[#042B73] max-sm:text-[0.85em] break-words whitespace-normal">
              Services
            </div>
            <div className="text-center font-bold border-r-2 border-l-2 border-[#042B73] py-7 border-b-2 max-sm:text-[0.85em] break-words whitespace-normal">
              Pricing Basis
            </div>
            <div className="text-center font-bold py-7 border-[#042B73] border-b-2 max-sm:text-[0.85em] break-words whitespace-normal">
              Details
            </div>
          </div>
          <div className="grid max-md:hidden grid-cols-[1fr_0.7fr_1.6fr]">
            {pricingDetails.map((item, index) => (
              <>
                <div
                  key={index}
                  className={`max-sm:text-[0.85em] max-sm:px-4 pl-8 py-7 break-words whitespace-normal  ${
                    index === pricingDetails.length - 1
                      ? ""
                      : "border-b-2 border-[#042B73]"
                  }`}
                >
                  {item.services}
                </div>
                <div
                  className={`max-sm:text-[0.85em] text-center border-r-2 border-l-2 border-[#042B73] py-7 break-words whitespace-normal  ${
                    index === pricingDetails.length - 1
                      ? ""
                      : "border-b-2 border-gray-500"
                  }`}
                >
                  {item.priceBasis}
                </div>
                <div
                  className={`max-sm:text-[0.85em] py-7 border-[#042B73] max-sm:px-4 px-8 break-words whitespace-normal ${
                    index === pricingDetails.length - 1
                      ? ""
                      : "border-b-2 border-[#042B73]"
                  }`}
                >
                  {item.details}
                </div>
              </>
            ))}


            
          </div>

          <div className="hidden max-md:flex flex-col gap-4">
            {pricingDetails.map((item, index) => (
              <>
                <div key={index} className="bg-white px-4 py-6 rounded-xl">
                  <p className="font-semibold text-[0.95em]">{item.services}</p>
                  <p className="text-sm mb-4 text-gray-600 font-medium mt-1">{item.details}</p>
                  <p className="text-sm flex"><ChevronRight size={18} className="my-auto" /> Pricing basis: {item.priceBasis}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="max-md:bg-[#0F6395] max-md:rounded-2xl relative w-[95%] md:w-[80%] mx-auto grid mt-[4em] md:mt-[9em]">
        <div className="md:bg-[#0F6395] md:rounded-2xl h-fit max-md:space-y-2 space-y-4 px-4 md:px-10 py-[3em] md:mt-[5em]">
          <h2 className="text-xl md:text-3xl text-white font-semibold">Ready to Begin?</h2>
          <p className="text-gray-100 md:w-[60%] lg:w-[95%] max-sm:text-sm">
            Take the next step toward achieving your academic goals today.
          </p>
          <div className="space-x-4 mt-[3em]">
            <a href="/quote" className="btn btn-primary bg-white text-black hover:text-white ">
              Book Your Free Consultation Now
            </a>
          </div>
        </div>

        <img
          src="/writing-woman.png"
          className="w-[42%] md:w-[30%] lg:w-[23%] md:absolute md:right-[4em] left-auto top-auto bottom-0  rounded-r-xl  md:mr-0 ml-auto mr-auto mb-0 mt-auto"
        />
      </section>
    </main>
    </>
  );
}
