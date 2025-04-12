
import React from 'react';
import { ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    number: '01',
    title: 'Scrap Collection',
    description: "Looking for hassle-free scrap disposal? We provide quick and reliable scrap collection services for offices, homes, and industries.",
    linkText: 'Learn more',
  },
  {
    id: 2,
    number: '02',
    title: 'Paper Shredding',
    description: "Looking for secure paper disposal? We provide fast and reliable paper shredding services for offices, homes, and industries.",
    linkText: 'Learn more',
  },
  {
    id: 3,
    number: '03',
    title: 'Vehicle Scraping',
    description: "Looking to dispose of your old or damaged vehicle? Our vehicle scrapping services offer a fast, reliable, and eco-friendly solution.",
    linkText: 'Learn more',
  }
];

const ServiceCard = ({ number, title, description, linkText }) => {
  return (
    <div className="border border-black rounded-[20px] p-8 flex flex-col h-full transition-all hover:bg-positiveGreen group">
      <div className="text-xl font-semibold mb-4">{number}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-8 flex-grow">{description}</p>
      <a href="#" className="inline-flex items-center font-semibold group-hover:underline">
        {linkText}
        <ArrowRight className="ml-2" size={18} />
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">Services we offer</h2>
          {/* <p className="text-xl max-w-md">
            We offer a full range of digital marketing services tailored to meet your specific business needs.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
