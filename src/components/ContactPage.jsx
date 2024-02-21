import React from "react";
import styled from "styled-components";

// Componente principale della pagina di contatto
const ContactPage = () => {
  return (
    <Container>
      <ContactForm>
        <Title>Contattaci</Title>
        <FormSection>
          <InputLabel>Nome</InputLabel>
          <Input type="text" placeholder="Il tuo nome" />
        </FormSection>
        <FormSection>
          <InputLabel>Email</InputLabel>
          <Input type="email" placeholder="La tua email" />
        </FormSection>
        <FormSection>
          <InputLabel>Messaggio</InputLabel>
          <TextArea rows="5" placeholder="Il tuo messaggio" />
        </FormSection>
        <SubmitButton>Invia</SubmitButton>
      </ContactForm>
    </Container>
  );
};

// Stili con styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContactForm = styled.form`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormSection = styled.div`
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export default ContactPage;
