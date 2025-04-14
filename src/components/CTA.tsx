
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Activity, Wifi, BarChart4, Heart, Clock, Globe, Flame } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand-blue">
          <div className="grid md:grid-cols-3">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Transforming Healthcare Through <span className="text-brand-blue">Technology</span></h2>
              <p className="text-gray-600 mb-6">
                Health tech uses advanced software, AI, and data tools to improve healthcare delivery, outcomes, and efficiency—creating better experiences for patients and providers alike.
              </p>
              <div>
                <Link to="/quote">
                  <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-6 py-2">
                    Explore Benefits
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-6 md:p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Key Innovations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>AI-powered diagnostics and personalized care</span>
                </li>
                <li className="flex items-start">
                  <Activity className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>IoT devices for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <Wifi className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Telehealth solutions for remote care</span>
                </li>
                <li className="flex items-start">
                  <BarChart4 className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Data analytics for improved outcomes</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3 text-brand-blue">Impact & Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 mr-2 flex-shrink-0 text-brand-teal" />
                  <span className="text-gray-700">Improved patient outcomes through earlier diagnosis</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0 text-brand-teal" />
                  <span className="text-gray-700">Increased efficiency and reduced costs</span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 mr-2 flex-shrink-0 text-brand-teal" />
                  <span className="text-gray-700">Enhanced access to care for remote areas</span>
                </li>
                <li className="flex items-start">
                  <Flame className="h-5 w-5 mr-2 flex-shrink-0 text-brand-teal" />
                  <span className="text-gray-700">Personalized medicine tailored to patients</span>
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
