import React from "react";

function Stats() {
  return (
    <div className="container p-3 p-md-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-12 col-md-6 p-3 p-md-4">
          <h1 className="fs-3 fs-md-2 mb-4 mb-md-5">Trust with confidence</h1>

          <h2 className="fs-5 fs-md-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5 fs-md-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 fs-md-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fs-md-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Image & Links */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="media/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid w-90 mb-4"
          />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a
              href=""
              className="text-decoration-none d-inline-flex align-items-center gap-2"
            >
              Explore our products
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href=""
              className="text-decoration-none d-inline-flex align-items-center gap-2"
            >
              Try kite demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;