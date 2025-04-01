
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Activity, Wifi, BarChart4 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand-blue">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Transforming Healthcare Through <span className="text-brand-blue">Technology</span></h2>
              <p className="text-gray-600 mb-6">
                Health tech uses advanced software, AI, and data tools to improve healthcare delivery, outcomes, and efficiency—creating better experiences for patients and providers alike.
              </p>
              <div>
                <Link to="/quote">
                  <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Key Innovations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>AI-powered diagnostics and personalized care</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>IoT devices for real-time health monitoring</span>
                </li>
                <li className="flex items-start">
                  <Wifi className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Telehealth solutions for remote care access</span>
                </li>
                <li className="flex items-start">
                  <BarChart4 className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Data analytics for improved outcomes</span>
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
