import { Col, Container, Row } from "react-bootstrap";
//qua ti dovrai fare tutti gli import magari sarà una roba del genere
// import {italy} from './assets/imgs/italy.png
// ecc.

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
    "cheap_flights.png",
    "australia_cheap_flights.png",
    "china_flight_tickets.png",
    "denmark_flight_tickets.png",
    "finland_flight_tickets.png",
    "france_flight_tickets.png",
    "germany_flight_tickets.png",
    "india_flight_tickets.png",
    "ireland_flight_tickets.png",
    "italy_flight_tickets.png",
    "japan_flight_tickets.png",
    "mexico_flight_tickets.png",
    "netherlands_flight_tickets.png",
    "norway_flight_tickets.png",
    "poland_flight_tickets.png",
    "russia_flight_tickets.png",
    "spain_flight_tickets.png",
    "sweden_flight_tickets.png",
    "switzerland_flight_tickets.png",
    "turkey_flight_tickets.png",
    "uae_flight_tickets.png",
    "usa_flight_tickets.png",
  ];

  return (
    <Container>
      <Row>
        IT·it-IT·€ EUR <br />
        <Col href="#">Help</Col>
        <Col href="#">Impostazioni privacy</Col>
        <Col href="#">Accedi</Col>
        <Col href="#">Informativa sui cookie</Col>
        <Col href="#">Informativa sulla privacy</Col>
        <Col href="#">Termini di servizio</Col>
        <Col href="#">Informazioni sull'azienda</Col>
        <br />
        <br />
        Esplora <br />
        <a href="#">Società</a>
        <a href="#">Partner</a>
        <a href="#">Viaggi</a>
      </Row>
      <Row>
        {nations.map((flight, index) => (
          <Col key={index}>
            <img src={pngFiles[index]} alt={flight} /> {/* Immagine del volo */}
            <span>{flight}</span> {/* Nome del volo */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Footer;
