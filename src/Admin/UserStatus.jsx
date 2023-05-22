import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function UserStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const userInformation = [
    { status: "Applied", name: "Ahmed Naveed" },
    { status: "Applied", name: "Sarah Khan" },
    { status: "Applied", name: "Mariam Javed" },
  ];

  const filteredUserInformation = userInformation.filter((info) =>
    info.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "16px" }}
      />

      {filteredUserInformation.length > 0 ? (
        filteredUserInformation.map((info, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`user-info-content${index}`}
              id={`user-info-header${index}`}
            >
              <Typography variant="h6">
                User Information #{index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell>Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{info.status}</TableCell>
                      <TableCell>{info.name}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body1">
          No matching user information found.
        </Typography>
      )}
    </div>
  );
}

export default UserStatus;
