import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="contact-hero" data-aos="fade-down">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We’re here to assist you with any medical support you need.</p>
        </div>
      </section>

      {/* ---------------- CONTACT INFO BOXES SECTION ---------------- */}
      <section className="ci-section">
        <div className="ci-container">

          {/* Emergency */}
          <div className="ci-card" data-aos="fade-up">
            <div className="ci-icon"><FaPhoneAlt /></div>
            <h3>Emergency</h3>
            <p className="ci-main">040-27007111</p>
            <p className="ci-sub">24/7 Available</p>
          </div>

          {/* Appointments */}
          <div className="ci-card" data-aos="fade-up" data-aos-delay="100">
            <div className="ci-icon"><FaPhoneAlt /></div>
            <h3>Appointments</h3>
            {/* <p className="ci-main">040-27007111</p> */}
            <p className="ci-main">9160668686 ,  9866635947</p>
            <p className="ci-sub">Mon–Sat, 9AM–6PM</p>
          </div>

          {/* Email */}
          <div className="ci-card" data-aos="fade-up" data-aos-delay="200">
            <div className="ci-icon"><FaEnvelope /></div>
            <h3>Email</h3>
            <p className="ci-main">padmavatimedicalcenter2010@gmail.com</p>
            <p className="ci-sub">We reply in 24hrs</p>
          </div>

          {/* Hours */}
          <div className="ci-card" data-aos="fade-up" data-aos-delay="300">
            <div className="ci-icon"><FaClock /></div>
            <h3>Hours</h3>
            <p className="ci-main">24/7 Emergency</p>
            <p className="ci-sub">OPD: 9AM–6PM</p>
          </div>

        </div>
      </section>

      {/* ---------------- SEND MESSAGE + VISIT US SECTION ---------------- */}
      <section className="contact-main">
        <div className="contact-main-container">

          {/* -------- LEFT SIDE : FORM -------- */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form>
              <label>Full Name *</label>
              <input type="text" placeholder="John Doe" />

              <label>Email Address *</label>
              <input type="email" placeholder="john@example.com" />

              <label>Phone Number *</label>
              <input type="text" placeholder="+91 123 456 7890" />

              <label>Subject *</label>
              <input type="text" placeholder="How can we help?" />

              <label>Message *</label>
              <textarea placeholder="Tell us more about your inquiry..."></textarea>

              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>

          {/* -------- RIGHT SIDE : ADDRESS + MAP -------- */}
          <div className="contact-right">

            {/* Address Box */}
            <div className="visit-card">
              <h2>Visit Us</h2>
              <div className="visit-box">
                <h4>🏥 Hospital Address</h4>
                <p> Plot No. 12-13-60, Main Road, Tarnaka &
                  <br />Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel, Street No. 5, Tarnaka, Secunderabad
                  <br /> 500017</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-box">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.536213695486!2d78.4800331749272!3d17.385044683490277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97551e4e2f47%3A0x6b0a90fa14a3cd59!2sSultan%20Bazaar!5e0!3m2!1sen!2sin!4v1705130463434"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Contact;
