import Carousel from '@/components/home/Carousel'
import React from 'react'
import faaliyet_first from "../images/Faaliyet3.jpeg"
import faaliyet4 from "../images/Faaliyet4.jpeg"
import faaliyet2 from "../images/Faaliyet2.jpeg"

import MainLayout from '@/components/layout/MainLayout';
import { t } from 'i18next'
import { Footer } from 'react-day-picker'
const Faaliyetler = () => {



    const carouselImages = [
        
    
    faaliyet2, faaliyet4,
    faaliyet_first,

       
      ];  


  return (
    
<MainLayout>
<section className="relative">
    
<div className="header mt-[80px] mb-[25px] flex justify-center text-[40px]">

<h1>{t("Faaliyet")}</h1>


</div>


<div className="carosel h-[700px] w-[1432px]">

<Carousel images={carouselImages}></Carousel>
</div>


    
    
     </section>


</MainLayout>




    
  )
}

export default Faaliyetler