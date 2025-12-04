"use client";
import React, { useState } from "react";

const Summary = ({ coupneAmount, subTotal }) => {
  const [delivaryOption, setDeliveryOption] = useState("outside");

  return (
    <div className="mn-cart-rightside col-lg-4 col-md-12 m-t-991 sticky">
      <div className="mn-sidebar-wrap">
        {/* <!-- Sidebar Summary Block --> */}
        <div className="mn-sidebar-block">
          <div className="mn-sb-title">
            <h3 className="mn-sidebar-title">Summary</h3>
          </div>
          <div className="mn-sb-block-content">
            <div className="mn-cart-form">
              <p>Enter your destination to get a shipping estimate</p>
              <form action="#" method="post">
                <span className="mn-cart-wrap">
                  <label>Delivery Options *</label>
                  <span className="mn-cart-select-inner">
                    <select
                      name="gi_cart_country"
                      id="mn-cart-select-country"
                      className="mn-cart-select"
                      onChange={() => setDeliveryOption(event.target.value)}
                    >
                      <option value="outside">Outside Dhaka</option>
                      <option value="inside">Inside Dhaka</option>
                    </select>
                  </span>
                </span>
              </form>
            </div>
          </div>

          <div className="mn-sb-block-content">
            <div className="mn-cart-summary-bottom">
              <div className="mn-cart-summary">
                <div>
                  <span className="text-left">Sub-Total</span>
                  <span className="text-right">{subTotal.toFixed(2)} TK</span>
                </div>
                <div>
                  <span className="text-left">Delivery Charges</span>
                  <span className="text-right">
                    {(delivaryOption === "inside" ? 80.0 : 120.0).toFixed(2)} TK
                  </span>
                </div>
                <div>
                  <span className="text-left">Coupan Discount</span>
                  <span className="text-right">
                    <a className="mn-cart-coupan">
                      {(coupneAmount ? coupneAmount : 0).toFixed(2)} TK
                    </a>
                  </span>
                </div>
                <div className="mn-cart-coupan-content">
                  <form
                    className="mn-cart-coupan-form"
                    name="mn-cart-coupan-form"
                    method="post"
                    action="#"
                  >
                    <input
                      className="mn-coupan"
                      type="text"
                      required=""
                      placeholder="Enter Your Coupan Code"
                      name="mn-coupan"
                      defaultValue=""
                    />
                    <button
                      className="mn-btn-2"
                      type="submit"
                      name="subscribe"
                      value=""
                    >
                      <span>Apply</span>
                    </button>
                  </form>
                </div>
                <div className="mn-cart-summary-total">
                  <span className="text-left">Total Amount</span>
                  <span className="text-right">
                    {(
                      (subTotal ?? 0) +
                      (delivaryOption === "inside" ? 80 : 120) -
                      (coupneAmount ? coupneAmount : 0)
                    ).toFixed(2)}
                    TK
                  </span>
                </div>{" "}
                <div className="col-lg-12">
                  <div className="mn-cart-update-bottom w-100 m-t-15">
                    <button className="mn-btn-2 justify-content-center w-100">
                      <span className="">Check Out</span>
                    </button>
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

export default Summary;
