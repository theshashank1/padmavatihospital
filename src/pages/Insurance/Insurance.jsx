import React from "react";
import "./Insurance.css";

function Insurance() {
    const features = [
        { icon: "🛡️", title: "Trusted Providers", desc: "We partner with top-rated insurance companies." },
        { icon: "⚡", title: "Fast Claims", desc: "Get your claims processed within 24 hours." },
        { icon: "📞", title: "24/7 Support", desc: "Assistance whenever you need it." },
        { icon: "💰", title: "Affordable Plans", desc: "Plans that fit your budget." },
    ];

    const plans = [
        { name: "Life Insurance", price: "$49/mo", features: ["Financial Security", "Family Protection", "Tax Benefits"] },
        { name: "Health Insurance", price: "$69/mo", features: ["Hospital Coverage", "Mediclaim", "Preventive Care"] },
        { name: "Auto Insurance", price: "$39/mo", features: ["Accident Protection", "Roadside Assistance", "Fast Claims"] },
        { name: "Travel Insurance", price: "$29/mo", features: ["Trip Cancellation", "Medical Emergencies", "Lost Luggage"] },
    ];

    const testimonials = [
        {
            name: "Rohit Sharma",
            role: "Customer",
            feedback: "The insurance service was smooth and reliable.",
            photo: "/gallery/galleryimg1.png"
        },
        {
            name: "Priya Verma",
            role: "Customer",
            feedback: "Excellent support and fast claim processing.",
            photo: "/gallery/galleryimg2.png"
        },
    ];


    return (
        <div className="insurance-page">
            {/* Hero Section */}
            <section className="ins-hero">
                <div className="ins-hero-content">
                    <h1>Protect What Matters Most</h1>
                    <p>Comprehensive insurance solutions tailored for you.</p>
                    <button className="cta-btn">Get a Quote</button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    {features.map((f, idx) => (
                        <div className="feature-card" key={idx}>
                            <span className="feature-icon">{f.icon}</span>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Plans Section */}
            <section className="plans">
                <h2>Our Plans</h2>
                <div className="plans-grid">
                    {plans.map((plan, idx) => (
                        <div className="plan-card" key={idx}>
                            <h3>{plan.name}</h3>
                            <p className="price">{plan.price}</p>
                            <ul>
                                {plan.features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>
                            <button className="cta-btn">Apply Now</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div className="testimonial-card" key={idx}>
                            <img src={t.photo} alt={t.name} />
                            <p>"{t.feedback}"</p>
                            <h4>{t.name}</h4>
                            <span>{t.role}</span>
                        </div>
                    ))}
                </div>

            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to secure your future?</h2>
                <p>Get started today and choose the best insurance plan for you.</p>
                <button className="cta-btn">Request a Quote</button>
            </section>
        </div>
    );
}

export default Insurance;
