
import React from 'react';
import { FileCheck, HeartPulse, Award, Wallet } from 'lucide-react';

const providerBenefitsData = [
  {
    icon: <FileCheck size={32} className="text-brand-blue" />,
    title: "Simplified Claims",
    description: "Streamlined reimbursement processes and reduced administrative burden for faster payments."
  },
  {
    icon: <HeartPulse size={32} className="text-brand-teal" />,
    title: "Focus on Care",
    description: "Spend more time with patients and less time on paperwork with our optimized workflows."
  },
  {
    icon: <Award size={32} className="text-brand-blue" />,
    title: "Quality Recognition",
    description: "Be rewarded for providing high-quality, evidence-based care through our value-based programs."
  },
  {
    icon: <Wallet size={32} className="text-brand-teal" />,
    title: "Competitive Rates",
    description: "Enjoy fair and timely reimbursements that recognize the value of your services."
  }
];

const ProvidersChooseUs = () => {
  return (
    <section className="py-16 bg-slate-50 relative">
      {/* Teal accent decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Providers <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to deliver excellent care while growing your practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providerBenefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-teal/30 group`}
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

export default ProvidersChooseUs;
