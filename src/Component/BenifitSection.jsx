import React from 'react'
import { ChevronDown } from 'lucide-react'
import img from '../assets/Rectangle 48.svg'

const BenifitSection = () => {
  const items = [
    {
      text: "Free Consulting With Expert Saving Money",
      icon: <ChevronDown size={14} />,
      style: "bg-green-100 text-green-600", // ✅ light green bg + green icon
    },
    {
      text: "Online Banking",
      icon: <ChevronDown size={14} />,
      style: "bg-blue-100 text-blue-600",
    },
    {
      text: "Investment Report Every Month",
      icon: <ChevronDown size={14} />,
      style: "bg-yellow-100 text-yellow-600",
    },
    {
      text: "Saving Money For The Future",
      icon: <ChevronDown size={14} />,
      style: "bg-purple-100 text-purple-600",
    },
    {
      text: "Online Transaction",
      icon: <ChevronDown size={14} />,
      style: "bg-red-100 text-red-600",
    },
  ]

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white mb-6">
            What Benefit Will You Get
          </h1>
          <ul className="space-y-4 text-lg text-gray-700">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span
                  className={`${item.style} p-2 rounded-full flex items-center justify-center`}
                >
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full h-full">
          <img
            src={img}
            alt="Benefits Illustration"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}

export default BenifitSection
