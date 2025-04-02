
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const RulesSection: React.FC = () => {

 

  const {t} = useTranslation()
  return (
    <section className="section bg-secondary" id='rules'>
      <div className="page-container">
        <h2 className="section-title">{t("Rules")}</h2>
        <p className="section-subtitle">

        {t("RulesSub")}




        </p>


<div className="linkCont flex justify-center text-[12px]">


<a className='underline' href='/rules'>

{t("RulesSubSecond")}

</a>

</div>

     
      </div>
    </section>
  );
};

export default RulesSection;
