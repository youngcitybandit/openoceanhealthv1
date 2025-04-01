
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Employers from "./pages/Employers";
import Patients from "./pages/Patients";
import Brokers from "./pages/Brokers";
import Providers from "./pages/Providers";
import Locations from "./pages/Locations";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/research" element={<Research />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
