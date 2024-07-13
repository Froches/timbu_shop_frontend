import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import OnboardingPage from "./pages/OnboardingPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter basename="/timbu_shop_frontend">
        <div>
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
