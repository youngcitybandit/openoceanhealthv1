
import React from 'react';
import { CircleDollarSign, Users, FileText, Calendar } from 'lucide-react';

const benefitsData = [
  {
    icon: <Users size={32} className="text-brand-blue" />,
    title: "Simplified HR",
    description: "Streamline your HR processes with our comprehensive tools designed for small businesses."
  },
  {
    icon: <CircleDollarSign size={32} className="text-brand-teal" />,
    title: "Tax Benefits",
    description: "Small businesses qualify for substantial tax benefits when offering healthcare through our platform."
  },
  {
    icon: <Calendar size={32} className="text-brand-purple" />,
    title: "Integrated Payroll",
    description: "Manage payroll seamlessly with automatic tax calculations and direct deposits."
  },
  {
    icon: <FileText size={32} className="text-brand-pink" />,
    title: "Quality Healthcare",
    description: "Provide your employees with access to high-quality healthcare coverage at competitive rates."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Small Businesses Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focus on growing your business while we handle the administrative complexities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
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
