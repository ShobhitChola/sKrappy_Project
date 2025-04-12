
import React from 'react';

const LogosSection = () => {
  // Placeholder for logos
  const cities = [
    "NEW DELHI",
    "MUMBAI",
    "HYDERABAD",
    "BANGALORE",
    "PUNE",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-10">We're servicing in</h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {cities.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[150px] h-16 grayscale hover:grayscale-0 transition-all"
            >
              <div className="h-8 px-6 py-1 border border-gray-300 rounded-md flex items-center justify-center">
                <span className="font-bold">{logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
