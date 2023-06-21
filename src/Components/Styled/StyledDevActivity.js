import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const DevelopAct = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #0000003b;
  border-radius: 5px;
  margin-left: 10%;
`;

export const DevTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  font-size: 18px;
  justify-content: flex-start;
  font-weight: 500;
  margin: 0;
  margin-left: 30px;
`;

export const DevPurchases = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const PurchasesImg = styled.img`
  width: 720px;
  border-top: 1px solid #0000003b;
  border-bottom: 1px solid #0000003b;
`;
