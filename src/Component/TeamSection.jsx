import React from "react";
import { Linkedin } from "lucide-react";
import img from "../assets/Picture.png"; // Replace with your images

const services = [
  {
    img: img,
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  {
    img: img,
    name: "Sarah Johnson",
    title: "Content Strategist",
    desc: "Expert in content marketing and copywriting.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  {
    img: img,
    name: "David Wilson",
    title: "PPC Specialist",
    desc: "Specializes in paid campaigns and ad optimization.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  {
    img: img,
    name: "Emily Davis",
    title: "Social Media Manager",
    desc: "Manages social campaigns and engagement strategies.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  {
    img: img,
    name: "James Miller",
    title: "SEO Analyst",
    desc: "Focuses on analytics and keyword optimization.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
  {
    img: img,
    name: "Olivia Taylor",
    title: "Graphic Designer",
    desc: "Designs visuals for digital marketing campaigns.",
    icon: Linkedin,
    bg: "bg-gray-200 dark:bg-gray-700",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center md:text-left md:flex md:items-center md:gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2 px-4 py-2 bg-green rounded-md inline-block text-black">
            Team
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-2xl mx-auto text-base sm:text-lg">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 shadow-md flex flex-col border-2 border-black ${service.bg}`}
            >
              {/* LinkedIn Icon in Top-Right */}
              <div className="absolute top-3 right-3 bg-gray-600 rounded-full p-2">
                <service.icon className="w-4 h-4  text-green cursor-pointer hover:scale-110 transition" />
              </div>

              {/* Top Row: Image + Name & Title */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{service.title}</p>
                </div>
              </div>

              {/* Description Below */}
              <p className="text-center text-gray-700 dark:text-gray-300 border-t pt-3">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-end mt-10">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
            See all teams
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
