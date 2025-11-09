"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { AiOutlineEye } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { IoRepeatSharp } from "react-icons/io5";

const NewArrival = () => {
  return (
    <section className="mn-new-product p-tb-15">
      <div className="mn-title">
        <h2>
          New <span>Arrivals</span>
        </h2>
      </div>
      <Swiper
        className="mn-product owl-carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="lbl">
              <span className="trending">trending</span>
            </div>
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/5.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/6.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <AiOutlineEye />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <IoRepeatSharp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <BsCart3 />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">T-shirt</a>
              <ul>
                <li>s</li>
                <li>m</li>
                <li>xl</li>
              </ul>
            </div>
            <h5>
              <a href="#">Cotton fabric T-shirt</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$120</div>
              <div className="mn-price-old">$130</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li className="active">
                    <a
                      href="#"
                      className="mn-opt-clr-img active"
                      data-src="assets/img/product/5.jpg"
                      data-src-hover="assets/img/product/5.jpg"
                      data-tooltip="Gray"
                    >
                      <span
                      // style="
                      //           background-image: url('assets/img/product/bg/5.jpg');
                      //         "
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/6.jpg"
                      data-src-hover="assets/img/product/6.jpg"
                      data-tooltip="Orange"
                    >
                      <span
                      // style="
                      //           background-image: url('assets/img/product/bg/6.jpg');
                      //         "
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/7.jpg"
                      data-src-hover="assets/img/product/7.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #e97e70"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/8.jpg"
                      data-src-hover="assets/img/product/8.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #70e98a"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/9.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/10.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <i className="ri-eye-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <i className="ri-repeat-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <i className="ri-shopping-cart-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">Shoes</a>
              <ul>
                <li>7</li>
                <li>8</li>
                <li>10</li>
              </ul>
            </div>
            <h5>
              <a href="#">Special sport shoes</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$55</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/9.jpg"
                      data-src-hover="assets/img/product/9.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #0e0e0e"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/10.jpg"
                      data-src-hover="assets/img/product/10.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #c54367"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist active"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="lbl">
              <span className="new">new</span>
            </div>
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/1.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/3.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <i className="ri-eye-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <i className="ri-repeat-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <i className="ri-shopping-cart-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">Top</a>
              <ul>
                <li>s</li>
                <li>m</li>
              </ul>
            </div>
            <h5>
              <a href="#">Cotton fabric Top</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$120</div>
              <div className="mn-price-old">$130</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li className="active">
                    <a
                      href="#"
                      className="mn-opt-clr-img active"
                      data-src="assets/img/product/1.jpg"
                      data-src-hover="assets/img/product/3.jpg"
                      data-tooltip="Gray"
                    >
                      {/* <span style="background-color: #f3f3f3"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/2.jpg"
                      data-src-hover="assets/img/product/4.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #e8c2ff"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="lbl">
              <span className="sale">sale</span>
            </div>
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/11.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/12.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <i className="ri-eye-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <i className="ri-repeat-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <i className="ri-shopping-cart-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">watches</a>
            </div>
            <h5>
              <a href="#">Mantu smart watch</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$955</div>
              <div className="mn-price-old">$999</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/11.jpg"
                      data-src-hover="assets/img/product/12.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #f3f3f3"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/12.jpg"
                      data-src-hover="assets/img/product/11.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #242424"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="lbl">
              <span className="discount">20% off</span>
            </div>
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/13.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/14.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <i className="ri-eye-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <i className="ri-repeat-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <i className="ri-shopping-cart-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">belt</a>
            </div>
            <h5>
              <a href="#">Mantu leather belt</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$10</div>
              <div className="mn-price-old">$12</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/13.jpg"
                      data-src-hover="assets/img/product/14.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #d48a5b"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/14.jpg"
                      data-src-hover="assets/img/product/13.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #242424"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mn-product-card">
          <div className="mn-product-img">
            <div className="mn-img">
              <a href="product-detail.html" className="image">
                <img
                  className="main-img"
                  src="assets/img/product/15.jpg"
                  alt="product"
                />
                <img
                  className="hover-img"
                  src="assets/img/product/16.jpg"
                  alt="product"
                />
              </a>
              <div className="mn-pro-loader"></div>
              <div className="mn-options">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Quick View"
                      data-link-action="quickview"
                      data-bs-toggle="modal"
                      data-bs-target="#quickview_modal"
                    >
                      <i className="ri-eye-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Compare"
                      className="mn-compare"
                    >
                      <i className="ri-repeat-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      data-tooltip
                      title="Add To Cart"
                      className="mn-add-cart"
                    >
                      <i className="ri-shopping-cart-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mn-product-detail">
            <div className="cat">
              <a href="shop-right-sidebar.html">Bag</a>
              <ul>
                <li>m</li>
                <li>l</li>
              </ul>
            </div>
            <h5>
              <a href="#">Leather bag</a>
            </h5>
            <div className="mn-price">
              <div className="mn-price-new">$66</div>
            </div>
            <div className="mn-pro-option">
              <div className="mn-pro-color">
                <ul className="mn-opt-swatch mn-change-img">
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/15.jpg"
                      data-src-hover="assets/img/product/16.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #b75956"></span> */}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mn-opt-clr-img"
                      data-src="assets/img/product/16.jpg"
                      data-src-hover="assets/img/product/15.jpg"
                      data-tooltip="Orange"
                    >
                      {/* <span style="background-color: #0e0e0e"></span> */}
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href="javascript:void(0);"
                className="mn-wishlist"
                data-tooltip
                title="Wishlist"
              >
                <i className="ri-heart-line"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default NewArrival;
