import React from "react";
import descarga from "../Images/descarga.png";
import ProfilePhoto from "../Images/ProfilePhoto.jpg";
// import { useNavigate } from 'react-router';
import { ButtonSourced, HeaderContainer, Logo, Notification, PersonContainer, Profile, ProfileDescription, ProfileImg, ProfileName, ProfileRole } from "./Styled/SyledHeader";
/* 
function Redirect() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("http://google.com")
    }
    handleClick();
  } */


const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={descarga} />
      <PersonContainer>
        <ButtonSourced>Source code</ButtonSourced>
        <Notification><i class="fa-sharp fa-regular fa-bell"></i></Notification>
        <Profile>
          <ProfileImg src={ProfilePhoto} />
          <ProfileDescription>
            <ProfileName>Jean Castrillón</ProfileName>
            <ProfileRole>Training</ProfileRole>
          </ProfileDescription>
        </Profile>
      </PersonContainer>
    </HeaderContainer>
  );
};

export default Header;
