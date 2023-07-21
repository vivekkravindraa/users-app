import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function UsersList({ users }) {
  const history = useNavigate();

  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ width: "90%", margin: "0 auto", marginTop: "2%" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Website</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.length > 0
              ? users.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      onClick={() => history(`/users/${row.id}`)}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.website}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UsersList;
