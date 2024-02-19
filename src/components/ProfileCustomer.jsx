import React from "react";
import styled from "styled-components";

// Componenti di stile
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileDetails = styled.div`
  margin-top: 20px;
`;

const ProfileName = styled.h2`
  color: #333333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileBio = styled.p`
  color: #666666;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProfileButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s ease;
  margin: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileCustomer = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="avatar.png" alt="User Avatar" />
      <ProfileDetails>
        <ProfileName>John Doe</ProfileName>
        <ProfileBio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          libero tellus.
        </ProfileBio>
        <ProfileButton>Edit Profile</ProfileButton>
        <ProfileButton>Delete Profile</ProfileButton>
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default ProfileCustomer;
