import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-top footer-bg padding-top-100 padding-bottom-70 footer_custom_background_color">
        <div className="container container-two">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer_one-widget widget">
                <div className="footer-widget widget">
                  <div className="about_us_widget style-01">
                    <img src="images/logo-031637644754.png" alt="Logo" />
                    <p>
                      One advanced diverted domestic set repeated bringing you old. Possible procured
                      her trifling laughter thoughts property she met way. Which could saw guest man
                      now heard but.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer_one-widget widget">
                <div className="visited-area padding-top-30">
                  <div className="section-title">
                    <h4 className="title">Most Viewed News</h4>
                  </div>
                  <div className="visited-wrapper">
                    <div className="sidebar-contents">
                      {[{
                        href: "https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other",
                        imgSrc: "images/011639210180.jpg",
                        category: "Beauty",
                        title: "Travel is the only thing you buy that makes you richer charm money add heard new other"
                      }, {
                        href: "https://bytesed.com/laravel/intoday/blog/malaysia-what-a-wonderful-moment-for-our-team-and-the-vissitors",
                        imgSrc: "images/edited-21639210028.jpg",
                        category: "Travel",
                        title: "Malaysia what a wonderful moment for our team and the vissitors"
                      }].map(({ href, imgSrc, category, title }, index) => (
                        <div className="recent-contents style-03 wow animated fadeInUp" data-wow-delay=".1s" key={index}>
                          <div className="recent-flex-contents">
                            <div className="flex-thumbs">
                              <a href={href}>
                                <img src={imgSrc} alt={title} />
                              </a>
                            </div>
                            <div className="flex-contents">
                              <span className="span-title">
                                <a href={href}>{category}</a>
                              </span>
                              <h4 className="common-title">
                                <a href={href}>{title}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget newsletter-widget">
                <h4 className="widget-title">Subscribe Newsletter</h4>
                <p>Get the latest creative news from Anacker News</p>
                <div className="form-message-show"></div>
                <div className="newsletter-form-wrap">
                  <form action="https://bytesed.com/laravel/intoday/subscribe-newsletter" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="DeCAwJEngpcDmSODy8LSjGqWCEQIzrJsLVEZeWgY" />
                    <div className="form-group">
                      <input type="email" name="email" placeholder="your email" className="form-control" />
                    </div>
                    <button type="submit" className="submit-btn">
                      <i className="las la-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer_one-widget widget">
                <h4 className="widget-title">Contact us</h4>
                <ul className="contact_info_list">
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="las la-home"></i>
                    </div>
                    <div className="details">
                      66 Brooklyn street, New York
                    </div>
                  </li>
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="las la-phone-volume"></i>
                    </div>
                    <div className="details">
                      01875484888
                    </div>
                  </li>
                  <li className="single-info-item">
                    <div className="icon">
                      <i className="las la-envelope-open"></i>
                    </div>
                    <div className="details">
                      sohan@xgenious.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-area">
          <div className="container custom-container-1515">
            <div className="row justify-content-center">
              © 2024 All rights reserved by Anacker
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
