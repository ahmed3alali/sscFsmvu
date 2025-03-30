
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { t } from 'i18next';
import takween from "../images/takween.png"
import itihad from "../images/syrianItihad.png"
import tibyan from "../images/tibyan.png"
import { Helmet } from 'react-helmet-async';
interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  website: string;
  index: number;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ 
  name, 
  logo, 
  description, 
  website, 
  index 
}) => {
  return (




<div 
      className="group bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp "
      style={{ animationDelay: `${index * 100}ms` }}
    >


<Helmet>
<title>{t("PartnersHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
      <div className="h-48 overflow-hidden">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          {t("VisitWebsite")}
          <ExternalLink className="ml-1 rtl:mr-1 h-4 w-4" />
        </a>
      </div>
    </div>



    
  );
};

const Partners = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: (t("SyrianGeneralItihad")),
      logo: itihad,
      description: (t("itihadExplination")),
      website: "https://www.instagram.com/guofsyrians?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
    },
    {
      name: (t("Tibyan")),
      logo: tibyan,
      description: (t("WhoIsTibyan")),
      website: "https://app.tibian.org.tr"
    },
    {
      name: (t("Takween")),
      logo: takween,
      description: (t("TakweenExp")),
      website: "https://www.instagram.com/takweenprint/"
    },
    
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Our Partners" 
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("OurPartnersBtn")}
            </h1>
         
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                {...partner}
                index={index}
              />
            ))}
          </div>

          {/* Become a Partner CTA */}
          <div className="mt-16 py-12 px-8 bg-secondary rounded-lg border border-border text-center animate-slideUp" style={{ animationDelay: '400ms' }}>
            <h3 className="text-2xl font-bold mb-4">{t("BecomeAPartner")}</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("wantToBePartner")}
            </p>
            <Button className="rounded-full px-8 py-6 text-base">
              <a href="mailto:example@example.com">
              {t("ContactUs")}

              </a>
        
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;
