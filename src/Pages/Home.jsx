import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import heroBg1 from "../Images/heroHome.png";
import b1 from "../Images/b1.png";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.png";
import pbg from "../Images/Pbg.jpg";
import pastor from "../Images/pastor.png";
import belief from "../Images/belief.png";
import event from "../Images/event.jpg";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HomeBox
            bImage={b1}
            bTitle="Our Church"
            bDes="Our church is open and friendly with many social activities. To keep our church running smoothly, we have committees anyone can join"
          />

          <HomeBox
            bImage={b2}
            bTitle="Our Mission"
            bDes="To make heaven. To take as many people with us. To have a member of RCCG in every family of all nations. To accomplish No. 1 above, holiness will be ourlifestyle."
          />
          <HomeBox
            bImage={b3}
            bTitle="Join a Group"
            bDes="If you wish to become a part of our church or a volunteer to help those in need, our community is awaiting you with our open hearts."
          />
        </div>
      </div>

      {/* pastor */}

      <div
        className="bg-no-repeat bg-center bg-center py-10"
        style={{ background: `url(${pbg})` }}
      >
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col lg:flex-row relative">
              <img
                src={pastor}
                alt="pastor"
                className="w-28 h-28 lg:-mr-6 z-10"
              />
              <div className="bg-black py-7 px-8 lg:px-14 text-left rounded-3xl">
                <h3 className="text-white text-3xl">Anthony Arro</h3>
                <h4 className="text-red-600 py-2">Senior Pastor</h4>
                <p className="text-white text-justify">
                  At HOHP our prayer for you is that the God of all grace
                  anoints you with fresh oil and His precious Spirit illuminates
                  the Word as you read. May He empower you to effectively
                  communicate to others the vibrant hope that He has given you
                  to persevere the struggles that you have overcome and continue
                  to overcome. Furthermore, my wife and I pray that your home is
                  a reflection of the joy and peace that God has promised to all
                  of His children who follow Him.
                </p>
              </div>
            </div>

            <div>
              <div
                className="text-center px-12 py-10 text-white rounded-xl"
                style={{
                  background: `url(${belief})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h3 className="pb-5 font-semibold text-2xl">Church Belief</h3>
                <p className="pb-6">
                  I believe with my heart that Jesus died for my sins on the
                  cross and I confess with my mouth that God raised Him from the
                  dead and Jesus is Lord over all
                </p>

                <Link to="/about" className="border px-4 py-2 rounded-3xl">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sermon */}
      <div className="py-16 mt-14" style={{ backgroundColor: "#FF4370" }}>
        <div className="myContainer">
          <h2 className="pb-7 font-bold text-2xl">SERMONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-16">
            <Sermon
              topic="let there be light"
              bText="Genesis 1:1-3"
              date="july 4 2021"
            />
            <Sermon
              topic="let there be light"
              bText="Genesis 1:1-3"
              date="july 4 2021"
            />
            <Sermon
              topic="let there be light"
              bText="Genesis 1:1-3"
              date="july 4 2021"
            />
          </div>
        </div>
      </div>

      {/* Publication */}
      <div className="my-16" style={{ backgroundColor: "#ef295738" }}>
        <div className="myContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-400">
            <div>
              <div className="flex justify-center">
                <button className="border font-semibold -mb-2 uppercase px-7 py-3 rounded-3xl text-white bg-gray-800 border-none">
                  Publications
                </button>
              </div>
              <div className="flex flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat flex justify-center items-center py-28"
                  style={{ backgroundImage: `url(${event1})` }}
                >
                  <Link
                    to="/events"
                    className="border font-semibold px-5 py-2 rounded-3xl text-white"
                  >
                    READ MORE
                  </Link>
                </div>
                <div
                  className="bg-cover bg-center bg-no-repeat mt-5 flex justify-center items-center py-28"
                  style={{ backgroundImage: `url(${event2})` }}
                >
                  {" "}
                  <Link
                    to="/events"
                    className="border font-semibold px-5 py-2 rounded-3xl text-white"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <button className="border font-semibold -mb-2 uppercase px-7 py-3 rounded-3xl text-white bg-gray-800 border-none">
                  events
                </button>
              </div>
              <img
                src={event}
                alt="event"
                className="w-full object-cover"
                style={{ height: "83%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="myContainer">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-primary py-5 px-5 text-white font-semibold">
            <h4>
              <span className="block pb-2 text-2xl">Contact Us</span> 5151 S
              Princeton Ave Chicago IL 60609 PO Box 17004 Chicago IL 60617
              Phone: 312-647-6775 Email: info@rccghohp.org{" "}
              <span className="block pt-2 text-sm">
                Enter your email address to subscribe to our newsletter
              </span>
            </h4>
            <div className="pt-10">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent border pl-2"
                />
                <button
                  type="submit"
                  className="bg-white px-2"
                  style={{ paddingTop: 1, paddingBottom: 1 }}
                >
                  <i className="fas fa-paper-plane text-black py-1"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-2">
            {/* Google map */}
            <iframe
              width="100%"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=5151%20S%20Princeton%20Ave%20Chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="google map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// 3 home boxes

function HomeBox({ bImage, bTitle, bDes }) {
  return (
    <div
      className="text-center px-12 py-10 text-white"
      style={{
        background: `url(${bImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="pb-5 font-semibold text-2xl">{bTitle}</h3>
      <p className="pb-6">{bDes}</p>

      <Link to="/about" className="border px-4 py-2 rounded-3xl">
        Learn more
      </Link>
    </div>
  );
}

// sermon

function Sermon({ date, topic, bText }) {
  return (
    <div>
      <h3 className="uppercase bg-black inline-block text-white px-2 py-1">
        {date}
      </h3>
      <div className="bg-white py-5 px-3 font-medium">
        <h3 className="uppercase pb-1">{topic}</h3>
        <div className="w-20 h-1 bg-black mb-1" />
        <div>
          <h5>
            Anthony Arro <i className="fas fa-microphone pr-2"></i>
            <i className="fas fa-video"></i>
          </h5>
          <p>Text: {bText}</p>
        </div>
      </div>
    </div>
  );
}
