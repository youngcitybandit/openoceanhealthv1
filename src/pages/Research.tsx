
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, Book, ArrowRight } from 'lucide-react';

const Research = () => {
  const articles = [
    {
      title: "Small Business Health Insurance Burdens",
      source: "JP Morgan Chase Institute",
      description: "This research examines the financial impact of health insurance costs on small businesses and their employees.",
      link: "https://www.jpmorganchase.com/institute/all-topics/business-growth-and-entrepreneurship/small-business-health-insurance-burdens",
      image: "https://via.placeholder.com/400x225"
    },
    {
      title: "The Future of Healthcare for Small Businesses",
      source: "Healthcare Research Institute",
      description: "An exploration of emerging trends in small business healthcare solutions and their long-term implications.",
      link: "#",
      image: "https://via.placeholder.com/400x225"
    },
    {
      title: "Cost-Effective Benefits for SMBs",
      source: "Business Health Coalition",
      description: "Strategies for small and medium businesses to provide comprehensive benefits while managing costs.",
      link: "#",
      image: "https://via.placeholder.com/400x225"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Research & Articles
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explore our curated collection of healthcare research, industry trends, and insights for small businesses and healthcare providers.
              </p>
              <div className="flex items-center gap-2">
                <Book className="text-brand-blue" />
                <span className="text-lg font-medium text-brand-blue">Latest research and insights</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{article.source}</div>
                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <a 
                      href={article.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-brand-blue hover:text-brand-teal transition-colors font-medium"
                    >
                      Read More <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">Looking for more resources? Check back regularly as we add new research and articles.</p>
              <Link to="/quote">
                <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-6 py-2">
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
