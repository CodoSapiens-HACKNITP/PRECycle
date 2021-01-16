import "./App.css";
import Header from "./components/Header/HeaderComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignupRider } from "./components/Signup-rider/signup-rider";
import { Register } from "./components/signup-seller/SignupSeller";
import Footer from "./components/Footer/FooterComponent";
import Home from "./components/Home/HomeComponent";
import Login from "./components/Login/LoginComponent";

import { SignupVendor } from "./components/Vendor_SignUp/signup-vendor";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/login" component={() => <Login />} />
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
