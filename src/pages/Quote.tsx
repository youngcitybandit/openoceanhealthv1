
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import ChatBox from '@/components/ChatBox';

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 pb-16">
        <QuoteForm />
        <ChatBox />
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
