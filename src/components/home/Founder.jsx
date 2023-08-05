import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/Founder.webp";
const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} height={200} />
        <h3>Akash Sharan</h3>

        <p>
          Hey, EveryOne I am Akash Sharan, The founder of MBA Burger Wala.
          <br />
          Our aim to create the most tasty burger in the world
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
