import React from 'react'

const Contact = () => {
  return (
    <div className="contact-area res-padding" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="contact-address">
            <div className="single-contacts">
              <span className="contact-title">Call Us</span>
              <span className="contact-span">
                <span className="details">+110-99887733</span>
              </span>
            </div>

            <div className="single-contacts">
              <span className="contact-title">Email Us</span>
              <span className="contact-span">
                <span className="details">company@mail.com</span>
              </span>
            </div>

            <div className="single-contacts">
              <span className="contact-title">Address</span>
              <span className="contact-span">
                <span className="details">4422 Charmaine Lane</span>
                <span className="details">Vigo Park, TX 79088</span>
              </span>
            </div>

            <div className="single-contacts">
              <span className="contact-title">Follow us</span>
              <ul className="common-socials">
                <li><a className="facebook" href="#"><i className="lab la-facebook-f"></i></a></li>
                <li><a className="twitter" href="#"><i className="lab la-twitter"></i></a></li>
                <li><a className="instagram" href="#"><i className="lab la-instagram"></i></a></li>
                <li><a className="linkedin" href="#"><i className="lab la-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 offset-xl-1">
          <div className="contacts-form-wrapper">
            <h3 className="title">Get In Touch</h3>
            <form
              action="#"
              method="post"
              id="custom_form_builder_DVDAUSykOf"
              className="custom-form-builder-form"
              encType="multipart/form-data"
            >
              <input type="hidden" name="custom_form_id" value="1" />
              <div className="error-message"></div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" className="form-control" placeholder="Phone" />
              </div>
              <div className="form-group textarea">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Message" required></textarea>
              </div>
              <div className="btn-wrapper">
                <button id="contact_form_btn" type="submit" className="submit-btn custom_submit_form_button btn-default">
                  Submit
                </button>
                <div className="ajax-loading-wrap hide">
                  <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="contact_map">
              <div className="custom-embed-map">
                <iframe
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  height="535px"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Avenue%20Afton,%20MN%2055001&t=m&z=10&output=embed&iwloc=near"
                  aria-label="Avenue Afton, MN 55001"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact