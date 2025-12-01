//Red - c45857 , green - 425c86 , 
// gold - cda75e , 
// light blue - 548894 ,
//  orange - e27b33
// ebeae7


import React, { useState } from "react";
import "./Gallery.css";

const galleryData = [
  // Patient Interactions (Non-sensitive)
  // { id: 1, category: "patient", img: "/images/gallery/p1.jpg" },
  // { id: 2, category: "patient", img: "/images/gallery/p2.jpg" },

  // Infrastructure
  { id: 3, category: "infrastructure", img: "/public/gallery/galleryimg1.jpg"},
  { id: 4, category: "infrastructure", img: "/public/gallery/galleryimg2.jpg" },
  { id: 5, category: "infrastructure", img: "/public/gallery/galleryimg3.jpg" },
  { id: 6, category: "infrastructure", img: "/public/gallery/galleryimg4.jpg" },
  { id: 7, category: "infrastructure", img: "/public/gallery/galleryimg5.jpg" },
  { id: 8, category: "infrastructure", img: "/public/gallery/galleryimg6.jpg" },
  { id: 9, category: "infrastructure", img: "/public/gallery/galleryimg7.jpg" },
  { id: 10, category: "infrastructure", img: "/public/gallery/galleryimg8.jpg" },

  // Doctors at Work
  // { id: 5, category: "doctors", img: "/images/gallery/d1.jpg" },
  // { id: 6, category: "doctors", img: "/images/gallery/d2.jpg" },

  // Events 
  //  { id: 7, category: "events", img: "/images/gallery/e1.jpg" },
  // { id: 8, category: "events", img: "/images/gallery/e2.jpg" },
  // { id: 9, category: "events", img: "/images/gallery/e3.jpg" },
];

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredImages =
    selectedFilter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedFilter);

  return (
    <>
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="gallery-hero">
        <h1 className="gallery-title">Hospital Gallery</h1>
        <p className="gallery-subtitle">
          Explore our facilities, patient care moments, and dedicated doctors at work.
        </p>
      </section>

      {/* -------------------- GALLERY SECTION -------------------- */}
      <section className="gallery-main container">
        <div className="gallery-left">
          <h3>Filter by Category</h3>

          <ul className="gallery-filters">
            <li
              className={selectedFilter === "all" ? "active" : ""}
              onClick={() => setSelectedFilter("all")}
            >
              All
            </li>

            <li
              className={selectedFilter === "events" ? "active" : ""}
              onClick={() => setSelectedFilter("events")}
            >
              Events
            </li>

            <li
              className={selectedFilter === "patient" ? "active" : ""}
              onClick={() => setSelectedFilter("patient")}
            >
              Patient Interactions
            </li>

            <li
              className={selectedFilter === "infrastructure" ? "active" : ""}
              onClick={() => setSelectedFilter("infrastructure")}
            >
              Infrastructure
            </li>

            <li
              className={selectedFilter === "doctors" ? "active" : ""}
              onClick={() => setSelectedFilter("doctors")}
            >
              Doctors at Work
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="gallery-right">
          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <div className="gallery-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
