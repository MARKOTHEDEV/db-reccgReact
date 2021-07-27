import React from 'react'
import Header from '../Components/Header'
import heroBg1 from "../Images/heroHome.png"

const Home = () => {
    return (
        <div>
           <Header bgImage={heroBg1} homeTitle="Worship with us" homeDesc="Join us live Sunday @ 9:00am - 10:30am (1st Service), 11:00am - 12:30pm (2nd Service) Combine Service every first Sunday of the month @ 10:00am"/>
           <br /> <br />
        </div>
    )
}

export default Home
