import React, { useState } from 'react';

const NewsArea = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to 'Travel' tab
  const [loading, setLoading] = useState(false);

  const handleTabClick = (id) => {
    setLoading(true);
    // Simulate content loading with a timeout
    setTimeout(() => {
      setActiveTab(id);
      setLoading(false);
    }, 500); // Adjust delay as needed
  };

  const renderContent = () => {
    switch (activeTab) {
      case 2:
        return (
          <>
            {/* Content for Travel tab */}
            <div className="col-lg-6">
              <div className="single-news margin-top-30">
                <div className="news-thumb video-parent-global">
                  <img src="images/last-edit-1280x1920-231638873373.jpg" alt="" />
                  <div className="popup-videos"></div>
                  <ul className="news-date-tag">
                    <li className="tag-list">Oct 24, 2021</li>
                    <li className="tag-list">
                      <a className="item" href="https://bytesed.com/laravel/intoday/blog/category/2/travel">
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="news-contents">
                  <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                    <h3 className="common-title">
                      One advanced divert cute with repeated content making stuff
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-news margin-top-30">
                <div className="news-thumb video-parent-global">
                  <img src="images/last-edit-1280x1920-231638873373.jpg" alt="" />
                  <div className="popup-videos"></div>
                  <ul className="news-date-tag">
                    <li className="tag-list">Oct 24, 2021</li>
                    <li className="tag-list">
                      <a className="item" href="https://bytesed.com/laravel/intoday/blog/category/2/travel">
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="news-contents">
                  <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                    <h3 className="common-title">
                      One advanced divert cute with repeated content making stuff
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-news margin-top-30">
                <div className="news-thumb video-parent-global">
                  <img src="images/last-edit-1280x1920-231638873373.jpg" alt="" />
                  <div className="popup-videos"></div>
                  <ul className="news-date-tag">
                    <li className="tag-list">Oct 24, 2021</li>
                    <li className="tag-list">
                      <a className="item" href="https://bytesed.com/laravel/intoday/blog/category/2/travel">
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="news-contents">
                  <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                    <h3 className="common-title">
                      One advanced divert cute with repeated content making stuff
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            {/* Add more news items for the Travel tab */}
          </>
        );
      case 3:
        return (
          <>
            {/* Content for Food tab */}
            <div className="col-lg-6">
              <div className="single-news margin-top-30">
                <div className="news-thumb video-parent-global">
                  <img src="images/last-edit-1280x1920-231638873373.jpg" alt="" />
                  <div className="popup-videos"></div>
                  <ul className="news-date-tag">
                    <li className="tag-list">Oct 24, 2021</li>
                    <li className="tag-list">
                      <a className="item" href="https://bytesed.com/laravel/intoday/blog/category/2/travel">
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="news-contents">
                  <a href="https://bytesed.com/laravel/intoday/blog/one-advanced-divert-cute-with-repeated-content-making-stuff">
                    <h3 className="common-title">
                      One advanced divert cute with repeated content making stuff
                    </h3>
                  </a>
                </div>
              </div>
            </div>
            {/* Add news items for the Food tab */}
          </>
        );
      case 4:
        return (
          <>
            {/* Content for Fashion tab */}
            Fashion
            {/* Add news items for the Fashion tab */}
          </>
        );
      case 5:
        return (
          <>
            {/* Content for Music tab */}
            Music
            {/* Add news items for the Music tab */}
          </>
        );
      case 6:
        return (
          <>
            {/* Content for Health tab */}
            Health
            {/* Add news items for the Health tab */}
          </>
        );
      case 12:
        return (
          <>
            {/* Content for Sports tab */}
            Sports
            {/* Add news items for the Sports tab */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="news-area" data-padding-top={50} data-padding-bottom={50}>
      <div className="load-ajax-data" style={{ display: loading ? 'block' : 'none' }}>
        <div className="loader"></div> {/* Replace with your loader animation */}
      </div>
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <div className="section-title">
            <h4 className="title left-align">Popular News</h4>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="news-list">
            <ul className="news-button-list">
              <li
                className={`lists list-category ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Travel
              </li>
              <li
                className={`lists list-category ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Food
              </li>
              <li
                className={`lists list-category ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)}
              >
                Fashion
              </li>
              <li
                className={`lists list-category ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => handleTabClick(5)}
              >
                Music
              </li>
              <li
                className={`lists list-category ${activeTab === 6 ? 'active' : ''}`}
                onClick={() => handleTabClick(6)}
              >
                Health
              </li>
              <li
                className={`lists list-category ${activeTab === 12 ? 'active' : ''}`}
                onClick={() => handleTabClick(12)}
              >
                Sports
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row home-page-ajax-news-show">
        {renderContent()}
      </div>
    </section>
  );
};

export default NewsArea;
