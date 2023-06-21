import React from "react";
import { CardContains, Content, Text, Title } from "./Styled/StyledDashboard";
import Cards from "./Cards";
import DevActivity from "./DevActivity";
import { Graphics } from "./Graphics";

const Dashboard = () => {
  return (
    <Content>
      <Text>
        <Title>Dashboard</Title>
      </Text>
      <CardContains>
        <Cards Porcentage = "+6" Label = "46" Description = "New Tickets"/>
        <Cards Porcentage = "-3" Label = "17" Description = "Closed Today"/>
        <Cards Porcentage = "+9" Label = "7" Description = "New Replies"/>
        <Cards Porcentage = "+3" Label = "23.7k" Description = "Followers"/>
        <Cards Porcentage = "-2" Label = "$95" Description = "Daily Earnings"/>
        <Cards Porcentage = "-1" Label = "621" Description = "Products"/>
      </CardContains>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <DevActivity/>
        <Graphics/>
      </div>
    </Content>
  );
};

export default Dashboard;
