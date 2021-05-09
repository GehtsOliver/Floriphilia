import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Navbar from "./components/Navbar";

// import { SideDrawer } from "atomize";
import SideDrawerComponent from "./components/SideDrawerComponent";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <SideDrawerComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
