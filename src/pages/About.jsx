import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

// Sample team data
const teamMembers = [
    {
      name: "Ivory Holman",
      title: "Political Leader",
      imgSrc: "images/a81637758235.jpg",
      profileLink: "https://bytesed.com/laravel/intoday/author/profile/11",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Ralph Hess",
      title: "Blogger",
      imgSrc: "images/a71637758235.jpg",
      profileLink: "https://bytesed.com/laravel/intoday/author/profile/12",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zelda Solis",
      title: "Cricketer",
      imgSrc: "images/a61637758234.jpg",
      profileLink: "https://bytesed.com/laravel/intoday/author/profile/13",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zelda Solis",
      title: "Cricketer",
      imgSrc: "images/a61637758234.jpg",
      profileLink: "https://bytesed.com/laravel/intoday/author/profile/14",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Zelda Solis",
      title: "Cricketer",
      imgSrc: "images/a61637758234.jpg",
      profileLink: "https://bytesed.com/laravel/intoday/author/profile/15",
      socials: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    // Add more team members as needed
  ];



const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust based on how many slides you want visible
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // You can turn this on or off
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
    <>
    <section className="about-area" data-padding-top="100" data-padding-bottom="42">
  <div className="container">
    <div className="about-wrapper">
      <div className="about-thumb">
        <img src="images/ab11637751514.jpg" alt="About the company" />
      </div>
      <div className="about-contents">
        <h2 className="about-title">Stories of Company</h2>
        <p className="common-para"></p>
        <p>
          <span style={{ fontWeight: "normal" }}>
            One advanced diverted domestic repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "normal" }}><br /></span>
        </p>
        <p>
          <span style={{ fontWeight: "normal" }}>
            One advanced diverted domestic repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.
          </span>
        </p>
      </div>
    </div>
  </div>
</section>

<div className="author-area padding-bottom-100 padding-top-45">
      <div className="container">
        <div className="section-title-two">
          <h4 className="title center-align">Team Members</h4>
        </div>
        <div className="team-slider">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="team-single-slider">
                <div className="single-author">
                  <div className="author-thumb">
                    <img src={member.imgSrc} alt={member.name} />
                    <ul className="author-socials">
                      <li>
                        <a className="facebook" href={member.socials.facebook}>
                          <i className="lab la-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href={member.socials.twitter}>
                          <i className="lab la-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href={member.socials.instagram}>
                          <i className="lab la-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href={member.socials.linkedin}>
                          <i className="lab la-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="author-contents">
                    <h5 className="author-title">
                      <a href={member.profileLink}>{member.name}</a>
                    </h5>
                    <span className="title">{member.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div> 

    </>
  )
}

export default About