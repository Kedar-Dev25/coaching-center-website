import { useRef } from "react";
import "../App.css";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    quote: "Best coaching centre in Ganjam",
    name: "Bikram Behera",
    time: "a year ago",
  },
  {
    quote: "Best coaching centre.. In berhampur",
    name: "Hiran Maharana",
    time: "a year ago",
  },
  {
    quote: "Our Tuition is the best in the district",
    name: "Sasmita Pattnayak",
    time: "11 months ago",
  },
  {
    quote: "I STUDIED HERE AND GOT MERIT SCHOLARSHIP OF +2 ARTS 2023",
    name: "Anita Kumari Nayak",
    time: "2 years ago",
  },
  {
    quote:
      "Tuition is very good and very nice and friendly and helps in reading",
    name: "Rajesh Kumar Padhi",
    time: "3 years ago",
  },
  {
    quote: "One of the highlight institute of ankuli, Berhampur",
    name: "Sritam Panigrahi",
    time: "2 years ago",
  },
];

const MapReviewSection = () => {
  const reviewsRef = useRef(null);

  const scrollReviews = (direction) => {
    if (!reviewsRef.current) return;

    const amount = reviewsRef.current.clientWidth * 0.82;

    reviewsRef.current.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="map-review-section">
      <SectionHeader
        overline="Find Our Campus"
        title={
          <>
            Visit Us <span>Today</span>
          </>
        }
      />

      <div className="map-review-layout">
        {/* MAP */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.528713641499!2d84.81728760896671!3d19.302850644739976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d5b1b36d79229%3A0x7e86009a762db04f!2sLeads%20Academy!5e0!3m2!1sen!2sin!4v1785572878632!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Leads Academy Location"
          />
        </div>

        {/* REVIEWS */}
        <div className="reviews-panel">
          <div className="reviews-heading">
            <div>
              <span className="reviews-overline">GOOGLE REVIEWS</span>
              <h3>What Students Say</h3>
            </div>

            <div className="reviews-rating">
              <strong>4.9</strong>
              <span>★★★★★</span>
              <small>46 reviews</small>
            </div>
          </div>

          <div className="reviews-carousel-wrap">
            <button
              className="review-nav review-nav-prev"
              onClick={() => scrollReviews(-1)}
              aria-label="Previous review"
            >
              ‹
            </button>

            <div className="reviews-carousel" ref={reviewsRef}>
              {reviews.map((review, index) => (
                <article className="review-card" key={index}>
                  <div className="review-stars">★★★★★</div>

                  <p>“{review.quote}”</p>

                  <div className="review-author">
                    <div className="review-avatar">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.time} · Google Review</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              className="review-nav review-nav-next"
              onClick={() => scrollReviews(1)}
              aria-label="Next review"
            >
              ›
            </button>
          </div>

          <div className="review-dots">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapReviewSection;