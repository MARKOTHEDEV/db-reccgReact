import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../Images/RCCG WEBSITE SLIDES 1.jpg";
import slider2 from "../Images/RCCG WEBSITE SLIDES 2.jpg";
import slider3 from "../Images/RCCG WEBSITE SLIDES 3.jpg";

function SampleNextArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { style } = props;
  return <div style={{ ...style, display: "none" }} />;
}

const HomeSlider = () => {
  let settings = {
    className: "",
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="text-white">
      <Slider {...settings}>
        <div>
          <img
            src={slider1}
            alt="rccg"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
        <div>
          <img
            src={slider2}
            alt="rccg"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
        <div>
          <img
            src={slider3}
            alt="rccg"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
