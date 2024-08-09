export default function ScrollingImage() {
  return (
    <div>
      <marquee direction="rtl">
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
      </marquee>
      <marquee direction="ltr">
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
        <img src="https://picsum.photos/200/300" alt="Random Image" />
      </marquee>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function ScrollingImage() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           overflowX: "auto",
//           whiteSpace: "nowrap",
//         }}
//         onScroll={(e) => console.log("Scrolling...")}
//       >
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//       </div>
//       <div
//         style={{
//           overflowX: "auto",
//           whiteSpace: "nowrap",
//         }}
//         onScroll={(e) => console.log("Scrolling...")}
//       >
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//         <img src="https://picsum.photos/200/300" alt="Random Image" />
//       </div>
//     </div>
//   );
// }
