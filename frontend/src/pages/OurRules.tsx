import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import rulesFile from "../pdfFiles/rules.pdf"
import Navbar from "@/components/layout/Navbar";
import { t } from "i18next";
import Footer from "@/components/layout/Footer";
const OurRules = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-[140px] mb-[50px]">{t("Rules")}</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
      <iframe src={rulesFile} className="w-full h-screen"></iframe>

     
      </div>
      <Footer/>
    </div>
  );
};

export default OurRules;
