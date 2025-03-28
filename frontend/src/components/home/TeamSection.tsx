
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { t } from 'i18next';

interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  photo, 
  socialLinks = {}, 
  delay = 0 
}) => {
  return (
    <div 
      className="flex flex-col items-center text-center animate-slideUp" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative mb-6">
       
        
        {/* Social media links */}
       
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: t("Mamdouh"),
      role: t("President"),
      photo: "",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: t("Diaa"),
      role: t("VicePresident"),
      photo: "",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: t("Shahid"),
      role: t("Media"),
      photo: "",
      socialLinks:{
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },

    {
      name: t("Nooridin"),
      role: t("NoorJob"),
      photo: "",
      socialLinks:{
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },

    {
      name: t("Horani"),
      role: t("HoraniJob"),
      photo: "",
      socialLinks:{
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <section className="section" id='team'>
      <div className="page-container">
        <h2 className="section-title">{t("OurTeam")}</h2>
        <p className="section-subtitle">
        {t("TeamsHeader")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {teamMembers.map((member, index) => (
    <div 
      key={member.name} 
      className={cn(
        member.name === t("Horani") ? "" : "",
        member.name === t("Nooridin") ? "" : "",
        "flex justify-center"
      )}
    >
      <TeamMember 
        {...member}
        delay={index * 200}
      />
    </div>
  ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
