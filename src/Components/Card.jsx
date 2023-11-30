// import React from "react";
// import Single from "../assets/undraw_artificial_intelligence_re_enpp.svg";
// import Double from "../assets/undraw_server_down_s-4-lk.svg";
// import Triple from "../assets/undraw_projections_re_ulc6.svg";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-gray-200" id="card">
      <div className="max-w-[1240px] mx-auto ">
        <span className="text-gold-theme font-bold">OUR APPROACH</span>
        <h2 className="text-black md:text-5xl font-bold font-popins my-2">
          We specilize in investing with technology startups
        </h2>
        <p className="text-black font-popins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          praesentium voluptas sapiente recusandae nisi molestias asperiores,
          earum deserunt, repellendus quia quasi consequatur a atque illum
          blanditiis ullam natus impedit obcaecati!
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 my-4">
        <div>
          <img src="https://149351892.v2.pressablecdn.com/wp-content/uploads/2016/03/image-2.jpg" />
          <span className="text-gold-theme font-bold my-2">OUR PHILOSOPHY</span>
          <p className="text-black font-popins text-xl">
            Securing the technology sector
          </p>
        </div>
        <div>
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg" />
          <span className="text-gold-theme font-bold my-2">OUR APPROACH</span>
          <p className="text-black font-popins text-xl">Investing in AI</p>
        </div>
        <div>
          <img src="https://149351892.v2.pressablecdn.com/wp-content/uploads/2016/03/image3.jpg" />
          <span className="text-gold-theme font-bold my-2">OUR SERVICE</span>
          <p className="text-black font-popins text-xl">Rethinking education</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
