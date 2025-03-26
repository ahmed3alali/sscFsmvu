
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const {t} = useTranslation()
  return (
    <section className="section bg-secondary" id='contact'>
      <div className="page-container">
        <h2 className="section-title">{t("ContactUs")}</h2>
        <p className="section-subtitle">
 
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] animate-slideUp">
            <iframe
              title="Map location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.484498258412!2d28.91438690077209!3d41.01465499197045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb0054250dbf%3A0xe42f261f33be1672!2sFatih%20Sultan%20Mehmet%20Vak%C4%B1f%20%C3%9Cniversitesi%20M%C3%BChendislik%20FAk%C3%BCltesi!5e0!3m2!1sen!2str!4v1742919016881!5m2!1sen!2str" 
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slideUp " style={{ animationDelay: '200ms' }}>
            <div className="flex items-start space-x-4 ">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">  {t("Location")}      </h3>
                <p className="text-muted-foreground">
         

                {t("UniversityPlace")}  



                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("PhoneHeader")}</h3>
                <p className="phoneNumber text-muted-foreground">+90 535 732 09 83 </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2"> {t("OfficeHours")}   </h3>
                <p className="text-muted-foreground">{t("DaysAvaliable")}
                 <br />
              
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t("OurEmailContact")}</h3>
                <p className="text-muted-foreground">
                Sscfsmvu@gmail.com
                </p>
              </div>
            </div>

            <Button className="mt-6 w-full sm:w-auto rounded-full px-8 py-6 text-base">
            {t("SendUsMessageBtn")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
