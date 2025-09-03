import React from "react";
import { FilePenLine as Publishing, BarChart2 as Analytics, Users as Engagement, Star, StarHalf } from "lucide-react";

const RatingSection = () => {
  const ratingData = [
    { id: 1, rating: 4.9, count: 1000 },
    { id: 2, rating: 4.8, count: 800 },
  ];

  const featureItems = [
    {
      icon: Publishing,
      title: "Publishing",
      desc: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
    },
    {
      icon: Analytics,
      title: "Analytics",
      desc: "Get insights into your performance with detailed analytics that help optimize your strategy.",
    },
    {
      icon: Engagement,
      title: "Engagement",
      desc: "Engage with your audience effectively to build lasting relationships and brand loyalty.",
    },
  ];

  return (
    <section className="rating-section py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            How we support our partners all over the world
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            SaaS has become a common delivery model for many business applications, 
            including office software, messaging software, payroll processing, DBMS, and more.
          </p>

          {/* Ratings */}
          <div className="space-y-4">
            {ratingData.map((item) => {
              const fullStars = Math.floor(item.rating);
              const hasHalfStar = item.rating % 1 !== 0;

              return (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="flex items-center text-yellow-400">
                    {/* Full Stars */}
                    {Array(fullStars).fill(0).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}

                    {/* Half Star */}
                    {hasHalfStar && <StarHalf className="w-5 h-5 fill-yellow-400" />}
                  </div>
                  <span className="text-gray-900 dark:text-gray-200 font-medium">
                    {item.rating}/5 ({item.count} reviews)
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="grid gap-6">
          {featureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow"
              >
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
