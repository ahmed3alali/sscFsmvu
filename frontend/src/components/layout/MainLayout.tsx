
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


interface MainLayoutProps {
  children: React.ReactNode;
}

// Wrapper component that uses the language context
const MainLayoutContent: React.FC<MainLayoutProps> = ({ children }) => {

  
  return (
    <div className={"flex flex-col min-h-screen"}>
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

// Main layout that provides the language context
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (

      <MainLayoutContent>{children}</MainLayoutContent>
    
  );
};

export default MainLayout;
