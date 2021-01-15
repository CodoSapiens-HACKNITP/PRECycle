import './App.css';
import Header from "./components/HeaderComponent/HeaderComponent"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route />
        <Redirect to="/home"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
