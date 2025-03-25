
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

const NotFound = () => {
 
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="max-w-md text-center animate-fadeIn">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-bold mt-6 mb-4">   </h2>
        <p className="text-muted-foreground mb-8">
   

        </p>
        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse"
        )}>
          <Link to="/">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto rounded-full"
            >
              <Home className={cn("mr-2 h-4 w-4 ml-2 mr-0 rtl-mirror")} />
            
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className={cn(
              "flex items-center text-muted-foreground hover:text-foreground transition-color  flex-row-reverse"
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4 ml-2 mr-0 rtl-mirror" />
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
