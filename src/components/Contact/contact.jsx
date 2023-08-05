import React from "react";
import { motion } from "framer-motion";
import Burger from "../../assets/burger2.png";
const contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{ x: "100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ y: "-100vh", x: "70%", opacity: 0 }}
          animate={{ y: "100%", x: "70%", opacity: 1 }}
        >
          <img src={Burger} alt="BUrger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default contact;
