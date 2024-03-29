import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
  background-color: #ffffffec;
  border: 2px solid #03999ec6;
  border-radius: 40px;
  margin: 1em;
  padding: 2em;
  min-width: 350px;
  width: 20%;
  margin: 0 auto;

  .save-button {
    background-color: #03989e;
    border-color: #03989e;
    margin-top: 1em;
  }
`;
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginUtente() {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setPassword("");
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("role", data.role);
        if (data.role === "ADMIN") {
          navigate("/AreaAdmin");
        } else if (data.role === "CUSTOMER") {
          navigate("/AreaCustomer");
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  }
  return (
    <StyledLogin>
      <form id="login-form">
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
          <Form.Label className="text-center fs-5 mt-3">Password</Form.Label>
        </InputGroup>
        <Form.Control
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Form.Control>
        <div className="text-center mt-3">
          <Button className="save-button rounded-5 px-3" onClick={loginUtente}>
            Login
          </Button>
        </div>
      </form>
    </StyledLogin>
  );
}
