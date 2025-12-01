import React from "react";
import "./Bookappoinment.css";
import { FaUserMd, FaClock, FaPhoneAlt, FaHeartbeat } from "react-icons/fa";

function Bookappoinment() {
    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="ba-hero">
                <div className="ba-container">
                    <h1 className="ba-title">Book an Appointment</h1>
                    <p className="ba-subtitle">
                        Your health is our priority—schedule your visit with our expert doctors.
                    </p>
                </div>
            </section>

            {/* ---------- MAIN SECTION ---------- */}
            <section className="ba-main">
                <div className="ba-wrapper">

                    {/* ---------- LEFT INFO SECTION ---------- */}
                    <div className="ba-left">
                        <h2>Why Choose Padmavati Medical Center?</h2>
                        <p className="ba-desc">
                            We provide advanced medical care with highly experienced specialists.
                        </p>

                        <div className="ba-points">
                            <div className="point">
                                <FaHeartbeat className="icon" />
                                <p>Expert Cardiologist & Specialists</p>
                            </div>

                            <div className="point">
                                <FaClock className="icon" />
                                <p>Quick & Easy Appointments</p>
                            </div>

                            <div className="point">
                                <FaPhoneAlt className="icon" />
                                <p>24/7 Emergency Support</p>
                            </div>

                            <div className="point">
                                <FaUserMd className="icon" />
                                <p>Personalized Patient Care</p>
                            </div>
                        </div>

                        {/* ---------- UPDATED: 3 INFO CARDS ---------- */}
                        {/* ---------- UPDATED: 3 UNIFORM INFO CARDS ---------- */}
                        <div className="ba-info-cards">

                            {/* -------- Card 1 -------- */}
                            <div className="info-card">
                                <div className="card-icon-round">
                                    🏅
                                </div>
                                <h3>ISO Certified</h3>
                                <p>Maintaining international quality and safety standards.</p>
                            </div>

                            {/* -------- Card 2 -------- */}
                            <div className="info-card">
                                <div className="card-icon-round">
                                    🏥
                                </div>
                                <h3>NABH Recommended</h3>
                                <p>Trusted hospital with verified medical excellence.</p>
                            </div>

                            {/* -------- Card 3 -------- */}
                            <div className="info-card">
                                <div className="card-icon-round">
                                    ⭐
                                </div>
                                <h3>10,000+ Patients Treated</h3>
                                <p>Serving the community with care and commitment.</p>
                            </div>

                        </div>

                    </div>


                    {/* ---------- RIGHT FORM SECTION ---------- */}
                    <div className="ba-right">
                        <h2>Book an Appointment</h2>

                        <form className="ba-form">
                            <input type="text" placeholder="Full Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="email" placeholder="Email Address" required />

                            <select required>
                                <option value="">Select Department</option>
                                <option>Cardiologist</option>
                                <option>Sr General Physician & Diabetologist</option>
                                <option>Gastroenterologist</option>
                                <option>Pediatrician</option>
                                <option>Neurophysician</option>
                                <option>Pulmonologist</option>
                                <option>Orthopedician</option>
                                <option>Nephrologist</option>
                                <option>General Surgeon</option>
                                <option>Anaesthetist</option>
                                <option>Pathologist</option>
                                <option>Urologist</option>
                                <option>Dermatologist</option>
                                <option>Physiotherapist</option>
                            </select>

                            <input type="date" required />

                            <textarea placeholder="Describe symptoms (optional)" rows="4"></textarea>

                            <button type="submit">Confirm Appointment</button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Bookappoinment;

