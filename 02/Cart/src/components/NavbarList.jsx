import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

const NavbarList = ({ cart }) => {
  let items = 0;

  function handleClick() {
    cart((prev) => !prev);
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
        <button
          className="cart_btn"
          onClick={handleClick}
        >{`Cart ${items}`}</button>
      </Navbar>
    </>
  );
};

export default NavbarList