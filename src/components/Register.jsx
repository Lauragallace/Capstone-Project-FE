import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
const StyledRegister = styled.div`
  background-color: #ffffffec;
  border: 2px solid #257;
  border-radius: 40px;
  color: #257;
  h3 {
    font-size: 24px;
    color: #257;
    margin: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .save-button {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0073e6;
    }
  }
`;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  function registraUtente() {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: nome,
        lastName: cognome,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setPassword("");
          setNome("");
          setCognome("");
          window.alert("Registrazione Effettuata con successo!");
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  }

  return (
    <StyledRegister className="pb-4">
      <div className="inner">
        <h3>Registrati</h3>
        <form id="register-form">
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Email</Form.Label>
          </InputGroup>
          <Form.Control
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Password</Form.Label>
          </InputGroup>
          <Form.Control
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Nome</Form.Label>
          </InputGroup>
          <Form.Control
            required
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          ></Form.Control>
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Cognome</Form.Label>
          </InputGroup>
          <Form.Control
            required
            value={cognome}
            onChange={(e) => {
              setCognome(e.target.value);
            }}
          ></Form.Control>
          {/* <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Ruolo</Form.Label>
          </InputGroup> */}
          {/* <Form.Select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option>USER</option>
            <option>ADMIN</option>
          </Form.Select> */}
          <div className="text-center mt-3">
            <Button
              className="save-button rounded-5 px-3"
              onClick={registraUtente}
            >
              Registrati
            </Button>
          </div>
        </form>
      </div>
    </StyledRegister>
  );
}
