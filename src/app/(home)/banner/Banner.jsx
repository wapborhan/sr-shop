"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";

const Banner = () => {
  return (
    <section className="mn-banner p-tb-15">
      <div className="row">
        <div
          className="col-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Swiper
            className="mn-modern-banner owl-carousel"
            modules={[Scrollbar, A11y]}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="modern-banner">
              <div
                className="mn-banner-img img-1"
                style={{ backgroundImage: `url(/assets/img/banner/1.jpg)` }}
              ></div>
              <div className="mn-banner-contact banner-animation">
                <div className="inner-banner">
                  <h3>WOMEN'S</h3>
                  <h4>Fashion COLLECTION</h4>
                </div>
                <div className="inner-text">
                  <span className="bnr-text">Summer</span>
                  <p>New Stylish Shirts, Pants & Accessries.</p>
                </div>
                <div className="banner-btn">
                  <a href="room-details.html" className="mn-btn-1">
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="modern-banner">
              <div
                className="mn-banner-img img-2"
                style={{ backgroundImage: `url(/assets/img/banner/2.jpg)` }}
              ></div>
              <div className="mn-banner-contact banner-animation">
                <div className="inner-banner">
                  <h3>WOMEN'S</h3>
                  <h4>goggles COLLECTION</h4>
                </div>
                <div className="inner-text">
                  <span className="bnr-text">Summer</span>
                  <p>New Stylish Shirts, Pants & Accessries.</p>
                </div>
                <div className="banner-btn">
                  <a href="room-details.html" className="mn-btn-1">
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
