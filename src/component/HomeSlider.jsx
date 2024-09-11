import React, { useState } from "react";
import NewsArea from "./NewsArea";
import SportsSection from "./SportsSection";

const HomeSlider = () => {
    const [showDetails, setShowDetails] = useState(false);
  return (
    <div class="parent-area parent-container-fluid padding-top-70">
      <div class="container container-two">
        <div class="row">
          <div className="col-xl-8">
            <div
              className="banner-slider slick-slider-one"
              data-padding-top={0}
              data-padding-bottom={0}
            >
              <div className="single-slider">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="banner-contents">
                      <div className="section-title style-02 padding-bottom-20">
                        <span className="title">
                          <a href="https://bytesed.com/laravel/intoday/blog/category/16/beauty">
                            Beauty
                          </a>
                        </span>
                      </div>
                      <h2 className="banner-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other">
                          Travel is the only thing you buy that makes you richer
                          charm...{" "}
                        </a>
                      </h2>
                      <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other">
                        <p className="common-para">
                          {" "}
                          Morbi elementum blandit sem et cursus. Ut hendrerit
                          viverra purus. Sed aliquet varius odio id volutpat.
                          Morbi elementum blandit sem et cursus.{" "}
                        </p>
                      </a>
                      <div className="btn-wrapper">
                        <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other"></a>
                        <a
                          href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other"
                          className="cmn-btn btn-one"
                        >
                          Read More{" "}
                        </a>
                      </div>
                      <span className="banner-dates"> 12 Dec 2021 </span>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div
                      className="banner-thumbs bg-custom-image"
                      style={{
                        backgroundImage: "url(images/large-011639210180.jpg)",
                      }}
                    >
                      <div className="popup-videos"> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div className="banner-contents">
                      <div className="section-title style-02 padding-bottom-20">
                        <span className="title">
                          <a href="https://bytesed.com/laravel/intoday/blog/category/12/sports">
                            Sports
                          </a>
                        </span>
                      </div>
                      <h2 className="banner-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/when-you%E2%80%99re-riding,-only-the-race-in-which-you%E2%80%99re-riding-tried-for-way-joy-wrote-witty">
                          When you’re riding, only the race in which you’re
                          riding tried for...{" "}
                        </a>
                      </h2>
                      <a href="https://bytesed.com/laravel/intoday/blog/when-you%E2%80%99re-riding,-only-the-race-in-which-you%E2%80%99re-riding-tried-for-way-joy-wrote-witty">
                        <p className="common-para">
                          {" "}
                          Morbi elementum blandit sem et cursus. Ut hendrerit
                          viverra purus. Sed aliquet varius odio id volutpat.
                          Morbi elementum blandit sem et cursus.{" "}
                        </p>
                      </a>
                      <div className="btn-wrapper">
                        <a href="https://bytesed.com/laravel/intoday/blog/when-you%E2%80%99re-riding,-only-the-race-in-which-you%E2%80%99re-riding-tried-for-way-joy-wrote-witty"></a>
                        <a
                          href="https://bytesed.com/laravel/intoday/blog/when-you%E2%80%99re-riding,-only-the-race-in-which-you%E2%80%99re-riding-tried-for-way-joy-wrote-witty"
                          className="cmn-btn btn-one"
                        >
                          Read More{" "}
                        </a>
                      </div>
                      <span className="banner-dates"> 12 Dec 2021 </span>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div
                      className="banner-thumbs bg-custom-image"
                      style={{
                        backgroundImage:
                          "url(images/large-last-edit-1280x1920-221638873373.jpg)",
                      }}
                    >
                      <div className="popup-videos"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="banner-ads-area">
              <div
                className="container "
                data-padding-top={50}
                data-padding-bottom={21}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="widget widget-add add-banner-x add-1 home_advertisement mt-5 wow animated zoomIn"
                      data-wow-delay=".3s"
                    >
                      <input type="hidden" id="add_id" defaultValue={10} />
                      <div className="single-banner-ads">
                        <a href="https://ozagi-update.dev/home-page-three#">
                          <img src="images/ads-black11637991342.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewsArea />
            <section
              className="video-area"
              data-padding-top={50}
              data-padding-bottom={50}
            >
              <div className="section-title">
                <h4 className="title"> Videos </h4>
              </div>
              <div className="video-slider slider-nav-style">
                <div className="video-wrapper margin-top-40">
                  <div className="single-videos">
                    <div className="video-thumbs">
                      <img
                        src="images/last-edit-1280x1920-361638873517.jpg"
                        className="large"
                        alt=""
                      />
                      <div className="popup-videos">
                        <a
                          href="https://www.youtube.com/watch?v=cuUe04rnT6I"
                          className="videos-play v-01"
                        >
                          {" "}
                          <i className="las la-play" />
                        </a>
                      </div>
                    </div>
                    <div className="video-contents">
                      <h2 className="video-title">
                        {" "}
                        <a href="https://bytesed.com/laravel/intoday/blog/health-why-is-this-such-an-important-problem-for-you-to-fix-told-ham-dull-knew--spot-near">
                          Health Why is this such an important problem for you
                          to fix told ham dull knew spot near
                        </a>{" "}
                      </h2>
                      <span className="span-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/category/6/health">
                          Health
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="video-wrapper margin-top-40">
                  <div className="single-videos">
                    <div className="video-thumbs">
                      <img
                        src="images/last-edit-1280x1920-311638873515.jpg"
                        className="large"
                        alt=""
                      />
                      <div className="popup-videos">
                        <a
                          href="https://www.youtube.com/watch?v=tCXGJQYZ9JA"
                          className="videos-play v-01"
                        >
                          {" "}
                          <i className="las la-play" />
                        </a>
                      </div>
                    </div>
                    <div className="video-contents">
                      <h2 className="video-title">
                        {" "}
                        <a href="https://bytesed.com/laravel/intoday/blog/american-fizer-vaxine-is-more-efficient-rather-then-others-evening-believe-but-proceed-pretend">
                          American Fizer vaxine is more efficient rather then
                          others evening believe but proceed pretend
                        </a>{" "}
                      </h2>
                      <span className="span-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/category/18/corona">
                          Corona
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* left side */}
          <div class="col-xl-4">
            <div class="widget-area-wrapper style-02">
                {/* recent */}
              <div className="sidebar_01-widget widget">
                <div className="single-sidebar-item responsive-margin">
                  <div className="section-title">
                    <h4 className="title">Recent News</h4>
                  </div>
                  <div className="sidebar-contents">
                    <div className="recent-contents">
                      <span className="span-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/category/16/beauty">
                          Beauty
                        </a>
                      </span>
                      <h4 className="common-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other">
                          Travel is the only thing you buy that makes you richer
                          charm money add heard new other
                        </a>
                      </h4>
                    </div>
                    <div className="recent-contents">
                      <span className="span-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/category/17/lifestyle">
                          Lifestyle
                        </a>
                      </span>
                      <h4 className="common-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/jobs-fill-your-pockets,-adventures-fill-your-soul-new-her-covered-hastily-sitting-her">
                          Jobs fill your pockets, adventures fill your soul new
                          her covered hastily sitting her
                        </a>
                      </h4>
                    </div>
                    <div className="recent-contents">
                      <span className="span-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/category/6/health">
                          Health
                        </a>
                      </span>
                      <h4 className="common-title">
                        <a href="https://bytesed.com/laravel/intoday/blog/health-why-is-this-such-an-important-problem-for-you-to-fix-told-ham-dull-knew--spot-near">
                          Health Why is this such an important problem for you
                          to fix told ham dull knew spot near
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

        

{/* facbook  */}
  <div className="widget">
    <div className="right-side-area padding-top-30">
      <div className="single-sidebar-item margin-reverse">
        <div className="section-title">
          <h4 className="title"> Follow us </h4>
        </div>
        <div className="sidebar-contents">
          <div className="follow-list">
            <div className="single-list">
              <a className="facebook-bg" href="#">
                {" "}
                <i className="lab la-facebook-f" />{" "}
              </a>
              <span className="followers"> 100 Follower </span>
            </div>
            <div className="single-list">
              <a className="youtube-bg" href="#">
                {" "}
                <i className="lab la-youtube" />{" "}
              </a>
              <span className="followers"> 60 Follower </span>
            </div>
            <div className="single-list">
              <a className="twitter-bg" href="#">
                {" "}
                <i className="lab la-twitter" />{" "}
              </a>
              <span className="followers"> 80 Follower </span>
            </div>
            <div className="single-list">
              <a className="instagram-bg" href="#">
                {" "}
                <i className="lab la-instagram" />{" "}
              </a>
              <span className="followers"> 50 Follower </span>
            </div>
            <div className="single-list">
              <a className="pintarest-bg" href="#">
                {" "}
                <i className="lab la-pinterest-p" />
              </a>
              <span className="followers"> 70 Follower </span>
            </div>
            <div className="single-list">
              <a className="linkedin-bg" href="#">
                {" "}
                <i className="lab la-linkedin-in" />{" "}
              </a>
              <span className="followers"> 90 Follower </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* categories */}
  <div className="widget_archive sidebar_01-widget widget">
    <div className="single-sidebar-item padding-top-30 margin-reverse">
      <div className="section-title">
        <h4 className="title">Categories</h4>
      </div>
      <div className="sidebar-contents">
        <div className="categories-lists">
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/19/life">
                Life
              </a>
            </span>
            <span className="followers">(2)</span>
          </div>
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/18/corona">
                Corona
              </a>
            </span>
            <span className="followers">(6)</span>
          </div>
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/17/lifestyle">
                Lifestyle
              </a>
            </span>
            <span className="followers">(2)</span>
          </div>
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/16/beauty">
                Beauty
              </a>
            </span>
            <span className="followers">(1)</span>
          </div>
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/15/global">
                Global
              </a>
            </span>
            <span className="followers">(3)</span>
          </div>
          <div className="single-list">
            <span className="follow-para">
              {" "}
              <a href="https://bytesed.com/laravel/intoday/blog/category/14/business">
                Business
              </a>
            </span>
            <span className="followers">(2)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* lastest view */}
  <div className=" sidebar_01-widget widget">
    <div className="single-sidebar-item padding-top-30">
      <div className="section-title">
        <h4 className="title">Latest News</h4>
      </div>
      <div className="sidebar-contents" />
    </div>
  </div>
  {/* facbook */}
  <div className="widget">
    <div className="right-side-area padding-top-30">
      <div className="single-sidebar-item margin-reverse">
        <div className="section-title">
          <h4 className="title"> Follow us </h4>
        </div>
        <div className="sidebar-contents">
          <div className="follow-list">
            <div className="single-list">
              <a className="facebook-bg" href="#">
                {" "}
                <i className="lab la-facebook-f" />{" "}
              </a>
              <span className="followers"> 10 Follower </span>
            </div>
            <div className="single-list">
              <a className="youtube-bg" href="#">
                {" "}
                <i className="lab la-youtube" />{" "}
              </a>
              <span className="followers"> 30 Follower </span>
            </div>
            <div className="single-list">
              <a className="twitter-bg" href="#">
                {" "}
                <i className="lab la-twitter" />{" "}
              </a>
              <span className="followers"> 50 Follower </span>
            </div>
            <div className="single-list">
              <a className="instagram-bg" href="#">
                {" "}
                <i className="lab la-instagram" />{" "}
              </a>
              <span className="followers"> 20 Follower </span>
            </div>
            <div className="single-list">
              <a className="pintarest-bg" href="#">
                {" "}
                <i className="lab la-pinterest-p" />
              </a>
              <span className="followers"> 40 Follower </span>
            </div>
            <div className="single-list">
              <a className="linkedin-bg" href="#">
                {" "}
                <i className="lab la-linkedin-in" />{" "}
              </a>
              <span className="followers"> 60 Follower </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* most view */}
