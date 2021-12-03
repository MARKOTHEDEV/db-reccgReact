import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../Images/RCCG WEBSITE SLIDES 1.png";
import slider2 from "../Images/RCCG WEBSITE SLIDES 2.png";
import slider3 from "../Images/RCCG WEBSITE SLIDES 3.png";
import useAxios from "./useAxios";
import Preloader from "../Components/Preloader"


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
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 

  const {   "axiosError":sliderError,"axiosIspending":isSliderLoading,"axiosData":silderData,"axiosErrorMessage":sliderErrorMessage } =useAxios('all-sliders/');
  
  return (
    <div className="text-white">
     <Preloader show={isSliderLoading?true:false} />
      <Slider {...settings}>
        
        {isSliderLoading==false && silderData.length!=0?silderData.map(({image})=>{

          return(
            <div>
          <img
            src={image}
            alt="rccg"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
          )
        }):""}
      </Slider>
    </div>
  );
};

export default HomeSlider;
