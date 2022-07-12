import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import DataContainer from "../components/DataContainer";
import DataContainerTwo from "../components/DataContainerTwo";
import Vehicles from '../components/Vehicles';
import ToggleMenu from "../components/ToggleMenu";
import Search from "../components/Search";

const Home = () => {

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" gap={2}>
          <Vehicles />
          <DataContainerTwo />
        </Box>
        <Box>
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
        </Box>
      </Container>
    </>
  );
};

export default Home;
