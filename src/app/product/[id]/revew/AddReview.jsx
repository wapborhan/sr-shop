import React from "react";

const AddReview = () => {
  return (
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
  );
};

export default AddReview;
