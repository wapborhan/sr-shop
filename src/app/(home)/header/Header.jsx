import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="mn-header ">
        <div className="mn-header-items container">
          <div className="left-header">
            {/* <a href="javascript:void(0)" className="mn-toggle-sidebar">
              <span className="outer-ring">
                <span className="inner-ring"></span>
              </span>
            </a> */}
            <Link href="/" className="logo">
              <img src="/assets/img/logo/logo.png" alt="logo" />
              {/* <h2>SR Shop</h2> */}
            </Link>
            <a href="javascript:void(0)" className="mn-toggle-menu">
              <div className="header-icon">
                <i className="ri-menu-3-fill"></i>
              </div>
            </a>
          </div>
          <div className="right-header">
            <div
              id="mn-main-menu-desk"
              className="d-none d-lg-block sticky-nav"
            >
              <div className="nav-desk">
                <div className="row">
                  <div className="col-md-12 align-self-center">
                    <div className="mn-main-menu">
                      <ul>
                        <li className="non-drop">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="non-drop">
                          <Link href="/shop">Shop</Link>
                        </li>
                        <li className="dropdown drop-list">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow"
                          >
                            Categories<i className="ri-arrow-down-s-line"></i>
                          </a>
                          <ul className="mega-menu d-block">
                            <li className="d-flex">
                              <span className="bg"></span>
                              <ul className="d-block mega-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">classNameic</a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html">
                                    Shop Right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-right-sidebar.html">
                                    Banner Right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-full-width.html">
                                    Shop Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-banner-full-width.html">
                                    Banner Full Width
                                  </a>
                                </li>
                              </ul>
                              <ul className="d-block mega-block">
                                <li className="menu_title">
                                  <a href="javascript:void(0)">List</a>
                                </li>
                                <li>
                                  <a href="shop-list-right-sidebar.html">
                                    Shop Right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-banner-right-sidebar.html">
                                    Banner Right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-full-width.html">
                                    Shop Full Width
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-banner-full-width.html">
                                    Banner Full Width
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow"
                          >
                            Products<i className="ri-arrow-down-s-line"></i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="product-detail.html">product detail</a>
                            </li>
                            <li>
                              <a href="product-accordion.html">
                                Product accordion
                              </a>
                            </li>
                            <li>
                              <a href="product-full-width.html">
                                Product full width
                              </a>
                            </li>
                            <li>
                              <a href="product-accordion-full-width.html">
                                accordion full width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow"
                          >
                            Pages<i className="ri-arrow-down-s-line"></i>
                          </a>
                          <ul className="sub-menu">
                            <li className="dropdown position-static">
                              <a
                                href="javascript:void(0)"
                                className="mn-sub-drop"
                              >
                                Blog
                                <i className="ri-arrow-down-s-line"></i>
                              </a>
                              <ul className="sub-menu sub-menu-child">
                                <li>
                                  <a href="blog-right-sidebar.html">
                                    right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-full-width.html">Full Width</a>
                                </li>
                                <li>
                                  <a href="blog-detail-right-sidebar.html">
                                    Detail right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-detail-full-width.html">
                                    Detail Full Width
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="contact-us.html">Contact Us</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mn-mobile-menu-overlay"></div>
            <div id="mn-mobile-menu" className="mn-mobile-menu">
              <div className="mn-menu-title">
                <span className="menu_title">My Menu</span>
                <button type="button" className="mn-close-menu">
                  ×
                </button>
              </div>
              <div className="mn-menu-inner">
                <div className="mn-menu-content">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Categories</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="javascript:void(0)">classNameic</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-banner-right-sidebar.html">
                                Banner Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-full-width.html">Shop Full Width</a>
                            </li>
                            <li>
                              <a href="shop-banner-full-width.html">
                                Banner Full Width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)">List</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop-list-right-sidebar.html">
                                Shop Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-banner-right-sidebar.html">
                                Banner Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-full-width.html">
                                Shop Full Width
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-banner-full-width.html">
                                Banner Full Width
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Products</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="product-detail.html">product detail</a>
                        </li>
                        <li>
                          <a href="product-accordion.html">Product accordion</a>
                        </li>
                        <li>
                          <a href="product-full-width.html">
                            Product full width
                          </a>
                        </li>
                        <li>
                          <a href="product-accordion-full-width.html">
                            accordion full width
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-full-width.html">Full Width</a>
                        </li>
                        <li>
                          <a href="blog-detail-right-sidebar.html">
                            Detail Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-detail-full-width.html">
                            Detail Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="header-res-lan-curr">
                  <div className="header-res-social">
                    <div className="header-top-social">
                      <ul className="mb-0">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ri-facebook-fill"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ri-twitter-fill"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ri-linkedin-fill"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mn-tool-icons">
              <div className="mn-tool-search">
                <a
                  href="javascript:void(0)"
                  className="mn-main-search mn-search-toggle"
                >
                  <FiSearch />
                </a>
              </div>
              <div className="mn-tool-user">
                <Link href="/login" className="mn-main-user">
                  <FaRegUser />
                </Link>
              </div>
              <div className="mn-tool-wish">
                <a
                  href="javascript:void(0)"
                  className="mn-main-wishlist mn-wishlist-toggle"
                >
                  <span className="label lbl-1">3</span>
                  <FaRegHeart />
                </a>
              </div>
              <div className="mn-tool-cart">
                <a
                  href="javascript:void(0)"
                  className="mn-main-cart mn-cart-toggle"
                >
                  <span className="label lbl-2">4</span> <BsCart3 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
