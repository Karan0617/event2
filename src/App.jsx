import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/category/Categories";
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
import { cardsprintingObj, carsObj, cateringsObj, fireworksObj, gardensObj, hotelsObj, kiranaObj, lightsObj, mareObj, menswearObj, nurseriesObj, photographyObj, salonsObj, soundsObj, womenswearObj } from "./_Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="hotelscard" element={<Hotels categoryName="hotels" details={hotelsObj}/>} />
        <Route path="gardencard" element={<Gardens categoryName='gardens' details={gardensObj}/>} />
        <Route path="cateringcard" element={<Caterings categoryName="caterings" details={cateringsObj}/>} />
        <Route path="saloncard" element={<Salons categoryName="unisex parlour" details={salonsObj}/>} />
        <Route path="fireworkcard" element={<Fireworks categoryName="fireworks" details={fireworksObj}/>} />
        <Route path="grocerycard" element={<Kiranas categoryName="grocery store" details={kiranaObj}/>} />
        <Route path="lightcard" element={<Lights categoryName="lights & decoration" details={lightsObj}/>} />
        <Route path="carcard" element={<Cars categoryName="cars & Travels" details={carsObj}/>} />
        <Route path="cardsprintingcard" element={<Cardsprinting categoryName="Cards Printing" details={cardsprintingObj}/>} />
        <Route path="soundscard" element={<Sounds categoryName="DJ & Sounds" details={soundsObj}/>} />
        <Route path="photographycard" element={<Photography categoryName="photography" details={photographyObj}/>} />
        <Route path="marecard" element={<Mare categoryName="mare" details={mareObj}/>} />
        <Route path="menswearcard" element={<Menswear categoryName="men's wear" details={menswearObj}/>} />
        <Route path="womenswearcard" element={<Womenswear categoryName="women's wear" details={womenswearObj}/>} />
        <Route path="nurseriescard" element={<Nurseries categoryName="nurseries" details={nurseriesObj}/>} />
      </Routes>
    </BrowserRouter>
  );
}
