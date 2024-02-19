import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #257;
  padding: 30px;
`;

const FooterText = styled.p`
  font-size: 15px;
  color: #ffffff;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        IT·it-IT·€ EUR <br />
        <FooterLink href="#">Help</FooterLink>
        <FooterLink href="#">Impostazioni privacy</FooterLink>
        <FooterLink href="#">Accedi</FooterLink>
        <FooterLink href="#">Informativa sui cookie</FooterLink>
        <FooterLink href="#">Informativa sulla privacy</FooterLink>
        <FooterLink href="#">Termini di servizio</FooterLink>
        <FooterLink href="#">Informazioni sull'azienda</FooterLink>
        <br />
        <br />
        Esplora <br />
        <FooterLink href="#">Società</FooterLink>
        <FooterLink href="#">Partner</FooterLink>
        <FooterLink href="#">Viaggi</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
