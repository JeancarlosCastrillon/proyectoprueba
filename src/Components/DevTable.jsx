import React from "react";
import { DevTableContain, Table, TableColumn, TableRow} from "./Styled/StyledDevTable";

const DevTable = () => {
    return (
        <DevTableContain>
          <Table>
            <TableColumn>
              <th>USER</th>
              <th>COMMIT</th>
              <th>DATE</th>
            </TableColumn>
            
            <TableColumn>
              <TableRow>Ronald Bradley</TableRow>
              <TableRow>Initial Commit</TableRow>
              <TableRow>May 6, 2018</TableRow>
            </TableColumn>
            
            <TableColumn>
              <TableRow>Russel Gibson</TableRow>
              <TableRow>Main Structure</TableRow>
              <TableRow>April 22, 2018</TableRow>
            </TableColumn>
            
            <TableColumn>
              <TableRow>Beverly Armstrong</TableRow>
              <TableRow>Left Sidebar Adjustments</TableRow>
              <TableRow>April 15, 2018</TableRow>
            </TableColumn>
            
            </Table>
        </DevTableContain>
      );
  };
  
export default DevTable