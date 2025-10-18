import { title } from 'process'
import React from 'react'

const keyPoints = [
  {
    image: "/clock.svg",
    title: "Flexible Scheduling",
    bodyText: "Learn or get help when it suits you"
  },
  {
    image: "/hat.svg",
    title: "Academic Expertise",
    bodyText: "Qualified & Dedicated tutors across multiple disciplines."
  },
  {
    image: "/tick.svg",
    title: "Proven Results",
    bodyText: "Track record of student success and client satisfaction."
  },
]


const point2 = [
  {
    image: "/homework.svg",
    title: "Homework Assistance",
    caption: "Step-by-step guidance to get it right."
  },
  {
    image: "/puzzle.svg",
    title: "Concept Clarification",
    caption: "Break down tough topics into easy steps."
  },
  {
    image: "/hand.svg",
    title: "One-on-One Sessions",
    caption: "Individual attention for maximum results"
  },
  {
    image: "/pen.svg",
    title: "Exam Preparation",
    caption: "Tailored strategies to ace your tests."
  },
]


const learningStages = [
  {
    level: "Early years/Primary school",
    class: ["Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"]
  },
  {
    level: "Secondary school",
    class: ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "GSCE", "SATs"]
  },
  {
    level: "Courses",
    class: ["English", "Mathematics & Statistics", "Business & Economics", "Biology", "Chemistry", "Physics", "Coding & Graphics Design"]
  }
]

