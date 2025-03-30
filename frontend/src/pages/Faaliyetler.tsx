import Carousel from '@/components/home/Carousel'
import React from 'react'
import faaliyet_second from "../images/Syria1.png"
import faaliyet4 from "../images/Faaliyet4.jpeg"
import faaliyet2 from "../images/Faaliyet2.jpeg"
import iftarFaliyet from "../images/Iftar.jpg"
import syria2 from "../images/Syria3.jpg"

import MainLayout from '@/components/layout/MainLayout';
import { t } from 'i18next'

import { Helmet } from 'react-helmet-async'
const Faaliyetler = () => {



    const carouselImages = [
        
    
    faaliyet2, faaliyet_second,
    faaliyet4, iftarFaliyet ,syria2
    

       
      ];  


  return (
    
    <MainLayout>

<Helmet>
<title>{t("HomeHelmet")}</title>
        <meta name="description" content="Welcome to the home page of My Website" />
        <meta name="keywords" content="home, website, React, helmet" />
      


</Helmet>
    {/* Hero Section with Carousel */}
    <section className="relative">
    <div className="header mt-20 flex justify-center mb-10 text-[40px]">

<h1>{t("Faaliyet")}</h1>
</div>
      <Carousel images={carouselImages} />
      


    
    
     </section>


</MainLayout>




    
  )
}

export default Faaliyetler