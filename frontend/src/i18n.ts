import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      caroselHeader: "Syrian Students Club",
      caroselSubHeader:"     Building community, creating opportunities, and preserving cultural heritage for Syrian students at FSM University.",
      
      joinUsBtn:"Join Us",
      OurPartnersBtn:"Our Partners",

      
      
      supportSYRheader:"Supporting Syrian Students at FSM University",
      supportSub:"      The Syrian Students Club at FSM University serves as a home away from home for Syrian students, offering academic support, cultural events, and networking opportunities.",
      supportSub_second: " Our mission is to foster a sense of community, promote cultural awareness, and help students succeed academically and professionally."
   
,
      MeetTeamBtn:"Meet Our Team",
      AboutUsBtn:"About Us",

      Statistics:"Statistics",
      TogetherAchieved:"   Celebrating our collective journey and the milestones we've achieved together"
      ,ProgramsMade:"Programs Made",
      PartnerShips:"Partnerships",
      ActiveMembers:"Active Members",
      Mamdouh:"Mamdouh Al Masri",
      President:"President",
      Diaa: "Diaa",
      VicePresident:"Vice Presedent",
      Shahid: "Shahid Akbazi",
      Media: "Media",
OurTeam: "Our Team",

TeamsHeader: "Meet the dedicated individuals who lead our student club",
ContactUs: "Contact Us",
SubtitleContact:" Get in touch with us and become part of our community",
Location:"Location",
UniversityPlace:"FSM University Campus, Student Activities Building, Room 204",
PhoneHeader:"Phone",
PhoneContact:"+90 535 732 09 83",
OfficeHours:"Avaliabe Hours ",
DaysAvaliable:" Monday - Friday: 9:00 AM - 5:00 PM",
OurEmailContact:"Email",
SendUsMessageBtn:"Send us a message",
Nooridin:"Noordin Abozaid",
Horani:"Mohammed Horani",
NoorJob: "Relations Management",
HoraniJob: "Secretariat",
Rules:" Club Rules & Policies",
SubRulesHeader:"    Guidelines to ensure a positive and productive environment for all members",





    },
  },
  ar: {
    translation: {
      caroselHeader: "نادي تجمع الطلبة السوريين",
      caroselSubHeader: "بناء المجتمع، خلق الفرص، والحفاظ على التراث الثقافي للطلاب السوريين في جامعة FSM.",
      supportSYRheader :"دعمنا للطلاب السوريين في جامعتنا",
      supportSub: "نادي الطلاب السوريين في جامعة FSM هو بمثابة وطن ثانٍ للطلاب السوريين، حيث يوفر الدعم الأكاديمي، وينظم الفعاليات الثقافية، ويوفر فرصًا للتواصل والتطوير."
 ,supportSub_second:"تتمثل رسالتنا في تعزيز روح المجتمع، ونشر الوعي الثقافي، ومساعدة الطلاب على تحقيق النجاح الأكاديمي والمهني."
 
 ,joinUsBtn:"انضم لنا ",
 OurPartnersBtn:"الشركاء",
 MeetTeamBtn:"تعرف على فريقنا",
   AboutUsBtn:"من نحن",

   Statistics:"الإحصائيات",
   TogetherAchieved:"  انجازاتنا سويا"
   ,ProgramsMade:"فعالية",
   PartnerShips:"شراكة",
   ActiveMembers:"عضو مشترك",
   Mamdouh:"ممدوح المصري",
   President:"رئيس التجمع",
   Diaa: "ضياء أزرق",
   VicePresident:"نائبة الرئيس",
   Shahid: "شهد أكبازي",
   Media: "الإعلام",
OurTeam: "فريقنا",

TeamsHeader: "تعرف على الأفراد المخلصين الذين يقودون نادي الطلاب لدينا.",



ContactUs: " تواصل معنا",
SubtitleContact:" انضم الينا وكن مساهما في ترك بصمتك الخاصة",
Location:"موقعنا",
UniversityPlace:" جامعة السلطان محمد الفاتح - حرم توب كابي",
PhoneHeader:"الهاتف",
PhoneContact:"+90 535 732 09 83",
OfficeHours:"ساعات الدوام ",
DaysAvaliable:"الاثنين - الجمعة 9 صباحا حتى 5 مساء",
OurEmailContact:"البريد الالكتروني",
SendUsMessageBtn:"ارسل رسالة ",
Nooridin:"نور الدين أبو زيد",
NoorJob: "مسؤول العلاقات",
Horani:"محمد حواراني",
HoraniJob: "أمانة السر",
Rules:" النظام الداخلي",
SubRulesHeader:"تعرف على اساسات نظامنا الداخلي",
AboutUs:""





    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // Default language
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

// Function to update text direction
const updateDirection = (lng: string) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
};

// Listen for language changes and update direction
i18n.on("languageChanged", updateDirection);
updateDirection(i18n.language); // Set initial direction

export default i18n;
