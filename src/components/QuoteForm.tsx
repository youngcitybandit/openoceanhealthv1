
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type FormStep = 'company' | 'contact' | 'coverage' | 'additional';

const QuoteForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>('company');
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    industry: '',
    numEmployees: '',
    companyZip: '',
    
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Coverage Details
    currentProvider: '',
    renewalDate: '',
    coverageType: '',
    
    // Additional Information
    additionalInfo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep === 'company') {
      if (!formData.companyName || !formData.industry || !formData.numEmployees) {
        toast({
          title: "Required Fields",
          description: "Please complete all required fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep('contact');
    } else if (currentStep === 'contact') {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast({
          title: "Required Fields",
          description: "Please complete all required fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep('coverage');
    } else if (currentStep === 'coverage') {
      setCurrentStep('additional');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 'contact') {
      setCurrentStep('company');
    } else if (currentStep === 'coverage') {
      setCurrentStep('contact');
    } else if (currentStep === 'additional') {
      setCurrentStep('coverage');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "Thank you! We'll be in touch shortly.",
    });
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Get a Quote</h1>
        <p className="text-gray-600 text-center mb-8">Complete the form below for a personalized healthcare quote for your business.</p>
        
        {/* Progress Indicator */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {['company', 'contact', 'coverage', 'additional'].map((step, index) => (
            <div 
              key={step} 
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 relative ${
                currentStep === step 
                  ? 'bg-brand-blue text-white' 
                  : (index + 1) <= ['company', 'contact', 'coverage', 'additional'].indexOf(currentStep) + 1
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 'company' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input 
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('industry', value)}
                  value={formData.industry}
                >
                  <SelectTrigger id="industry">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="numEmployees">Number of Employees *</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('numEmployees', value)}
                  value={formData.numEmployees}
                >
                  <SelectTrigger id="numEmployees">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501+">501+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="companyZip">ZIP Code</Label>
                <Input 
                  id="companyZip"
                  name="companyZip"
                  value={formData.companyZip}
                  onChange={handleInputChange}
                  placeholder="e.g., 94103"
                />
              </div>
            </div>
          )}
          
          {currentStep === 'contact' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., (555) 555-5555"
                />
              </div>
              
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input 
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          
          {currentStep === 'coverage' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Coverage Details</h2>
              
              <div>
                <Label htmlFor="currentProvider">Current Healthcare Provider</Label>
                <Input 
                  id="currentProvider"
                  name="currentProvider"
                  value={formData.currentProvider}
                  onChange={handleInputChange}
                  placeholder="If applicable"
                />
              </div>
              
              <div>
                <Label htmlFor="renewalDate">Renewal Date</Label>
                <Input 
                  id="renewalDate"
                  name="renewalDate"
                  type="date"
                  value={formData.renewalDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <Label htmlFor="coverageType">Coverage Type</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('coverageType', value)}
                  value={formData.coverageType}
                >
                  <SelectTrigger id="coverageType">
                    <SelectValue placeholder="Select coverage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="dental">Dental</SelectItem>
                    <SelectItem value="vision">Vision</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {currentStep === 'additional' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
              
              <div>
                <Label htmlFor="additionalInfo">Any specific requirements or questions?</Label>
                <Textarea 
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Please tell us about any specific requirements or questions you might have..."
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full cta-gradient"
                  size="lg"
                >
                  Submit Quote Request
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you consent to being contacted by our team. We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </div>
          )}
          
          {currentStep !== 'additional' && (
            <div className="flex justify-between pt-4">
              {currentStep !== 'company' && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={handlePreviousStep}
                >
                  Previous
                </Button>
              )}
              <Button 
                type="button" 
                className={`${currentStep === 'company' ? 'w-full' : ''} cta-gradient`}
                onClick={handleNextStep}
                style={{ marginLeft: currentStep === 'company' ? '0' : 'auto' }}
              >
                Continue
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
