import React from "react";
import { CardContains, Content, Text, Title } from "./Styled/StyledDashboard";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <Content>
      <Text>
        <Title>Dashboard</Title>
      </Text>
      <CardContains>
        <Cards Porcentage = "+6" Label = "46" Description = "New Tickets" Color = { {Porcentage} < 0 ? 'red' : "" }/>
        <Cards Porcentage = "-3" Label = "17" Description = "Closed Today" Color = { {Porcentage} < 0 ? 'red' : "" }/>
        <Cards Porcentage = "+9" Label = "7" Description = "New Replies" Color = { {Porcentage} < 0 ? 'red' : "" }/>
        <Cards Porcentage = "+3" Label = "23.7k" Description = "Followers" Color = { {Porcentage} < 0 ? 'red' : "" }/>
        <Cards Porcentage = "-2" Label = "$95" Description = "Daily Earnings" Color = { {Porcentage} < 0 ? 'red' : "" }/>
        <Cards Porcentage = "-1" Label = "621" Description = "Products" Color = { {Porcentage} < 0 ? 'red' : "" }/>
      </CardContains>
    </Content>
  );
};

export default Dashboard;
