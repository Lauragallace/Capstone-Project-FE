import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";
const StyledRegister = styled.div`
  background-color: #ffffffec;
  border: 2px solid #03999ec6;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 24px;
    color: #02657b;
    margin: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .save-button {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #00bfff;
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [role, setRole] = useState("USER");

  function registraUtente() {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        nome: nome,
        cognome: cognome,
        role: role,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setUsername("");
          setEmail("");
          setPassword("");
          setNome("");
          setCognome("");
          setRole("");
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
            <Form.Label className="text-center fs-5">Username</Form.Label>
          </InputGroup>
          <Form.Control
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
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
          <InputGroup className="d-flex flex-column w-100">
            <Form.Label className="text-center fs-5">Ruolo</Form.Label>
          </InputGroup>
          <Form.Select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option>USER</option>
            <option>ADMIN</option>
          </Form.Select>
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
