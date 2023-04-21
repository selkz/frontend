import NavbarComponent from "./components/Shared/NavbarComponent";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./Signup";

function App() {
  return (
    <>
        <BrowserRouter>
        <NavbarComponent />
          <Switch>
            <Routes></Routes>
          </Switch>
        </BrowserRouter>
    </>
  );
}

function Routes() {
  return (
    <>
      <Route exact path="/"><h1 className="has-text-centered mt-6 is-size-3">Henlo World</h1></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>
    </>
  );
}

export default App;