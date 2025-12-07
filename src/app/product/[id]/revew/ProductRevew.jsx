import React from "react";
import AddReview from "./AddReview";

const ProductRevew = ({ reviews }) => {
  console.log(reviews);

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
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div className="mn-t-review-item" key={index}>
                  <div className="mn-t-review-avtar">
                    <img
                      src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
                      alt="user"
                      style={{ border: "1px solid #888" }}
                    />
                  </div>
                  <div className="mn-t-review-content">
                    <div className="mn-t-review-top">
                      <div className="mn-t-review-name">
                        {review.reviewerName}
                      </div>{" "}
                      {/* <div className="mn-t-review-names">
                        {review.reviewerEmail}
                      </div> */}
                      <div className="mn-t-review-rating mn-pro-rating">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={`ri-star-fill ${
                              i < review.rating ? "" : "grey"
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div className="mn-t-review-bottom">
                      <p>{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
          <AddReview />
        </div>
      </div>
    </section>
  );
};

export default ProductRevew;
