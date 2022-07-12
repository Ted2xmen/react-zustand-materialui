import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useStore } from "../store/dataStore";

export default function Search() {
  const searchTerm = useStore((state) => state.searchTerm);
  const setFilter = useStore((state) => state.setFilter);
  const category = useStore((state) => state.category);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: 2,
        width: 300,
        height: 50,
        maxWidth: "100%",
      }}
    >
      <p> {category} </p>
      <TextField
        value={searchTerm}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        label="Search"
        id="fullWidth"
      />
    </Box>
  );
}
