import React from "react";
import styled from "styled-components";

// Componente principale della pagina "About Us"
const AboutUsPage = () => {
  return (
    <Container>
      <Title>Chi siamo</Title>
      <Description>
        Benvenuti su AirTravel, il sito leader nel settore dei viaggi aerei.
        Siamo appassionati di viaggi e ci impegniamo a fornire ai nostri clienti
        un'esperienza di prenotazione di voli semplice, sicura e conveniente.
        Con una vasta gamma di destinazioni e tariffe competitive, siamo qui per
        aiutarti a pianificare il tuo prossimo viaggio senza problemi.
      </Description>
      <TeamSection>
        <TeamTitle>Il nostro team</TeamTitle>
        <TeamMember>
          <TeamMemberName>John Doe</TeamMemberName>
          <TeamMemberRole>CEO</TeamMemberRole>
        </TeamMember>
        <TeamMember>
          <TeamMemberName>Jane Smith</TeamMemberName>
          <TeamMemberRole>Responsabile del servizio clienti</TeamMemberRole>
        </TeamMember>
        <TeamMember>
          <TeamMemberName>Mike Johnson</TeamMemberName>
          <TeamMemberRole>Responsabile marketing</TeamMemberRole>
        </TeamMember>
      </TeamSection>
    </Container>
  );
};

// Stili con styled-components
const Container = styled.div`
  ${"" /* max-width: 800px; */}
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-image: url(${"assets/Aereo.jpg"});
  background-size: cover;
  background-position: center;
  ${"" /* opacity: 0.3; */}
  ${"" /* border-radius: 10px; */}
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #fff;
`;

const TeamSection = styled.div`
  margin-top: 40px;
  color: #ffffff;
`;

const TeamTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TeamMember = styled.div`
  margin-bottom: 10px;
`;

const TeamMemberName = styled.p`
  font-weight: bold;
`;

const TeamMemberRole = styled.p`
  color: #ffffff;
`;

export default AboutUsPage;
