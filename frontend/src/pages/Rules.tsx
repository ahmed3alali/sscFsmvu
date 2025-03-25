
import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const Rules = () => {

  const {t} = useTranslation();
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const rules = [
    {
      title: "Membership Requirements",
      description: "All Syrian students at FSM University are eligible to join the club. Members must maintain academic good standing and adhere to the university's code of conduct.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Participation",
      description: "Members are expected to actively participate in club meetings and events. Regular attendance is encouraged to foster community building and ensure the success of club initiatives.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Conduct",
      description: "All members must demonstrate respect towards fellow members, university staff, and guests. Discrimination or harassment of any kind will not be tolerated.",
      icon: <AlertCircle className="h-6 w-6" />
    },
    {
      title: "Communication",
      description: "Official club communications will be sent via email and posted on the club's social media platforms. Members are responsible for staying informed about club activities.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Leadership Positions",
      description: "Elections for leadership positions will be held annually. Any member in good standing is eligible to run for a position after being a member for at least one semester.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Resources",
      description: "Club resources, including funds and equipment, are to be used exclusively for official club activities and must be approved by the club leadership.",
      icon: <AlertCircle className="h-6 w-6" />
    },
    {
      title: "Events",
      description: "Members planning to organize an event must submit a proposal to the club leadership at least two weeks in advance for approval and coordination.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Community Service",
      description: "The club is committed to community service. Members are encouraged to participate in at least one community service activity per semester.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" 
          alt="Rules and Policies" 
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
             
             {t("Rules")}






            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          


            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="section">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <div 
                key={rule.title}
                className={cn(
                  "p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all animate-slideUp card-hover",
                  index % 2 === 0 ? "bg-background" : "bg-secondary"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary flex-shrink-0">
                    {rule.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Policy Information */}
          <div className="mt-16 bg-secondary p-8 rounded-lg border border-border animate-slideUp" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>These rules are subject to revision at the discretion of the club leadership and with approval from university administration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>Violations of club rules may result in disciplinary actions, including suspension or termination of membership.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>All club activities must comply with university policies and local regulations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span>For questions or concerns regarding these rules, please contact the club leadership.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Rules;
