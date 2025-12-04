import React from "react";

const ProductRevew = () => {
  return (
    <section className="mn-revew-product m-t-30 tab-content mn-single-pro-tab-content">
      <div className="mn-title">
        <h2>
          Products <span> Reviews</span>
        </h2>
      </div>
      <div id="mn-spt-nav-review">
        <div className="row">
          <div className="mn-t-review-wrapper mt-0">
            <div className="mn-t-review-item">
              <div className="mn-t-review-avtar">
                <img src="/assets/img/user/1.jpg" alt="user" />
              </div>
              <div className="mn-t-review-content">
                <div className="mn-t-review-top">
                  <div className="mn-t-review-name">Mariya Lykra</div>
                  <div className="mn-t-review-rating mn-pro-rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill grey"></i>
                  </div>
                </div>
                <div className="mn-t-review-bottom">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen.
                  </p>
                </div>
              </div>
            </div>
            <div className="mn-t-review-item">
              <div className="mn-t-review-avtar">
                <img src="/assets/img/user/2.jpg" alt="user" />
              </div>
              <div className="mn-t-review-content">
                <div className="mn-t-review-top">
                  <div className="mn-t-review-name">Moris Willson</div>
                  <div className="mn-t-review-rating mn-pro-rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill grey"></i>
                    <i className="ri-star-fill grey"></i>
                  </div>
                </div>
                <div className="mn-t-review-bottom">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mn-ratting-content">
            <h3>Add a Review</h3>
            <div className="mn-ratting-form">
              <form action="#">
                <div className="mn-ratting-star">
                  <span>Your rating:</span>
                  <div className="mn-t-review-rating mn-pro-rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill grey"></i>
                    <i className="ri-star-fill grey"></i>
                    <i className="ri-star-fill grey"></i>
                  </div>
                </div>
                <div className="mn-ratting-input">
                  <input name="your-name" placeholder="Name" type="text" />
                </div>
                <div className="mn-ratting-input">
                  <input
                    name="your-email"
                    placeholder="Email*"
                    type="email"
                    required
                  />
                </div>
                <div className="mn-ratting-input form-submit">
                  <textarea
                    name="your-commemt"
                    placeholder="Enter Your Comment"
                  ></textarea>
                  <button className="mn-btn-2" type="submit" value="Submit">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRevew;
