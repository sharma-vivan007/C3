import Container from "../Container/Container";

export default function GetInTouch() {
  return (
    <div>
      <Container>
        <h2>Get In Touch With Us!!!</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <input placeholder="Message" />
        <button>SEND MESSAGE</button>
      </Container>
    </div>
  );
}
