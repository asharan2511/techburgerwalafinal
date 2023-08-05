import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>TECH Burger Wala</h2>
        <p>We are trying to give you the best taste possible</p>

        <em>We give attention to genuine feedback</em>
        <br />
        <strong>All Rights reserved @techburgerwala</strong>
        <br />
      </div>
      <aside>
        <h4>Pls Visit</h4>
        <a href="https://github.com/asharan2511">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
