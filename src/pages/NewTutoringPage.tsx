import { caption } from "framer-motion/client";
import React, { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";


import TestimonialCarousel from "@/components/TestimonialCarousel";
import StaffSlider from "@/components/StaffSlider"




const strongPoints = [
  {
    point: "Qualified Tutors",
    icon: "/qualified-tutors.svg",
  },
  {
    point: "Flexible Scheduling",
    icon: "/flexible-scheduling.svg",
  },
  {
    point: "98% Parent Satisfaction",
    icon: "/parent-satisfaction.svg",
  },
  {
    point: "Serving Families Worldwide",
    icon: "/serving-families.svg",
  },
];

const faqs = [
  {
    question: "How long are the tutoring sessions?",
    answer:
      "We offer a range of academic support services including tutoring, writing assistance, proofreading, and exam preparation.",
  },
  {
    question: "What if my child doesn't connect with the tutor?",
    answer:
      "Our team consists of qualified professionals with expertise in various academic fields. We follow strict quality control measures to ensure the highest standards.",
  },
  {
    question: "Do you offer sibling discounts?",
    answer:
      "Turnaround times vary based on the service and complexity of the request. We strive to accommodate urgent needs whenever possible.",
  },
  {
    question: "What technology do we need?",
    answer:
      "We prioritize your privacy and ensure all interactions and data are kept secure and confidential.",
  },
  {
    question: "Can we schedule sessions on weekends?",
    answer:
      "We prioritize your privacy and ensure all interactions and data are kept secure and confidential.",
  },
  {
    question: "Do you work with international families?",
    answer:
      "We prioritize your privacy and ensure all interactions and data are kept secure and confidential.",
  },
  {
    question: "How does payment work?",
    answer:
      "We prioritize your privacy and ensure all interactions and data are kept secure and confidential.",
  },
];

const supportPoints = [
  {
    icon: "/homework-1.svg",
    title: "Homework Help",
    caption:
      "Stuck on assignments? Our tutors provide patient, step-by-step guidance so your child understands—not just copies answers.",
  },
  {
    icon: "/concept.svg",
    title: "Concept Mastery",
    caption:
      "Struggling with fractions or photosynthesis? We break down tough topics into simple, relatable examples.",
  },
  {
    icon: "/skill.svg",
    title: "Building Study Skills",
    caption:
      "We don't just teach subjects—we teach your child HOW to learn, take notes, and manage their time effectively.",
  },
  {
    icon: "/exam.svg",
    title: "Exam Preparation",
    caption:
      "Nervous about upcoming tests? We teach proven study strategies and practice techniques to boost confidence and performance",
  },
];

const point2 = [
  {
    image: "/check-icon.svg",
    title: "Patient, Qualified Tutors",
    caption:
      "Our tutors don't just know the subject—they know how to teach it in a way children understand and enjoy.",
  },
  {
    image: "/check-icon.svg",
    title: "Flexible & Convenient",
    caption:
      "Online sessions that fit your family's schedule—evenings, weekends, or after school. No commute needed.",
  },
  {
    image: "/check-icon.svg",
    title: "Personalized Learning Plans",
    caption:
      "Every child learns differently. We adapt our teaching style to match your child's pace and learning style.",
  },
];

const tutoringPlans = [
  {
    image: "/check-icon.svg",
    title: "✓ You choose the hours ",
    caption: "1 hour/week, 3 hours/week, or more",
  },
  {
    image: "/check-icon.svg",
    title: "✓ You choose the days",
    caption: "Weekdays, weekends, or a mix",
  },
  {
    image: "/check-icon.svg",
    title: "✓ Flexible payment",
    caption: "Pay monthly, bi-weekly, or your preferred schedule",
  },
];

const learningStages = [
  {
    level: "Primary School",
    caption: "(Kindergarten - Grade 6)",
    subjects: [
      "English & Reading",
      "Mathematics",
      "Basic Science",
      "Homework Suport",
    ],
  },
  {
    level: "Secondary school",
    caption: "(Grade 7-11, GCSE, SATs, A-Levels)",
    subjects: [
      "English Language & Literature",
      "Mathematics & Statistics",
      "Sciences (Biology, Chemistry, Physics)",
      "Business & Economics",
      "Coding & Graphic Design",
    ],
  },
];

export default function NewTutoringPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <Helmet>
        <title>MASY Consulting - Personalized Tutoring Services</title>
        <meta
          name="description"
          content="Masy Consulting offers personalized tutoring for children and high school students. Build confidence, improve grades, and achieve academic success."
        />
        <meta
          name="keywords"
          content="Masy Consulting, tutoring, private tutor, academic support, primary school, secondary school, A-levels, exam preparation"
        />
        <meta property="og:title" content="Masy Consulting - Tutoring Services" />
        <meta
          property="og:description"
          content="Personalized one-on-one tutoring for students from primary to high school. Qualified, patient tutors for academic success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masyconsulting.com/tutoring" />
        <meta property="og:image" content="https://masyconsulting.com/images/tutoring-og.jpg" />

         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Masy Consulting - Tutoring Services",
            "provider": {
              "@type": "Organization",
              "name": "Masy Consulting",
              "url": "https://masyconsulting.com",
              "logo": "https://masyconsulting.com/logo.png"
            },
            "description": "One-on-one tutoring for students from primary school to A-levels. Customized sessions, homework help, exam preparation, and confidence building.",
            "serviceType": [
              "Primary School Tutoring",
              "Secondary School Tutoring",
              "A-Levels/GCSE Tutoring",
              "SATs Tutoring",
              "Exam Preparation",
              "Homework Help"
            ],
            "url": "https://masyconsulting.com/tutoring"
          })}
        </script>
      </Helmet>
    <main className=" min-h-screen overflow-x-hidden mt-[-0.1em] max-md:mt-[-1em]">
      <section className="grid w-full h-[90vh] md:h-[41em] overflow-y-hidden relative ">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/tutoring-page-image.png"
          ></img>
        </div>

        <div className="grid place-items-center w-full h-[105%] absolute top-auto bottom-auto left-auto right-auto bg-[#6e3b006e] mt-[-2em]">
          <div className="flex flex-col gap-3 text-white w-fit m-auto">
            <h1 className="max-w-[90%] max-sm:mt-[2em] max-sm:text-[2.2em] max-md:text-[2.5em] md:text-[3em] xl:text-[3.8em] text-white text-shadow-sm/5 m-auto text-center font-semibold font-public-sans leading-[1.4em]">
              Online Tutoring That Fits Your Child's Needs
            </h1>

            <p className="font-poppins lg:text-[1.1em] max-sm:max-w-[85%] max-w-[75%] lg:max-w-[60%] text-center m-auto font-light">
              Our tutors guide, explain and support you every step of the way, so learning feels easier and achievable
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
      <section className="grid place-items-center py-[4em] pt-[3em] bg-[#F17720]">
        <div className="max-sm:w-full w-[90%] lg:w-[82%] mx-auto flex-wrap max-sm:text-[0.8em] md:grid md:grid-cols-2 max-md:grid max-md:grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-7 max-sm:gap-14">
          {strongPoints.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white text-[0.96em]"
            >
              <img src={item.icon} className="mb-2 max-w-[50px]"></img>

              <p className="text-center mt-1 font-medium text-[1.1em]">
                {item.point}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid place-items-center w-full h-max  py-12 bg-[#d6e9ff31] max-md:mb-[2em] mb-[5em]">
        <div className="flex flex-col-reverse max-md:gap-[2em] lg:grid md:grid-cols-[1.6fr_1fr] lg:grid-cols-2 gap-[2em] xl:gap-[2.5em] max-sm:w-[95%] w-[80%] h-fit">
          <div className="space-y-3 my-auto h-fit">
            <h3 className="text-lg max-md:text-center md:text-2xl lg:text-3xl xl:text-4xl font-medium max-md:font-semibold max-md:text-[1em]">
              Why Parents Trust Masy Tutoring
            </h3>

            <div className="grid grid-cols-1 max-md:gap-[3.2em] gap-[2em]  xl:gap-[3em] mt-[2.5em]">
              {[
                point2.map((point, index) => (
                  <div
                    key={index}
                    className=" max-md:flex flex-col max-md:gap-5 justify-center grid grid-cols-[40px_auto] gap-4"
                  >
                    <div className="h-full grid place-items-center w-full">
                      <img src={point.image} className="my-auto"></img>
                    </div>
                    <div>
                      <p className="font-bold font-public-sans mb-1 max-md:text-center max-md:mb-1">
                        {point.title}
                      </p>
                      <p className="text-gray-600 font-medium max-md:text-center max-md:w-[90%] max-md:mx-auto">
                        {point.caption}
                      </p>
                    </div>
                  </div>
                )),
              ]}
            </div>
          </div>

          <div className="grid w-full h-full max-md:h-fit max-md:mt-[2em] p-4 py-5">
            <div className=" m-auto lg:mr-0 grid items-center w-[70%] p-2 h-full my-auto bg-[#FFA630] rounded-[1em]">
              <img
                src="/tutoring-image.png"
                className="w-[84%] h-[89%] object-cover m-auto rounded-xl"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="grid place-items-center py-12 mb-[3em]">
        <h2 className="text-lg max-md:text-center md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-[1.5em] max-md:font-semibold max-md:text-[1em]">
          How we support your child
        </h2>
        <div className="max-sm:w-[95%] md:w-[80%] xl:w-[76%] mx-auto grid gap-5  md:gap-[2em] grid-cols-2 max-md:flex flex-col">
          {supportPoints.map((item, index) => (
            <div
              key={index}
              className="bg-white space-y-1.5 px-7 py-10 rounded-xl w-full max-md:shadow-md/5 shadow-xl/5 border border-gray-200"
            >
              <img src={item.icon}></img>
              <h3 className="max-md:text-lg text-xl font-semibold mt-5 mb-2">
                {item.title}
              </h3>
              <p className=" max-sm:leading-7">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className=" w-full h-fit mx-auto py-[5em] bg-[#fb860023]">
        <div>
          <h2 className="text-lg text-center mx-auto md:text-2xl lg:text-4xl font-medium w-[90%] md:leading-14 max-sm:w-[80%] ">
            Subjects We Cover—From Primary to A-Levels
          </h2>
        </div>

        <div className="max-md:flex justify-center flex-wrap md:grid grid-cols-2 gap-8 max-md:mt-[2em] mt-[4em] w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
          {learningStages.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 w-full lg:w-[100%] bg-white py-[2.5em] px-[2em] lg:px-[4em] lg:py-[5em]"
            >
              <p className="font-semibold md:text-lg">{item.level}</p>
              <p className="mt-2 mb-[2em] font-semibold text-gray-700">
                {item.caption}
              </p>
              <div className="space-y-5">
                {item.subjects.map((classItem, index) => (
                  <>
                    <div className="font-medium ">
                      <span className="text-2xl">•&nbsp;</span> {classItem}
                    </div>
                    <hr className="border border-b-0 bg-none border-t-1 border-gray-300"></hr>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
          <h3 className="font-semibold text-lg max-md:mt-[2em] mt-[3em]">
            Not sure if we cover your child's subject?{" "}
          </h3>
          <div className="flex-col lg:flex-row flex mt-[3em] gap-[1.4em] md:gap-[2em] lg:gap-[4em]">
            <a href="/contact" className="btn btn-primary text-center">
              Contact us
            </a>
            <p className="my-auto font-semibold max-sm:text-center">
              we'll find the right tutor.
            </p>
          </div>
        </div>
      </section>

      <section
        className="pt-[5.5em] pb-[5em]"
        style={{
          backgroundImage: `url("/background.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[95%] md:w-[80%] xl:w-[75%] mx-auto">
          <h2 className="text-lg text-center max-sm:mx-auto md:text-2xl lg:text-4xl font-medium md:leading-14  max-md:font-semibold max-md:text-[1em]">
            Qualified Tutors Who Care About Your Child's Success
          </h2>
          <p className="text-gray-600 font-medium w-[90%] md:max-w-[70%] mt-3.5 max-md:mt-6 text-center mx-auto">
            Our tutors are carefully selected for both their subject expertise
            and their ability to connect with students. They're patient,
            encouraging, and committed to making learning enjoyable.
          </p>

          <div className="grid lg:grid-cols-2 gap-[1.5em] mt-[6em]">
            <div className="lg:w-[95%] xl:w-[85%] my-auto mr-0">
              <h2 className="text-[1em] md:text-xl  font-semibold text-black text-center flex max-md:gap-1.5 gap-1.5 justify-center mx-auto w-fit flex-wrap">
                What <span>makes </span>
                <span>our</span>
                <span>tutors </span>{" "}
                <span className="flex flex-col">
                  different!
                  <img
                    className="max-w0[1em] max-h-[0.4em] object-contain"
                    src="/Stroke.svg"
                  />
                </span>
              </h2>
              <div className="flex flex-col gap-4 mt-[1.7em] text-center font-semibold">
                <div className="px-4 py-6 xl:px-8 xl:py-8 border border-gray-300">
                  ✓ Qualified educators with teaching experience
                </div>
                <div className="px-4 py-6 xl:px-8 xl:py-8 border border-gray-300">
                  ✓ Trained in online teaching methods
                </div>
                <div className="px-4 py-6 xl:px-8 xl:py-8 border border-gray-300">
                  ✓ Patient and encouraging teaching style
                </div>
                <div className="px-4 py-6 xl:px-8 xl:py-8 border border-gray-300">
                  ✓ Passionate about student success
                </div>
              </div>
            </div>

            <div
              className="h-fit my-auto  rounded-2xl border-2 border-[#fb860054] max-md:p-[5%] p-[12%]"
              style={{
                backgroundImage: `url("/card-background.png")`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <StaffSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto pt-[4.5em] pb-[7em] bg-[#d6e9ff1c] ">
        <div className="w-[95%] md:w-[75%] mx-auto">
          <h2 className="text-lg max-md:text-center max-sm:mx-auto md:text-4xl font-medium w-[90%] md:leading-14 md:max-w-[65%] max-md:font-semibold max-md:text-[1.1em]">
            Getting Started is Easy
          </h2>
          <p className="text-gray-600 font-medium w-[90%] md:max-w-[45%] mt-3.5 max-sm:text-sm max-sm:text-center max-sm:mx-auto">
            A straightforward process that gets you from sign-up to success
            without the stress.
          </p>

          {/** Group 1 */}

          <div className="flex flex-col md:grid grid-cols-[1.3fr_1fr] max-sm:gap-6 gap-4 mt-[2em] md:mt-[4em]">
            <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
              <div className="px-4 md:px-8 py-6 md:py-9">
                <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#1E3A5F] text-white mb-2 max-md:mb-[1.2em]">
                  1
                </div>
                <h3 className="font-semibold">Book a Free Consultation</h3>
                <p className="text-gray-600 font-medium lg:max-w-[60%] mt-3">
                  Tell us about your child's needs and goals. No commitment
                  required.
                </p>
              </div>
              <div className="p-2 mb-0 mt-auto">
                <img
                  src="/rafiki-brown.png"
                  className="max-sm:max-w-[31%] max-w-[45%]  lg:max-w-[33%] mr-0 ml-auto"
                ></img>
              </div>
            </div>

            <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
              <div className="px-4 md:px-8 py-6 md:py-9">
                <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#1E3A5F] text-white mb-2 max-md:mb-[1.2em]">
                  2
                </div>
                <h3 className="font-semibold">Meet Your Tutor</h3>
                <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3">
                  We match your child with the perfect tutor and arrange an
                  introductory session.
                </p>
              </div>
              <div className="p-2 grid mb-0 mt-auto">
                <img
                  src="/rafiki-brown-2.png"
                  className="max-w-[43%] md:max-w-[64%] lg:max-w-[49%] mr-0 ml-auto"
                ></img>
              </div>
            </div>
          </div>

          {/* Group 2 */}

          <div className="flex flex-col md:grid grid-cols-[1fr_1.3fr] max-sm:gap-6 gap-4 max-sm:mt-[1.5em] mt-[2em] md:mt-[1em]">
            <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
              <div className="px-4 md:px-8 py-6 md:py-9">
                <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#1E3A5F] text-white mb-2 max-md:mb-[1.2em]">
                  3
                </div>
                <h3 className="font-semibold">Start Learning</h3>
                <p className="text-gray-600 font-medium lg:max-w-[80%] mt-3 ">
                  Begin regular sessions at times that work for your family.
                </p>
              </div>
              <div className="p-2 mb-0 mt-auto">
                <img
                  src="/amico-brown.png"
                  className="max-sm:max-w-[35%] max-w-[47%] lg:max-w-[38%] mr-0 ml-auto"
                ></img>
              </div>
            </div>

            <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
              <div className="px-4 md:px-8 py-6 md:py-9">
                <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#1E3A5F] text-white mb-2 max-md:mb-[1.2em]">
                  4
                </div>
                <h3 className="font-semibold">Track Progress</h3>
                <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3 ">
                  See improvements in confidence, understanding, and grades.
                </p>
              </div>
              <div className="p-2 grid mb-0 mt-auto">
                <img
                  src="/amico-brown-2.png"
                  className="max-w-[32%] lg:max-w-[28%] mr-0 ml-auto"
                ></img>
              </div>
            </div>
          </div>

          <div className="mt-[5em] mx-auto w-fit">
            <a href="/contact" className="btn btn-primary ">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="space-y-3 pt-[5em] rounded-xl pb-[7em] max-sm:mt-[3em] max-sm:w-[95%] mx-auto w-full"
      >
        <h2 className="max-sm:text-2xl font-semibold text-3xl mx-auto w-fit mb-4">
          Parents Testimonial
        </h2>
        <p className="w-[80%] md:max-w-[63%] text-center mx-auto md:text-lg max-md:mb-[-3.2em]">
          What Parents Are Saying
        </p>
        <TestimonialCarousel />
      </section>

      <section className="max-sm:mt-[-2em] grid place-items-center w-full h-max max-md:py-[4em] pt-[8em] pb-[6em] bg-[#FFE7CC] max-md:mb-[2em] mb-[5em]">
        <div className="flex max-md:flex-col md:flex-col max-md:gap-[2em] lg:flex-row gap-[2em] xl:gap-[2.5em] max-sm:w-[90%] w-[80%] h-fit">
          <div className="space-y-3 my-auto h-fit w-full lg:w-[40vw]">
            <h3 className="text-lg max-md:text-center md:text-2xl lg:text-3xl xl:text-3xl font-medium max-md:font-semibold max-md:text-[1em] leading-[1.5em]">
              Tutoring Plans That Work for Your Schedule
            </h3>

            <div className="grid w-full grid-cols-1 max-md:gap-[3.2em] gap-[2em]  xl:gap-[3em] mt-[2.5em]">
              <p className="">
                We charge per hour, and you decide how many hours per week and
                which days work best for your family. Whether it's 1 hour a week
                or 5 hours—we'll create a plan that fits your needs and budget.
              </p>
            </div>
            <div className="max-md:mt-[2em] max-md:mb-[-1.2em] mt-[4em] grid w-fit max-md:w-[100%]">
              <a
                href="/contact"
                className="btn btn-primary text-center bg-[#1a1a1a]"
              >
                Book Free Consultation
              </a>
            </div>
          </div>

          <div className="grid gap-7 w-full lg:w-[40vw] mr-0 ml-auto h-full max-md:h-fit max-md:mt-[2em]">
            {[
              tutoringPlans.map((point, index) => (
                <div
                  key={index}
                  className="border border-gray-300 px-7 py-6 max-md:flex flex-col max-md:gap-5 grid  gap-4"
                >
                  <div>
                    <p className="font-bold font-public-sans mb-1 max-md:text-center max-md:mb-1">
                      {point.title}
                    </p>
                    <p className="text-gray-600 font-medium max-md:text-center max-md:w-[90%] max-md:mx-auto">
                      {point.caption}
                    </p>
                  </div>
                </div>
              )),
            ]}
          </div>
        </div>
        <p className="max-sm:w-[90%] w-[80%] mt-[4.5em] opacity-70">
          During your free consultation, we'll discuss your child's needs,
          create a custom schedule, and provide transparent pricing with no
          hidden fees.
        </p>
      </section>

      <section
        className="pt-[2em] pb-[3em] md:pt-[5em] md:pb-[7em] space-y-6"
        style={{
          backgroundImage: `url("/Frame 867.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="max-sm:text-xl text-center font-semibold text-3xl">
          FAQs
        </h3>
        <div className="w-[95%] md:w-[60%] mx-auto space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-md text-lg p-6 max-sm:x-3"
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
    </main>
    </>
  );
}
