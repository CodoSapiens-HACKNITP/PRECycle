import {useEffect} from 'react'
import "./App.css";
import Header from "./components/Header/HeaderComponent";
import Contact from "./components/ContactUs/ContactComponent";
import About from "./components/AboutUs/AboutComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignupRider } from "./components/Signup-rider/signup-rider";
import { Register } from "./components/signup-seller/SignupSeller";
import Footer from "./components/Footer/FooterComponent";
import Home from "./components/Home/HomeComponent";
import Alert from "./components/layout/Alert";
import Login from "./components/Login/LoginComponent";
import { TnC } from "./components/TnC/TnC";
import  SellerDashboard1  from "./components/seller-dashboard1/seller-dashboard1";
import { SellerDashboard2 } from "./components/seller-dashboard2/seller-dashboard2";
import { RiderDashboard } from "./components/Dashboard_Rider/rider_dashboard";
import { VendorDashboard } from "./components/Dashboard_Vendor/vendor_dashboard";
import { SignupVendor } from "./components/Vendor_SignUp/signup-vendor";
import  Faqs from "./components/Faqs/Faqs"; 

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
    });
    return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Alert />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/contactus" component={() => <Contact />} />
          <Route exact path="/aboutus" component={() => <About />} />
          <Route exact path="/tnc" component={() => <TnC />} />
          <Route exact path="/signup/seller" component={() => <Register />} />
          <Route exact path="/signup/rider" component={() => <SignupRider />} />
          <Route
            exact
            path="/signup/vendor"
            component={() => <SignupVendor />}
          />
          <Route
            exact
            path="/dashboard/seller"
            component={() => <SellerDashboard1 />}
          />
          <Route
            exact
            path="/sellerDashboardProgress"
            component={() => <SellerDashboard2 />}
          />
          <Route
            exact
            path="/dashboard/rider"
            component={() => <RiderDashboard />}
          />
           <Route
            exact
            path="/dashboard/vendor"
            component={() => <VendorDashboard />}
          /> 
           <Route         
              exact
              path="/faqs"
              component={() => <Faqs />}
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
