import react from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row " >
        <div className="col-6   ">
          <img src={imageURL} style={{paddingLeft:"80px"}}/>
        </div>
         <div className="col-1   "></div>
        <div className="col-5  mt-5">
          <h1 style={{fontSize: "1.50rem",  color: "#424242"}}>{productName}</h1>
          <p style={{marginRight:"100px" , lineHeight:"2.0"}}>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{  textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "80px", textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="Google Play" /></a>
            <a href={appStore}  style={{ marginLeft: "40px" }}><img src="media/appstoreBadge.svg" alt="App Store" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
