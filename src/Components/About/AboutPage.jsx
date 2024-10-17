import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../Assets/Brands/brand1.png";
import brand2 from "../../Assets/Brands/brand2.png";
import brand3 from "../../Assets/Brands/brand3.png";
import brand4 from "../../Assets/Brands/brand4.png";
import brand5 from "../../Assets/Brands/brand5.png";
import brand6 from "../../Assets/Brands/brand6.png";
import brand7 from "../../Assets/Brands/brand7.png";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>Chi Siamo</h2>
        <img src={about1} alt="" />
        <div className="aboutContent">
          <h3>La nostra storia</h3>
          <h4>
          Il primo negozio venne aperto nel 1975 da Aurelio Giglia e Marilisa Anacondia (in Puglia), inizialmente il nome scelto per il negozio era Zorba (in onore del film Zorba il greco) ma un bar più avanti nella stessa strada aveva già scelto quel nome per cui decisero un nome che fosse molto simile e la scelta cadde sul nome Evon.

Nell'agosto del 2005 è entrata per la prima volta nella lista dei 100 maggiori marchi del mondo, situandosi al 77º posto, secondo la classifica annuale della rivista BusinessWeek, e nel 2006 ha superato le vendite di uno dei suoi maggiori concorrenti, la svedese Hennes & Mauritz, il più grande rivenditore di abbigliamento a basso costo in Europa. Nel 2016 Forbes pubblicò la lista degli uomini più ricchi del mondo e Aurelio era il secondo dopo Bill Gates con un patrimonio di 67 miliardi di dollari.</h4>
       
          
          <div className="content1">
            <div className="contentBox">
              <h5>La Nostra Missione</h5>
              <p>
                La Nostra missione è rendere il Cliente soddisfatto e coccolato dalla nostra Professionalità a 360 gradi.
              </p>
            </div>
            <div className="contentBox">
              <h5>La Nostra Visione</h5>
              <p>
                La Soddisfazione e la gratitudine della nostra clientela è la nostra più grande soddisfazione. 
               
              </p>
            </div>
          </div>
          <div className="content2">
            <div className="imgContent">
              <img src={about2} alt="" />
            </div>
            <div className="textContent">
              <h5>L'azienda</h5>
              <p>
               Dal 2024 la nostra azienda punta ad espadersi in più Paesi d'Europa e prevede anche l'ingresso a nuovi punti vendita situati in America. 
               Dopo l'apertura dei punti vendita in Inghilterra e Germania abbiamo ottenuto ottimi risultati e per questo puntiamo adesso di arrivare il più possibile vicino ad ognuno di Voi.  
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="companyPartners">
        <h5>Aziende Partners</h5>
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand6} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aboutBrands">
              <img src={brand7} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
