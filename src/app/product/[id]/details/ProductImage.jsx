"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const productImage = [
  "/assets/img/product/27.jpg",
  "/assets/img/product/28.jpg",
  "/assets/img/product/29.jpg",
  "/assets/img/product/30.jpg",
  "/assets/img/product/31.jpg",
];

const ProductImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRefs = useRef([]);
  const lensRef = useRef([]);
  const resultRef = useRef([]);

  useEffect(() => {
    const container = containerRefs.current[activeIndex];
    const lens = lensRef.current;
    const result = resultRef.current;

    if (!container || !lens || !result) return;

    const moveLens = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - lens.offsetWidth / 2;
      const y = e.clientY - rect.top - lens.offsetHeight / 2;

      const maxX = rect.width - lens.offsetWidth;
      const maxY = rect.height - lens.offsetHeight;

      lens.style.display = "block";
      result.style.display = "block";

      lens.style.left = `${Math.max(0, Math.min(x, maxX)) + rect.left}px`;
      lens.style.top = `${Math.max(0, Math.min(y, maxY)) + rect.top}px`;

      const posX = (x / rect.width) * 100;
      const posY = (y / rect.height) * 100;

      result.style.backgroundPosition = `${posX}% ${posY}%`;
      result.style.backgroundImage = `url(${productImage[activeIndex]})`;
    };

    const leaveLens = () => {
      lens.style.display = "none";
      result.style.display = "none";
    };

    window.addEventListener("mousemove", moveLens);
    window.addEventListener("mouseleave", leaveLens);

    return () => {
      window.removeEventListener("mousemove", moveLens);
      window.removeEventListener("mouseleave", leaveLens);
    };
  }, [activeIndex]);

  return (
    <div className="single-product-scroll">
      <Swiper
        className="single-product-cover"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
      >
        {productImage.map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="single-slide product-zoom-container"
            style={{ position: "relative" }}
            ref={(el) => (containerRefs.current[idx] = el)}
          >
            <img className="img-responsive img-fluid" src={image} alt={image} />
            <div
              className="product-zoom-lens"
              ref={lensRef}
              style={{ display: "none" }}
            ></div>
            <div
              className="product-zoom-result"
              ref={resultRef}
              style={{
                display: "none",
                backgroundImage: `url(${productImage[activeIndex]})`,
                backgroundSize: "200%",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="single-nav-thumb slick-initialized slick-slider"
        onSwiper={setThumbsSwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {productImage.map((image, idx) => {
          return (
            <SwiperSlide className="slick-slide" key={idx}>
              <div className="single-slide">
                <img className="img-responsive" src={image} alt={image} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductImage;
