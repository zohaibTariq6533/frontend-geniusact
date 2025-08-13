import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  return (
    <>
      <Router basename="/ecommerce">
        <Navbar />

        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
