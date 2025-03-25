
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      className="group bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
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
          Visit Website
          <ExternalLink className="ml-1 h-4 w-4" />
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
      name: "FSM University Student Affairs",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "The Student Affairs department at FSM University supports student clubs with resources, guidance, and administrative assistance to help them flourish.",
      website: "https://example.com"
    },
    {
      name: "Syrian Cultural Society",
      logo: "https://images.unsplash.com/photo-1581087698742-eb2a0c3007d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "A non-profit organization dedicated to promoting Syrian culture, heritage, and arts through exhibitions, performances, and educational programs.",
      website: "https://example.com"
    },
    {
      name: "International Student Association",
      logo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      description: "A university-wide organization that brings together students from around the world to celebrate diversity and foster cross-cultural understanding.",
      website: "https://example.com"
    },
    {
      name: "Career Development Center",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Provides career guidance, job search assistance, and professional development opportunities for students to prepare for successful careers.",
      website: "https://example.com"
    }
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
              Our Partners
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organizations that support and collaborate with the Syrian Students Club
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in partnering with the Syrian Students Club? We're always looking for organizations and businesses to collaborate with on events, initiatives, and opportunities for our members.
            </p>
            <Button className="rounded-full px-8 py-6 text-base">
              Contact Us About Partnership
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;
