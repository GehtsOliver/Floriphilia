import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

// import { SideDrawer } from "atomize";
import SideDrawerComponent from "./components/SideDrawerComponent"

function App() {
  // const { isCartOpen, closeCart } = useContext(ShopContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <SideDrawerComponent />
      </div>
    </Router>
  );
}

export default App;
