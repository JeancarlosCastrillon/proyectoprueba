import React from "react";
import { CardContainer, CardDescription, CardLabel, CardValue } from "./Styled/StyledCards";


const Cards = ({Porcentage, Label, Description}) => {
    return(
        <CardContainer>
            <CardValue Color = {Porcentage < 0 ? 'red' : ''}>{Porcentage}%</CardValue>
            <CardLabel>{Label}</CardLabel>
            <CardDescription>{Description}</CardDescription>
        </CardContainer>
    )
};

export default Cards; 