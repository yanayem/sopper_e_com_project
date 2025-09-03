import React from 'react';
import Amazon from "../assets/amazon.svg";
import Dribble from "../assets/dribbble.svg";
import HubSpot from "../assets/hubspot.svg";
import Notion from "../assets/notion.svg";
import Netflix from "../assets/netflix.svg";
import Zoom from "../assets/zoom.svg";

const NavBarSeconde = () => {
  const items = [Amazon, Notion, HubSpot, Netflix, Zoom, Dribble];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        {/* responsive grid: 2 rows on mobile, 1 row on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 place-items-center">
          {items.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="logo"
              className="h-12 filter dark:filter-none brightness-0 invert-0 dark:brightness-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavBarSeconde;
