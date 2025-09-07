import React from 'react'

const point2 = [
  {
    image: "/homework.svg",
    title: "100% Original & Plagiarism-Free",
    caption: "Every paper written from scratch, with report on request."
  },
  {
    image: "/puzzle.svg",
    title: "Flexible Deadlines ",
    caption: "Urgent delivery available within 24–72 hours."
  },
  {
    image: "/hand.svg",
    title: "Confidential & Secure",
    caption: "Your work and details kept private at all times."
  },
  {
    image: "/pen.svg",
    title: "Free Consultation",
    caption: "Discuss your project needs before we begin."
  },
]


const ourServices = [

  {
    icon: "/about-7.png",
    title: "Conference Papers and Presentations",
    bodyText: "We prepare concise papers and polished presentations for  conferences. Support includes structure, visuals, and guidance for impactful delivery",
    link: "/tutoring"
  },
  {
    icon: "/about-8.png",
    title: "Writing Services",
    bodyText: "We help students and researchers turn ideas into well-structured, original academic work—essays, papers, dissertations, or proposals—tailored to your needs and academic standards.",
    link: "/writing"
  },
  {
    icon: "/about-8.png",
    title: "Journal Activities",
    bodyText: "We draft, edit, and format articles to meet publishing standards. Each piece is refined for clarity, coherence, and academic tone.",
   
    link: "/writing"
  },

  {
    icon: "/about-8.png",
    title: "Essays, Term Papers & Coursework",
    bodyText: "We provide well-researched assignments tailored to course requirements and academic standards. Each piece is original, plagiarism-free, and properly formatted.",
   
    link: "/writing"
  },
  {
    icon: "/about-8.png",
    title: "Theses & Dissertations ",
    bodyText: "We offer comprehensive support across all stages of thesis and dissertation writing. Assistance includes literature reviews, data analysis, and proper formatting.",
   
    link: "/writing"
  },
  {
    icon: "/about-8.png",
    title: "Research Proposals & Reports",
    bodyText: "Our proposals and reports clearly outline research aims, methods, and findings. They are structured for academic precision and effective communication.",
   
    link: "/writing"
  },
  
  
]


export default function WritingPage() {
  return (
    <main className='mb-[8em]'>
      <section>
        <div className='items-center w-full text-center my-8 mt-[5em] space-y-3'>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-12 xl:leading-16 max-w-[85%] mx-auto">Academic & Content Writing Support You Can Trust</h2>
          <p className="mx-auto font-medium text-gray-600 w-[80%]">From essays to dissertations, we provide tailored, plagiarism-free writing and editing services designed to help you excel</p>
          <div className="space-x-4 mt-[2.5em] max-md:mt-[2em]">
            <button className="btn btn-outline">Learn more</button>
            <button className="btn btn-primary">Book a free consultation</button>
          </div>
        </div>

        <div className='grid relative h-[max-content] max-sm:mt-[18em] mt-[22em] lg:mt-[27em] xl:mt-[30em]'>
          <div className='absolute   bottom-0 top-auto right-0 left-0'>
            <div className='bg-[#D2DEE4] w-[90%] rounded-t-2xl h-[22vw] md:h-[18vw] mx-auto'></div>
          </div>
          <img className='absolute mx-auto max-sm:max-w-[65%] md:max-w-[48vw] max-md:max-w-[67%] bottom-0 top-auto left-0 right-0' src='/image 44.png'></img>
        </div>
        
      </section>



      <section className='grid place-items-center w-full h-max mt-[8em] max-md:mt-[6em]'>
              <div className='flex flex-col-reverse max-md:gap-[21em] md:grid md:grid-cols-[1.6fr_1fr] lg:grid-cols-2 gap-[1.5em] xl:gap-[2.5em] w-[80%] h-fit'>
      
      
      
                <div className='space-y-3 my-auto h-fit mt-[6vw]'>
                  <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Quality You Can Rely On</h3>
                  <p className='text-gray-600 font-medium'>Work with a team that values originality, integrity, and timely delivery.</p>
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
                  <div className='bg-[#042B73] top-[20%]  bottom-auto left-[20%] max-md:left-0 right-[10%] rounded-3xl max-md:h-[19em] xl:h-[28vw] h-[23em] absolute'></div>
                  <div className='absolute bg-[#D2DEE4] rounded-3xl right-0 left-[32%] top-[35%] bottom-0 xl:h-[25em] max-md:h-[19em] h-[20em] grid mr-0 ml-auto '>
                    <img src='/image 38.png' className='ml-[6%] my-auto max-md:max-w-[95%] max-w-[88%] '></img>
                  </div>
                  
                </div>
              </div>
              
            </section>



            <section className="bg-[#D2DEE4] gap-6 w-[95%] md:w-[76%] mx-auto mt-[13em] px-4 md:px-14 py-12 rounded-2xl">
        <h2 className="max-sm:text-2xl font-semibold text-3xl w-fit mb-3">Comprehensive Writing Services</h2>
        <p className="md:max-w-[63%]">
          From first drafts to final submissions, we support every stage of your academic journey.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mt-[3em]">
        {ourServices.map((item, index) => (
          <div key={index} className="bg-white space-y-1.5 px-7 max-md:px-6 pt-12 max-md:pt-[1.8em]  pb-13 max-md:pb-[2em] rounded-2xl">
            <img src={item.icon} className="max-h-[52px] max-w-[52px]"></img>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p>{item.bodyText}</p>
            <div className="space-y-4 text-gray-600 text-[0.95em] mt-[2.5em] font-semibold">
              
            </div>
          </div>
        ))}
        </div>
      </section>
    </main>
  )
}
