import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container p-3 p-md-5 mb-5">
      <div className="row text-center justify-content-center">
        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4 mb-md-5"
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="mt-3 mt-md-5 fs-2 fs-md-1">
            Invest in everything
          </h1>
        </div>

        {/* Description */}
        <div className="col-12 col-md-8">
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
        </div>

        {/* Button */}
        <div className="col-12">
          <button
            className="btn btn-primary fs-5 px-4 py-2 mb-4 mb-md-5 w-100 w-sm-50 w-md-25"
            onClick={() => navigate("/signup")}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
