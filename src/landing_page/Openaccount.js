import React from "react";
import {useNavigate} from "react-router-dom"

function OpenAccount() {
   const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5" style={{ fontSize: "1.9rem", color: "#424242" }}>Open a Zerodha account</h1>
        <p>
         
          Modern platforms and apps, 70 investments, and flat 720 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={(e) => navigate("/signup")}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
