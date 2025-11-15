import React from "react";

const ProductCard = ({ listView }) => {
  return (
    <div
      className={`col-md-4 col-sm-6 col-xs-6 m-b-24 mn-product-box pro-gl-content ${
        listView && "width-100"
      }`}
    >
      <div className="mn-product-card">
        <div className="mn-product-img">
          <div className="lbl">
            <span className="new">new</span>
          </div>
          <div className="mn-img">
            <a href="product-detail.html" className="image">
              <img
                className="main-img"
                src="/assets/img/product/17.jpg"
                alt="product"
              />
              <img
                className="hover-img"
                src="/assets/img/product/18.jpg"
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
          <p className="mn-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="mn-price">
            <div className="mn-price-new">$120</div>
            <div className="mn-price-old">$130</div>
          </div>
          <div className="mn-pro-option">
            <div className="mn-pro-color">
              <ul className="mn-opt-swatch mn-change-img">
                <li>
                  <a
                    href="#"
                    className="mn-opt-clr-img"
                    data-src="/assets/img/product/19.jpg"
                    data-src-hover="/assets/img/product/20.jpg"
                    data-tooltip="Orange"
                  >
                    {/* <span style="background-color: #de8abc"></span> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mn-opt-clr-img"
                    data-src="/assets/img/product/21.jpg"
                    data-src-hover="/assets/img/product/22.jpg"
                    data-tooltip="Orange"
                  >
                    {/* <span style="background-color: #5e68ce"></span> */}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mn-opt-clr-img"
                    data-src="/assets/img/product/17.jpg"
                    data-src-hover="/assets/img/product/18.jpg"
                    data-tooltip="Orange"
                  >
                    {/* <span style="background-color: #eee"></span> */}
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
      </div>
    </div>
  );
};

export default ProductCard;
