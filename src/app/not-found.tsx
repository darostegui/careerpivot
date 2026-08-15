"use client";

import Link from "next/link";

export default function NotFound() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.assign("/");
  };

  return (
    <main className="career-not-found">
      <picture className="career-not-found__goat">
        <source srcSet="/404-goat.webp" type="image/webp" />
        <img src="/404-goat.png" alt="" width="506" height="430" />
      </picture>
      <div className="career-not-found__wood" aria-hidden="true" />

      <div className="career-not-found__bubble" aria-hidden="true">
        This page wandered off while you were planning your next career move.
      </div>

      <section className="career-not-found__content" aria-labelledby="not-found-title">
        <Link href="/" className="career-not-found__logo" aria-label="CareerPivot home">
          CareerPivot<span>.me</span>
        </Link>
        <div className="career-not-found__code" aria-hidden="true">
          404
        </div>
        <h1 id="not-found-title">This path is not on the map</h1>
        <p className="career-not-found__subtitle">
          The page may have moved, or this route has not been added to your career roadmap yet.
        </p>
        <div className="career-not-found__actions">
          <Link href="/" className="career-not-found__button career-not-found__button--primary">
            Return to CareerPivot
          </Link>
          <button
            type="button"
            onClick={goBack}
            className="career-not-found__button career-not-found__button--secondary"
          >
            Go back
          </button>
        </div>
      </section>
    </main>
  );
}
