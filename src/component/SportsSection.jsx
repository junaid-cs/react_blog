import React from "react";
import Slider from "react-slick";

const SportsSection = () => {
  const sportsData = [
    {
      imgSrc: "images/grid-last-edit-1280x1920-221638873373.jpg",
      categoryLink: "https://bytesed.com/laravel/intoday/blog/category/12/sports",
      category: "Sports",
      postLink: "https://bytesed.com/laravel/intoday/blog/when-you%E2%80%99re-riding,-only-the-race-in-which-you%E2%80%99re-riding-tried-for-way-joy-wrote-witty",
      title: "When you’re riding, only the race in which you’re riding..."
    },
    {
      imgSrc: "images/grid-last-edit-1280x1920-11638873502.jpg",
      categoryLink: "https://bytesed.com/laravel/intoday/blog/category/12/sports",
      category: "Sports",
      postLink: "https://bytesed.com/laravel/intoday/blog/the-only-way-to-prove-that-you%E2%80%99re-a-good-sport-is-to-lose",
      title: "The only way to prove that you’re a good sport..."
    },
    {
      imgSrc: "images/grid-last-edit-1280x1920-371638873518.jpg",
      categoryLink: "https://bytesed.com/laravel/intoday/blog/category/12/sports",
      category: "Sports",
      postLink: "https://bytesed.com/laravel/intoday/blog/age-is-no-barrier.-it%E2%80%99s-a-limit-you-put-on-your-mind.",
      title: "Age is no barrier. It’s a limit you put on..."
    },
    {
      imgSrc: "images/grid-last-edit-1280x1920-281638873514.jpg",
      categoryLink: "https://bytesed.com/laravel/intoday/blog/category/12/sports",
      category: "Sports",
      postLink: "https://bytesed.com/laravel/intoday/blog/alhya-hy-althdy-moaghth-alhya-hlm-adrkh-alhya-laabh-alaabha-alhya-hb-astmtaa-bha",
      title: "Life is a challenge, meet it request be lasting it..."
    },
    {
      imgSrc: "images/grid-last-edit-1280x1920-51638873504.jpg",
      categoryLink: "https://bytesed.com/laravel/intoday/blog/category/12/sports",
      category: "Sports",
      postLink: "https://bytesed.com/laravel/intoday/blog/alhya-hy-althdy-moaghth-alhya-hlm-adrkh-alhya-laabh-alaabha-alhya-hb-astmtaa-bha-3",
      title: "New a challenge, meet it dull knew see she spot..."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="sports-area" data-padding-top="60" data-padding-bottom="48">
      <div className="container container-two">
        <div className="section-title">
          <h4 className="title left-align">Sports News</h4>
        </div>
        <div className="sports-slider slider-nav-style margin-top-40">
          <Slider {...settings}>
            {sportsData.map((item, index) => (
              <div key={index} className="single-sports-slider">
                <div className="single-sports">
                  <div className="sports-thumbs video-parent-global">
                    <img src={item.imgSrc} alt={item.title} />
                    <div className="popup-videos"></div>
                  </div>
                  <div className="sports-contents">
                    <a href={item.categoryLink}>
                      <span className="span-title">{item.category}</span>
                    </a>
                    <h4 className="common-title">
                      <a href={item.postLink}>{item.title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
