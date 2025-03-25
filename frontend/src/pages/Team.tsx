
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  photo, 
  email, 
  socialLinks = {},
  index
}) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-border animate-slideUp",
        index % 2 === 0 ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr] md:flex-row-reverse"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn(
        "space-y-4",
        index % 2 === 0 ? "md:order-1" : "md:order-2"
      )}>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
        
        <div className="flex items-center pt-4">
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            {email}
          </a>
        </div>
        
        <div className="flex space-x-3 pt-2">
          {socialLinks.facebook && (
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1877F2] transition-colors"
              aria-label={`${name}'s Facebook profile`}
            >
              <Facebook className="h-5 w-5" />
            </a>
          )}
          {socialLinks.instagram && (
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#E4405F] transition-colors"
              aria-label={`${name}'s Instagram profile`}
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className={cn(
        "flex justify-center md:justify-end",
        index % 2 === 0 ? "md:order-2" : "md:order-1 md:justify-start"
      )}>
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-lg">
          <img 
            src={photo} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Ahmad Ali",
      role: "President",
      bio: "",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      email: "ahmad.ali@example.com",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Fatima Hassan",
      role: "Vice President",
      bio: "Fatima is studying Business Administration with a minor in International Relations. She oversees the club's partnerships and coordinates cultural events. With her excellent organizational skills, she ensures that all club activities run smoothly and members have a positive experience.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      email: "fatima.hassan@example.com",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Omar Mahmoud",
      role: "Secretary",
      bio: "Omar is majoring in Communications and handles the club's social media presence and member communications. He is passionate about preserving Syrian culture and organizes cultural workshops for club members and the wider university community.",
      photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      email: "omar.mahmoud@example.com",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582213782179-e0d4d3cce4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
          alt="Our Team" 
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About Us
            </h1>
            A Brief explination of our community
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section">
        <div className="page-container">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              index={index}
            />
          ))}

          {/* Join the Team CTA */}
          <div className="mt-16 text-center animate-slideUp" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in taking on a leadership role in the Syrian Students Club? 
              We're always looking for passionate individuals to help our community grow.
            </p>
            <Button className="rounded-full px-8 py-6 text-base">
              Apply for a Position
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Team;
