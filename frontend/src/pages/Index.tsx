
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Carousel from '@/components/home/Carousel';
import CounterSection from '@/components/home/CounterSection';
import TeamSection from '@/components/home/TeamSection';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import fsm1 from "../images/1.png";
import fsmBasic from "../images/2.png"
import { Helmet } from "react-helmet-async";
import workshop_first from "../images/warsheh1.png"
import workshop_second from "../images/warsheh2.png"
import { useTranslation } from 'react-i18next';
import { HashLink } from "react-router-hash-link";
import RulesSection from '@/components/home/RulesSection';
const Index = () => {

  const {t} = useTranslation();
  // Images for our carousel
  const carouselImages = [
    fsmBasic,
    fsm1
   
  ];  

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
   
    <MainLayout>

<Helmet>
<title>{t("HomeHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel images={carouselImages} />
        
        <div className="absolute inset-0 flex items-center">
          <div className="page-container">
            <div className="max-w-2xl space-y-6 animate-slideDown">
             
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground ">
             
{t("caroselHeader")}


              </h1>
              <p className="text-xl text-foreground/80 max-w-lg font-bold">
              {t("caroselSubHeader")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 bg-red-600">
                  <a href='https://forms.gle/XkxSPeSHwPW5C4QA8'>
                  {t("joinUsBtn")}
                  </a>
               
                </Button>
                <Link to="/partners">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="rounded-full px-8 bg-background/30 backdrop-blur-sm hover:bg-background/50"
                  >
                   {t("OurPartnersBtn")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id='aboutUs'>
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideUp">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              {t("AboutUsBtn")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t("supportSYRheader")}
              </h2>
              <p className="text-muted-foreground">
              {t("supportSub")}
              </p>
              <p className="text-muted-foreground">
              {t("supportSub_second")}
              </p>
              <div className="pt-4">
                <Link to='/faaliyet'>
                  <Button 
                    className="rounded-full px-8"
                  >
                    
                    {t("Faaliyet")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </Link>
              </div>
            </div>
            <div className="relative h-[500px] animate-slideUp" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={workshop_first}
                  alt="Students collaborating" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-lg overflow-hidden shadow-2xl border-8 border-background">
                <img 
                  src={workshop_second} 
                  alt="Club meeting" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <RulesSection />
    </MainLayout>
  );
};

export default Index;
