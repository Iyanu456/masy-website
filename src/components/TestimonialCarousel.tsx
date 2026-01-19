import { useRef } from "react";
import { Star, UserRound } from "lucide-react";

// Dummy testimonials
const testimonial = [
  
  {
    rating: 5,
    profile: "/profile-1.png", // replace with real images
    bodyText: `"Timeliness, contributed towards graduating with Distinction."`,
    user: "Nimot",
    userRole: "",
  },
  {
    rating: 5,
    profile: "/profile-2.png",
    bodyText: `"The team at Masy Consulting is exceptionally good and professional. Their use of language, communication and originality in writing contributed to my success. The quality of work is outstanding."`,
    user: "Hannah.P",
    userRole: "LLM Student",
  },
  {
    rating: 5,
    profile: "/profile-1.png", // replace with real images
    bodyText: `"The tutoring sessions have been amazing for my daughter. Her confidence and grades have improved significantly"`,
    user: "Parent of Primary School Student",
    userRole: "",
  },
  
  {
    rating: 4,
    profile: "/profile-3.png",
    bodyText: `"Masy Consulting guided me through my coursework and dissertation when I was hopeless. The team carefully listened to my problems and helped me find solutions. They rescued me when I needed it most. Their support was top notch and affordable."`,
    user: "Mumu",
    userRole: "Post graduate student",
  },
  
  {
    rating: 5,
    profile: "/profile-4.png",
    bodyText: `"Masy Consulting has demonstrated exceptional professionalism and expertise in supporting our curriculum and content development initiatives. Their team brought clarity, structure, and depth to our academic materials, ensuring alignment with our institutional standards and learner outcomes. Their collaborative approach, attention to detail, and commitment to quality have made them a valued partner in advancing our educational objectives."`,
    user: "International Business School",
    userRole: "",
  },

   {
    rating: 4,
    profile: "/profile-3.png",
    bodyText: `"The flexibility is perfect for our busy family schedule. Highly recommend"`,
    user: "Parent of A-Level Student",
    userRole: "",
  },
  
  {
    rating: 5,
    profile: "/profile-4.png",
    bodyText: `"It was a good and interesting experience working with Masy Consulting."`,
    user: "Anonymous",
    userRole: "Masters student",
  },
  {
    rating: 4,
    profile: "/profile-4.png",
    bodyText: `"Working with Masy Consulting has been exceptional. The team provided guidance on topic selection, writing structure, and how to align my work with the lecturer's guidelines. Their feedback and tutoring helped me improve my writing skills and score the best grades in most of my courses."`,
    user: "Anonymous",
    userRole: "",
  },
];


const writingTestimonial = [
  
  {
    rating: 5,
    profile: "/profile-1.png", // replace with real images
    bodyText: `"Timeliness, contributed towards graduating with Distinction."`,
    user: "Nimot",
    userRole: "",
  },
  {
    rating: 5,
    profile: "/profile-2.png",
    bodyText: `"The team at Masy Consulting is exceptionally good and professional. Their use of language, communication and originality in writing contributed to my success. The quality of work is outstanding."`,
    user: "Hannah.P",
    userRole: "LLM Student",
  },
  
  {
    rating: 4,
    profile: "/profile-3.png",
    bodyText: `"Masy Consulting guided me through my coursework and dissertation when I was hopeless. The team carefully listened to my problems and helped me find solutions. They rescued me when I needed it most. Their support was top notch and affordable."`,
    user: "Mumu",
    userRole: "Post graduate student",
  },
  
  {
    rating: 5,
    profile: "/profile-4.png",
    bodyText: `"Masy Consulting has demonstrated exceptional professionalism and expertise in supporting our curriculum and content development initiatives. Their team brought clarity, structure, and depth to our academic materials, ensuring alignment with our institutional standards and learner outcomes. Their collaborative approach, attention to detail, and commitment to quality have made them a valued partner in advancing our educational objectives."`,
    user: "International Business School",
    userRole: "",
  },
  {
    rating: 5,
    profile: "/profile-4.png",
    bodyText: `"It was a good and interesting experience working with Masy Consulting."`,
    user: "Anonymous",
    userRole: "Masters student",
  },
  {
    rating: 4,
    profile: "/profile-4.png",
    bodyText: `"Working with Masy Consulting has been exceptional. The team provided guidance on topic selection, writing structure, and how to align my work with the lecturer's guidelines. Their feedback and tutoring helped me improve my writing skills and score the best grades in most of my courses."`,
    user: "Anonymous",
    userRole: "",
  },
];

