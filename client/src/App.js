import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./app1.css";
import Header from "./components/Header/HeaderComponent";
import Footer from "./components/Footer/FooterComponent";
import Login from "./components/Login/LoginComponent";
import Contact from "./components/ContactUs/ContactComponent";
import About from "./components/AboutUs/AboutComponent";
import Home from "./components/Home/HomeComponent";
import Alert from "./components/layout/Alert";
import SignupRider from "./components/Signup-rider/signup-rider";
import PrivateRoute from "./components/routing/PrivateRoute";
import Register from "./components/signup-seller/SignupSeller";
import SignupVendor from "./components/Vendor_SignUp/signup-vendor";
import SellerDashboard1 from "./components/seller-dashboard1/seller-dashboard1";
import RiderDashboard from "./components/Dashboard_Rider/rider_dashboard";
import SellerDashboard2 from "./components/seller-dashboard2/seller-dashboard2";
import VendorDashboard from "./components/Dashboard_Vendor/vendor_dashboard";
import RequestPickup from "./components/RequestPickup/RequestPickupComponent";
import SellerProfile from "./components/SellerProfile/SellerProfile";
import { RiderProfile } from "./components/RiderProfile/RiderProfile";
import RateList from "./components/RateList/Rate_List";
import { OrderHistory } from "./components/Vendor_OrderHistory/order_history";
import { DeliveryHistory } from "./components/Rider_DeliveryHistory/delivery_history";
import PickupHistory from "./components/Seller_PickupHistory/pickup_history";
import Faqs from "./components/Faqs/Faqs";
import { VendorProfile } from "./components/VendorProfile/VendorProfile";
import { TnC } from "./components/TnC/TnC";
import { updateRequest, viewRequest } from "./actions/pickup";
//redux tools
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser(localStorage.typeofuser));
    store.dispatch(updateRequest());
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Alert />
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/contactus" component={() => <Contact />} />
            <Route exact path="/aboutus" component={() => <About />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/signup/seller" component={() => <Register />} />
            <Route
              exact
              path="/signup/rider"
              component={() => <SignupRider />}
            />
            <Route
              exact
              path="/signup/vendor"
              component={() => <SignupVendor />}
            />
            <PrivateRoute
              exact
              path="/dashboard/seller"
              component={() => <SellerDashboard1 />}
            />
            <PrivateRoute
              exact
              path="/sellerDashboardProgress"
              component={() => <SellerDashboard2 />}
            />
            <PrivateRoute
              exact
              path="/dashboard/rider"
              component={() => <RiderDashboard />}
            />
            <PrivateRoute
              exact
              path="/dashboard/vendor"
              component={() => <VendorDashboard />}
            />
            <PrivateRoute
              exact
              path="/history/order"
              component={() => <OrderHistory />}
            />
            <PrivateRoute
              exact
              path="/history/delivery"
              component={() => <DeliveryHistory />}
            />
            <PrivateRoute
              exact
              path="/history/pickup"
              component={() => <PickupHistory />}
            />
            <Route exact path="/faqs" component={() => <Faqs />} />
            <Route exact path="/tnc" component={() => <TnC />} />
            <PrivateRoute
              exact
              path="/requestPickup"
              component={() => <RequestPickup />}
            />
            <PrivateRoute
              exact
              path="/ratelist"
              component={() => <RateList />}
            />

            <PrivateRoute
              exact
              path="/profile/rider"
              component={() => <RiderProfile />}
            />
            <PrivateRoute
              exact
              path="/profile/seller"
              component={() => <SellerProfile />}
            />
            <PrivateRoute
              exact
              path="/profile/vendor"
              component={() => <VendorProfile />}
            />
            <Redirect to="/home" />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
