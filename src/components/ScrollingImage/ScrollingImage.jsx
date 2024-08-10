// export default function ScrollingImage() {
//   return (
//     <div>
//       <marquee>
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//       </marquee>
//       <marquee>
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//         <img src="src\assets\home.jpg" alt="Random Image" />
//       </marquee>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./scrollingimage.css";

export default function ScrollingImage() {
  const [scrollDirection, setScrollDirection] = useState("left");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDirection("left");
      } else {
        setScrollDirection("right");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <marquee direction={scrollDirection}>
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
      </marquee>
      <marquee direction={scrollDirection === "left" ? "right" : "left"}>
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
        <img src="src/assets/home.jpg" alt="Random Image" />
      </marquee>
    </div>
  );
}
