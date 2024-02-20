import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../src/component/Home/HomeMain";
import ExploreProduct from "../src/pages/ExploreProducts";
import NavBar from "./component/Navbar/Navbar";
import OrderSummary from "./component/checkout/OrderSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/explore/all" element={<ExploreProduct />}></Route>
          <Route path="/checkout" element={<OrderSummary />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
