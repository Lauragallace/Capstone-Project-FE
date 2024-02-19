import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #257;
  color: #fff;
`;

const StyledCol = styled(Col)`
  /* Stili per le colonne */
  margin-bottom: 10px; /* Esempio di stile aggiunto */
`;

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;
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
    "uk.png",
    "au.png",
    "cn.png",
    "dk.png",
    "fi.png",
    "fr.png",
    "de.png",
    "in.png",
    "ie.png",
    "it.png",
    "jp.png",
    "mx.png",
    "nl.png",
    "no.png",
    "pl.png",
    "ru.png",
    "es.png",
    "se.png",
    "ch.png",
    "tr.png",
    "uae.png",
    "usa.png",
  ];

  return (
    <StyledContainer fluid>
      <Row>
        IT·it-IT·€ EUR <br />
        <StyledCol as={StyledLink} href="#">
          Help
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Impostazioni privacy
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Accedi
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Informativa sui cookie
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Informativa sulla privacy
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Termini di servizio
        </StyledCol>
        <StyledCol as={StyledLink} href="#">
          Informazioni sull'azienda
        </StyledCol>
        <br />
        <br />
        Esplora <br />
        <StyledLink href="#">Società</StyledLink>
        <StyledLink href="#">Partner</StyledLink>
        <StyledLink href="#">Viaggi</StyledLink>
      </Row>
      <Row>
        {nations.map((flight, index) => (
          <StyledCol key={index}>
            <StyledImage src={pngFiles[index]} alt={flight} />{" "}
            {/* Immagine del volo */}
            <span>{flight}</span> {/* Nome del volo */}
          </StyledCol>
        ))}
      </Row>
    </StyledContainer>
  );
};

export default Footer;
