import react from "react";
function Brokerage() {
  return (
    <div className="container  ">
      <div className="row  mt-5 pt-5 mb-5 text-center border-top">
        <div className="col-8 ">
          <a href="media/brokerage.html" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5" }}
            className="text-muted fs-6 mt-4"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of 750 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or R100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or $200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 740 per executed order instead of 720 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 ">
          <a href="media/charges.html" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
