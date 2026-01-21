import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="media/education.svg"
            alt="Education"
            className="img-fluid w-75"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="mb-3 fs-3 fs-md-2">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href=""
            className="text-decoration-none d-inline-flex align-items-center gap-2"
          >
            Varsity
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4 mt-md-5">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a
            href=""
            className="text-decoration-none d-inline-flex align-items-center gap-2"
          >
            TradingQ&A
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
