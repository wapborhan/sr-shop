import Link from "next/link";
import React from "react";

const ProductCard = ({ listView, productData }) => {
  const { title, thumbnail, category } = productData;

  console.log(productData);

  return (
    <div
      className={`col-md-3 col-sm-6 col-xs-6 m-b-24 mn-product-box pro-gl-content ${
        listView && "width-100"
      }`}
    >
      <div className="mn-product-card">
        <div className="mn-product-img">
          <div className="lbl">
            <span className="new">new</span>
          </div>
          <div className="mn-img">
            <Link href={`/product/${title}`} className="image">
              <img className="main-img" src={thumbnail} alt="product" />
            </Link>
            <div className="mn-pro-loader"></div>
            <div className="mn-options">
              <ul>
                <li>
                  <span
                    data-tooltip
                    title="Quick View"
                    data-link-action="quickview"
                    data-bs-toggle="modal"
                    data-bs-target="#quickview_modal"
                  >
                    <i className="ri-eye-line"></i>
                  </span>
                </li>
                <li>
                  <span data-tooltip title="Compare" className="mn-compare">
                    <i className="ri-repeat-line"></i>
                  </span>
                </li>
                <li>
                  <span
                    data-tooltip
                    title="Add To Cart"
                    className="mn-add-cart"
                  >
                    <i className="ri-shopping-cart-line"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mn-product-detail">
          <div className="cat">
            <Link href={`/categories/${category}`}>{category}</Link>
          </div>
          <h5>
            <Link href={"url"}>{title}</Link>
          </h5>
          <p className="mn-info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="mn-pro-option">
            <div className="mn-price">
              <div className="mn-price-new">$120</div>
              <div className="mn-price-old">$130</div>
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
