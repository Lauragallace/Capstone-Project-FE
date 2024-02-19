import React from "react";
import styled from "styled-components";

const SettingsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SettingsHeader = styled.h2`
  color: #333333;
  margin-bottom: 20px;
`;

const SettingsOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const OptionLabel = styled.span`
  color: #666666;
`;

const OptionControl = styled.div`
  display: flex;
  align-items: center;
`;

const OptionSwitch = styled.input`
  margin-right: 10px;
`;

const OptionSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: #333333;
`;

const SettingsPage = () => {
  return (
    <SettingsContainer>
      <SettingsHeader>Impostazioni</SettingsHeader>
      <SettingsOption>
        <OptionLabel>Notifiche push</OptionLabel>
        <OptionControl>
          <OptionSwitch type="checkbox" />
          Abilita
        </OptionControl>
      </SettingsOption>
      <SettingsOption>
        <OptionLabel>Lingua</OptionLabel>
        <OptionSelect>
          <option value="it">Italiano</option>
          <option value="en">Inglese</option>
          <option value="es">Spagnolo</option>
        </OptionSelect>
      </SettingsOption>
      <SettingsOption>
        <OptionLabel>Tema scuro</OptionLabel>
        <OptionControl>
          <OptionSwitch type="checkbox" />
          Abilita
        </OptionControl>
      </SettingsOption>
    </SettingsContainer>
  );
};

export default SettingsPage;
