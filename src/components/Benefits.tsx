
import React from 'react';
import { Heart, DollarSign, ShieldCheck, Clock } from 'lucide-react';

const benefitsData = [
  {
    icon: <Heart size={32} className="text-brand-blue" />,
    title: "Quality Healthcare",
    description: "Provide premium healthcare options with access to top doctors, specialists, and hospitals nationwide."
  },
  {
    icon: <DollarSign size={32} className="text-brand-teal" />,
    title: "Affordable Plans",
    description: "Small businesses save up to 30% on healthcare costs while offering better benefits to employees."
  },
  {
    icon: <ShieldCheck size={32} className="text-brand-blue" />,
    title: "Comprehensive Coverage",
    description: "From preventive care to mental health services, our plans cover what matters most to your team."
  },
  {
    icon: <Clock size={32} className="text-brand-teal" />,
    title: "Simple Administration",
    description: "Spend less time on paperwork with our streamlined platform for managing benefits and enrollment."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white relative">
      {/* Blue accent decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Small Businesses <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality healthcare solutions that fit your budget and support your team's wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-blue/30 group`}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
