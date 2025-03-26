
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Rules from "./pages/Rules.tsx";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./i18n.ts"
import './index.css'

import Faaliyetler from "./pages/Faaliyetler.tsx";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
        
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faaliyet" element={<Faaliyetler/>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
   
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
