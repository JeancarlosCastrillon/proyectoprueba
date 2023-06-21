import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;


export const Logo = styled.img`
  width: 120px;
  margin-left: 10%;
`;


export const PersonContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
`;


export const ButtonSourced = styled.button`
    background-color: #fff;
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #0000003b;
    border-radius: 5px;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #0000006b;
    
`


export const Notification = styled.div`
  color: #bdbcbc;
  margin: 20px;
`


export const Profile = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  
`


export const ProfileImg = styled.img`
  border-radius: 50%;
  margin: 0 10px;
  width: 40px;
`


export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
`


export const ProfileName = styled.p`
  color: 000;
  margin: 0;
  margin-left: 5px;
  letter-spacing: .5px;
  font-size: 16px;
`

export const ProfileRole = styled.p`
  color: #0000006b;
  font-size: 12px;
  margin: 0;
  margin-left: 5px;
  font-weight: 500;
`