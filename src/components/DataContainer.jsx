import React, { useEffect } from "react";
import { useStore } from "../store/dataStore";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const DataContainer = () => {
  const movies = useStore((state) => state.movies);
  const fetchMovie = useStore((state) => state.fetchMovie);
  const searchTerm = useStore((state) => state.searchTerm);
  const category = useStore((state) => state.category);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <Box paddingY={5} style={{ justifyContent: "center" }}>
      {searchTerm} {category}
      <Grid container spacing={2}>
        {movies
          .filter((c) =>
            category === "title" ? c.director.toLowerCase().includes(searchTerm.toLowerCase()): movies ||
            category === "director" ? c.title.toLowerCase().includes(searchTerm.toLowerCase()) : movies
          )
          // .filter((f) => f.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((movie, i) => {
            return <MovieCard key={i} movie={movie} />;
          })}
      </Grid>
    </Box>
  );
};

export default DataContainer;
