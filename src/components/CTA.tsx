
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand-pink">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Ready to <span className="text-brand-pink">simplify</span> your business operations?</h2>
              <p className="text-gray-600 mb-6">
                Join thousands of small businesses that trust us with their payroll, HR, and healthcare needs.
              </p>
              <div>
                <Button className="cta-gradient-pink text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                  Get Started Now
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-brand-pink to-brand-magenta-pink p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Benefits at a Glance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Simplified administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tax savings opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive health benefits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