<div className="sidebar_01-widget widget">
      <div className="visited-area padding-top-30">
        <div className="section-title">
          <h4 className="title">Most Viewed</h4>
        </div>
        <div className="visited-wrapper">
          <div className="sidebar-contents">
            <div className="recent-contents style-03 wow animated fadeInUp" data-wow-delay=".1s">
              <div className="recent-flex-contents">
                <div className="flex-thumbs">
                  <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other">
                    <img src="images/011639210180.jpg" alt="Travel" />
                  </a>
                </div>
                <div className="flex-contents">
                  <span className="span-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/category/16/beauty">Beauty</a>
                  </span>
                  <h4 className="common-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/travel-is-the-only-thing-you-buy-that-makes-you-richer-charm-money-add-heard-new-other">
                      Travel is the only thing you buy that makes you richer charm money add heard new other
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="recent-contents style-03 wow animated fadeInUp" data-wow-delay=".1s">
              <div className="recent-flex-contents">
                <div className="flex-thumbs">
                  <a href="https://bytesed.com/laravel/intoday/blog/malaysia-what-a-wonderful-moment-for-our-team-and-the-vissitors">
                    <img src="images/edited-21639210028.jpg" alt="Malaysia" />
                  </a>
                </div>
                <div className="flex-contents">
                  <span className="span-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/category/2/travel">Travel</a>
                  </span>
                  <h4 className="common-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/malaysia-what-a-wonderful-moment-for-our-team-and-the-vissitors">
                      Malaysia what a wonderful moment for our team and the visitors
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="recent-contents style-03 wow animated fadeInUp" data-wow-delay=".1s">
              <div className="recent-flex-contents">
                <div className="flex-thumbs">
                  <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                    <img src="images/last-edit-1280x1920-231638873373.jpg" alt="Content" />
                  </a>
                </div>
                <div className="flex-contents">
                  <span className="span-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/category/2/travel">Travel</a>
                  </span>
                  <h4 className="common-title">
                    <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                      One advanced divert cute with repeated content making stuff
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* last widget */}
    <div className="widget_archive sidebar_01-widget widget">
      <div className="widget-poll padding-top-30 margin-reverse-30 voting-custom wow bounceInUp" data-wow-duration="1.5s">
        <div className="section-title">
          <h4 className="title">Voting Poll</h4>
        </div>
        <ul className="list">
          <h5 id="qs">Which Programming Language is on trend right now?</h5>
          <h6 id="total_vote" className="text-center text-primary" style={{ display: showDetails ? 'block' : 'none' }}>
            Total Vote : 28
          </h6>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="Python" />
              Python
            </label>
          </li>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="Javascript" />
              Javascript
            </label>
          </li>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="C#" />
              C#
            </label>
          </li>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="PHP" />
              PHP
            </label>
          </li>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="Java" />
              Java
            </label>
          </li>
          <li className="vote_item">
            <label className="ml-1">
              <input className="poll_radio" type="radio" name="vote" value="Ruby" />
              Ruby
            </label>
          </li>
          {[{
            value: "Ruby",
            width: "17.857142857143%",
            color: "#FEA47F",
            percentage: "18%",
            votes: 5
          }, {
            value: "Java",
            width: "7.1428571428571%",
            color: "#BDC581",
            percentage: "8%",
            votes: 2
          }, {
            value: "PHP",
            width: "28.571428571429%",
            color: "#EAB543",
            percentage: "29%",
            votes: 8
          }, {
            value: "Javascript",
            width: "14.285714285714%",
            color: "#55E6C1",
            percentage: "15%",
            votes: 4
          }, {
            value: "C#",
            width: "21.428571428571%",
            color: "#B33771",
            percentage: "22%",
            votes: 6
          }, {
            value: "Python",
            width: "10.714285714286%",
            color: "#FEA47F",
            percentage: "11%",
            votes: 3
          }].map(({ value, width, color, percentage, votes }) => (
            <div className="vote_progress_content" style={{ display: showDetails ? 'block' : 'none' }} key={value}>
              <div className="progress mt-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width, backgroundColor: color }}
                  aria-valuenow={parseFloat(width) / 100 * 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <strong>{`${value} (${votes}) `}<span className="progress-percentage">{percentage}</span></strong>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className="vote-login-details" style={{ display: showDetails ? 'block' : 'none' }}>
          <form action="" id="poll_voting_form" method="post">
            <div className="error-wrap"></div>
            <input type="hidden" name="id" id="id" value="2" />
            <input type="hidden" name="vote_name" id="vote_name" value="" />
            <div className="form-group">
              <input type="text" className="form-control" name="name" value="" placeholder="Enter your name" id="voter_name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" value="" placeholder="Enter your email" id="voter_email" />
            </div>
          </form>
        </div>
        <div className="vote-button-content">
          <button id="vote_btn" className="btn btn-info btn-sm" style={{ display: showDetails ? 'block' : 'none' }}>Vote</button>
          <button type="submit" id="submit_vote_btn" className="btn btn-info btn-sm" style={{ display: showDetails ? 'block' : 'none' }}>
            Submit Vote
          </button>
          <a href="" className="view_results_btn">View Results</a>
          <a href="" className="view_options_btn" style={{ display: showDetails ? 'block' : 'none' }}>View Options</a>
        </div>
      </div>
    </div>




            </div>
          </div>
        </div>
      </div>
      {/* NEXT */}
      <div class="container-fluid p-0 container-two">
        <div class="col-lg-12">
<SportsSection />
    </div>
        </div>
        </div>
  );
};

export default HomeSlider;
