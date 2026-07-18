import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../App.css"

const MapReviewSection = () => {
  return (
    <section className="map-review-section">
      {/* Map Side */}
      <div className="map-container">
        <iframe 
        src='https://www.google.co.in/maps/place/Leads+Academy/@19.3028506,84.8172876,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3d5b1b36d79229:0x7e86009a762db04f!8m2!3d19.3028456!4d84.8198679!16s%2Fg%2F11hdkywxc0?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D'
width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Review Side */}
      <div className="review-carousel-wrapper">
        <Swiper navigation={true} modules={[Navigation]} className="review-carousel">
          <SwiperSlide>
            <div className="review-content">
              <p>"Leads Academy has completely changed my learning perspective. Highly recommended!"</p>
              <h4>— Rahul Kumar</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-content">
              <p>"Best faculty and infrastructure in Brahmapur. A must-join for students."</p>
              <h4>— Priya Singh</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MapReviewSection;