const tutoringTestimonial = [
  
  {
    rating: 5,
    profile: "/profile-1.png", // replace with real images
    bodyText: `"The tutoring sessions have been amazing for my daughter. Her confidence and grades have improved significantly"`,
    user: "Parent of Primary School Student",
    userRole: "",
  },
  {
    rating: 5,
    profile: "/profile-2.png",
    bodyText: `Our tutor is patient and makes everything so clear. My son actually looks forward to his sessions now`,
    user: "Parent of Grade 8 Student",
    userRole: "",
  },
  {
    rating: 4,
    profile: "/profile-3.png",
    bodyText: `"The flexibility is perfect for our busy family schedule. Highly recommend"`,
    user: "Parent of A-Level Student",
    userRole: "",
  },
];


export default function TestimonialCarousel({
  containerClass,
  speed = "normal",
  tutoring = false,
  writing = false,
}: {
  containerClass?: string;
  tutoring?: boolean;
  writing?: boolean;
  speed?: "normal" | "slow";
}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running";
  };
  

  return (
    <>

    {tutoring && (
      <div
      className={` overflow-hidden py-6 relative mt-[4em] mx-auto items-center ${containerClass}`}
    >
      <div
        ref={marqueeRef}
        className={`max-sm:hidden flex gap-8 whitespace-nowrap ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...tutoringTestimonial, ...tutoringTestimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl flex-shrink-0 px-8 py-7 w-[25em] whitespace-normal shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic mb-4 max-md:text-[0.95em]">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>
              
              }
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
      
        className={`max-sm:flex hidden justify-center flex-col gap-8 px-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...tutoringTestimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl p-8 shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic max-md:text-[0.95em] mt-2 mb-8 max-md:leading-6">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>}
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )}




    {writing && (
      <div
      className={` overflow-hidden py-6 relative mt-[4em] mx-auto items-center ${containerClass}`}
    >
      <div
        ref={marqueeRef}
        className={`max-sm:hidden flex gap-8 whitespace-nowrap ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...writingTestimonial, ...writingTestimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl flex-shrink-0 px-8 py-7 w-[25em] whitespace-normal shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic mb-4 max-md:text-[0.95em]">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>
              
              }
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
      
        className={`max-sm:flex hidden justify-center flex-col gap-8 px-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...writingTestimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl p-8 shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic max-md:text-[0.95em] mt-2 mb-8 max-md:leading-6">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>}
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )}





    {(!tutoring && !writing) && (
      <div
      className={` overflow-hidden py-6 relative mt-[4em] mx-auto items-center ${containerClass}`}
    >
      <div
        ref={marqueeRef}
        className={`max-sm:hidden flex gap-8 whitespace-nowrap ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...testimonial, ...testimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl flex-shrink-0 px-8 py-7 w-[25em] whitespace-normal shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic mb-4 max-md:text-[0.95em]">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>
              
              }
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
      
        className={`max-sm:flex hidden justify-center flex-col gap-8 px-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...testimonial].map((item, index) => (
          <div
            className="cursor-pointer grid bg-white rounded-xl p-8 shadow-lg"
            key={index}
          >
            {/* Rating */}
            <div className="flex mb-3 gap-0.5">
              {Array.from({ length: item.rating }, (_, i) => (
                <Star fill="#FEBA00" className="border-0 outline-0 text-[#FEBA00]" size={18} key={i} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic max-md:text-[0.95em] mt-2 mb-8 max-md:leading-6">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3 mb-0 mt-auto">
              {/*<img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />*/

              <div className="bg-gray-100 border border-gray-300 w-10 h-10 rounded-full grid place-items-center">
                <UserRound className="text-gray-400"/>
              </div>}
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>)
    }
    </>
  );
}
