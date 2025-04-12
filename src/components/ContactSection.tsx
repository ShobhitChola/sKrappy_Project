
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="bg-positiveGreen rounded-[30px] p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Got scrap to clear? Let sKrapy handle it for you</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-medium mb-2" htmlFor="name">Name*</label>
                    <Input type="text" id="name" name="name" className="w-full border-black focus:border-positiveBlack focus:ring-positiveBlack rounded-lg" required />
                  </div>
                  <div>
                    <label className="block font-medium mb-2" htmlFor="email">Email*</label>
                    <Input type="email" id="email" name="email" className="w-full border-black focus:border-positiveBlack focus:ring-positiveBlack rounded-lg" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-medium mb-2" htmlFor="company">Company Name</label>
                    <Input type="text" id="company" name="company" className="w-full border-black focus:border-positiveBlack focus:ring-positiveBlack rounded-lg" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2" htmlFor="subject">Subject*</label>
                    <Input type="text" id="subject" name="subject" className="w-full border-black focus:border-positiveBlack focus:ring-positiveBlack rounded-lg" required />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block font-medium mb-2" htmlFor="message">Message*</label>
                  <Textarea id="message" name="message" rows={5} className="w-full border-black focus:border-positiveBlack focus:ring-positiveBlack rounded-lg" required />
                </div>
                
                <div className="flex justify-center md:justify-start">
                  <Button type="submit" className="bg-positiveBlack text-white rounded-full px-8 py-6 text-lg hover:bg-black">
                    Submit Message
                  </Button>
                </div>
              </form>
            </div>
  
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="max-w-md p-8 rounded-[20px] bg-white border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-gray-500 mb-1">Email</span>
                    <a href="mailto:hello@positivus.com" className="text-lg font-medium hover:text-positiveGreen">hello@skrapy.com</a>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Phone</span>
                    <a href="tel:+5551234567" className="text-lg font-medium hover:text-positiveGreen">+91 1234 5678</a>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Address</span>
                    <address className="text-lg font-medium not-italic">
                      123 Sample Street<br />
                      New Delhi, India
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
