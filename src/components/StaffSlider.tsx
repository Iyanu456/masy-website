import { useState, useEffect } from "react";

// Updated staff data with yearsExperience instead of highlight
export const staffData = [
  {
    id: "oladapo-david",
    name: "Oladapo David Oreoluwa",
    image: "/teacher-profile/oladapo-david.jpg",
    yearsExperience: 5,
    credentials: [
      { icon: "/hat.svg", text: "BSc. Chemical Engineering" },
      { icon: "/tick-1.svg", text: "Experience teaching multiple subjects" },
      { icon: "/star.svg", text: "Math, Science, English, Arabic & Coding" },
    ],
  },
  {
    id: "emiola-habeeb",
    name: "Emiola Habeeb",
    image: "/teacher-profile/habeeb-ola.jpg",
    yearsExperience: 3,
    credentials: [
      { icon: "/hat.svg", text: "B.A. in Religion" },
      { icon: "/tick-1.svg", text: "Arabic language background" },
      { icon: "/star.svg", text: "Concept-focused teaching" },
    ],
  },
  {
    id: "oladipupo-nafisat",
    name: "Oladipupo Nafisat Ayomide",
    image: "/teacher-profile/nafisat-oladipupo.jpg",
    yearsExperience: 7,
    credentials: [
      { icon: "/hat.svg", text: "NCE, B.Sc & B.Ed" },
      { icon: "/tick-1.svg", text: "Classroom & tutorial experience" },
      { icon: "/star.svg", text: "Math, English & Science" },
    ],
  },
  {
    id: "phoebe-adenekan",
    name: "Phoebe Anjolaoluwa Adenekan",
    image: "/teacher-profile/phoebe-adenekan.jpeg",
    yearsExperience: 2,
    credentials: [
      { icon: "/hat.svg", text: "B.A. English Language" },
      { icon: "/tick-1.svg", text: "Clear communication skills" },
      { icon: "/star.svg", text: "English & general academics" },
    ],
  },
  {
    id: "olatunbosun-olayinka",
    name: "Olatunbosun Olayinka",
    image: "/teacher-profile/olatunbosun-olayinka.jpeg",
    yearsExperience: 4,
    credentials: [
      { icon: "/hat.svg", text: "B.Sc Degree Holder" },
      { icon: "/tick-1.svg", text: "Supportive teaching style" },
      { icon: "/star.svg", text: "Mathematics & general studies" },
    ],
  },
  {
    id: "kolade-adegbembo",
    name: "Adegbembo Kolade John",
    image: "/teacher-profile/kolade-adegbembo.jpg",
    yearsExperience: 6,
    credentials: [
      { icon: "/hat.svg", text: "B.Sc Civil Engineering" },
      { icon: "/tick-1.svg", text: "Coding instruction experience" },
      { icon: "/star.svg", text: "Project-based lessons" },
    ],
  },
];

export default function StaffSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % staffData.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const staff = staffData[index];

  return (
    <div className="w-full max-md:w-[80vw] mx-auto flex flex-col items-center justify-center gap-6">
      {/* Card */}
      <div className="w-full max-w-md transition-opacity duration-500">
        <div className="w-full h-full m-auto bg-[#1E3A5F] rounded-[1em] text-center flex flex-col gap-3 text-white p-[2em] py-[3em] font-light">
          <div className="flex flex-col gap-4 h-fit m-auto w-[90%]">
            <div className="grid place-items-center border-primary border-3 h-[8em] w-[8em] xl:h-[10em] overflow-hidden xl:w-[10em] rounded-full mx-auto">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-medium">{staff.name}</p>

            <p className="text-[0.95em] opacity-95">
              {staff.yearsExperience}+ years teaching experience
            </p>

            <div className="text-[0.95em] space-y-3 mt-2">
              {staff.credentials.map((item, i) => (
                <p key={i} className="w-fit flex gap-2 mx-auto">
                  <img src={item.icon} alt="" />
                  {item.text}
                </p>
              ))}
            </div>

            <p className="text-[#F97316] font-semibold mt-2">
              Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2">
        {staffData.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-[#F97316]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
