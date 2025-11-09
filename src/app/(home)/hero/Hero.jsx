"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Hero = () => {
  return (
    <section class="mn-hero swiper-container m-b-15">
      <Swiper
        class="mn-hero-slider owl-carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide
          class="mn-hero-slide swiper-slide slide-1"
          style={{
            backgroundImage: `url(assets/img/hero/1.jpg)`,
          }}
        >
          <div class="mn-hero-detail">
            <p class="label">
              <span>
                50%
                <br />
                Off
              </span>
            </p>
            <h1>
              Fashion sale <br />
              for women's
            </h1>
            <p>Elevate your every day. Style that speaks volumes.</p>
            <a href="javascript:void(0)" class="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class="mn-hero-slide swiper-slide slide-2">
          <div class="mn-hero-detail">
            <p class="label">
              <span>
                35%
                <br />
                Off
              </span>
            </p>
            <h2>
              Fashion sale <br />
              for Men's
            </h2>
            <p>Wear the change. Fashion that feels good.</p>
            <a href="javascript:void(0)" class="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class="mn-hero-slide swiper-slide slide-3">
          <div class="mn-hero-detail">
            <p class="label">
              <span>
                44%
                <br />
                Off
              </span>
            </p>
            <h2>
              Fashion sale <br />
              for Children's
            </h2>
            <p>Wear the change. Fashion that feels good.</p>
            <a href="javascript:void(0)" class="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class="mn-hero-slide swiper-slide slide-4">
          <div class="mn-hero-detail">
            <p class="label">
              <span>
                22%
                <br />
                Off
              </span>
            </p>
            <h2>
              Cosmetics sale <br />
              for Women's
            </h2>
            <p>Wear the change. Fashion that feels good.</p>
            <a href="javascript:void(0)" class="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
