"use client";
import { useState } from "react";
import testimonials from "@/content/testimonials.json";
export function Testimonials6() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  return (
    <section
      className="framer-syf9so"
      id="testimonials"
      aria-label="Client testimonials"
    >
      <div className="framer-1pn3lgo">
        <div className="framer-1unccik">
          <p style={{ color: "#88865a", fontFamily: "DM Sans, sans-serif" }}>
            — Real results for the people we serve
          </p>
          <h2 className="framer-text framer-styles-preset-6pzhab">
            Thoughtful advocacy and standard of service defined by trust and
            distinction.
          </h2>
        </div>
        <div
          className="about-testimonial"
          aria-live="polite"
          aria-atomic="true"
        >
          <span
            aria-label={`${item.rating} out of 5 stars`}
            style={{ color: "#88865a" }}
          >
            ★★★★★ &nbsp; {item.rating}
          </span>
          <blockquote key={item.author}>{item.quote}</blockquote>
          <footer>
            <p>{item.author}</p>
            <p>{item.result}</p>
          </footer>
        </div>
        <div
          className="about-testimonial-controls"
          aria-label="Testimonial navigation"
        >
          <button
            aria-label="Previous testimonial"
            onClick={() =>
              setIndex((index + testimonials.length - 1) % testimonials.length)
            }
          >
            ←
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % testimonials.length)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
