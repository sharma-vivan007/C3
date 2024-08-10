// import Container from "../Container/Container";

// export default function GetInTouch() {
//   return (
//     <div>
//       <Container>
//         <h2>Get In Touch With Us!!!</h2>
//         <input placeholder="Name" />
//         <input placeholder="Email" />
//         <input placeholder="Phone" />
//         <input placeholder="Message" />
//         <button>SEND MESSAGE</button>
//       </Container>
//     </div>
//   );
// }

import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <h2>Get in Touch</h2>
      <form className="get-in-touch-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default GetInTouch;
