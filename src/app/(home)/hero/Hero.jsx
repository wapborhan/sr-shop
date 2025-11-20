"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

const Hero = () => {
  const interleaveOffset = 0.5;

  const handleProgress = (swiper) => {
    swiper.slides.forEach((slide) => {
      const slideProgress = slide.progress;
      const innerOffset = swiper.width * interleaveOffset;
      const innerTranslate = slideProgress * innerOffset;
      const inner = slide.querySelector(".slide-inner");
      if (inner) {
        inner.style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
      }
    });
  };

  const handleTouchStart = (swiper) => {
    swiper.slides.forEach((slide) => {
      slide.style.transition = "";
    });
  };

  const handleSetTransition = (swiper, speed) => {
    swiper.slides.forEach((slide) => {
      slide.style.transition = `${speed}ms`;
      const inner = slide.querySelector(".slide-inner");
      if (inner) {
        inner.style.transition = `${speed}ms`;
      }
    });
  };
  return (
    <section className="mn-hero swiper-container m-b-15">
      <Swiper
        className="mn-hero-slider"
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{ clickable: true }}
        navigation
        watchSlidesProgress={true}
        onProgress={handleProgress}
        onTouchStart={handleTouchStart}
        onSetTransition={handleSetTransition}
      >
        <SwiperSlide
          className="mn-hero-slide swiper-slide slide-1"
          style={{
            backgroundImage: `url(/assets/img/hero/1.jpg)`,
          }}
        >
          <div className="mn-hero-detail">
            <p className="label">
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
            <a href="javascript:void(0)" className="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="mn-hero-slide swiper-slide slide-2"
          style={{
            backgroundImage: `url(/assets/img/hero/2.jpg)`,
          }}
        >
          <div className="mn-hero-detail">
            <p className="label">
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
            <a href="javascript:void(0)" className="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="mn-hero-slide swiper-slide slide-3"
          style={{
            backgroundImage: `url(/assets/img/hero/3.jpg)`,
          }}
        >
          <div className="mn-hero-detail">
            <p className="label">
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
            <a href="javascript:void(0)" className="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="mn-hero-slide swiper-slide slide-4"
          style={{
            backgroundImage: `url(/assets/img/hero/4.jpg)`,
          }}
        >
          <div className="mn-hero-detail">
            <p className="label">
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
            <a href="javascript:void(0)" className="mn-btn-2">
              <span>Shop Now</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
