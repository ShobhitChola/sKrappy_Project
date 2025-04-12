
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Digital Marketing: AI and Beyond',
    excerpt: 'Explore how artificial intelligence is reshaping the digital marketing landscape and how businesses can adapt.',
    date: 'Nov 15, 2023',
    category: 'Digital Strategy'
  },
  {
    id: 2,
    title: 'Social Media Trends That Will Dominate Next Year',
    excerpt: 'Stay ahead of the curve with these upcoming social media trends that are poised to transform how brands connect with audiences.',
    date: 'Nov 8, 2023',
    category: 'Social Media'
  },
  {
    id: 3,
    title: 'How to Create a Content Strategy That Converts',
    excerpt: 'Learn the key components of a successful content strategy that drives engagement and conversions.',
    date: 'Oct 25, 2023',
    category: 'Content Marketing'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">Latest Blog Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center font-semibold text-positiveBlack hover:underline">
                  Read More
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
