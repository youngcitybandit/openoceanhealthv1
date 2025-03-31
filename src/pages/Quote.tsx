
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companySize: '',
    state: '',
    currentlyInsured: '',
    insuranceRenewalDate: '',
    hearAboutUs: '',
    agreeTerms: false
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setStep(prevStep => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to an API
    console.log("Form submitted:", formData);
    // Navigate to a confirmation page or show a success message
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-teal text-white">
                <CardTitle className="text-2xl">Get a Custom Quote</CardTitle>
                <CardDescription className="text-white/90">
                  Tell us about your company for a personalized quote
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">Step {step} of 3</p>
                    <p className="text-sm font-medium text-gray-600">{Math.round((step / 3) * 100)}% Complete</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-brand-blue to-brand-teal h-2 rounded-full" 
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="text-xl font-semibold mb-4">About Your Business</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="companyName">Company Name*</Label>
                          <Input 
                            id="companyName" 
                            value={formData.companyName}
                            onChange={(e) => handleChange('companyName', e.target.value)}
                            placeholder="Enter your company name"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="companySize">Number of Employees*</Label>
                          <Select 
                            value={formData.companySize} 
                            onValueChange={(value) => handleChange('companySize', value)}
                          >
                            <SelectTrigger id="companySize">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2-10">2-10 employees</SelectItem>
                              <SelectItem value="11-25">11-25 employees</SelectItem>
                              <SelectItem value="26-50">26-50 employees</SelectItem>
                              <SelectItem value="51-100">51-100 employees</SelectItem>
                              <SelectItem value="101+">101+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="state">State*</Label>
                          <Select 
                            value={formData.state} 
                            onValueChange={(value) => handleChange('state', value)}
                          >
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              {states.map((state) => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label>Is your company currently insured?*</Label>
                          <RadioGroup 
                            value={formData.currentlyInsured}
                            onValueChange={(value) => handleChange('currentlyInsured', value)}
                            className="flex flex-col space-y-2 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="insured-yes" />
                              <Label htmlFor="insured-yes" className="cursor-pointer">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="insured-no" />
                              <Label htmlFor="insured-no" className="cursor-pointer">No</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {formData.currentlyInsured === 'yes' && (
                          <div>
                            <Label htmlFor="insuranceRenewalDate">When does your current insurance renew?*</Label>
                            <Select 
                              value={formData.insuranceRenewalDate} 
                              onValueChange={(value) => handleChange('insuranceRenewalDate', value)}
                            >
                              <SelectTrigger id="insuranceRenewalDate">
                                <SelectValue placeholder="Select renewal date" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-30 days">In the next 30 days</SelectItem>
                                <SelectItem value="31-60 days">31-60 days</SelectItem>
                                <SelectItem value="61-90 days">61-90 days</SelectItem>
                                <SelectItem value="91+ days">91+ days from now</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button 
                          type="button" 
                          onClick={handleNext}
                          className="cta-gradient text-white hover:opacity-90 transition-opacity px-6"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="text-xl font-semibold mb-4">Your Contact Information</h3>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name*</Label>
                            <Input 
                              id="firstName" 
                              value={formData.firstName}
                              onChange={(e) => handleChange('firstName', e.target.value)}
                              placeholder="First name"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name*</Label>
                            <Input 
                              id="lastName" 
                              value={formData.lastName}
                              onChange={(e) => handleChange('lastName', e.target.value)}
                              placeholder="Last name"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address*</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="you@example.com"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phoneNumber">Phone Number*</Label>
                          <Input 
                            id="phoneNumber" 
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => handleChange('phoneNumber', e.target.value)}
                            placeholder="(555) 555-5555"
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button 
                          type="button" 
                          onClick={handleBack}
                          variant="outline"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={handleNext}
                          className="cta-gradient text-white hover:opacity-90 transition-opacity px-6"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <h3 className="text-xl font-semibold mb-4">Final Details</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                          <Select 
                            value={formData.hearAboutUs} 
                            onValueChange={(value) => handleChange('hearAboutUs', value)}
                          >
                            <SelectTrigger id="hearAboutUs">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="search">Online Search</SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
                              <SelectItem value="broker">Insurance Broker</SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                          <Checkbox 
                            id="agreeTerms" 
                            checked={formData.agreeTerms as boolean}
                            onCheckedChange={(checked) => handleChange('agreeTerms', Boolean(checked))}
                            className="mt-1"
                          />
                          <Label htmlFor="agreeTerms" className="text-sm">
                            By submitting this form, I agree to the Privacy Policy and Terms of Service.
                            I consent to receiving emails, calls, and texts regarding our services.
                          </Label>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button 
                          type="button" 
                          onClick={handleBack}
                          variant="outline"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="cta-gradient text-white hover:opacity-90 transition-opacity px-6"
                          disabled={!formData.agreeTerms}
                        >
                          Get Your Quote
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Why Get a Quote?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <p>Personalized rates based on your company's specific needs</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <p>Compare multiple plan options side by side</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-brand-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <p>No obligation to purchase - explore your options risk-free</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
