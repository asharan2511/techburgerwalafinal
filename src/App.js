import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact/contact";
import Cart from "./components/Cart/cart";
import Shipping from "./components/Cart/Shipping";
import Confirm from "./components/Cart/confirm";
import PaymentSuccess from "./components/Cart/paymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/Profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";

import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Founder.scss";
import "./styles/Menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirm.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";
import NotFound from "./components/layout/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadUser from "./redux/actions/User";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

function App() {
  const dispatch = useDispatch();

  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route>

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        ></Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/confirm" element={<Confirm />}></Route>
          <Route path="/myorders" element={<MyOrders />}></Route>
          <Route path="/order/:id" element={<OrderDetails />}></Route>
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/users" element={<Users />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
