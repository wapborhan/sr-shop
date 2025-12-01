import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-t-15">
      <div className="mn-footer">
        <div className="footer-container container">
          <div className="footer-top p-tb-30">
            <div className="row m-minus-991">
              <div className="col-sm-12 col-lg-3 mn-footer-cat">
                <div className="mn-footer-widget mn-footer-company">
                  <img
                    src="/assets/img/logo/logo-flat.png"
                    className="mn-footer-logos"
                    alt="footer logo"
                  />

                  {/* <h2>SR Shop</h2> */}
                  <p className="mn-footer-detail">
                    The Mantu is the biggest market of grocery products. Get
                    your daily needs from our store.
                  </p>
                  <div className="mn-app-store">
                    <a href="javascript:void(0)" className="app-img">
                      <img
                        src="/assets/img/footer/android.png"
                        className="adroid"
                        alt="apple"
                      />
                    </a>
                    <a href="javascript:void(0)" className="app-img">
                      <img
                        src="/assets/img/footer/apple.png"
                        className="apple"
                        alt="apple"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-2 mn-footer-info">
                <div className="mn-footer-widget">
                  <h4 className="mn-footer-heading">Category</h4>
                  <div className="mn-footer-links mn-footer-dropdown">
                    <ul className="align-items-center">
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Fashion</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Cosmetics</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Bags & Purse</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Shoes</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Belts</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Perfumes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-2 mn-footer-account">
                <div className="mn-footer-widget">
                  <h4 className="mn-footer-heading">Company</h4>
                  <div className="mn-footer-links mn-footer-dropdown">
                    <ul className="align-items-center">
                      <li className="mn-footer-link">
                        <a href="about-us.html">About us</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="track-order.html">Delivery</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="faq.html">Legal Notice</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="terms.html">Terms of use</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="checkout.html">Secure payment</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="contact-us.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-2 mn-footer-service">
                <div className="mn-footer-widget">
                  <h4 className="mn-footer-heading">Account</h4>
                  <div className="mn-footer-links mn-footer-dropdown">
                    <ul className="align-items-center">
                      <li className="mn-footer-link">
                        <a href="login.html">Sign In</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="faq.html">Return Policy</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="shop-right-sidebar.html">Become a Vendor</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="product-detail.html">Affiliate Program</a>
                      </li>
                      <li className="mn-footer-link">
                        <a href="checkout.html">Payments</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 mn-footer-cont-social">
                <div className="mn-footer-contact">
                  <div className="mn-footer-widget">
                    <h4 className="mn-footer-heading">Contact</h4>
                    <div className="mn-footer-links mn-footer-dropdown">
                      <ul className="align-items-center">
                        <li className="mn-footer-link mn-foo-location">
                          <span className="mt-15px">
                            <i className="ri-map-pin-line"></i>
                          </span>
                          <p>
                            1234 Elm Street Springfield Avenue, Brooklyn den, IL
                            62704 USA.
                          </p>
                        </li>
                        <li className="mn-footer-link mn-foo-call">
                          <span>
                            <i className="ri-whatsapp-line"></i>
                          </span>
                          <a href="tel:+009876543210">+00 9876543210</a>
                        </li>
                        <li className="mn-footer-link mn-foo-mail">
                          <span>
                            <i className="ri-mail-line"></i>
                          </span>
                          <a href="mailto:example@email.com">
                            example@email.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mn-footer-social">
                  <div className="mn-footer-widget">
                    <div className="mn-footer-links mn-footer-dropdown">
                      <ul className="align-items-center">
                        <li className="mn-footer-link">
                          <a href="javascript:void(0)">
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li className="mn-footer-link">
                          <a href="javascript:void(0)">
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li className="mn-footer-link">
                          <a href="javascript:void(0)">
                            <i className="ri-linkedin-fill"></i>
                          </a>
                        </li>
                        <li className="mn-footer-link">
                          <a href="javascript:void(0)">
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="mn-bottom-info">
                <div className="footer-copy">
                  <div className="footer-bottom-copy ">
                    <div className="mn-copy">
                      Copyright © <span id="copyright_year"></span>
                      <Link className="site-name" href="/">
                        Minnat Mart
                      </Link>{" "}
                      all rights reserved.
                    </div>
                  </div>
                </div>

                <div className="footer-bottom-right">
                  <div className="footer-bottom-payment d-flex justify-content-center">
                    <div className="payment-link">
                      <img src="/assets/img/footer/payment.png" alt="payment" />
                    </div>
                  </div>
                </div>
                <div className="mn-copy">
                  Developed by <Link href="/">SR Dream Lab</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
