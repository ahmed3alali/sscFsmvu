import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React, { useState, useEffect } from 'react'
import rulesFile from "../pdfFiles/rules.pdf"
import { t } from 'i18next'
import { Helmet } from 'react-helmet-async'

const Rules = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>{t("RulesHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      </Helmet>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <Navbar />
        
        <h1 className="text-3xl font-bold text-gray-800 mt-[140px] mb-[50px]">
          {t("Rules")}
        </h1>

        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
          {isMobile ? (
            <div className="text-center">
              <p className="mb-4 text-gray-700">{t("DownloadRulesMessage")}</p>
              <a
                href={rulesFile}
                download="rules.pdf"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                {t("DownloadPDF")}
              </a>
            </div>
          ) : (
            <iframe src={rulesFile} className="w-full h-screen"></iframe>
          )}
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default Rules;
