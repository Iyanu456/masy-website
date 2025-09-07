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
    title: "exam Preparation",
    caption: "Tailored strategies to ace your tests."
  },
]

export default function TutoringPage() {
  return (
    <main className='mb-[8em] space-y-[6em] max-sm:space-y-[2em]'>
      <section>
        <div className='items-center w-full text-center my-8 mt-[5em] max-md:mt-[3em] space-y-3'>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-12 xl:leading-16 max-w-[85%] mx-auto">Personalized Tutoring for Every Learning Goal</h2>
          <p className="mx-auto font-medium text-gray-600 w-[80%]">We offer expert tutoring, writing support, and editing to help you excel academically and professionally.</p>
          <div className="space-x-4 mt-[2.5em] max-md:mt-[2em]">
            <button className="btn btn-outline">Learn more</button>
            <button className="btn btn-primary">Book a Session</button>
          </div>
        </div>

        <div className='grid relative h-[max-content] max-sm:mt-[13em] min-[530px]:mt-[18em] mt-[15em] lg:mt-[25em] xl:mt-[30em]'>
          <div className='absolute   bottom-0 top-auto right-0 left-0'>
            <div className='bg-[#F17720] w-[90%] rounded-t-2xl h-[22vw] md:h-[18vw] mx-auto'></div>
          </div>
          <img className='absolute mx-auto max-sm:max-w-[73%] md:max-w-[48vw] max-md:max-w-[67%] bottom-0 top-auto left-0 right-0' src='/image 35.png'></img>
        </div>

        <div className='flex flex-wrap justify-between w-[75%] gap-5 max-md:gap-[2.5em] max-md:mt-[3em] mt-[4.5em] mx-auto'>
          

          {keyPoints.map((point, index) => (
              <div key={index} className='space-y-3 mt-4 items-center text-center max-w-[15em] max-md:max-w-[90%] mx-auto'>
                <img src={point.image} className='mx-auto' ></img>
                  <p className='font-bold'>{point.title}</p>
                  <p className='font-medium text-gray-600'>{point.bodyText}</p>
              </div>
          ))}
        </div>
        
      </section>


      <section className='grid place-items-center w-full h-max mt-[8em] max-md:mt-[0em] pb-[20em]'>
        <div className='flex flex-col-reverse max-md:gap-[21em] md:grid md:grid-cols-[1.6fr_1fr] lg:grid-cols-2 gap-[1.5em] xl:gap-[2.5em] w-[80%] h-fit'>



          <div className='space-y-3 my-auto h-fit mt-[6vw]'>
            <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Tutoring That Works for You</h3>
            <p className='text-gray-600 font-medium'>Personalized support and strategies to help you master concepts, tackle exams, and study smarter.</p>
            <div className='grid xl:grid-cols-2 gap-[2em]  xl:gap-[3em] mt-[2.5em]'>
              {[point2.map((point, index) => (
                <div key={index} className=' grid grid-cols-[40px_auto] gap-2'>
                    <div className='h-full grid items-center'>
                      <img src={point.image} className='my-auto'></img>
                    </div>
                    <div>
                      <p className='font-bold'>{point.title}</p>
                      <p className='text-gray-600 font-medium text-[0.95em]'>{point.caption}</p>
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
    </main>
  )
}
