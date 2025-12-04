import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div className="single-pro-content">
      <h5 className="mn-single-title">
        Mantu Women's Solid Slim Fit Classic Round Neck cotton fabric T-Shirt.
      </h5>
      <div className="mn-single-rating-wrap">
        <div className="mn-single-rating mn-pro-rating">
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill grey"></i>
        </div>
        <span className="mn-read-review">
          |&nbsp;&nbsp;<a href="#mn-spt-nav-review">992 Ratings</a>
        </span>
      </div>

      <div className="mn-single-price-stoke">
        <div className="mn-single-price">
          <div className="final-price">
            $664.00<span className="price-des">-78%</span>
          </div>
          <div className="mrp">
            M.R.P. : <span>$2,999.00</span>
          </div>
        </div>
        <div className="mn-single-stoke">
          <span className="mn-single-sku">SKU#: WH12</span>
          <span className="mn-single-ps-title">IN STOCK</span>
        </div>
      </div>

      <div className="mn-single-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1990.
      </div>

      <div className="mn-single-list">
        <ul>
          <li>
            <strong>Closure :</strong> Hook & Loop
          </li>
          <li>
            <strong>Sole :</strong> Polyvinyl Chloride
          </li>
          <li>
            <strong>Width :</strong> Medium
          </li>
          <li>
            <strong>Outer Material :</strong> A-Grade Standard Quality
          </li>
        </ul>
      </div>

      <div className="mn-pro-variation">
        <div className="mn-pro-variation-inner mn-pro-variation-size m-b-24">
          <span>Size</span>
          <div className="mn-pro-variation-content">
            <ul>
              <li className="active">
                <span>s</span>
              </li>
              <li>
                <span>m</span>
              </li>
              <li>
                <span>l</span>
              </li>
              <li>
                <span>xl</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mn-pro-variation-inner mn-pro-variation-color">
          <span>Colors</span>
          <div className="mn-pro-variation-content">
            <ul>
              <li className="active">
                {/* <span style="background-color:#1b4a87"></span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mn-single-qty">
        <div className="qty-plus-minus">
          <input className="qty-input" type="text" name="ms_qtybtn" value="1" />
        </div>
        <div className="mn-btns">
          <div className="mn-single-cart">
            <button className="btn btn-primary mn-btn-2 mn-add-cart">
              <span>Add To Cart</span>
            </button>
          </div>
          <div className="mn-single-wishlist">
            <a
              href="javascript:void(0)"
              className="mn-btn-group wishlist mn-wishlist"
              title="Wishlist"
            >
              <i className="ri-heart-line"></i>
            </a>
          </div>
          <div className="mn-single-mn-compare">
            <a
              href="javascript:void(0)"
              className="mn-btn-group mn-compare"
              title="Quick view"
            >
              <i className="ri-repeat-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
