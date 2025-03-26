import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'
import rulesFile from "../pdfFiles/rules.pdf"
import { t } from 'i18next'
const Rules = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-[140px] mb-[50px]">{t("Rules")}</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
      <iframe src={rulesFile} className="w-full h-screen"></iframe>

     
      </div>
      <Footer/>
    </div>


    </div>
  )
}

export default Rules