import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Nav></Nav>
        <div className="mainBase">
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route
              exact
              path="/products"
              element={<AllProducts></AllProducts>}
            ></Route>
            <Route exact path="/about" element={<About></About>}></Route>
            <Route exact path="/product_detail" element={<ProductDetail />}>
              <Route exact path=":productId"></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
