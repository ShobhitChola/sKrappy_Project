
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Customer Request',
      description: "Receiving scrap pickup requests from customers through our platform."
    },
    {
      id: 2,
      title: 'Vendor Matching',
      description: 'Assigning a suitable vendor based on customer location and requirements.'
    },
    {
      id: 3,
      title: 'Scrap Handover',
      description: 'Coordinating the handover of scrap material from customer to vendor.'
    },
    {
      id: 4,
      title: 'Vendor Processing',
      description: 'The vendor takes over and handles the sorting, treatment, recycling, and reintroduction processes.'
    },
    {
      id: 5,
      title: 'Completion & Feedback',
      description: 'Ensuring the vendor completes the job and collecting feedback from the customer for quality assurance.'
    }
  ];

  return (
    <section className="py-20 bg-positiveBlack text-white" id="process">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-0">Our working process</h2>
          <Button className="bg-positiveGreen text-positiveBlack rounded-full px-7 py-6 text-lg hover:bg-white hover:text-black max-w-[200px]">
            Get in Touch
          </Button>
        </div>

        <div className="mt-16">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col sm:flex-row mb-8 pb-4 ${
                index < steps.length - 1 ? 'border-b border-gray-700' : ''
              }`}
            >
              <div className="sm:w-1/4 mb-4 sm:mb-0">
                <div className="bg-positiveGreen text-positiveBlack w-12 h-12 rounded-full flex items-center justify-center font-semibold text-xl mb-2">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <div className="sm:w-3/4 mt-5">
                <p className="text-lg text-gray-300">{step.description}</p>
              </div>
              {/* <div className="sm:w-1/4 flex justify-end items-center mt-4 sm:mt-0">
                <ArrowRight className="text-positiveGreen" size={40} />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
