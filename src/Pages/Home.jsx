import React from 'react'
import Header from '../Components/Header'
import heroBg1 from "../Images/heroHome.png"

const Home = () => {
    return (
        <div>
           <Header bgImage={heroBg1} homeTitle="Worship with us" homeDesc="Join us live Sunday @ 9:00am - 10:30am (1st Service), 11:00am - 12:30pm (2nd Service) Combine Service every first Sunday of the month @ 10:00am"/>
           <br /> <br />

            <div className="intro">
                <div className="myContainer">
                        <h2>Welcome</h2>
                        <p>Happy to have you with us in His Presence</p>

                        <div>
                            <p>We will tell you a little story about our church. We are a people of faith, who loves the Lord wholeheartedly. In our quest to know more of Him, we have various ministries and programs specically designed for this purpose. You will see most of these at our site as you navigate it. We are a people given to PRAYER, WORSHIP and radical HOSPITALITY. House of His Presence exists to proclaim the whole counsel/mind of God as found in His Word</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home
