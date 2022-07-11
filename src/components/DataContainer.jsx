import React, { useEffect } from "react";
import { useStore } from "../store/dataStore";
import MovieCard from "./MovieCard";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

const DataContainer = () => {
  const movies = useStore((state) => state.movies);
  const fetchMovie = useStore((state) => state.fetchMovie);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <Box paddingY={5}>
      <Grid container spacing={2}>
        {movies.slice(0,9).map((movie, i) => {
          return <MovieCard key={i} movie={movie} />;
        })}
      </Grid>
    </Box>
  );
};

export default DataContainer;
