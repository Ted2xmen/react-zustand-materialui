import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import DataContainer from "../components/DataContainer";
import ToggleMenu from "../components/ToggleMenu";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        padding={2}
        alignItems="center"
        justifyContent="center"
      >
        <ToggleMenu />
      </Box>
      <Container maxWidth="lg">
        <DataContainer />
      </Container>
    </>
  );
};

export default Home;
