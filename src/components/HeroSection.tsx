
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Scrap Into <span className="bg-positiveGreen px-2">Cash</span> With sKrapy
            </h1>
            <p className="text-xl mb-8">
              Recycle smartly and responsibly. We help you sell scrap effortlessly with transparent rates and eco-friendly processes.            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="bg-positiveBlack hover:bg-black/80 text-white rounded-full px-7 py-6 text-lg font-thin">
                Sell your scrap
              </Button>
              <Button variant="outline" className="border-2 border-positiveBlack rounded-full px-7 py-6 text-lg hover:bg-positiveGreen hover:border-positiveGreen hover:text-positiveBlack transition-all font-thin">
                <span>View Our Services</span>
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[550px] lg:h-[550px] bg-positiveGreen rounded-full p-3 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/hero_image_trash.png"
                    alt="hero_image_trash"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>


            {/* <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="bg-positiveGreen h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Digital Strategy</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <div className="bg-positiveGreen h-3 w-3 rounded-full mr-2"></div>
                <span className="text-sm font-medium">SEO Optimization</span>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
