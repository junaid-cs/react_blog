import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <header className="header-style-01">
    <div className="topbar-area">
      <div className="container container-two">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-5">
            <div className="topbar-socials">
              <ul>
                <li>
                  {" "}
                  <a href="#">
                    <i className="lab la-facebook-f" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="lab la-twitter" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="las la-wifi" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="lab la-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-2">
            <div className="topbar-logo desktop-logo">
            <Link to={'/'} className='logo'>
                <img src="images/logo-031637644754.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-5">
            <div className="topbar-right-contents">
              <h6 className="dates">Thursday, 05 Sep 2024</h6>
            </div>
            <div className="right-contnet">
              <ul className="info-items">
                <li className="log-btn">
                  <a href="https://bytesed.com/laravel/intoday/login">Login</a>
                  <span>|</span>
                  <a href="https://bytesed.com/laravel/intoday/register">
                    Register
                  </a>
                </li>
                <li>
                  <select id="langchange">
                    <option selected="" value="en_GB">
                      English{" "}
                    </option>
                    <option value="ar">Arabic</option>
                  </select>
                </li>
                <li>
                  <DarkModeToggle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="search-area">
      <nav className="navbar navbar-area navbar-expand-lg navbar-border">
        <div className="container container-two nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo-wrapper mobile-logo">
            <Link to={'/'} className="logo">
                <img src="images/logo-031637644754.png" alt="" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#bizcoxx_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bizcoxx_main_menu">
            <ul className="navbar-nav">
              <li className=" menu-item-has-children ">
                <Link to={'/'}>home</Link>
                <ul className="sub-menu">
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/home-page-one">
                      Home Page One
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/home-page-two">
                      Home Page Two
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://bytesed.com/laravel/intoday/fashion">Fashion</a>
              </li>
              <li>
                <Link to={'./about'}>About</Link>
              </li>
              <li>
                <a href="https://bytesed.com/laravel/intoday/author">Author</a>
              </li>
              <li className=" menu-item-has-children ">
                <a>Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/blog-7">Blog</a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/blog-two">
                      Blog Two
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/blog-fashion">
                      Blog Fashion
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/blog-grid">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/blog-list">
                      Blog List
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" menu-item-has-children ">
                <a>Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/search">
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/privacy-policy-new-style">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://bytesed.com/laravel/intoday/akhtbar-alsfh">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'./contact'}> Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-content">
            <ul>
              <li>
                <a href="#">
                  <div className="info-bar-item">
                    <div className="search-open">
                      <i className="las la-search" />
                    </div>
                    <div className="sidebars-item">
                      <i className="las la-bars" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="sidebars-wrappers">
        <div className="sidebars-close">
          {" "}
          <i className="las la-times" />{" "}
        </div>
        <div className="sidebar-inner">
          <div className="sidebar-logo">
          <Link to={'/'}>
              <img src="images/logo-021637644753.png" alt="" />
            </Link>
          </div>
          <div className="contents-wrapper">
            <h4 className="connets-title"> Connect with us</h4>
            <div className="updated-socials">
              <ul className="common-socials">
                <li>
                  <a className="facebook" href="#">
                    {" "}
                    <i className="lab la-facebook-f" />{" "}
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    {" "}
                    <i className="lab la-twitter" />{" "}
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    {" "}
                    <i className="lab la-instagram" />{" "}
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    {" "}
                    <i className="lab la-linkedin-in" />{" "}
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#">
                    {" "}
                    <i className="lab la-youtube" />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-updated-content">
              <div className="section-title">
                <h4 className="title"> Categories </h4>
              </div>
              <div className="categories-contents-inner">
                <div className="categories-lists">
                  <div className="single-list">
                    <span className="follow-para">
                      <a href="https://bytesed.com/laravel/intoday/blog/category/2/travel">
                        Travel
                      </a>{" "}
                    </span>
                    <span className="followers"> 11</span>
                  </div>
                  <div className="single-list">
                    <span className="follow-para">
                      <a href="https://bytesed.com/laravel/intoday/blog/category/3/food">
                        Food
                      </a>{" "}
                    </span>
                    <span className="followers"> 2</span>
                  </div>
                  <div className="single-list">
                    <span className="follow-para">
                      <a href="https://bytesed.com/laravel/intoday/blog/category/4/fashion">
                        Fashion
                      </a>{" "}
                    </span>
                    <span className="followers"> 7</span>
                  </div>
                  <div className="single-list">
                    <span className="follow-para">
                      <a href="https://bytesed.com/laravel/intoday/blog/category/5/music">
                        Music
                      </a>{" "}
                    </span>
                    <span className="followers"> 5</span>
                  </div>
                  <div className="single-list">
                    <span className="follow-para">
                      <a href="https://bytesed.com/laravel/intoday/blog/category/6/health">
                        Health
                      </a>{" "}
                    </span>
                    <span className="followers"> 3</span>
                  </div>
                </div>
              </div>
              <div className="tag-new-contents">
                <div className="section-title">
                  <h4 className="title"> Tags </h4>
                </div>
                <div className="tag-list">
                  <a
                    className="list"
                    href="https://bytesed.com/laravel/intoday/blog/tags/Food"
                  >
                    {" "}
                    Food{" "}
                  </a>
                  <a
                    className="list"
                    href="https://bytesed.com/laravel/intoday/blog/tags/Social"
                  >
                    {" "}
                    Social
                  </a>
                  <a
                    className="list"
                    href="https://bytesed.com/laravel/intoday/blog/tags/News"
                  >
                    {" "}
                    News{" "}
                  </a>
                  <a
                    className="list"
                    href="https://bytesed.com/laravel/intoday/blog/tags/Political"
                  >
                    Political{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <form
          className="menu-search-form"
          action="#"
        >
          <input
            type="hidden"
            name="_token"
            defaultValue="DeCAwJEngpcDmSODy8LSjGqWCEQIzrJsLVEZeWgY"
          />
          <div className="search-close">
            {" "}
            <i className="las la-times" />{" "}
          </div>
          <input
            className="item-search"
            type="text"
            id="search"
            name="search"
            placeholder="Search Here....."
          />
          <button type="submit"> Search Now </button>
          <div className="ajax-preloader-wrap" />
        </form>
      </div>
      <a
        href="https://bytesed.com/laravel/intoday/blog/get/search"
        data-url="https://bytesed.com/laravel/intoday/blog/get/search"
        id="tag_view_all"
      >
        <i className="las la-external-link-alt" />{" "}
      </a>
      <li className="account">
        <div id="show-autocomplete" style={{ display: "none" }}>
          <ul className="autocomplete-warp" />
        </div>
      </li>
    </div>
  </header>
  <div class="header-bottom padding-top-30" data-padding-top="30" data-padding-bottom="0">
        <div class="container container-two">
            <div class="header-bottom-list">
                <span class="update-news">Update News : </span>
                <div class="news-list-all">
                    <ul class="news-lists">
                        <li class="list"> <a
                                href="https://bytesed.com/laravel/intoday/blog/style-is-something-each-of-us-already-has,-all-we-need-to-do-is-find-it">Style
                                is something each of us already has, all we need to do is find it</a></li>
                        <li class="list"> <a
                                href="https://bytesed.com/laravel/intoday/blog/corona-virus-spreaded-all-over-the-world-badly">Corona
                                Virus Spreaded all over the world badly</a></li>
                        <li class="list"> <a
                                href="https://bytesed.com/laravel/intoday/blog/american-fizer-vaxine-is-more-efficient-rather-then-others-evening-believe-but-proceed-pretend">American
                                Fizer vaxine is more efficient rather then others evening believe but proceed
                                pretend</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Nav