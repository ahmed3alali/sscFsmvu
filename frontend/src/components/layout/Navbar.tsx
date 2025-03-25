
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from "../../../src/images/Ssc.png"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
   {name:"Me" , path:"hello"},
   {name:"Me" , path:"hello"},
   {name:"Me" , path:"hello"},
   
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled || mobileMenuOpen ? 'glass shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="page-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 z-10"
            aria-label="Syrian Students Club"
          >
            <div className="font-bold text-xl tracking-tight w-20 h-20">
            <img src={logo}></img>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className={cn("hidden md:flex items-center space-x-8 space-x-reverse")}>
            <div className={cn("flex space-x-6 space-x-reverse")}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'nav-link', 
                    isActive(link.path) && 'active'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
      
            
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-10 space-x-4">
         
            <button
              className="focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          <div
            className={cn(
              'fixed inset-0 bg-background/80 backdrop-blur-lg z-0 transition-opacity duration-300 md:hidden',
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-2xl font-medium',
                    isActive(link.path) ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
             
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
