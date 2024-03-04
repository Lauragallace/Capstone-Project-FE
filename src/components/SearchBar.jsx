import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
const StyledSeach = styled.div`
  background: linear-gradient(to bottom, white, #05203c);
  .search {
    align-items: center;
  }
  .btn {
    height: 40px;
  }
  select {
    margin-right: 1em;
  }
  .flight {
    background: lightblue;
    border: 2px solid black;
    border-radius: 8px;
    width: 45%;
    margin: 2em;
    padding: 2em;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [flightDate, setFlightDate] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState();
  const [arrival, setArrival] = useState();

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
        // console.log(data);
      })
      .catch((error) => {});
  }

  const handleSearch = () => {
    console.log("entro in in handleSearch");
    fetch(`${process.env.REACT_APP_BACKEND}/flights/getFiltered`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({
        flightDate: flightDate,
        departureAirport: departure,
        arrivalAirport: arrival,
        flightClass: flightClass,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("problems");
        }
      })
      .then((data) => {
        setFlights(data);
        console.log(data);
      })
      .catch((error) => {});
  };

  function bookFlight(flightId) {
    fetch(`${process.env.REACT_APP_BACKEND}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify({
        flightId: flightId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("prenotazione Ok");
        } else if (response.status === 400) {
          alert("Volo già prenotato!");
        } else {
          throw new Error("problems");
        }
      })

      .catch((error) => {});
  }

  return (
    <StyledSeach>
      <div className="d-flex align-items-center p-4 search">
        <Input
          type="date"
          value={flightDate}
          onChange={(e) => setFlightDate(e.target.value)}
          style={{ width: "600px" }}
        />
        {/* <Input
        type="text"
        placeholder="Aeroporto di partenza"
        value={departureAirport}
        onChange={(e) => setDepartureAirport(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Aeroporto di arrivo"
        value={arrivalAirport}
        onChange={(e) => setArrivalAirport(e.target.value)}
      /> */}
        {/* <label className="text-nowrap">Aeroporto di partenza</label> */}
        <select
          className="form-select"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        >
          <option>Aeroporto di partenza</option>
          {airports &&
            airports.map((airport, i) => {
              return (
                <option key={i} value={airport.id}>
                  {airport.name}
                </option>
              );
            })}
        </select>
        {/* <label className="text-nowrap">Aeroporto di arrivo</label> */}
        <select
          className="form-select"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        >
          <option>Aeroporto di arrivo</option>
          {airports &&
            airports.map((airport, i) => {
              return (
                <option key={i} value={airport.id}>
                  {airport.name}
                </option>
              );
            })}
        </select>
        <Select
          value={flightClass}
          onChange={(e) => setFlightClass(e.target.value)}
        >
          <option value="">Seleziona classe</option>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
        </Select>
        <button className="btn btn-primary text-nowrap" onClick={handleSearch}>
          Cerca voli
        </button>
      </div>
      <h2 className="text-center">Risultati ricerca</h2>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {flights &&
          flights.map((flight, i) => {
            return (
              flight.remainingPlaces > 0 && (
                <div key={i} className="text-center flight">
                  <div>Classe: {flight.flightClass}</div>
                  <div>Numero posti rimanenti: {flight.remainingPlaces}</div>
                  <div>Prezzo: {flight.price} &euro;</div>
                  <div>
                    Data di partenza:{" "}
                    {format(
                      new Date(flight.departureDate),
                      "dd-MM-yyyy HH:mm:ss"
                    )}
                  </div>
                  <div>
                    Data di arrivo:{" "}
                    {format(
                      new Date(flight.arrivalDate),
                      "dd-MM-yyyy HH:mm:ss"
                    )}
                  </div>
                  <div>
                    Aeroporto di partenza:{" "}
                    {flight.departureAirport && flight.departureAirport.name}
                  </div>
                  <div>
                    Aeroporto di arrivo:{" "}
                    {flight.arrivalAirport && flight.arrivalAirport.name}
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn mt-2 btn-primary"
                      onClick={() => {
                        bookFlight(flight.id);
                      }}
                    >
                      Prenota Volo
                    </button>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </StyledSeach>
  );
};

export default SearchBar;
