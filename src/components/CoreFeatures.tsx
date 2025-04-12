import React from 'react';

const userFeatures = [
  {
    id: 1,
    name: 'AI Photo Verification',
    position: 'Instantly estimate scrap weight using AI-powered image recognition.',
  },
  {
    id: 2,
    name: 'Live Vendor Tracking',
    position: 'Monitor vendor arrival in real-time with GPS-enabled tracking.',
  },
  {
    id: 3,
    name: 'Route Optimization',
    position: 'Minimize travel time with intelligent pickup route suggestions.',
  },
  {
    id: 4,
    name: 'Fraud Detection AI',
    position: 'Prevent scams with AI that flags mismatched weight reports.',
  },
];

const vendorFeatures = [
  {
    id: 1,
    name: 'Earnings Dashboard',
    position: 'Track and manage earnings with a comprehensive dashboard.',
  },
  {
    id: 2,
    name: 'Referral Rewards',
    position: 'Earn movie tickets or shopping vouchers for every successful referral.',
  },
  {
    id: 3,
    name: 'Instant Customer Feedback',
    position: 'Receive real-time ratings and reviews after each pickup to improve service quality.',
  },
  {
    id: 4,
    name: 'Performance Insights',
    position: 'Gain valuable insights on pickup performance, frequency, and feedback.',
  },
];

const TeamSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0 md:w-1/2">Core Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 ">For Users</h3>
            <ul className="space-y-6">
              {userFeatures.map((feature) => (
                <li key={feature.id} className="relative pl-6 border-l-4 border-black/70">
                  <span className="absolute left-0 top-0 w-3 h-3 bg-black/70 rounded-full"></span>
                  <h4 className="text-lg font-bold mb-1">{feature.name}</h4>
                  <p className="text-gray-600 text-sm">{feature.position}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-black">For Vendors</h3>
            <ul className="space-y-6">
              {vendorFeatures.map((feature) => (
                <li key={feature.id} className="relative pl-6 border-l-4 border-black/70">
                  <span className="absolute left-0 top-0 w-3 h-3 bg-black/70 rounded-full"></span>
                  <h4 className="text-lg font-bold mb-1">{feature.name}</h4>
                  <p className="text-gray-600 text-sm">{feature.position}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
