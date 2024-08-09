import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import Contactus from "./components/ContactUs/Contactus";
import GetInTouch from "./components/GetinTouch/GetInTouch";
import ScrollingImage from "./components/ScrollingImage/ScrollingImage";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <ScrollingImage />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
