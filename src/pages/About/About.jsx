import React from "react";
import { FaHeart, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import "./About.css";


function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <h1>About Our Hospital</h1>
          <p>Delivering compassionate care with modern medical excellence.</p>
        </div>
      </section>

      {/* HOSPITAL HISTORY */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <p className="section-text">
            Established in 1998, PMC Hospital has been committed to providing
            top-tier healthcare services to the community. With a team of
            dedicated doctors and state-of-the-art infrastructure, our hospital
            continues to evolve with the latest advancements in medical
            technology. Over the past two decades, we have expanded our
            departments, introduced specialty units, and strengthened our
            patient-centered approach.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div className="container mv-container">
          <div className="mv-card mv-mission">
            <div className="mv-icon">
              <FaHeart /> {/* React icon */}
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, high-quality healthcare services that improve
              the health and well-being of our community. We are committed to
              delivering patient-centered care with compassion, respect, and
              clinical excellence.
            </p>
          </div>
          <div className="mv-card mv-vision">
            <div className="mv-icon">
              <FaAward /> {/* React icon */}
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading healthcare provider in the region, recognized for
              medical excellence, innovation, and compassionate care. We envision a
              healthier community where everyone has access to world-class medical
              services.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-section-title">Our Core Values</h2>
          <p className="values-section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="icon"><FaHeart /></div>
              <h4>Compassion</h4>
              <p>We treat every patient with empathy, kindness, and respect</p>
            </div>
            <div className="value-card">
              <div className="icon"><FaAward /></div>
              <h4>Excellence</h4>
              <p>We strive for the highest standards in medical care</p>
            </div>
            <div className="value-card">
              <div className="icon"><FaShieldAlt /></div>
              <h4>Integrity</h4>
              <p>We uphold the highest ethical standards in all we do</p>
            </div>
            <div className="value-card">
              <div className="icon"><FaUsers /></div>
              <h4>Collaboration</h4>
              <p>We work together as a team for better outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITAL STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>30+</h3>
            <p>Years of Service</p>
          </div>
          <div className="stat-card">
            <h3>50K+</h3>
            <p>Patients Treated</p>
          </div>
          <div className="stat-card">
            <h3>17+</h3>
            <p>Expert Doctors</p>
          </div>
          <div className="stat-card">
            <h3>14</h3>
            <p>Departments</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
