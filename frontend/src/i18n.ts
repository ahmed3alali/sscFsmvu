import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      caroselHeader: "Syrian Students Club",
      caroselSubHeader:"     Building community, creating opportunities, and preserving cultural heritage for Syrian students at FSM University.",
      
      joinUsBtn:"Join Us",
      OurPartnersBtn:"Our Partners",

      SyrianGeneralItihad:"General Union Of Syrian Students",
      Tibyan: "Tibyan",
      Takween: "Takween Publishing House",
      
      
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
      Diaa: "Diaa Azraq",
      VicePresident:"Vice President",
      Shahid: "Shahid Akbazli",
      Media: "Media Manager ",
      Login:"Login",


OurTeam: "Our Team",

TeamsHeader: "Meet our Board of Directors ",
ContactUs: "Contact Us",
SubtitleContact:" Get in touch with us and become part of our community",
Location:"Location",
UniversityPlace:"FSM University - Topkapi Campus",
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
Home: "Home",
AboutUs:" About Us", 
Contact: "Contact Us",
Team:"Our Team",
Faaliyet : "Activites",
itihadExplination: "An independent, non-profit student union organization that represents Syrian students around the world. It is concerned with the current issues of Syrian students and their future, and works to prepare an educated Syrian generation for the transition to a modern national state.",

WhoIsTibyan:"Providing religious activities in a distinctive manner that suits young people and their interests, focusing on the Holy Quran through memorization, recitation, and contemplation, providing youth programs that target the intellectual aspect, providing a conservative incubator within the university environment, and providing support for youth activities."
,wantToBePartner : "Interested in partnering with the Syrian Students Club? We're always looking for organizations and businesses to collaborate with on events, initiatives, and opportunities for our members. "
,BecomeAPartner: "Become A Partner" ,
Announcements:"Announcements"  ,
Email:"Email",
Password:"Password",
ForgotPassword:"Forgot Password?",
EnterYourEmail:"Enter your email",
EnterYourPassword:"Enter your password",
BackHome:"Back Home",
LoggingIn:  "Logging in, Please Wait",
Welcome:"Welcome",
AddAnnouncement:"Post Announcement",
AnouncementTitle:"Announcement Title",
AnouncementExp:"Announcement Explination",
NoFile:"No file selected",


WebsiteSettings:"Website settings",
ManageAnouncements:"Manage Announcements",
NoAnnouncementsAv:"No announcements Avaliable",
Logout:"Logout",
AnnouncementAdded:"Announcement Posted ! ",
TakweenExp:"Takween Printing Press offers a special 10% discount to the Syrian Students Club at FSM on all publications until the end of the year."
,VisitWebsite:"Visit Website"
,Insta:"SSC.FSMVU",
DeleteAnnouncement:"Delete Announcement",
InvalidEmailOrPassword:"Invalid Email Or Password",
announcementDeleted:"Announcement Deleted Successfully",
HomeHelmet: "Home Page - SSC FSMVU",
AnnouncementHelmet:"Announcements - SSC FSMVU",
PartnersHelmet:"Our Partners - SSC FSMVU",
RulesHelmet:"Rules - SSC FSMVU",
AdminPanelHelmet:"Admin Panel - SSC FSMVU",
LoginHelmet:"Login - SSC FSMVU",
YearOfProduction: "© SSC FSMVU - 2025",

RulesSubSecond:"Take a look at our guidelines",
RulesSub:"An approach towards building and renewal.",
DownloadRulesMessage: "This file contains all details related to our rules and guidelines.",
DownloadPDF:"Download PDF"
},
  },

