
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from "../../images/Ssc.png"
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
              A community of Syrian students at FSM University, providing support, events, and opportunities for collaboration.
            </p>
            <div className="flex space-x-4">
            
              <a href="https://www.instagram.com/ssc.fsmvu/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/" className="text-foreground/60 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/rules" className="text-foreground/60 hover:text-primary transition-colors">
                Rules
              </Link>
            
              <Link to="/partners" className="text-foreground/60 hover:text-primary transition-colors">
                Partners
              </Link>
              <Link to="/login" className="text-foreground/60 hover:text-primary transition-colors">
                Join Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-foreground/60">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>FSM University Campus, Student Activities Building, Room 204</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+216 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contact@syrianstudentsclub.com" className="hover:text-primary transition-colors">
                  contact@syrianstudentsclub.com
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
