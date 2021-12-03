import Dummy from "../Images/dummyGallery.jpg";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import heroBg3 from "../Images/hero3.jpg";
import HappyGallery from "../Images/happyGalleyHeader.jpg";

import "./marko.css"
const Gallery =()=>{


    return (
<>
        {/* <Navbar /> */}

        <Header bgImage={HappyGallery} homeTitle="Our Happy Gallery" />


        <div id="marko_content">
            {/* <img src={event2} class="one" alt="" />
            <img src={event2} class="two" alt="" />
            <img src={event2} class="three" alt="" />
            <img src={event2} class="four" alt="" />
            <img src={event2} class="five" alt="" /> */}
    <div class="one" style={{background:`url(${Dummy}) no-repeat center / cover`,}}></div>
	<div class="two"  style={{background:`url(${Dummy}) no-repeat center / cover`,}}></div>
	<div class="three" style={{background:`url(${Dummy}) no-repeat center / cover`,}}></div>
	<div class="four" style={{background:`url(${Dummy}) no-repeat center / cover`,}}></div>
	<div class="five" style={{background:`url(${Dummy}) no-repeat center / cover`,}}></div>
</div>
</>
    )
}

export default Gallery