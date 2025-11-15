const Banner = () => {
  return (
    <div className="m-b-30">
      <div className="row">
        <div className="col-md-6">
          <div className="mn-ofr-banners">
            <div className="mn-bnr-body">
              <div className="mn-bnr-img">
                <span className="lbl">70% Off</span>
                <img src="/assets/img/banner/5.jpg" alt="banner" />
              </div>
              <div className="mn-bnr-detail">
                <h5>Best men's fashion sale</h5>
                <p>Stylish Design of clothes.</p>
                <a href="shop-right-sidebar.html" className="mn-btn-2">
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mn-ofr-banners m-t-767">
            <div className="mn-bnr-body">
              <div className="mn-bnr-img">
                <span className="lbl">50% Off</span>
                <img src="/assets/img/banner/6.jpg" alt="banner" />
              </div>
              <div className="mn-bnr-detail">
                <h5>Trending women's sale</h5>
                <p>Trending desings of clothes.</p>
                <a href="shop-right-sidebar.html" className="mn-btn-2">
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
