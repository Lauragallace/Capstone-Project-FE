import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

export default function Flights() {
  const [modalAddFligth, setModalAddFligth] = useState(false);
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [places, setPlaces] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [price, setPrice] = useState("");

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

  function addFlight() {
    fetch(`${process.env.REACT_APP_BACKEND}/flights`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({
        departureDate: departureDate,
        arrivalDate: arrivalDate,
        places: places,
        flightClass: flightClass,
        price: price,
        departureAirportCode: departure,
        arrivalAirportCode: arrival,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setModalAddFligth(false);
          alert("Volo Inserito con successo!");
        } else {
          throw new Error("problems");
        }
      })

      .catch((error) => {});
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2>Area Voli</h2>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button
          className="btn btn-primary"
          onClick={() => {
            setModalAddFligth(true);
          }}
        >
          Aggiungi Volo
        </button>
      </div>
      <Modal
        show={modalAddFligth}
        onHide={() => {
          setModalAddFligth(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi volo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="airportName">Data partenza</label>
            <input
              type="datetime-local"
              name="departureDate"
              className="form-control"
              value={departureDate}
              onChange={(e) => {
                setDepartureDate(e.target.value);
              }}
            />
            <label htmlFor="airportName">Data arrivo</label>
            <input
              type="datetime-local"
              name="arrivalDate"
              className="form-control"
              value={arrivalDate}
              onChange={(e) => {
                setArrivalDate(e.target.value);
              }}
            />
            <label>Numero posti</label>
            <input
              className="form-control"
              type="number"
              name="places"
              value={places}
              onChange={(e) => {
                setPlaces(e.target.value);
              }}
            />
            <label>Classe</label>
            <select
              className="form-select"
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
            >
              <option>ECONOMY</option>
              <option>BUSINESS</option>
            </select>
            <label>Prezzo</label>

            <input
              type="number"
              step="0.01"
              name="price"
              value={price}
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="">Aeroporto di partenza</label>
            <select
              className="form-select"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            >
              <option></option>
              {airports &&
                airports.map((airport, i) => {
                  return (
                    <option key={i} value={airport.id}>
                      {airport.name}
                    </option>
                  );
                })}
            </select>
            <label className="">Aeroporto di arrivo</label>
            <select
              className="form-select"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            >
              <option></option>
              {airports &&
                airports.map((airport, i) => {
                  return (
                    <option key={i} value={airport.id}>
                      {airport.name}
                    </option>
                  );
                })}
            </select>
            <button className="btn btn-primary mt-3" onClick={addFlight}>
              Inserisci
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
