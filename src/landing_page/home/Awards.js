import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="media/largestBroker.svg"
            alt="Largest Broker Award"
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
          <h1 className="fs-2 fs-md-1">Largest stock broker in India</h1>
          <p className="mb-4 mb-md-5">
            2+ million Zerodha clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-start mt-4">
            <img
              src="media/PressLogos.png"
              alt="Press Logos"
              className="img-fluid w-75 w-md-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
