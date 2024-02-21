import React, { useState } from "react";
import styled from "styled-components";

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
  const [flightTime, setFlightTime] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [flightClass, setFlightClass] = useState("");

  const handleSearch = () => {
    onSearch({
      flightDate,
      flightTime,
      departureAirport,
      arrivalAirport,
      flightClass,
    });
  };

  return (
    <Container>
      <Input
        type="date"
        value={flightDate}
        onChange={(e) => setFlightDate(e.target.value)}
      />
      <Input
        type="time"
        value={flightTime}
        onChange={(e) => setFlightTime(e.target.value)}
      />
      <Input
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
      />
      <Select
        value={flightClass}
        onChange={(e) => setFlightClass(e.target.value)}
      >
        <option value="">Seleziona classe</option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
      </Select>
      <Button onClick={handleSearch}>Cerca voli</Button>
    </Container>
  );
};

export default SearchBar;
