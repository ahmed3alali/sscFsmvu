// App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";  // Import Provider from react-redux
import store from "./Redux/store.ts";  // Import the store from store.ts

import Index from "./pages/Index";
import Rules from "./pages/Rules.tsx";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./i18n.ts";
import './index.css';

import Faaliyetler from "./pages/Faaliyetler.tsx";
import { Announcements } from "./pages/Announcements.tsx";
import { AdminPanel } from "./pages/AdminPanel.tsx";
import Protection from "./protection/Protection.tsx";
import {HelmetProvider} from "react-helmet-async"

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>  {/* Wrap your app with the Provider */}
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HelmetProvider>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faaliyet" element={<Faaliyetler />} />
            <Route path="/login" element={<Login />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/admin" element={<Protection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>  
);

export default App;
