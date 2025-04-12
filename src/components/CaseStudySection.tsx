import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CaseStudySection = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'E-Waste',
      description: '₹500-₹1500 per unit',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 2,
      company: 'Paper Scrap',
      description: '₹9-₹15 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
    {
      id: 3,
      company: 'Paper Shredding',
      description: '₹1-₹3 per kg',
      bgColor: 'bg-positiveBlack',
      textColor: 'text-white'
    },
    {
      id: 4,
      company: 'Car Scrap',
      description: '₹10,000-₹25,000',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 5,
      company: 'Plastic Bottle',
      description: '₹12 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
    {
      id: 6,
      company: 'Furniture',
      description: 'Depends on condition',
      bgColor: 'bg-positiveBlack',
      textColor: 'text-white'
    },
    {
      id: 7,
      company: 'Glass Bottle',
      description: '₹3 per kg',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 8,
      company: 'Cardboad/Cartons',
      description: '₹8 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
    {
      id: 1,
      company: 'E-Waste',
      description: '₹500-₹1500 per unit',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 2,
      company: 'Paper Scrap',
      description: '₹9-₹15 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
    {
      id: 3,
      company: 'Paper Shredding',
      description: '₹1-₹3 per kg',
      bgColor: 'bg-positiveBlack',
      textColor: 'text-white'
    },
    {
      id: 4,
      company: 'Car Scrap',
      description: '₹10,000-₹25,000',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 5,
      company: 'Plastic Bottle',
      description: '₹12 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
    {
      id: 6,
      company: 'Furniture',
      description: 'Depends on condition',
      bgColor: 'bg-positiveBlack',
      textColor: 'text-white'
    },
    {
      id: 7,
      company: 'Glass Bottle',
      description: '₹3 per kg',
      bgColor: 'bg-positiveGreen',
      textColor: 'text-positiveBlack'
    },
    {
      id: 8,
      company: 'Cardboad/Cartons',
      description: '₹8 per kg',
      bgColor: 'bg-white',
      textColor: 'text-positiveBlack',
      border: true
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">Price List</h2>
          {/* <Button variant="link" className="flex items-center text-xl font-medium text-positiveBlack p-0 hover:text-positiveBlack/80">
            <span>View Recent Work</span>
            <ArrowRight className="ml-2" size={18} />
          </Button> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`${study.bgColor} ${study.textColor} p-6 rounded-[20px] ${study.border ? 'border border-black' : ''}`}
            >
              <div className="flex flex-col justify-between h-20">
                <div>
                  {/* <span className="inline-block rounded-full px-4 py-1 border border-current mb-6">
                    {study.title}
                  </span> */}
                  <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                  <p className="text-lg mb-8">{study.description}</p>
                </div>
                {/* <a href="#" className={`inline-flex items-center font-semibold`}>
                  Read Case Study
                  <ArrowRight className="ml-2" size={18} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
