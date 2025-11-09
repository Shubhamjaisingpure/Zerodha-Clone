import react from "react";
function RightSection2({imageURL, productName, productDescription, learnMore}) {
  return (

    <div className="container mt-5  mb-5 pb-5 pt-5" >
        <div className="row mb-5 mt-5">
            <div className="col  " style={{paddingLeft:"80px"}}>
                <h1 style={{fontSize: "1.50rem",  color: "#424242",paddingTop:"70px"}}>{productName}</h1>
                <p style={{  lineHeight:"2.0",paddingRight:"100px"}}>{productDescription}</p>
                <div>
                <a href={learnMore } style={{  textDecoration: "none" }}>Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            </div>
            {/* <div className="col-1"></div> */}
             <div className="col">
                <img src={imageURL} alt={productName} style={{textAlign:"center",width:"100%",height:"100%"}}/>
            </div>
        </div>
    </div>
  );
}

  export default RightSection2;