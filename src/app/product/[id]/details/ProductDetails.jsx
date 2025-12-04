const ProductDetails = ({ description }) => {
  return (
    <div className="mn-single-pro-tab">
      <div className="mn-title">
        <h2>
          Products <span>Detail</span>
        </h2>
      </div>
      <div className="mn-single-pro-tab-wrapper">
        <div className="tab-content  mn-single-pro-tab-content">
          <div
            id="mn-spt-nav-details"
            className="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            <div className="mn-single-pro-tab-desc">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
