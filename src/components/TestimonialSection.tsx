
import React from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "sKrapy made the entire scrap disposal process so easy for me! I needed to clear out old office electronics and metal furniture, and their team was quick to respond. They offered a great price and ensured everything was recycled properly. ",
    author: "Sarah Johnson",
    position: "Marketing Director at TechCorp"
  },
  {
    id: 2,
    content: "I’ve used several scrap buyers in the past, but sKrapy stands out for their excellent customer service and efficiency. They arrived on time, gave me a fair quote, and took care of all the heavy lifting. Their team was courteous and made sure all my office scrap was disposed off properly.",
    author: "Michael Chen",
    position: "CEO at Innovate Solutions"
  },
  {
    id: 3,
    content: "As a small business owner, I was looking for a efficient way to get rid of my old office equipment. sKrapy exceeded my expectations! Their pricing was transparent, and they made sure to pick up everything without any hassle.",
    author: "Sarah Johnson",
    position: "Marketing Director at TechCorp"
  },
  {
    id: 4,
    content: "I recently had a huge amount of scrap metal to dispose of, and sKrapy made the process incredibly smooth. The team was professional, offered a competitive rate, and even ensured that everything was sorted and recycled responsibly.",
    author: "Shobhit Chola",
    position: "CEO at VW Group"
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Testimonials</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-gray-200 rounded-[20px] p-8 relative">
              <Quote className="text-positiveGreen mb-6" size={40} />
              <p className="mb-12">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
