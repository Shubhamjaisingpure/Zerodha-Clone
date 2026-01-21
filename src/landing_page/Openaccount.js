import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5" style={{ fontSize: "1.9rem", color: "#424242" }}>
          Open a Zerodha account
        </h1>
        <p>
          Modern platforms and apps, 70 investments, and flat 720 intraday and
          F&O trades.
        </p>
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

export default OpenAccount;
