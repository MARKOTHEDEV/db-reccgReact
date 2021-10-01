import { Link } from "react-router-dom";

export function HomeBox({ bImage, bTitle, bDes }) {
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



  export function Sermon({ date, topic, bText }) {
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
  