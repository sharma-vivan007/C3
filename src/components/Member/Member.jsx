// import Container from "../Container/Container";
// import "./Member.css";

// export default function Member() {
//   return (
//     <div className="member-container">
//       <h3>Our Squad!!!</h3>
//       <Container>
//         <img src="src\assets\home.jpg" />
//         <p>Name</p>
//         <p>Designation</p>
//       </Container>
//       <Container>
//         <img src="src\assets\home.jpg" />
//         <p>Name</p>
//         <p>Designation</p>
//       </Container>
//       <Container>
//         <img src="src\assets\home.jpg" />
//         <p>Name</p>
//         <p>Designation</p>
//       </Container>
//     </div>
//   );
// }

import Container from "../Container/Container";
import "./Member.css";

export default function Member() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Our Squad!!!</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="src/assets/home.jpg"
              className="card-img-top"
              alt="Member"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="src/assets/home.jpg"
              className="card-img-top"
              alt="Member"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="src/assets/home.jpg"
              className="card-img-top"
              alt="Member"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
