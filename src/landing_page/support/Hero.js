import react from "react";
function Hero() {
  return (
    <section className=" Container-flude " id="supportHero">
      <div className=" p-5 fs-5 " id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Trak Tickets</a>
      </div>
      <div className=" row  ">
        <div className="col-6 " id="supportLeft" >
          <h1 className="fs-3 pb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.." className="mb-3"/><br/>
          <a href="" >Track account opening</a>
          <a href="">Track segment activation</a><br/>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="  col-6  " id="supportRight">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
