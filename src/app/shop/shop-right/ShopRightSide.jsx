"use client";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const ShopRightSide = ({ product }) => {
  const [listView, setListView] = useState(false);
  const productData = { link: "/product/t-short", category: "T-shirt" };
  return (
    <div className="mn-shop-rightside col-lg-9 col-md-12">
      <div className="mn-pro-list-top d-flex">
        <div className="col-md-6 mn-grid-list">
          <div className="mn-gl-btn">
            <button
              className={`grid-btn btn-grid ${!listView && "active"}`}
              onClick={() => setListView(!listView)}
            >
              <i className="ri-gallery-view-2"></i>
            </button>
            <button
              className={`grid-btn btn-list ${listView && "active"}`}
              onClick={() => setListView(!listView)}
            >
              <i className="ri-list-check-2"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6 mn-sort-select">
          <div className="mn-select-inner">
            <select name="mn-select" id="mn-select">
              <option value="">Sort by</option>
              <option value="1">Position</option>
              <option value="2">Relevance</option>
              <option value="3">Name, A to Z</option>
              <option value="4">Name, Z to A</option>
              <option value="5">Price, low to high</option>
              <option value="6">Price, high to low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mn-select-bar d-flex">
        <span className="mn-select-btn">
          Clothes
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn">
          Fruits
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn">
          Snacks
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn">
          Dairy
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn">
          perfume
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn">
          jewelry
          <a className="mn-select-cancel" href="javascript:void(0)">
            ×
          </a>
        </span>
        <span className="mn-select-btn mn-select-btn-clear">
          <a className="mn-select-clear" href="javascript:void(0)">
            Clear All
          </a>
        </span>
      </div>

      <div className="shop-pro-content">
        <div className={`shop-pro-inner ${listView && "list-view"}`}>
          <div className="row">
            {product &&
              product.map((item) => (
                <ProductCard
                  key={item.id}
                  listView={listView}
                  productData={item}
                />
              ))}
          </div>
        </div>
        <div className="mn-pro-pagination m-b-15">
          <span>Showing 1-12 of {product.length} item(s)</span>
          <ul className="mn-pro-pagination-inner">
            <li>
              <a className="active" href="#">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <span>...</span>
            </li>
            <li>
              <a href="#">8</a>
            </li>
            <li>
              <a className="next" href="#">
                Next <i className="ri-arrow-right-double-line"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopRightSide;
