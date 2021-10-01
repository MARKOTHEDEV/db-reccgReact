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
  
        <Link to="/about" className="btnOne">
          Learn More
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
  

  
export const DepList = ({ title, desc }) => {
  return (
    <div className="py-3 bg-secondary mt-5">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div></div>
          <div
            className="col-span-2 lg:rounded-tl-full lg:rounded-bl-full py-10 px-5 lg:px-16 text-white"
            style={{ backgroundColor: "#000000" }}
          >
            <h3 className="font-semibold text-lg pb-2">{title}</h3>
            <p className="text-justify">{desc}</p>

            <div className="flex justify-end">
              <Link
                to="!#"
                className="btnTwo mt-3"
              >
                NEXT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};