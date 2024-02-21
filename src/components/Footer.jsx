import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  flex-direction: column;
  margin: auto 0;
  ${"" /* padding: 20px; */}
  .bg-blue {
    background-color: #05203c;
  }
  .air-travel {
    height: 60px;
  }
  .footer-cols {
    margin-right: 8em;
  }
  color: #fff;
  .flags-text {
    color: #0062e3;
  }
  .int-s {
    color: #111236;
    text-align: left;
    font-size: 16pt;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin: 5px 0;
`;

const StyledImage = styled.img`
  /* Stili per le immagini */
`;

const Footer = () => {
  const nations = [
    "(GB) Cheap flights",
    "(AU) Australia - Cheap flights",
    "(CN) 中国 - 机票",
    "(DK) Flybilletter",
    "(FI) Suomi - lennot",
    "(FR) France - vols",
    "(DE) Deutschland - Flüge",
    "(IN) India - Flight tickets",
    "(IE) Ireland - flights",
    "(IT) Italia - voli",
    "(JP) 日本 - 航空券",
    "(MX) México - vuelos",
    "(NL) Vliegtickets",
    "(NO) Billige flybilletter",
    "(PL) Polska – tanie loty",
    "(RU) Россия - авиабилеты",
    "(ES) España - vuelos",
    "(SE) Sverige - flyg",
    "(CH) Schweiz - Flüge",
    "(TR) Türkiye - uçak biletleri",
    "(AE) United Arab Emirates - flights",
    "(US) USA - flights",
  ];

  const pngFiles = [
    "assets/uk.png",
    "assets/au.png",
    "assets/cn.png",
    "assets/dk.png",
    "assets/fi.png",
    "assets/fr.png",
    "assets/de.png",
    "assets/in.png",
    "assets/ie.png",
    "assets/it.png",
    "assets/jp.png",
    "assets/mx.png",
    "assets/nl.png",
    "assets/no.png",
    "assets/pl.png",
    "assets/ru.png",
    "assets/es.png",
    "assets/se.png",
    "assets/ch.png",
    "assets/tr.png",
    "assets/uae.png",
    "assets/usa.png",
  ];

  return (
    <StyledContainer className="d-flex">
      <div className="bg-blue d-flex">
        <div className="d-flex mt-5 w-100 justify-content-center">
          <div className="d-flex flex-column footer-cols">IT·it-IT·€ EUR</div>
          <div className="d-flex flex-column footer-cols">
            <StyledLink href="#">Help</StyledLink>
            <StyledLink href="#">Impostazioni privacy</StyledLink>
            <StyledLink href="#">Accedi</StyledLink>
          </div>
          <div className="d-flex flex-column footer-cols">
            <StyledLink href="#">Informativa sui cookie</StyledLink>
            <StyledLink href="#">Informativa sulla privacy</StyledLink>
            <StyledLink href="#">Termini di servizio</StyledLink>
            <StyledLink href="#">Informazioni sull'azienda</StyledLink>
          </div>
          <div className="d-flex flex-column me-4 footer-cols">
            <StyledLink href="#">Esplora</StyledLink>
            <StyledLink href="#">Società</StyledLink>
            <StyledLink href="#">Partner</StyledLink>
            <StyledLink href="#">Viaggi</StyledLink>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center air-travel">
          ©AirTravel td 2023-2024
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-start w-100 mb-4">
          <span className="int-s">International Sites</span>
        </div>
        <div className="row">
          {nations.map((flight, index) => (
            <div key={index} className="col-3 mb-2">
              <StyledImage src={pngFiles[index]} alt={flight} />
              <span className="flags-text">{flight}</span>
            </div>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
};

export default Footer;
