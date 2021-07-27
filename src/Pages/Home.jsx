import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import heroBg1 from "../Images/heroHome.png";
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.png";

const Home = () => {
  return (
    <div>
      <Header
        bgImage={heroBg1}
        homeTitle="Worship with us"
        homeDesc="Join us live Sunday @ 9:00am - 10:30am (1st Service), 11:00am - 12:30pm (2nd Service) Combine Service every first Sunday of the month @ 10:00am"
      />

      {/* intro */}
      <div className="intro mt-4 flex items-center">
        <div className="myContainer text-center">
          <h2 className="text-2xl lg:text-5xl font-semibold pb-4 tracking-wide">
            Welcome
          </h2>

          <div className="text-base font-medium">
            <p className="pb-9">Happy to have you with us in His Presence</p>
            <p>
              We will tell you a little story about our church. We are a people
              of faith, who loves the Lord wholeheartedly. In our quest to know
              more of Him, we have various ministries and programs specically
              designed for this purpose. You will see most of these at our site
              as you navigate it. We are a people given to PRAYER, WORSHIP and
              radical HOSPITALITY. House of His Presence exists to proclaim the
              whole counsel/mind of God as found in His Word
            </p>
          </div>
        </div>
      </div>

      {/* boxes */}

      <div className="myContainer mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <HomeBox bgImage={b1} bTitle="Our Church" bDes="Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees anyone can join"/>

                <HomeBox bgImage={b2} bTitle="Our Church" bDes="Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees anyone can join"/>
                <HomeBox bgImage={b3} bTitle="Our Church" bDes="Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees anyone can join"/>
          </div>
      </div>

      <div className="mt-32"></div>
    </div>
  );
};

export default Home;

// 3 home boxes

function HomeBox({ bImage, bTitle, bDes }) {
  return (
    <div
      className="hBox text-center"
      style={{ background: `url(${bImage})` }}
    >
      <h3>{bTitle}</h3>
      <p>{bDes}</p>

      <Link to="/about">Learn more</Link>
    </div>
  );
}
