import "./App.css";
import Header from "./components/HeaderComponent/HeaderComponent";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignupRider } from "./components/Signup-rider/signup-rider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route />
          <Route exact path="/signup/rider" component={() => <SignupRider />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
