import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Categories from "./components/category/Categories";
import Footer from "./components/footer/Footer";
import Hotels from "./components/cards/Hotels";
import Gardens from "./components/cards/Gardens";
import Caterings from "./components/cards/Caterings";
import Fireworks from "./components/cards/Fireworks";
import Cardsprinting from "./components/cards/Cardsprinting";
import Lights from "./components/cards/Lights";
import Kiranas from "./components/cards/Kiranas";
import Salons from "./components/cards/Salon";
import Menswear from "./components/cards/Menswear";
import Womenswear from "./components/cards/Womenswear";
import Nurseries from "./components/cards/Nurseries";
import Cars from "./components/cards/Cars";
import Sounds from "./components/cards/Sounds";
import Photography from "./components/cards/Photography";
import Mare from "./components/cards/Mare";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="hotelscard" element={<Hotels />} />
        <Route path="gardencard" element={<Gardens />} />
        <Route path="cateringcard" element={<Caterings />} />
        <Route path="saloncard" element={<Salons />} />
        <Route path="fireworkcard" element={<Fireworks />} />
        <Route path="grocerycard" element={<Kiranas />} />
        <Route path="lightcard" element={<Lights />} />
        <Route path="carcard" element={<Cars />} />
        <Route path="cardsprintingcard" element={<Cardsprinting />} />
        <Route path="soundscard" element={<Sounds />} />
        <Route path="photographycard" element={<Photography />} />
        <Route path="marecard" element={<Mare />} />
        <Route path="menswearcard" element={<Menswear />} />
        <Route path="womenswearcard" element={<Womenswear />} />
        <Route path="nurseriescard" element={<Nurseries />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
