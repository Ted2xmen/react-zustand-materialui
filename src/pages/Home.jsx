import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import DataContainer from "../components/DataContainer";
import ToggleMenu from "../components/ToggleMenu";
import Search from "../components/Search";

const Home = () => {

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexWrap="wrap"
          padding={2}
          alignItems="center"
          justifyContent="center"
        >
          <Search />
          <ToggleMenu />
        </Box>
        <DataContainer />
      </Container>
    </>
  );
};

export default Home;
