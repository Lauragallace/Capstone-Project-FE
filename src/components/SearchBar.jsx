import React, { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchSelect = styled.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
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
    // Passa i valori di ricerca alla funzione onSearch del genitore
    onSearch({
      flightDate,
      flightTime,
      departureAirport,
      arrivalAirport,
      flightClass,
    });
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="date"
        value={flightDate}
        onChange={(e) => setFlightDate(e.target.value)}
      />
      <SearchInput
        type="time"
        value={flightTime}
        onChange={(e) => setFlightTime(e.target.value)}
      />
      <SearchInput
        type="text"
        placeholder="Aeroporto di partenza"
        value={departureAirport}
        onChange={(e) => setDepartureAirport(e.target.value)}
      />
      <SearchInput
        type="text"
        placeholder="Aeroporto di arrivo"
        value={arrivalAirport}
        onChange={(e) => setArrivalAirport(e.target.value)}
      />
      <SearchSelect
        value={flightClass}
        onChange={(e) => setFlightClass(e.target.value)}
      >
        <option value="">Seleziona classe</option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
      </SearchSelect>
      <SearchButton onClick={handleSearch}>Cerca voli</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
