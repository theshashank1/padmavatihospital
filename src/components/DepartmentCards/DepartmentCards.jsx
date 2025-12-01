import React from "react";
import "./DepartmentCards.css";
import departments from "../../data/Department";
import { useState , useRef } from "react";
import { useEffect } from "react";

function DepartmentCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = () => {
  if (!carouselRef.current) return;

  const scrollLeft = carouselRef.current.scrollLeft;
  const cardWidth = carouselRef.current.querySelector(".carousel-card").offsetWidth + 16; 
  // 16 = gap between cards

  const index = Math.round(scrollLeft / cardWidth);
  setCurrentIndex(index);
};

  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false); // track if animation has run

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            const section = entry.target;

            // Add animation classes
            section.querySelector(".departments-title").classList.add("slide-in-left");
            section.querySelector(".departments-subtitle").classList.add("slide-in-left");

            const cards = section.querySelectorAll(".department-card, .carousel-card");
            cards.forEach((card, index) => {
              card.style.animationDelay = `${0.6 + index * 0.2}s`;
              card.classList.add("slide-up-fade");
            });

            setAnimated(true); // mark as animated
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  return (
      <section className="departments-section" ref={sectionRef}>
      <h2 className="departments-title">Our Departments</h2>
      <p className="departments-subtitle">
        Comprehensive medical services across multiple specialties
      </p>

      <div className="departments-grid desktop-view">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`department-card ${dept.featured ? "featured-card" : ""}`}
          >
            {dept.featured && <span className="featured-badge">⭐ FEATURED</span>}
            <h3 className="department-heading">{dept.title}</h3>
            <p className="department-desc">{dept.description}</p>
          </div>
        ))}
      </div>

      <div className="carousel-container mobile-view">
        {departments.map((dept, index) => (
          <div
            key={index}
            className={`carousel-card ${dept.featured ? "featured-card" : ""}`}
          >
            {dept.featured && <span className="featured-badge">⭐ FEATURED</span>}
            <h3 className="department-heading">{dept.title}</h3>
            <p className="department-desc">{dept.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DepartmentCards;
