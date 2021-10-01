import React from 'react'
import { motion } from "framer-motion";
import { animationOne, transition } from "../Components/Animation";
import Header from "../Components/Header";
import heroBg2 from "../Images/contact.png";

const Contact = () => {
    return (
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}
        transition={transition}
        >
            <Header bgImage={heroBg2} homeTitle="Contact us" />
        </motion.div>
    )
}

export default Contact
