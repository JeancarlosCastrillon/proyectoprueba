import React from "react";
import { DevTableContain, Table, TableColumn, TableRow} from "./Styled/StyledDevTable";

export const DevTable = () => {
    return (
        <DevTableContain>
          <Table>
            <TableColumn>
              <th>USER</th>
              <th>COMMIT</th>
              <th>DATE</th>
            </TableColumn>
            <DevColumn Name = "Ronald Bradley" Commit ="Initial Commit" Date = "May 6, 2018"/>
            <DevColumn Name = "Russel Gibson" Commit = "Main Structure" Date = "April 22, 2018"/>
            <DevColumn Name = "Beverly Armstrong" Commit = "Left sidebar adjustments" Date = "April 15, 2018"/>
        </Table>
        </DevTableContain>
      );
  };


const DevColumn = ({Name, Commit, Date}) => {
    return(
        <TableColumn>
            <TableRow> {Name} </TableRow>
            <TableRow> {Commit} </TableRow>
            <TableRow> {Date} </TableRow>
        </TableColumn>
    )
}