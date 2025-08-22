import { useRef } from "react";
import { Star } from "lucide-react";

// Dummy testimonials
const testimonial = [
  {
    rating: 5,
    profile: "/profile-1.png", // replace with real images
    bodyText: `"The tutoring services are outstanding. My grades improved significantly after working with their expert tutors."`,
    user: "Michea Chen",
    userRole: "Undergraduate Student",
  },
  {
    rating: 5,
    profile: "/profile-2.png",
    bodyText: `"Masy Consultings have very comprehensive project writers. They do not only come up with a good topic but also use a distinctive approach in writing the topics in line with the lecturer's guidelines and instructions towards scoring best of grades in most of my courses."`,
    user: "Laura Spigel",
    userRole: "High School Student",
  },
  {
    rating: 5,
    profile: "/profile-3.png",
    bodyText: `"Their research assistance was invaluable for my dissertation. Professional, thorough, and highly knowledgeable team."`,
    user: "Emily Rodriguez",
    userRole: "PhD candidate",
  },
  {
    rating: 5,
    profile: "/profile-4.png",
    bodyText: `"I was completely overwhelmed by my final-year project, but their writing support broke everything into manageable steps. My supervisor praised the clarity and structure — I couldn’t have asked for better guidance!"`,
    user: "Alex Johnson",
    userRole: "High School Student",
  },
];

export default function TestimonialCarousel({
  containerClass,
  speed = "normal",
}: {
  containerClass?: string;
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
    <div
      className={`overflow-hidden py-6 relative w-[98vw] mx-auto items-center ${containerClass}`}
    >
      <div
        ref={marqueeRef}
        className={`flex gap-8 whitespace-nowrap ${
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
            <p className="text-gray-700 italic mb-4">{item.bodyText}</p>

            {/* User info */}
            <div className="flex items-center gap-3">
              <img
                src={item.profile || "/default-profile.png"}
                alt={item.user}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <h4 className="font-semibold text-gray-800">{item.user}</h4>
                <span className="text-sm text-gray-500">{item.userRole}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
