"use client";
import { ArrowIcon } from "@/components/ui/arrow-icon";

import { useState } from "react";
import reviews from "@/content/google-reviews.json";
import styles from "./google-reviews.module.css";

function GoogleMark() {
  return (
    <svg
      className={styles.googleMark}
      viewBox="0 0 48 48"
      aria-label="Google"
      role="img"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20.4 20.4 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.5a12.2 12.2 0 0 1 0-7V15.2H5.8a20.4 20.4 0 0 0 0 17.6l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12.1c3 0 5.6 1 7.7 3l5.8-5.8A19.5 19.5 0 0 0 24 4 20.4 20.4 0 0 0 5.8 15.2l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews.reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const fullQuote =
    "fullQuote" in review && typeof review.fullQuote === "string"
      ? review.fullQuote
      : review.quote;
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <span className={styles.avatar} aria-hidden="true">
          {review.author
            .split(" ")
            .map((name) => name[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className={styles.identity}>
          <p className={styles.author}>{review.author}</p>
          <p className={styles.source}>Google review</p>
        </div>
        <GoogleMark />
      </header>
      <div
        className={styles.cardStars}
        aria-label={review.rating + " out of 5 stars"}
      >
        <span aria-hidden="true">
          {"★".repeat(review.rating)}
          <span className={styles.emptyStars}>
            {"★".repeat(5 - review.rating)}
          </span>
        </span>
      </div>
      <blockquote>{expanded ? fullQuote : review.quote}</blockquote>
      {fullQuote !== review.quote && (
        <button
          className={styles.readMore}
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <a
        className={styles.reviewLink}
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google{" "}
        <span aria-hidden="true">
          <ArrowIcon />
        </span>
      </a>
    </article>
  );
}
export function GoogleReviews({ embedded = false }: { embedded?: boolean }) {
  const [page, setPage] = useState(0);
  const featured = reviews.reviews.filter((r) => r.rating >= 4),
    pageCount = Math.ceil(featured.length / 3);
  return (
    <section
      className={styles.section + (embedded ? " " + styles.embedded : "")}
      id="google-reviews"
      aria-labelledby="google-reviews-heading"
    >
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            <span />
            Client experiences
          </p>
          <h2 id="google-reviews-heading">What our clients say.</h2>
          <p className={styles.description}>
            Google reviews for {reviews.business}
          </p>
        </div>
        <a
          className={styles.summary}
          href={reviews.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.google}>Google</span>
          <span className={styles.score}>
            <strong>{reviews.rating.toFixed(1)}</strong>
            <span
              className={styles.stars}
              aria-label={reviews.rating + " out of 5 stars"}
            >
              <span aria-hidden="true">★★★★★</span>
              <span
                aria-hidden="true"
                style={{ width: (reviews.rating / 5) * 100 + "%" }}
              >
                ★★★★★
              </span>
            </span>
          </span>
        </a>
      </div>
      <div className={styles.cards} aria-live="polite">
        {featured.slice(page * 3, page * 3 + 3).map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.controls} aria-label="Review navigation">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => setPage((page + pageCount - 1) % pageCount)}
          >
            <ArrowIcon direction="left" />
          </button>
          <span>
            {page + 1} / {pageCount}
          </span>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => setPage((page + 1) % pageCount)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
        <a href={reviews.profileUrl} target="_blank" rel="noopener noreferrer">
          Read all reviews on Google{" "}
          <span aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
