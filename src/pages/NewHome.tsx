

export default function NewHome() {
  return (
    <main className="w-full mx-auto space-y-16 pb-[12em]">

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
            <div className="grid rounded-2xl overflow-hidden w-[60%] max-sm:w-[70%] lg:w-fit h-full lg:mr-0 ml-auto mx-auto ">
              <img src="/image 1.png" className="w-[100%] h-[100%] object-cover lg:mr-0 ml-auto"></img>
            </div>
          </div>
       </section>

       {/* Section 2 */}
       <section className="flex flex-col lg:grid grid-cols-2 w-[95%] lg:w-[76%] gap-[3em] lg:gap-1 xl:gap-12 mx-auto">
          <div className="grid">
            <img src="/image 2.png" className="mx-auto w-[55vw] max-sm:w-[95%]  lg:w-full" />
          </div>
          <div className="grid lg:mr-0 ml-auto my-auto mx-auto place-items max-sm:w-[95%] w-[55vw] lg:w-[90%]">
            <h3 className="max-sm:text-xl text-3xl mb-4 font-semibold">About Us</h3>
            <p>{`At MASY consulting, we help students like you excel academically and confidently through expertly crafted writing and tutoring services.`}<br></br> <br></br> {`Whether you’re writing a thesis, struggling with an assignment, or preparing for a big exam — we’ve got your back with professional guidance, clear explanations, and reliable support.`}</p>
          </div>
       </section>
    </main>
  )
}