export default function TutoringPage() {
  return (
    <main className='mb-[8em] space-y-[6em] max-sm:space-y-[2em]'>
      <section>
        <div className='items-center w-full text-center my-8 mt-[5em] space-y-3 max-md:space-y-7'>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-12 xl:leading-16 max-w-[85%] mx-auto font-public-sans">Online One-to-One Tutoring</h2>
          <p className="mx-auto font-medium text-gray-600 w-[80%] max-md:text-[0.95em]">Personalized sessions tailored to each learner’s needs, from kindergarten to A-levels.</p>
          <div className="space-x-4 mt-[2.5em] max-md:mt-[2.5em] max-md:flex flex-col-reverse max-md:w-[80%] max-md:mx-auto gap-[1em]">
            <button className="btn btn-outline max-md:w-full z-[60]">Learn more</button>
            <a href="/quote" className="btn btn-primary max-md:w-full z-[60]">Book a Session</a>
          </div>
        </div>

        <div className='grid relative h-[max-content] max-sm:mt-[13em] min-[530px]:mt-[18em] mt-[15em] lg:mt-[25em] xl:mt-[34em]'>
          <div className='absolute   bottom-0 top-auto right-0 left-0'>
            <div className='bg-[#F17720] w-[90%] rounded-t-2xl h-[22vw] md:h-[18vw] mx-auto'></div>
          </div>
          <img className='absolute mx-auto max-sm:max-w-[73%] md:max-w-[48vw] max-md:max-w-[67%] bottom-0 top-auto left-0 right-0' src='/image 35.png'></img>
        </div>

        <div className='flex flex-wrap justify-between w-[75%] gap-5 max-md:gap-[2.5em] max-md:mt-[3em] mt-[4.5em] mx-auto'>
          

          {keyPoints.map((point, index) => (
              <div key={index} className='space-y-3 mt-4 items-center text-center max-w-[15em] max-md:max-w-[90%] mx-auto'>
                <img src={point.image} className='mx-auto max-sm:max-w-[2.1em]' ></img>
                  <p className='font-bold text-[0.95em]'>{point.title}</p>
                  <p className='font-medium text-gray-600 text-sm'>{point.bodyText}</p>
              </div>
          ))}
        </div>
        
      </section>


      <section className='grid place-items-center w-full h-max mt-[8em] max-md:mt-[0em] max-sm:pb-7 pb-[10em]'>
        <div className='flex flex-col-reverse max-md:gap-[21em] md:grid md:grid-cols-[1.6fr_1fr] lg:grid-cols-2 gap-[1.5em] xl:gap-[2.5em] max-sm:w-[95%] w-[80%] h-fit'>



          <div className='space-y-3 my-auto h-fit mt-[6vw] max-sm:mt-[2.5em]'>
            <h3 className='text-lg max-md:text-center md:text-2xl lg:text-3xl xl:text-4xl font-semibold'>Tutoring That Works for You</h3>
            <p className='text-gray-600 font-medium max-md:text-sm max-md:text-center'>Personalized support and strategies to help you master concepts, tackle exams, and study smarter.</p>
            <div className='grid xl:grid-cols-2 gap-[2em]  xl:gap-[3em] mt-[2.5em]'>
              {[point2.map((point, index) => (
                <div key={index} className=' max-md:flex flex-col max-md:gap-5 justify-center grid grid-cols-[40px_auto] gap-2'>
                    <div className='h-full grid place-items-center w-full'>
                      <img src={point.image} className='my-auto'></img>
                    </div>
                    <div>
                      <p className='font-bold font-public-sans max-md:text-center max-md:mb-1'>{point.title}</p>
                      <p className='text-gray-600 font-medium text-sm max-md:text-center max-md:w-[90%] max-md:mx-auto'>{point.caption}</p>
                    </div>
                </div>
              ))]}
            </div>
          </div>



          <div className='relative grid w-full h-full max-md:mt-[2em]'>
            <div className='bg-[#FFA630] top-[20%]  bottom-auto left-[6%] max-md:left-0 right-0 rounded-3xl max-md:h-[19em] xl:h-[28vw] h-[23em] absolute'></div>
            <div className='bg-[#F17720] top-[12%] bottom-auto left-[40%] right-0 rounded-2xl max-md:h-[20em] xl:h-[32vw] h-[27em] absolute'></div>
            <div className='absolute right-0 left-auto top-0 bottom-0 xl:h-[34em] max-md:h-[19em] h-[33em] grid mr-0 ml-auto '>
              <img src='/image 38.png' className='ml-[6%] my-auto max-md:max-w-[95%] max-w-[88%] '></img>
            </div>
            
          </div>
        </div>
        
      </section>



      {/* New Section */}
      <section className=" w-[90%] lg:w-[80%] mx-auto max-sm:mt-[4em]">

        <div>
          <h2 className="text-lg text-center mx-auto md:text-4xl font-semibold w-[90%] md:leading-14 ">Learning Tailored to Every Stage</h2>
        <p className="text-gray-600 font-medium w-[90%] mt-3.5 max-sm:text-sm text-center mx-auto">
          Our tutoring covers all levels from primary school to GCSEs and SATs, ensuring every student gets personalized support
        </p>
        </div>

        <div className='flex justify-center flex-wrap lg:grid grid-cols-3 gap-4 max-md:mt-[2em] mt-[4em]'>
          {learningStages.map((item, index) => (
              <div key={index} className='rounded-md max-md:w-full w-[20em] lg:w-[100%] bg-[#EBEBEB] py-[2.5em] px-[2em]'>
                <p className='font-semibold mb-[2em] md:text-lg'>{item.level}</p>
                <div className='space-y-3.5'>
                  {item.class.map((classItem, index) => (
                    <>
                      <div className='font-medium max-md:text-sm'><span className='text-2xl'>•&nbsp;</span> {classItem}</div>
                      <hr className='border border-b-0 bg-none border-t-1 border-gray-500'></hr>
                    </>
                    
                  ))}
                </div>
              </div>
          ))}
        </div>
        
      </section>






      <section className=" w-[90%] lg:w-[80%] mx-auto max-sm:mt-[4em]">
        <h2 className="text-lg max-md:text-center max-sm:mx-auto md:text-4xl font-semibold w-[90%] md:leading-14 md:max-w-[50%]">Your Learning Journey in Four Simple Steps</h2>
        <p className="text-gray-600 font-medium w-[90%] md:max-w-[45%] mt-3.5 max-sm:text-sm max-sm:text-center max-sm:mx-auto">
          A straightforward process that gets you from sign-up to success without the stress.
        </p>

        {/** Group 1 */}

        <div className="flex flex-col md:grid grid-cols-[1.3fr_1fr] max-sm:gap-6 gap-4 mt-[2em] md:mt-[4em]">
          <div className="bg-[#F5F5F5] grid w-full min-h-[fit-content] h-[100%] rounded-2xl ">
            <div className="px-4 md:px-8 py-6 md:py-9">
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                1
              </div>
              <h3 className="font-semibold">Choose Your Subject</h3>
              <p className="text-gray-600 font-medium lg:max-w-[60%] mt-3 max-md:text-[0.9em]">
                Browse our range of subjects and find the area you want to master. Whether it’s math, science or business,  we’ve got an expert for you.
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
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                2
              </div>
              <h3 className="font-semibold">Book a Free Consultation</h3>
              <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3 max-md:text-[0.9em]">
                Schedule a no-cost session to discuss your learning needs and goals. We’ll match you with the right tutor for your journey.
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
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                3
              </div>
              <h3 className="font-semibold">Meet Your Tutor</h3>
              <p className="text-gray-600 font-medium lg:max-w-[80%] mt-3 max-md:text-[0.9em]">
                Have a friendly chat to get to know your tutor’s style, ask questions, and plan how you’ll work together for success.
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
              <div className="h-8 w-8 grid font-semibold rounded-full place-items-center bg-[#C9DAE4] mb-2 max-md:mb-[1.2em]">
                4
              </div>
              <h3 className="font-semibold">Begin Your Learning Journey</h3>
              <p className="text-gray-600 font-medium lg:max-w-[75%] mt-3 max-md:text-[0.9em]">
                Start your personalized sessions, track your progress, and see your confidence and grades grow.
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
      </section>
    </main>
  )
}
