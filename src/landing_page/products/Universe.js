import react from "react";
import {useNavigate} from "react-router-dom"
function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row text-center">
        <h1
          style={{
            color: "#424242",
            paddingBottom: "20px",
            fontSize: "2.0rem",
          }}
        >
          The Zerodha Universe
        </h1>
        <p className="text-muted ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/smallcaselogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2 ">Thematic investment platform</p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/streakLogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/sensibullLogo.svg"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2">Options trading platform</p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2">Asset management</p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/goldenpiLogo.png"
            style={{ width: "200px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img
            src="media/dittoLogo.png"
            style={{ width: "150px", height: "auto" }}
          />
          <p className="text-small text-muted pt-2">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={(e) => navigate("/signup")}
        >
          
          Sign up Now
        </button>
      </div>
    </div>
  );
}
export default Universe;
