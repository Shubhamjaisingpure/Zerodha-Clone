import react from 'react';
function Hero() {
  return (
    <div className="container  ">
      <div className="row  mt-5 pt-5  text-center " style={{ fontSize:"1.1em"}}>
        <h1 style={{color: "#424242"}}>Charges</h1>
        <h3 className="text-muted mt-3 fs-5" style={{paddingBottom:"60px"}}>List of all charges and taxes</h3>

        <div className="row  mt-5 p-5  pt-5 text-center">
          <div className="col-4 ">
            <img src="media/pricingEquity.svg" style={{width: "250px", }} />
            <h1 style={{fontSize: "1.80rem",color: "#424242"}}>Free equity delivery</h1>
            <p className="text-muted" style={{fontSize: "1rem", lineHeight: "1.8",padding: "0px 50px 0px 50px"}}>All equity delivery investments (NSE, BSE), 
                are absolutely free — ₹ 0 brokerage.</p>
          </div>

          <div className="col-4 ">
            <img src="media/intradayTrades.svg" style={{width: "250px", }} />
            <h1 style={{fontSize: "1.80rem",color: "#424242"}}>Intraday and F&O trades</h1>
            <p className="text-muted" style={{fontSize: "1rem", lineHeight: "1.8",}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="col-4 ">
            <img src="media/pricingEquity.svg"  style={{width: "250px", }} />
            <h1 style={{fontSize: "1.80rem",color: "#424242"}}>Free direct MF</h1>
            <p className="text-muted " style={{fontSize: "1rem", lineHeight: "1.8" ,padding: "0px 50px 0px 50px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Hero;