import BreadCrumb from "@/components/BreadCrumb";
import { fetchProducts } from "@/lib/fetchProducts";
import React, { use } from "react";

const page = () => {
  const product = use(fetchProducts());

  return (
    <div className="container">
      <BreadCrumb page="Wishlist  Page" />
      <section className="mn-wishlist-page p-b-15">
        <div className="mn-title d-none">
          <h2>
            Product <span>Wishlist</span>
          </h2>
          <p>Your product wish is our first priority.</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mn-vendor-dashboard-card">
              <div className="mn-vendor-card-header">
                <h5>Wishlist</h5>
                <div className="mn-header-btn">
                  <a className="mn-btn-2" href="#">
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
              <div className="mn-vendor-card-body">
                <div className="mn-vendor-card-table">
                  <table className="mn-table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="wish-empt">
                      {product?.products.map((item) => (
                        <tr className="pro-gl-content" key={item.id}>
                          <td>
                            <span>{item.id}</span>
                          </td>
                          <td data-label="Product" className="mn-cart-pro-name">
                            <a href="product-detail.html" className="mn-item">
                              <img
                                className="prod-img"
                                src={item.thumbnail}
                                alt="product image"
                              />
                              {item.name}
                            </a>
                          </td>
                          <td>
                            <span>{item.meta?.createdAt}</span>
                          </td>
                          <td>
                            <span>${item.price}</span>
                          </td>
                          <td>
                            <span
                              className={
                                item.availabilityStatus ? "In Stock" : "out"
                              }
                            >
                              {item.availabilityStatus
                                ? "In Stock"
                                : "Out Of Stock"}
                            </span>
                          </td>
                          <td>
                            <span className="tbl-btn">
                              <a
                                className="mn-btn-2 add-to-cart mn-add-cart"
                                href="javascript:void(0)"
                                title="Add To Cart"
                              >
                                <span>
                                  <i className="ri-shopping-cart-line"></i>
                                </span>
                              </a>
                              <a
                                className="mn-btn-1 mn-remove-wish btn"
                                href="javascript:void(0)"
                                title="Remove From List"
                              >
                                <span>
                                  <i className="ri-close-line"></i>
                                </span>
                              </a>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
