import "./App.css";
import Header from "./components/Header/HeaderComponent";
import Contact from "./components/ContactUs/ContactComponent";
import About from "./components/AboutUs/AboutComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignupRider } from "./components/Signup-rider/signup-rider";
import { Register } from "./components/signup-seller/SignupSeller";
import Footer from "./components/Footer/FooterComponent";
import Home from "./components/Home/HomeComponent";
import Login from "./components/Login/LoginComponent";
import { TnC } from "./components/TnC/TnC";
import { SellerDashboard1 } from "./components/seller-dashboard1/seller-dashboard1";
import { SellerDashboard2 } from "./components/seller-dashboard2/seller-dashboard2";

import { SignupVendor } from "./components/Vendor_SignUp/signup-vendor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/contactus" component={() => <Contact />} />
          <Route exact path="/aboutus" component={() => <About />} />
          <Route exact path="/tnc" component={() => <TnC />} />
          <Route exact path="/signup/seller" component={() => <Register />} />
          <Route exact path="/signup/rider" component={() => <SignupRider />} />
          <Route exact path="/dashboard/seller" component={() => <SellerDashboard1 />} />
          <Route exact path="/sellerDashboardProgress" component={() => <SellerDashboard2 />} />
          <Route
            exact
            path="/signup/vendor"
            component={() => <SignupVendor />}
          />
          <Route exact path="/signup/seller" component={() => <Register />} />
          <Route exact path="/signup/rider" component={() => <SignupRider />} />
          <Route
            exact
            path="/signup/vendor"
            component={() => <SignupVendor />}
          />
          <Redirect to="/home" />
        </Switch>
        
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
