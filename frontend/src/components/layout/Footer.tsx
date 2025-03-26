
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from "../../images/Ssc.png"
import { t } from 'i18next';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="font-bold text-xl w-40 h-40">
             <img src={logo}></img>
            </div>
            <p className="text-muted-foreground max-w-md">
            {t("supportSub")}
            </p>
            <div className="flex space-x-4">
            
              <a href="https://www.instagram.com/ssc.fsmvu/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            
            </div>
          </div>

        

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("ContactUs")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-foreground/60">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{t("UniversityPlace")}</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Phone className="phoneNumber h-5 w-5 flex-shrink-0" />
                <span>{t("PhoneContact")}</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="Sscfsmvu@gmail.com" className="hover:text-primary transition-colors">
                Sscfsmvu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Syrian Students Club - FSM University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
