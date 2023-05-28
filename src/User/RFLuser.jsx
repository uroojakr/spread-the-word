import React, { useState } from "react";
import Search from "./Search";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";
import rflLinkData from "./rflLinkData.json";
import CustomButton from "../Components/Buttons";

function RFLUser() {
  const [searchValue, setSearchValue] = useState("");
  const [appliedIds, setAppliedIds] = useState([]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleApply = (id) => {
    setAppliedIds((prevIds) => [...prevIds, id]);
  };

  // Filter rflLinkData based on the search value
  const filteredData = rflLinkData.filter((rfl) =>
    rfl.post.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Box mt={5} />
      <Search onChange={handleSearch} />

      <Box mt={5}>
        {filteredData.map((rfl) => (
          <Card key={rfl.id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6" component="h2">
                {rfl.organization}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Applied Date: {rfl.appliedDate}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Post: {rfl.post}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Last Date to Apply: {rfl.lastDateToApply}
              </Typography>
              <Link
                href={rfl.visitWebsiteForInfo}
                target="_blank"
                rel="noopener"
              >
                Visit Website for Info
              </Link>
              <Typography variant="body2" color="textSecondary">
                Salary: {rfl.salary}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Requirements: {rfl.requirements}
              </Typography>
              <CustomButton
                label={appliedIds.includes(rfl.id) ? "Applied" : "Apply"}
                disabled={
                  appliedIds.includes(rfl.id) ||
                  searchValue === rfl.organization
                }
                onClick={() => handleApply(rfl.id)}
                style={{ marginTop: "16px" }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default RFLUser;
