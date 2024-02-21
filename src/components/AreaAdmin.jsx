import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function AreaAdmin() {
  const [modalAddAir, setModalAddAir] = useState(false);
  const [airportName, setAirportName] = useState("");

  function addAirport() {
    fetch(`${process.env.REACT_APP_BACKEND}/airports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({
        name: airportName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Aeroporto inserito!");
        } else {
          throw new Error("problems");
        }
      })
      .then()
      .catch((error) => {});
  }
  return (
    <>
      <h2>Area Amministratore</h2>
      <ul>
        <li>
          <button
            onClick={() => {
              setModalAddAir(true);
            }}
          >
            Aggiungi Aeroporto
          </button>
        </li>
      </ul>
      <Modal
        show={modalAddAir}
        onHide={() => {
          setModalAddAir(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <label htmlFor="airportName">Nome Aeroporto</label>
            <input
              type="text"
              name="airportName"
              value={airportName}
              onChange={(e) => {
                setAirportName(e.target.value);
              }}
            />
            <button onClick={addAirport}>Inserisci</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
