import "./App.css";
import Header from "./components/HeaderComponent/HeaderComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignupRider } from "./components/Signup-rider/signup-rider";
import { Register } from "./components/signup-seller/SignupSeller";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
<<<<<<< HEAD
              {/*}  <Route
                  exact
                  path="/signup/seller"
                  component={() => <Register />}
                /> */}
                <Route
                  exact
                  path="/signup/rider"
                  component={() => <SignupRider />}
                />  
              {/*  <Route
                  exact
                  path="/signup/vendor"
                  component={() => <SignupVendor />}
              />  */}
=======
          <Route />
          <Route exact path="/signup/seller" component={() => <Register />} />
          <Route exact path="/signup/rider" component={() => <SignupRider />} />
>>>>>>> eb973fe877c794394ae992f804abf86f805a846f
          <Redirect to="/home" />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
