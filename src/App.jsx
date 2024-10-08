import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GetInTouch from "./components/GetinTouch/GetInTouch";
import ScrollingImage from "./components/ScrollingImage/ScrollingImage";
import Member from "./components/Member/Member";
import Navbar from "./components/Navbar/Navbar";
import UpcomingEvents from "./components/Events/Events";
import HomeComponent from "./components/Home/Home";
import FAQ from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeComponent />
      <UpcomingEvents />
      <Member />
      <ScrollingImage />
      <FAQ />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
