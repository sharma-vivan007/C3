import React from "react";
import Container from "../Container/Container";
import Contactus from "../ContactUs/Contactus";

export default function Footer() {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Event</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Workshop</a>
          </li>
        </ul>
      </Container>
      <Container>
        <Contactus />
      </Container>
      <Container>
        <ul>
          <li>
            <img src="assets\contact\emailIcon.png"></img>
            <p>abc@xyz.com</p>
          </li>
          <li>
            <img src="assets\contact\linkedinIcon.png"></img>
            <p>linkedin@ctae_c3</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}
