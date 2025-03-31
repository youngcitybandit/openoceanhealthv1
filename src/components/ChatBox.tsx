
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, X, Send } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Add welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && !hasWelcomed) {
      const welcomeMessages = [
        {
          text: "Welcome to our quote request! How can I assist you with getting a quote today?",
          isUser: false,
          timestamp: new Date()
        },
        {
          text: "I can help guide you through our quote form or answer any questions about our services.",
          isUser: false,
          timestamp: new Date(Date.now() + 1000)
        }
      ];
      
      // Add first welcome message immediately
      setMessages([welcomeMessages[0]]);
      
      // Add second welcome message after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, welcomeMessages[1]]);
      }, 1500);
      
      setHasWelcomed(true);
    }
  }, [isOpen, hasWelcomed]);

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    // Chat bot logic to provide relevant responses based on user input
    if (message.includes('quote') || message.includes('pricing')) {
      return "Our healthcare quotes are customized based on your business size and needs. Please complete the quote form, and we'll provide you with detailed pricing options.";
    } else if (message.includes('coverage') || message.includes('benefits')) {
      return "We offer comprehensive healthcare coverage including medical, dental, vision, and mental health benefits. Our plans are designed to meet the diverse needs of your employees.";
    } else if (message.includes('how') && message.includes('works')) {
      return "Our process is simple: fill out the quote form with your company information, and our team will analyze your needs to provide customized healthcare options for your business.";
    } else if (message.includes('contact') || message.includes('speak') || message.includes('representative')) {
      return "You can reach our customer service team at (800) 123-4567 or email us at support@healthcare.com. Would you like me to schedule a callback from one of our representatives?";
    } else if (message.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! How can I help you with your healthcare coverage needs today?";
    } else {
      return "Thank you for your message. If you have specific questions about our healthcare plans or the quote process, I'm happy to assist. You can also call us at (800) 123-4567 for immediate assistance.";
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot thinking with a delay before responding
    setTimeout(() => {
      const botReply = {
        text: getBotResponse(userMessage.text),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button 
            className="rounded-full h-14 w-14 shadow-lg cta-gradient flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[70vh] max-w-md mx-auto">
          <DrawerHeader>
            <div className="flex items-center justify-between">
              <DrawerTitle>Chat with us</DrawerTitle>
              <DrawerClose asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          
          <div className="px-4 flex-1 overflow-y-auto mb-4 h-[calc(70vh-140px)]">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`mb-4 max-w-[80%] ${msg.isUser ? 'ml-auto' : 'mr-auto'}`}
              >
                <div 
                  className={`p-3 rounded-lg ${
                    msg.isUser 
                      ? 'bg-brand-blue text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <div 
                  className={`text-xs text-gray-500 mt-1 ${
                    msg.isUser ? 'text-right' : 'text-left'
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 max-w-[80%] mr-auto">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none flex">
                  <span className="animate-pulse mr-1">•</span>
                  <span className="animate-pulse mr-1" style={{ animationDelay: '0.2s' }}>•</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>•</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
                className="resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                onClick={handleSendMessage}
                className="cta-gradient"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ChatBox;
