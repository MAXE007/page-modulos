import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

import FAQ from "./Pages/FAQ/FAQ";
import Contact from "./Pages/Contact/Contact";
import FloatingSocialButtons from "./components/FloatingSocialButtons/FloatingSocialButtons";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tipologias" element={<Products />} />
        <Route path="/tipologias/:id" element={<ProductDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
      <FloatingSocialButtons />
    </>
  );
}
