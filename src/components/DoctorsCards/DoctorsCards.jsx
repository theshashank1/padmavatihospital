import React from "react";
import "./DoctorsCards.css";

function DoctorsCards({ image, name, department, qualification, phone, availability }) {
  return (
    <div className="doctor-card">
      <div className="doctor-img">
        {image ? <img src={image} alt={name} /> : <div className="img-placeholder"></div>}
      </div>

      <div className="doctor-info">
        <h3>{name}</h3>

        <p className="department">{department}</p>

        <p className="qualification">{qualification}</p>

        {/* Phone + Vertical Line + Availability */}
        <div className="doctor-contact-row">
          <span className="availability">{availability}</span>
          <span className="divider"></span>
          <span className="phone">{phone}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCards;
