
import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, Handshake, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface CounterItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay?: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);


  const {t} = useTranslation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds for the count animation
      const startTime = Date.now();
      
      const animateCount = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(value); // Ensure we end at the exact value
        }
      };
      
      requestAnimationFrame(animateCount);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div 
      ref={counterRef} 
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-lg transform transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="text-primary mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold mb-2">{count}+</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const CounterSection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="page-container">
        <h2 className="section-title">{t("Statistics")}</h2>
        <p className="section-subtitle">
        {t("TogetherAchieved")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
          <CounterItem 
            icon={<Calendar className="h-10 w-10  " />} 
            value={30} 
            label={t("ProgramsMade")}
            delay={0}
          />
        
          <CounterItem 
            icon={<Handshake className="h-10 w-10" />} 
            value={4} 
            label={t("PartnerShips")} 
            delay={400}
          />
          <CounterItem 
            icon={<Users className="h-10 w-10" />} 
            value={100} 
            label={t("ActiveMembers")} 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