tr:{

translation:{
  
  caroselHeader: "Suriyeli Öğrenciler Kulübü",
  caroselSubHeader: "FSM Üniversitesi'ndeki Suriyeli öğrenciler için topluluk inşa ediyor, fırsatlar yaratıyor ve kültürel mirası koruyoruz.",

  joinUsBtn: "Bize Katıl",
  OurPartnersBtn: "Ortaklarımız",

  SyrianGeneralItihad: "Suriyeli Öğrenciler Genel Birliği",
  Tibyan: "Tibyan",
  Takween: "Takween Yayıncılık",

  supportSYRheader: "FSM Üniversitesi'ndeki Suriyeli Öğrencileri Destekliyoruz",
  supportSub: "FSM Üniversitesi Suriyeli Öğrenciler Kulübü, akademik destek, kültürel etkinlikler ve ağ kurma fırsatları sunarak Suriyeli öğrenciler için evden uzakta bir yuva niteliğindedir.",
  supportSub_second: "Misyonumuz, topluluk duygusunu geliştirmek, kültürel farkındalığı teşvik etmek ve öğrencilerin akademik ve profesyonel anlamda başarılı olmalarına yardımcı olmaktır.",

  MeetTeamBtn: "Ekibimizle Tanışın",
  AboutUsBtn: "Hakkımızda",

  Statistics: "İstatistikler",
  TogetherAchieved: "Birlikte çıktığımız bu yolculukta elde ettiğimiz başarıları kutluyoruz",
  ProgramsMade: "Hazırlanan Programlar",
  PartnerShips: "Ortaklıklar",
  ActiveMembers: "Aktif Üyeler",
  Mamdouh: "Mamdouh Al Masri",
  President: "Başkan",
  Diaa: "Diaa Azraq",
  VicePresident: "Başkan Yardımcısı",
  Shahid: "Shahid Akbazli",
  Media: "Medya Sorumlusu",
  Login: "Giriş Yap",

  OurTeam: "Ekibimiz",
  TeamsHeader: "Yönetim Kurulu ile Tanışın",
  ContactUs: "Bize Ulaşın",
  SubtitleContact: "Bizimle iletişime geçin ve topluluğumuzun bir parçası olun",
  Location: "Konum",
  UniversityPlace: "FSM Üniversitesi - Topkapı Kampüsü",
  PhoneHeader: "Telefon",
  PhoneContact: "+90 535 732 09 83",
  OfficeHours: "Çalışma Saatleri",
  DaysAvaliable: "Pazartesi - Cuma: 09:00 - 17:00",
  OurEmailContact: "E-posta",
SendUsMessageBtn: "Bize mesaj gönderin",
Nooridin: "Noordin Abozaid",
Horani: "Mohammed Horani",
NoorJob: "İlişkiler Sorumlusu",
HoraniJob: "Sekreterlik",

Rules: "Kulüp Kuralları ve Politikaları",
SubRulesHeader: "Tüm üyeler için olumlu ve verimli bir ortam sağlamak adına yönergeler",
RulesSubSecond: "Kurallarımıza göz atın",
RulesSub: "Birlikte inşa ve yenilenmeye yönelik bir yaklaşım.",
DownloadRulesMessage: "Bu dosya, kurallarımız ve yönergelerimize dair tüm detayları içerir.",
DownloadPDF: "PDF İndir",

Home: "Ana Sayfa",
AboutUs: "Hakkımızda",
Contact: "İletişim",
Team: "Ekibimiz",
Faaliyet: "Etkinlikler",

itihadExplination: "Dünya genelindeki Suriyeli öğrencileri temsil eden bağımsız, kâr amacı gütmeyen bir öğrenci birliği kuruluşudur. Suriyeli öğrencilerin mevcut sorunları ve gelecekleriyle ilgilenir, modern bir ulusal devlete geçiş için eğitimli bir nesil yetiştirmeyi amaçlar.",

WhoIsTibyan: "Gençlere uygun şekilde dini faaliyetler sunan, Kuran-ı Kerim’i ezberleme, okuma ve tefekkür üzerinden odaklanan, entelektüel yönü hedefleyen gençlik programları sağlayan, üniversite ortamında muhafazakâr bir ortam sunan ve gençlik faaliyetlerini destekleyen bir topluluktur.",

wantToBePartner: "FSM Üniversitesi Suriyeli Öğrenciler Kulübü ile ortak olmak ister misiniz? Etkinlikler, girişimler ve üyelerimiz için fırsatlar konusunda iş birliği yapabileceğimiz kurum ve işletmeler arıyoruz.",
BecomeAPartner: "Ortak Olun",

Announcements: "Duyurular",
Email: "E-posta",
Password: "Şifre",
ForgotPassword: "Şifrenizi mi unuttunuz?",
EnterYourEmail: "E-posta adresinizi girin",
EnterYourPassword: "Şifrenizi girin",
BackHome: "Ana Sayfaya Dön",
LoggingIn: "Giriş yapılıyor, lütfen bekleyin",
Welcome: "Hoş Geldiniz",
AddAnnouncement: "Duyuru Ekle",
AnouncementTitle: "Duyuru Başlığı",
AnouncementExp: "Duyuru Açıklaması",
NoFile: "Dosya seçilmedi",

WebsiteSettings: "Web Sitesi Ayarları",
ManageAnouncements: "Duyuruları Yönet",
NoAnnouncementsAv: "Mevcut duyuru yok",
Logout: "Çıkış Yap",

  AnnouncementAdded: "Duyuru Yayınlandı!",
  TakweenExp: "Takween Matbaası, yıl sonuna kadar FSM Üniversitesi Suriyeli Öğrenciler Kulübü’ne tüm yayınlarda özel %10 indirim sunmaktadır.",
  VisitWebsite: "Web Sitesini Ziyaret Et",
  Insta: "SSC.FSMVU",
  DeleteAnnouncement: "Duyuruyu Sil",
  InvalidEmailOrPassword: "Geçersiz e-posta veya şifre",
  announcementDeleted: "Duyuru Başarıyla Silindi",
  HomeHelmet: "Ana Sayfa - SSC FSMVU",
  AnnouncementHelmet: "Duyurular - SSC FSMVU",
  PartnersHelmet: "Ortaklarımız - SSC FSMVU",
  RulesHelmet: "Kurallar - SSC FSMVU",
  AdminPanelHelmet: "Yönetici Paneli - SSC FSMVU",
  LoginHelmet: "Giriş - SSC FSMVU",
  YearOfProduction: "© SSC FSMVU - 2025"
}


},

  ar: {
    translation: {
      caroselHeader: " تجمع الطلبة السوريين",
      caroselSubHeader: "مكان لبناء المجتمع، خلق الفرص، والحفاظ على التراث الثقافي للطلاب السوريين في جامعة FSM.",
      supportSYRheader :"دعمنا للطلاب السوريين في جامعتنا",
      supportSub: "هيئة طلابية منتخبة في جامعة السلطان محمد الفاتح ، تمثل المجتمع الطلابي السوري في الجامعة. نحمل مبادئ ديننا الإسلامي وثورة الحرية الكرامة"
 ,supportSub_second:"نعمل على تمكين الطالب السوري كي يكون داعما لوطنه"
 
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
   Shahid: "شهد أكبازلي",
   Media: "القسم الإعلامي",
OurTeam: "فريقنا",

TeamsHeader: "تعرف على اعضاء مجلس الإدارة",



ContactUs: " تواصل معنا",
SubtitleContact:" انضم الينا وكن مساهما في ترك بصمتك الخاصة",
Location:"موقعنا",
UniversityPlace:" جامعة السلطان محمد الفاتح - حرم توب كابي",
PhoneHeader:"الهاتف",
PhoneContact:"+90 535 732 09 83",
OfficeHours:"ساعات الدوام ",
DaysAvaliable:"طيلة أيام الأسبوع 9 صباحا حتى 5 مساء",
OurEmailContact:"البريد الالكتروني",
SendUsMessageBtn:"ارسل رسالة ",
Nooridin:"نور الدين أبو زيد",
NoorJob: "مسؤول العلاقات",
Horani:"محمد حواراني",
HoraniJob: "أمانة السر",
Rules:" النظام الداخلي",
SubRulesHeader:"تعرف على اساسات نظامنا الداخلي",
Home: "الرئيسية",
RulesSubSecond:"تعرف على نطامنا الداخلي",
AboutUs:" من نحن", 
Contact: "تواصل معنا",
Team:"الفريق",
RulesSub : "منهاج عملنا٬ نحو إعمار وتجديد ",
Faaliyet :"الفعاليات",
Takween : "مطبعة تكويين",
Tibyan :"مبادرة تبيان", 
TakweenExp:"تقدم مطبعة تكوين خصم خاص بقيمة 10% لاتحاد الطلبة السوريين في  جامعة محمد الفاتح على جميع المطبوعات لنهاية العام ",
SyrianGeneralItihad: "الاتحاد العام لطلبة سوريا",
itihadExplination:"مؤسسة نقابية طلابية مستقلة غير ربحية، تمثل الطلبة السوريين حول العالم، وتهتم بقضايا الطلاب السوريين الراهنة وبمستقبلهم، وتعمل على تأهيل جيل سوري مثقف، لأجل الانتقال إلى الدولة الوطنية الحديثة.",
WhoIsTibyan:"تقديم الأنشطة الدينية بطريقة مميزة تناسب الشباب وتوجهاتهم, العناية بالقرآن الكريم حفظاً وتلاوة وتدبراً – تقديم برامج شبابية تستهدف الجانب الفكري – توفير حاضنة محافظة داخل البيئة الجامعية –تقديم الدعم للأنشطة الشبابية.",
wantToBePartner : " هل ترغب بالشراكة مع نادي الطلاب السوريين؟ نبحث دائمًا عن منظمات وشركات للتعاون معها في الفعاليات والمبادرات والفرص المتاحة لأعضائنا."
,BecomeAPartner:"تريد ان تصبح شريكا ؟ ",
Announcements: "الأخبار",
Login: "تسجيل الدخول",
BackHome : "  ← العودة الى الصفحة الرئيسية",
Email:"البريد الإلكتروني",
Password:"كلمة السر",
ForgotPassword:"نسيت كلمة السر؟ ",
EnterYourEmail:"أدخل بريدك الإلكتروني",
EnterYourPassword:"ادخل كلمة المرور",
LoggingIn: "جاري تسجيل الدخول",
Welcome:"اهلا ",
AddAnnouncement:"اضف خبرا للطلاب",
AnouncementTitle:"عنوان الخبر",
AnouncementExp:"شرح الخبر",
NoFile:"لم يتم اختيار ملفات",
ChooseFile:"اختر ملفا",

WebsiteSettings:"إعدادات الموقع",
ManageAnouncements:"إدارة الأخبار",
NoAnnouncementsAv:"لا يوجد خبر محمل",
Logout:"تسجيل خروج",
CreatedBy:"تم النشر من قبل : ",
ONdate:"بتاريخ",
AnnouncementAdded:"تم نشر الخبر بنجاح ! ",
VisitWebsite:"زيارة الموقع",
Insta:"SSC.FSMVU",
DeleteAnnouncement:"مسح الخبر",
InvalidEmailOrPassword: "كلمة المرور او البريد الإلكتروني غير صحيحة",
announcementDeleted: "تم مسح الخبر بنجاح ! ",
HomeHelmet: "الصفحة الرئيسية - تجمع الطلبة السوريين ",
AnnouncementHelmet:"آخر الأخبار - تجمع الطلبة السوريين",
PartnersHelmet:"الشركاء - تجمع الطلبة السوريين",
RulesHelmet:"النظام الداخلي - تجمع الطلبة السوريين",
AdminPanelHelmet:"لوحة التحكم - تجمع الطلبة السوريين",
LoginHelmet:"تسجيل دخول - تجمع الطلبة السوريين",
YearOfProduction : "© SSC FSMVU - 2025",
DownloadRulesMessage:"يحتوي هذا الملف على كافة التفاصيل المتعلقة بنظامنا الداخلي.",
DownloadPDF:"تحميل PDF"

    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'ar',  // Load language from localStorage
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,  // Don't block rendering while waiting for language change
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
