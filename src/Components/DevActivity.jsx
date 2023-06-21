import React from "react";
import { DevPurchases, DevTitle, DevelopAct, GeneralContainer, PurchasesImg } from "./Styled/StyledDevActivity";
import DevelopImg from '../Images/DevelopImg.png'
import { DevTable } from "./DevTable";

const DevActivity = () => {
    return (
        <GeneralContainer>
            <DevelopAct>
                <DevTitle><span>Development Activity</span></DevTitle>
                <DevPurchases>
                    <PurchasesImg src={DevelopImg}/>
                </DevPurchases>
                <DevTable/>
            </DevelopAct>
        </GeneralContainer>
    );
  };
  
  export default DevActivity;