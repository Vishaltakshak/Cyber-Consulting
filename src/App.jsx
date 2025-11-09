import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import HomePage from "@/pages/HomePage";
import Footer from "./components/footer";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutusPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./utility/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/contact-us" element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
