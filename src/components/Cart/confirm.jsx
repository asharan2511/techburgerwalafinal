import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, paymentVerification } from "../../redux/actions/Order";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { server } from "../../redux/store";
import axios from "axios";

const Confirm = () => {
  // shippingInfo,
  //   orderItem,
  //   payment,
  //   itemsPrice,
  //   taxPrice,
  //   shippingCharges,
  //   totalAmount,

  const [paymentMethod, setPaymentMethod] = useState("");
  const [disableBtn, setDiableBtn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } =
    useSelector((state) => state.cart);

  const { message, error } = useSelector((state) => state.order);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDiableBtn(true);
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
      //createorderonline

      const {
        data: { order, orderInfo },
      } = await axios.post(
        `${server}/createorderonline`,
        {
          shippingInfo,
          orderItem: cartItems,
          payment: paymentMethod,
          itemsPrice: subTotal,
          taxPrice: tax,
          shippingCharges,
          totalAmount: total,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const options = {
        key: "rzp_test_h0Qt2DqqVLpEIO",
        amount: order.amount,
        currency: "INR",
        name: "Tech Burger wala",
        description: "Burger App",

        order_id: order.id,
        handler: function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          dispatch(
            paymentVerification(
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature,
              orderInfo
            )
          );
        },

        theme: {
          color: "#9c003c",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDiableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
          </div>
          <button disabled={disableBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default Confirm;
