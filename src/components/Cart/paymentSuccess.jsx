import React from "react";
import { Link } from "react-router-dom";

const paymentSuccess = () => {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order placed Successfullly,You can check order status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
};

export default paymentSuccess;
