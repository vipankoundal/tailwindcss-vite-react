// import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Announce from "./components/Announce";
import Sign from "./pages/Sign";
import Register from "./pages/Register";
import Tnc from "./pages/Tnc";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Announce />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tnc" element={<Tnc />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
