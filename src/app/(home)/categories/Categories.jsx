"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";

const Categories = () => {
  return (
    <section className="mn-category p-tb-15">
      <Swiper
        className="mn-cat d-flex gap-3 flex-wrap"
        modules={[Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="mn-cat-card cat-card-1">
          <p className="lbl">
            <span>35%</span>
          </p>
          <span className="bg">35%</span>
          <h4>Fashion</h4>
          <h3>Clothes</h3>
          <p>Items (16)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/1.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/2.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/3.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="mn-cat-card cat-card-2">
          <p className="lbl">
            <span>22%</span>
          </p>
          <span className="bg">22%</span>
          <h4>Generic</h4>
          <h3>Cosmetics</h3>
          <p>Items (45)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/4.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/5.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/6.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="mn-cat-card cat-card-3">
          <p className="lbl">
            <span>65%</span>
          </p>
          <span className="bg">65%</span>
          <h4>Stylish</h4>
          <h3>Shoes</h3>
          <p>Items (58)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/7.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/8.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/9.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="mn-cat-card cat-card-4">
          <p className="lbl">
            <span>45%</span>
          </p>
          <span className="bg">45%</span>
          <h4>Digital</h4>
          <h3>watches</h3>
          <p>Items (64)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/10.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/11.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/12.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="mn-cat-card cat-card-5">
          <p className="lbl">
            <span>63%</span>
          </p>
          <span className="bg">63%</span>
          <h4>leather</h4>
          <h3>belts</h3>
          <p>Items (75)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/13.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/14.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/15.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="mn-cat-card cat-card-6">
          <p className="lbl">
            <span>23%</span>
          </p>
          <span className="bg">23%</span>
          <h4>Cotton</h4>
          <h3>Bags</h3>
          <p>Items (15)</p>
          <ul>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/16.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/17.jpg" alt="category" />
              </a>
            </li>
            <li>
              <a href="shop-right-sidebar.html">
                <img src="assets/img/category/18.jpg" alt="category" />
              </a>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
