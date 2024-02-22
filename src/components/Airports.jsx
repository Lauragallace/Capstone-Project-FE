import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export default function Airports() {
  const [modalAddAir, setModalAddAir] = useState(false);
  const [airportName, setAirportName] = useState("");
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    getAirports();
  }, []);

  function getAirports() {
    fetch(`${process.env.REACT_APP_BACKEND}/airports`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("problems");
        }
      })
      .then((data) => {
        setAirports(data);
      })
      .catch((error) => {});
  }

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
          setModalAddAir(false);
          getAirports();
        } else {
          throw new Error("problems");
        }
      })
      .then()
      .catch((error) => {});
  }

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <h2>Area Amministratore</h2>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            setModalAddAir(true);
          }}
        >
          Aggiungi Aeroporto
        </button>
      </div>
      <ul>
        {airports.map((airport, i) => {
          return (
            <>
              <li>{airport.name}</li>
            </>
          );
        })}
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
