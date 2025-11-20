import React from "react";

const ProductSidebar = () => {
  return (
    <div class="mn-shop-sidebar col-lg-3 col-md-12 m-t-991">
      <div id="shop_sidebar">
        <div class="mn-sidebar-wrap">
          <div class="mn-sidebar-block drop">
            <div class="mn-sb-title">
              <h3 class="mn-sidebar-title">Delivery Options </h3>
            </div>
            <div class="mn-sb-block-co;ntent p-t-15">
              <ul>
                <li> Order today and receive it within 02 - 03 days</li>
                <li>Delivery Charge Inside Dhaka 70 TK</li>
                <li>Delivery Charge Outside Dhaka 120 TK</li>
              </ul>
            </div>
          </div>
          <div class="mn-sidebar-block">
            <div class="mn-sb-title">
              <h3 class="mn-sidebar-title">Return & Warranty </h3>
            </div>
            <div class="mn-sb-block-content">
              <ul>
                <li>Change of Mind</li>
                <li>14 days easy return</li>
                <li>Warranty not available</li>
              </ul>
            </div>
          </div>

          <div class="mn-sidebar-block">
            <div class="mn-sb-title">
              <h3 class="mn-sidebar-title">
                Have question about this product ?
              </h3>
            </div>
            <div class="mn-sb-block-content">
              <ul>
                <li>
                  <a href="tel:+88017123456789">017123456789</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mn-sidebar-block">
            <div class="mn-sb-title">
              <h3 class="mn-sidebar-title">Vendor</h3>
            </div>
            <div class="mn-sb-block-content tab-content mn-single-pro-tab-content">
              <div id="mn-spt-nav-vendor" class="tab-pane active">
                <div class="mn-single-pro-tab-moreinfo">
                  <div class="mn-product-vendor">
                    <div class="mn-vendor-info">
                      <span>
                        <img src="/assets/img/vendor/1.jpg" alt="vendor" />
                      </span>
                      <div>
                        <h5>Ocean Crate</h5>
                        <p>Products : 358</p>
                        <p>Sales : 5587</p>
                      </div>
                    </div>
                    <div class="mn-detail">
                      <ul>
                        <li>
                          <span>Phone No. :</span> +00 987654321
                        </li>
                        <li>
                          <span>Email. :</span> Example@gmail.com
                        </li>
                        <li>
                          <span>Address. :</span> 2548 Broaddus Maple Court,
                          Madisonville KY 4783, USA.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
