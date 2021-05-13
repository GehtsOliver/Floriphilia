import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SideDrawerComponent from "./components/SideDrawerComponent";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
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
