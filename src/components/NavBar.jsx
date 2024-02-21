import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Register from "./Register";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* padding: 20px; */}
  background-color: #257;
  color: #fff;
  img {
    width: 100px;
    height: 100px;
  }
`;

const Menu = styled.div`
  display: ${(props) => (props.menuOpen ? "block" : "none")};

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 10px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <NavBarContainer>
        <div className="d-flex">
          <div className="logo">
            <img src="assets/LogoAir.png" />
          </div>
        </div>
        <Menu menuOpen={menuOpen}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("AboutUs");
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("Contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  // navigate("./registration");
                  setModalRegister(true);
                }}
              >
                Registrati
              </a>
            </li>
          </ul>
        </Menu>
        <MenuButton onClick={toggleMenu}>
          {menuOpen ? "Close Menu" : "Open Menu"}
        </MenuButton>
      </NavBarContainer>
      <SearchBar />

      <Modal
        show={modalRegister}
        onHide={() => {
          setModalRegister(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;
