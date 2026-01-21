import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1 className="mb-3 fs-3 fs-md-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href=""
            className="text-decoration-none d-inline-flex align-items-center gap-2"
          >
            See pricing
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Cards */}
        <div className="col-12 col-md-6 mb-4 mb-md-5 p-3 p-md-5">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-3 fs-2">
                  <i
                    className="fa fa-inr me-2"
                    aria-hidden="true"
                    style={{ fontSize: "32px" }}
                  ></i>
                  0
                </h1>
                <p>
                  Free equity delivery and
                  <br /> direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded h-100">
                <h1 className="mb-3 fs-2">
                  <i
                    className="fa fa-inr me-2"
                    aria-hidden="true"
                    style={{ fontSize: "32px" }}
                  ></i>
                  20
                </h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;