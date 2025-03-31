
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

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for reaching out! Feel free to fill out our quote form, and I'm here to help if you have questions.",
        "I'd be happy to help with that! You can continue with the quote form, or I can provide more information about our services.",
        "Great question! Our team is ready to provide you with the best healthcare coverage for your business needs."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botReply = {
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botReply]);
    }, 1000);
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
