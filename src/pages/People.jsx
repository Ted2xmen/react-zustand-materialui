import React, { useEffect } from "react";
import { Container } from "@mui/system";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";
import { useStore } from "../store/dataStore";
import { Box } from "@mui/material";
import ImageContainer from "../components/ImageContainer";

const People = () => {
  const personFetch = useStore((state) => state.fetchPerson);

  useEffect(() => {
    personFetch();
  }, [personFetch]);

  return (
    <>
      <Navbar />
      <Box paddingY={5}>
        <Container maxWidth="md">
          <ImageContainer />
          <DataTable />
        </Container>
      </Box>
    </>
  );
};

export default People;
